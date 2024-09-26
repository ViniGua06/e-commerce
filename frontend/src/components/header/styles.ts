import styled from "styled-components";

export const HeaderS = styled.div`
  width: 100%;
  height: 90px;
  background: #4e3f30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
`;

export const Title = styled.h1`
  color: #a5b3aa;

  & > a {
    outline: none;
    text-decoration: none;
    color: #a5b3aa;
  }
`;

export const Nav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  & > li {
    display: grid;
    place-items: center;
    color: #a5b3aa;
    cursor: pointer;
  }

  & > a {
    display: grid;
    place-items: center;
    color: #a5b3aa;
    cursor: pointer;
  }
`;
