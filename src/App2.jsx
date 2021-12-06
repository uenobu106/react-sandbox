import React, { useEffect, useState } from "react";
import ColorfulMessage from "./componets/ColorfulMessage";

const App2 = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setShowFlag] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickShowButton = () => {
    setShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("effect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setShowFlag(true);
      } else {
        faceShowFlag && setShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "blue" }}>hoge2</h1>
      <ColorfulMessage color="blue">Hello</ColorfulMessage>
      <ColorfulMessage color="pink">こんにちは</ColorfulMessage>
      <button onClick={onClickButton}>count button</button>
      <button onClick={onClickShowButton}>O/F button</button>
      <p>{num}</p>

      {faceShowFlag && <p>😁</p>}
    </>
  );
};

export default App2;
