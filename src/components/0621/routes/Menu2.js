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
  background-image: url(https://images.squarespace-cdn.com/content/v1/5beb8a1b7106992e7abaa8a4/1644470465651-DFMXE5U0G2WLOCJOE4M4/Epik+High+Is+Here+Cover.jpg?format=1000w);
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

export const Menu2 = () => {
  return (
    <Wrap>
      <Img />
      <TitleWrap>
        <h1>EPIK HIGH IS HERE 下</h1>
        <p>
          “We mapped the human soul Got society high Sang our swan songs
          Remapped to stay alive The world tried to turn us to pieces But the E…
          P-I-K never ceases Had 99 problems but it’s do or do not Took our
          demons by their throats, stuffed ‘em in a shoebox We did something
          wonderful, now there’s nothing to fear When you’re lost, remember Epik
          High Is Here”
        </p>
      </TitleWrap>
    </Wrap>
  );
};
