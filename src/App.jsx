import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="card">
      <h1>Hello React</h1>
      <p>You clicked {count} time(s).</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </main>
  );
}
