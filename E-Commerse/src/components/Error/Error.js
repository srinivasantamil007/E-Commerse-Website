import React from 'react';
import "./Error.scss";
import {error} from "../../utils/images";

const Error = () => {
  return (
        <div className = "flex-error">
            <img src = {error} alt = "error"  />
        </div>
  )
}

export default Error