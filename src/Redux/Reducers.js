import { COLOR, MODE } from "./Types";

const state = {
  color: "#ec1839",
  mode: false,
};

const Reducers = (initialState = state, action) => {
  switch (action.type) {
    case COLOR:
      return {
        ...initialState,
        color: action.data,
      };
    case MODE:
      return {
        ...initialState,
        mode: action.data,
      };
    default:
      return initialState;
  }
};

export default Reducers;
