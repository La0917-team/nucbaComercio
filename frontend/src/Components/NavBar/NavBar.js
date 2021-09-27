import React from "react";
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

function NavBar() {
  return (
    <ContainerNavBar>

      <ContainerBurguerAndH1>

        <ContainerBurguerNavBar>
          <IconBurguerNavBar />
        </ContainerBurguerNavBar>

        <H1Amazona>amazona</H1Amazona>

      </ContainerBurguerAndH1>

      <ContainerInputAndSearch>
          <InputSearch/>

          <ContainerSearch type='submit'>
              <IconSearch/>
          </ContainerSearch>
      </ContainerInputAndSearch>


      <ContainerCartSignIn>
        <LiCartSignIn>Cart</LiCartSignIn>
        <LiCartSignIn>Sign In</LiCartSignIn>
      </ContainerCartSignIn>



    </ContainerNavBar>
  );
}

export default NavBar;
