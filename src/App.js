import logo from "./logo.svg";
import "./App.css";

import { GetData } from "./Components/GetData";
import { PostData } from "./Components/PostData";
import { Insert } from "./Components/Insert";
import { DeleteData } from "./Components/DeleteData";
import { Wrapper } from "./Components/Wrapper";
import { useCallback, useState } from "react";

function App() {
  const [chcker, setChecker] = useState(false);
  const data = useCallback(() => "hello", []);

  const checkerHandler = () => {
    setChecker(!chcker);
    console.log(data);
  };

  return (
    <div className="App">
      <Wrapper>
        <GetData />
        <Insert />
        <PostData />
        <DeleteData />
        <button onClick={checkerHandler}>click me</button>
      </Wrapper>
    </div>
  );
}

export default App;
