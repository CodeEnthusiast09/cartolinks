"use client";

import { Provider } from "react-redux";
import Store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
