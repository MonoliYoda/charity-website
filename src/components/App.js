import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import UserLogin from "./UserLogin/UserLogin";
import UserRegister from "./UserRegister/UserRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/register" element={<UserRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
