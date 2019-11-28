import React, { FC, useState } from "react";

const ENTER_KEY = "Enter";

interface Props {
  onEnter(value: string): void;
}

const Input: FC<Props> = ({ onEnter }) => {
  const [inputState, setInputState] = useState("");
  const clearText = () => setInputState("");
  return (
    <div>
      <input
        onKeyPress={e => {
          if (e.key === ENTER_KEY && inputState) {
            onEnter(inputState);
            clearText();
          }
        }}
        onChange={e => setInputState(e.target.value)}
        value={inputState}
      />
    </div>
  );
};

export default Input;
