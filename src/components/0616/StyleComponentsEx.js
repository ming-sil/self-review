import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyles";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Anchor = styled.a`
  width: 30%;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 100%;
  }
  div {
    height: 60%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  h1 {
    font-weight: 600;
    padding: 0 20px;
    margin-bottom: 20px;
    font-size: ${mainStyle.titleSize};
    color: ${mainStyle.titleColor};
  }
  p {
    padding: 0 20px;
    font-size: ${mainStyle.descSize};
    color: ${mainStyle.descColor};
  }
`;

export const StyleComponentEx = ({ datas }) => {
  return (
    <>
      <Wrap>
        <ConWrap>
          {datas.map((data) => (
            <Anchor href={data.link} target="blank">
              <div>
                <img src={data.imgUrl} />
              </div>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
            </Anchor>
          ))}
        </ConWrap>
      </Wrap>
    </>
  );
};
