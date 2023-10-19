import React from "react";

import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return <div>Oops!!</div>;
};

export default Error;
