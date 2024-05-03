import { createContext, useReducer } from "react";

export const VenderServiceContext = createContext();

export const VenderSerivceReducer = (state, action) => {
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
        services: state.services.filter(s => s._id != action.plaload._id),
      };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const VenderSerivceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VenderSerivceReducer, {
    services: null,
  });

  return (
    <VenderServiceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VenderServiceContext.Provider>
  );
};
