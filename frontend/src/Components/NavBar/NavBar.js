import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import {
  ContainerBurguerAndH1,
  ContainerBurguerNavBar,
 
  ContainerNavBar,
  ContainerSearch,
  H1Amazona,
  IconBurguerNavBar,
  InputSearch,
  
  ContainerInputAndSearch,
  IconSearch,
  ContainerCartSignIn,
  LiCartSignIn
} from "./NavBarStyles";
import LoginAuth0 from "../LoginAuth0/LoginAuth0";

import LogOutAuth0 from "../LogOutAuth0/LogOutAuth0";
import ImgLoginAuth from "../ImgLoginAuth/ImgLoginAuth";


function NavBar() {
  const {isAuthenticated} = useAuth0();
  return (
    <ContainerNavBar>

      <ContainerBurguerAndH1>

        <ContainerBurguerNavBar>
          <IconBurguerNavBar />
        </ContainerBurguerNavBar>

        <H1Amazona><a style={{display:"line", fontFamily: "'Satisfy', cursive", paddingTop:"1%"}}>A</a>mazona</H1Amazona>

      </ContainerBurguerAndH1>

      <ContainerInputAndSearch type='sumbit'>
          <InputSearch type='text' required/>

          <ContainerSearch type='submit'>
              <IconSearch/>
          </ContainerSearch>
      </ContainerInputAndSearch>


      <ContainerCartSignIn>
        <LiCartSignIn>Cart</LiCartSignIn>
        {isAuthenticated ? (<LogOutAuth0/>) : (<LoginAuth0/>)}
        {isAuthenticated && <ImgLoginAuth/>}
       
      </ContainerCartSignIn>



    </ContainerNavBar>
  );
}

export default NavBar;
