import { createContext, useContext } from "react";

export const applicationContext = createContext();

export const ApplicationContext = ({ children }) => {
  const actions = {};

  return (
    <applicationContext.Provider value={actions}>
      <div className="root-container">{children}</div>
    </applicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const c = useContext(applicationContext);

  return c;
};
