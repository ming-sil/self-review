import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding-bottom: 100px;
`;
const ConWrap = styled.div`
  width: 1420px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  background-color: #333;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  a {
    color: white;
  }
`;
const Bg = styled.div`
  height: 350px;
  background-color: lightgray;
`;
const TitleWrap = styled.div`
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 26px;
  font-weight: 900;
`;
const Desc = styled.p`
  font-weight: 100;
  margin-top: 20px;
`;

export const Ans = ({ datas }) => {
  return (
    <Wrap>
      <ConWrap>
        {datas.map((con) => (
          <Con key={con.id}>
            <a href={con.link}>
              <Bg
                style={{
                  background: `url(${con.imgUrl}) no-repeat center / cover`,
                }}
              />
              <TitleWrap>
                <Title>{con.title}</Title>
                <Desc>{con.desc}</Desc>
              </TitleWrap>
            </a>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};

//  *background 축약
//  =>background: url() no-repeat 위치 / 크기
