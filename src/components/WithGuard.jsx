import React from "react";
import { useSelector } from "react-redux";

const WithGuard = ({ children }) => {
  const newComponent = React.cloneElement(children, { title: "sad" });
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? newComponent : <div>please log in first!</div>;
};

export default WithGuard;
