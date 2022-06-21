import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 255, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  width: 100px;
  height: 34.4px;
  background-image: url(https://w.namu.la/s/b9cee2e92e33591b1197761e9097593b335ba4d43ec0f581875434f4d39785ce747cf2916b5666f53ceba4dde0736181c53e320d0c46b4e83b7d641e09ecb0a91b394367fad7617d41eac529233cbc53d110ff15c8d9a90c2c98d2dc36aa437577eead59ca3bcb2018f165a751b4ae3c);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HamburgerMenu = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: #333;
`;

const MenuWrap = styled.div`
  width: 30%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  a {
    font-size: 26px;
    color: white;
    margin: 30px 0;
  }
`;

export const Header = () => {
  const handleMenu = () => {};

  return (
    <Wrap>
      <HeaderWrap>
        <Link to="/">
          <Logo />
        </Link>
        <HamburgerMenu onClick={handleMenu}>≡</HamburgerMenu>
        <MenuWrap>
          <Link to="/menu1">HERE 上</Link>
          <Link to="/menu2">HERE 下</Link>
        </MenuWrap>
      </HeaderWrap>
    </Wrap>
  );
};
