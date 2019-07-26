const INITIAL_STATE = {
  currentUser: null
};

// if state is not set
// then set it to INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state, // everything else from the state
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
