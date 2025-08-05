import { useState } from "react";

const Text = () => {
  return <p>{console.log()}</p>;
};

function ToDo() {
  const onClick = () => {
    // if (showText) {
    //   setShowText(false);
    // } else {
    //   setShowText(true);
    // }
    setShowText(!showText);
  };
  const [showText, setShowText] = useState(false);

  return (
    <>
      {showText && <Text />}
      <button onClick={onClick}>MyButton</button>
    </>
  );
}

export default ToDo;
