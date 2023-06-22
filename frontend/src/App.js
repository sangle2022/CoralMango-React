import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="my-3">
          <Routes>
            <Route  path="/" element={<LoginPage/>} />
            <Route  path="/home" element={<HomePage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
