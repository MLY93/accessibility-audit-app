import React from "react";
import { render } from "react-dom";

const Input = () => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");

  // const fieldClassName = `field ${(active || value) && "active"}`;
  const label = "Hi Miriam";
  return (
    <div className={fieldClassName}>
      <input
        id={1}
        type="text"
        value={text}
        placeholder={label}
        onChange={() => setText(event.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <label htmlFor={1}>{label}</label>
    </div>
  );
};

render(
  <Input id={1} label="Field label" active={false} />,
  document.getElementById("root")
);
