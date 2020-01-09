import React, { Fragment, useState } from "react";
import styled from "styled-components";
import logo from "../entry/logo.png";
import { Link, Redirect } from "react-router-dom";
import Background from "../entry/Background";
import {register} from '../../../reducers/auth';
import {connect} from 'react-redux';

const HeaderBlock = styled.div`
  .header {
    display: flex;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;

    &__logo {
      flex: 0 0 13rem;

      &-image {
        width: 100%;
      }
    }
  }
`;

const MainBlock = styled.div`
background:rgba(0, 0, 0, 0.75);
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:470px;
    margin:0 auto;
    
  .card {
    padding:3.5rem 4rem 2rem 4rem;

    &__title {
      color: #fff;
      font-size: 2.5rem;
      font-weight:bold;
      margin-bottom:1.7rem;
    }
    &__form{
      display:flex;
      flex-direction:column;

      input{
        outline:none;
        border:none;
        border-radius:3px;
        width:20rem;
        height:3rem;
        margin-bottom:1rem;
        padding-left:1rem;
      }

      &-btn{
        margin-top:2rem;
        outline:none;
        border:none;
        border-radius:3px;
        width:20rem;
        height:3rem;
        background:#E50914;
        color:#fff;
        font-weight:bold;
        font-size:1rem;
        cursor:pointer;
      }
    }

    &__footer{
      margin-top:2rem;
      font-size:1.1rem;

      &-lead{
        color:#737373;
      }

      &-link{
        color:#fff;
        text-decoration:none;

        &:hover{
          border-bottom:1px solid #fff;
        }
      }
    }
  }
`;

const Register = ({auth,register}) => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  const {name,email,password,password2} = formData;

  const onChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const onSubmit=e=>{
    e.preventDefault();
    if(password===password2){
      register(formData);
    }else{
      console.log('Fail');
    }
  }

  if(auth.isAuthenticated){
    return <Redirect to="/landing"/>
  }

  return (
    <Fragment>
      <Background />
      <HeaderBlock>
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} className="header__logo-image" alt="" />
            </Link>
          </div>
        </div>
      </HeaderBlock>
      <MainBlock>
        <div className="card">
          <p className="card__title">Sign Up</p>
          <form className="card__form" onSubmit={onSubmit}>
            <input type="text" className="card__form-text" placeholder="Username" name="name" onChange={onChange} value={name}/>
            <input type="email" className="card__form-email" placeholder="Email address" name="email" onChange={onChange} value={email}/>
            <input type="password" className="card__form-password" placeholder="Password" name="password" onChange={onChange} value={password}/>
            <input type="password" className="card__form-password" placeholder="Confirm password" name="password2" onChange={onChange} value={password2}/>
            <button className="card__form-btn">Sign Up</button>
          </form>
          <div className="card__footer">
            <div className="card__footer-lead">
              Already have an account?{" "}
              <Link className="card__footer-link" to="/login">&nbsp;Sign in now</Link>
            </div>
          </div>
        </div>
      </MainBlock>
    </Fragment>
  );
};

export default connect(
  state=>({
    auth:state.auth
  }),{
    register
  }
)(Register);
