import React, { useState } from "react";

function Input() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const { name, nickname } = inputs;

  const onChange = e => {};

  const onReset = () => {};

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} />
      <button onClick={onReset}>초기화</button>

      <div>
        <b>깂:</b>
        이름 (닉네임)
      </div>
    </div>
  );
}

export default Input;
