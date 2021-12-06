const ColorfulMessage = (props) => {
  const { color, children } = props;
  const StyleContent = {
    color,
    fontSize: "14px"
  };

  return <p style={StyleContent}>{children} </p>;
};

export default ColorfulMessage;
