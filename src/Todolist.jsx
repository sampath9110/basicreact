import React from "react";

function To(props) {
  return (
    <div onClick={()=>{
      props.onClicked(props.id)
    }}>
      <li>
        {props.text}
      </li>
    </div>
  );
}
export default To;
