import React from "react";
import dynamic from "next/dynamic";

const NoSsr = ({ children }) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
