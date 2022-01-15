import React, { useState } from "react";

export const GamerContext = React.createContext();

export const GamerProvider = (props) => {
  const [currentGamer, setCurrentGamer] = useState({});

  const getCurrentGamer = () => {
    return fetch("http://localhost:8000/profile", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setCurrentGamer);
  };
  

  return (
    <GamerContext.Provider value={{
        currentGamer,
        getCurrentGamer
     }}>
      {props.children}
    </GamerContext.Provider>
  );
};