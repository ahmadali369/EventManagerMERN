import { createContext, useReducer } from "react";

const VenderServiceContext = createContext();

export const venderSerivceReducer = (state, action) => {
  switch (action.type) {
    case "SET_SERVICES":
      return {
        services: action.plaload,
      };
    case "CREATE_SERVICE":
      return {
        services: [action.plaload, ...state.services],
      };
    case "DELETE_SERVICE":
      return {
        services: state.services.filter((s) => s._id != action.plaload._id),
      };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const VenderSerivceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(venderSerivceReducer, {
    services: null,
  });

  return (
    <VenderServiceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VenderServiceContext.Provider>
  );
};
