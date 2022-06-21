import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 250px;
`;

const Img = styled.div`
  width: 500px;
  height: 60vh;
  background-image: url(https://i.scdn.co/image/ab67616d0000b27321f70675def01b0ef7d1bdde);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TitleWrap = styled.div`
  width: 40%;
  height: 60vh;
  margin-left: 30px;
  h1 {
    font-size: 26px;
    font-weight: 600;
    color: #1d1d1d;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Menu1 = () => {
  return (
    <Wrap>
      <Img />
      <TitleWrap>
        <h1>EPIK HIGH IS HERE 上</h1>
        <p>
          “For the last few years It’s been pourin’ rain So I’ve been a stay
          home dad My daughter saw the pain and whispered “Stay home, Dad” And
          people’s take on that is that I’m washed up Well, dear All my peers
          are drowning in their past so I’d rather be right here”
        </p>
      </TitleWrap>
    </Wrap>
  );
};
