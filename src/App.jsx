import Body from "./Body";
import Login from "./Login";
import About from "./About";
import Profile from "./Profile";
import Feed from "./Feed";
import Connection from "./Connection";
import RequestRecieved from "./Request";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore";
import { Toaster } from "react-hot-toast";
import Signup from "./Signup";
import ForgetPasswordMail from "./ForgetPasswordMail";
import ForgetPassword from "./ForgetPassword";

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Redirect "/" to "/login" */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/forget-password-mail-send"
              element={<ForgetPasswordMail />}
            />
            <Route path="/reset-password/:token" element={<ForgetPassword />} />

            {/* Main Layout */}
            <Route path="/" element={<Body />}>
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/requestRecieved" element={<RequestRecieved />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
