import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming","Songs","Soccer","Cricket","Cooking","Valentines","Javascript","Pop Music"]

const ButtonList = () => {
  return (
    <div className=" flex m-2">
        {
            list.map((item, index) =>{
                return <Button key={index} name={item} />
            })
        }
    </div>
  );
};

export default ButtonList;