import React from "react";
import ColorfulMessage from "./componets/ColorfulMessage";

const App2 = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "blue" }}>hoge2</h1>
      <ColorfulMessage color="blue">Hello</ColorfulMessage>
      <ColorfulMessage color="pink">こんにちは</ColorfulMessage>
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App2;
