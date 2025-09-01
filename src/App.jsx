import Body from "./Body";
import Login from "./Login";
import About from "./About";
import Profile from "./Profile";
import Feed from "./Feed";
import Connection from "./Connection";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./Redux/ReduxStore";
import { Toaster } from 'react-hot-toast'; 
function App() {
  return (
    <>
    <Provider store={store}>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Body />}>
            <Route path="/about" element={<About/>} /> 
             <Route path="/profile" element={<Profile/>} />
               <Route path="/feed" element={<Feed/>} /> 
               <Route path="/connection" element={<Connection/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
