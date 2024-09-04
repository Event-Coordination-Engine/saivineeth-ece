import './App.css';
import HomePage from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
               <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
               </Routes>
            </BrowserRouter>
        </div>
    );
}