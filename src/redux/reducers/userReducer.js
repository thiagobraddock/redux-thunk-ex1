const initialState = {
  user: null,
  logged: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        logged: !state.logged,
      };
    default:
      return state;
  }
};

export default userReducer;
