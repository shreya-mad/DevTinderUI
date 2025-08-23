import Body from "./Body";
import Login from "./Login";
import About from "./About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
