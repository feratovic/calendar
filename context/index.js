import React, {createContext, useState, useEffect} from 'react';

export const ServiceContext = createContext();

function ServiceContextProvider(props) {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({month: '', day: ''});

  const toggleSideBar = (month, day) => {
    if (!month || !day || data.day === day) {
      setTimeout(() => {
        setData({month: '', day: ''});
      }, [600]);
      setActive(false);
    } else {
      setData({month: month, day: day});
      setActive(true);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        active,
        data,
        toggleSideBar: toggleSideBar,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
}

export default ServiceContextProvider;
