import React from 'react';
import { Ghost } from '../../utils/images';
import "./Loader.scss";

const Loader = () => {
  return (
    <div className='container'>
        <div className = "flex flex-center loader">
            <img src = {Ghost} alt = "loader" />
        </div>
    </div>
  )
}

export default Loader