import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import MainPage from "./page/MainPage";
import WritePage from "./page/WritePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/writePage" element={<WritePage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
