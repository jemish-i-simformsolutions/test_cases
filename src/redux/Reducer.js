//initial states
const initialState = {
  clicked: false,
  rediredcted: false,
};
export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "CLICKED":
      return { ...state, clicked: true };
    case "REDIRECTED":
      return { ...state, rediredcted: true };
    default:
      return { ...state };
  }
};
