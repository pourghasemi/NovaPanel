import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUsers, createUser } from '@/services/userService';
import type { User } from '@/types/user';
import type { CreateUserPayload } from '@/services/userService';
import type { RootState } from '@/store';

interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[], void, { state: RootState }>(
  'users/fetchUsers',
  () => getUsers(),
  {
    condition: (_, { getState }) => {
      const { users } = getState();
      return !users.loaded && !users.loading;
    },
  },
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user: CreateUserPayload) => {
    const createdUser = await createUser(user);
    return { ...user, ...createdUser };
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = 'errors.fetchUsersFailed';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.unshift(action.payload);
      });
  },
});

export default usersSlice.reducer;