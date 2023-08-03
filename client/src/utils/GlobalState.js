import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

// creates a new context object
const StoreContext = createContext();
const { Provider } = StoreContext;

// component that serves as the provider for StoreContext
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({ // hook to initialize state and dispatch function
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

//custom hook used to access the contect values without having to use useContext directly
const useStoreContext = () => {
    // allows components to consume the context values (state and dispatch) provided by StoreProvider
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
