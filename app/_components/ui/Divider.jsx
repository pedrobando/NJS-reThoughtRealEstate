import React from "react";

const Divider = ({ color, width }) => {
    return (
     
         <div className="flex pt-4">
      <span className={`h-[10px] w-[${width}] bg-${color}`}></span>
    </div>
     
    );
  };
  

export default Divider;
