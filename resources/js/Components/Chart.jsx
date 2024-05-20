import React from "react";
import { TEChart } from "tw-elements-react";

export default function Chart({ className = '', type, data, children }){
  return (
      <TEChart
        className={className}
        type={type}
        data={data}
      />
  );
}