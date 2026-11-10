
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { login } from '@/services/authService';
import authStorage from '@/storage/authStorage';
import type { LoginRequest } from '@/types/auth';

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: authStorage.isAuthenticated(),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await login(credentials);

      if (!response.token) {
        return rejectWithValue('login.loginFailed');
      }

      authStorage.setToken(response.token);

      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          return rejectWithValue('login.networkError');
        }

        if (error.response.status === 401) {
          return rejectWithValue('login.invalidCredentials');
        }

        return rejectWithValue('login.serverError');
      }

      return rejectWithValue('login.loginFailed');
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    authStorage.removeToken();
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
