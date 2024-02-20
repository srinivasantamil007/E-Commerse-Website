import React from 'react'
import {  useDispatch } from 'react-redux';
import { setIsModalVisible } from '../../store/modalSlice';
import "./LoginPage.css"

const LoginPage = () => {
  const dispatch = useDispatch();
  const modalOverlayHandler = (e) => {
    if(e.target.classList.contains('overlay')){
      dispatch(setIsModalVisible(false));
    }
  }
  
  return (
     <div className='overlay' onClick = {modalOverlayHandler}>
    <div className="Logincontainer">
    <button type = "button" className='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsModalVisible(false))}>
        <i className = "fas fa-times"></i>
      </button>
    <div className="left">
    <div className='leftcontainer'>
        <div>
        <h4 className='Login-title'>Login</h4>
        <p className='Login-des '>
Get access to your Orders, Wishlist and Recommendations</p></div>
        </div>
        </div>
        <form>
          <div className='right'>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username"/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div>
            <button className="fluid ui button blue">Submit</button>
          </div>
          <div className='privacy'>By continuing, you agree to Flipkart's <a className='terms' > Terms of Use </a> and <a className='terms' >Privacy Policy</a>.</div>
          <div>
            <label className='signup'>New to Flipkart?Create New Account</label>
          </div>
          </div>
        </div>
      </form>
      </div>
       </div>
)
}
  

export default LoginPage