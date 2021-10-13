import styled from "styled-components";

export const CategoriesStyled = styled.div`
  position: fixed;
  left: 10%;
  top: 11.5%;
  width: 10%;
  background-color: white;
  height: calc(100% - 11.5px);
  z-index: 990;
  box-shadow: 4px 0px 5px 0px grey;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (!props.show ? "translateX(-350%)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  
  @media screen and (max-width: 500px) {
    width: 55%;
    top: 23%;
    left: 0;
    transform: ${(props) => (!props.show ? "translateX(-105%)" : "translateX(2%)")};
  transition: transform 0.5s ease-in-out;
  }
`;