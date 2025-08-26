import Body from "./Body";
import Login from "./Login";
import About from "./About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./Redux/ReduxStore";
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Body />}>
            <Route path="/about" element={<About/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
