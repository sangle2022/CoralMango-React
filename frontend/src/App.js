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
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
