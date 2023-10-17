import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div>
    <Routes>
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>

    </div>
  );
}

export default App;
