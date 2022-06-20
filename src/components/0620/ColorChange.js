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

export const ColorChange = () => {
  const [color, setColor] = useState(" lightblue ");
  const [bool, setBool] = useState(true);

  //   const handleColor = () => setColor("teal");
  const handleColor = () => {
    if (bool) {
      setColor("teal");
      setBool(false);
    } else if (!bool) {
      setColor("lightblue");
      setBool(true);
    }
  };

  return (
    <>
      <Box bgColor={color} onClick={handleColor}>
        클릭해보세요
      </Box>
    </>
  );
};
