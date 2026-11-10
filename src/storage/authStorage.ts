
const TOKEN_KEY = 'token';

const authStorage = {
  getToken: () => sessionStorage.getItem(TOKEN_KEY),

  setToken: (token: string) => {
    sessionStorage.setItem(TOKEN_KEY, token);
  },

  removeToken: () => {
    sessionStorage.removeItem(TOKEN_KEY);
  },

  isAuthenticated: () => {
    return !!sessionStorage.getItem(TOKEN_KEY);
  },
};

export default authStorage;
