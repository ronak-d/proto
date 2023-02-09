import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CanvasMain from "./Components/CanvasMain";
import CircleBubble from "./Components/CircleBubble";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          {/* <CanvasMain /> */}
          <CircleBubble />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
