import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  width: 100%;
`;

const Section1 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(https://i.redd.it/0bb6dqsiab451.gif);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100px;
  font-weight: 700;
`;

const Section2 = styled.div`
  width: 100%;
  height: 70vh;
  margin: 100px 0;
  padding: 0 20%;
  display: flex;
  justify-content: center;
`;

const ConWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const move = keyframes`
    0%{
        transform: translate(0);
    }
    100%{
        transform: translate(-15px, -15px);
    }
`;

const Con = styled.div`
  width: 45%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 120%;
  }
  &:hover {
    animation: ${move} 0.3s infinite alternate;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <Section1>New Beautiful</Section1>
      <Section2>
        <ConWrap>
          <Con>
            <Link to="/menu1">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27321f70675def01b0ef7d1bdde"
                alt="EPIK HIGH IS HERE 上"
              />
            </Link>
          </Con>
          <Con>
            <Link to="/menu2">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5beb8a1b7106992e7abaa8a4/1644470465651-DFMXE5U0G2WLOCJOE4M4/Epik+High+Is+Here+Cover.jpg?format=1000w"
                alt="EPIK HIGH IS HERE 下"
              />
            </Link>
          </Con>
        </ConWrap>
      </Section2>
    </Wrap>
  );
};
