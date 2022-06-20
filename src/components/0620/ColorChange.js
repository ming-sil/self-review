import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
`;

const PopUp = styled.div`
  width: 200px;
  height: 250px;
  background-color: salmon;
  position: absolute;
  top: 100px;
  left: 150px;
  display: ${(props) => props.apear};
  justify-content: center;
  align-items: center;
  color: #333;
  button {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`;

export const ColorChange = () => {
  const [color, setColor] = useState("teal");
  const [popUp, setPopUp] = useState("none");
  const [bool, setBool] = useState(true);

  //   const handleColor = () => setColor("teal");
  const handleColor = () => {
    if (bool) {
      setColor("lightblue");
      setBool(false);
      setPopUp("flex");
    } else if (!bool) {
      setColor("teal");
      setBool(true);
      setPopUp("none");
    }
  };

  return (
    <>
      <Box bgColor={color} onClick={handleColor}>
        클릭해보세요
      </Box>
      <PopUp apear={popUp}>
        Pop-Up
        <button onClick={handleColor}>X</button>
      </PopUp>
    </>
  );
};
