import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <>
      <h1
        style={{
          color
        }}
      >
        {isSpecial && <b>*</b>}
        Hello World {name}
      </h1>
    </>
  );
}

Hello.defaultProps = {
  name: "이름없음"
};

export default Hello;
