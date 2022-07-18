import { useState } from "react";

export default function Home() {
  const [count, setCount]: [number, any] = useState(0);

  return (
    <div>
      <h1>Hello, this is home</h1>
      <h2>button click : {count}</h2>
      <button onClick={() => setCount((x: number) => x + 1)}>+</button>
    </div>
  );
}
