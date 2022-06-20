import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 30px;
  font-weight: 700;
`

const Box = styled.div`
  width: 500px;
  height: 300px;
  background-color: ${props => props.colorSelect};
  margin: 20px 0;
`;

const BtnWrap = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  button{
    width: 20%;
    height: 50px;
  }
`;

export const ColorSelect = () => {
  const [color, setcolor] = useState("Red")
 
  const handleRed = () => {setcolor("Red")}
  const handleGreen = () => {setcolor("Green")}
  const handleBlue = () => {setcolor("Blue")}
 
  return (
    <Wrap>
      <h3>버튼을 눌러 컬러를 선택하세요</h3>
      <Box colorSelect={color}/>
      <BtnWrap>
        <button onClick={handleRed}>Red</button>
        <button onClick={handleGreen}>Green</button>
        <button onClick={handleBlue}>Blue</button>
      </BtnWrap>
    </Wrap>
  );
};
