const initialState = {
  isHomePage: true,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAGE_CHANGE":
      return {
        ...state,
        isHomePage: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
