import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <p>
      <div
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
        onKeyDown={() => setCount((oldCount) => oldCount + 1)}
        role="button"
        tabIndex={0}
      >
        count is: {count}
        <input type="password" />
      </div>
    </p>
  );
}
