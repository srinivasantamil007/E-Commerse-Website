import React from 'react'
import {errors} from "../../utils/images";

function PageNotFound() {
  return (
    <div className='PageNotFound'>
          <h1><center>PageNotFound</center></h1>
            <img src = {errors} alt = "errors" className='PageNotFound-img' /></div>
   
  )
}

export default PageNotFound
