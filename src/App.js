import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
