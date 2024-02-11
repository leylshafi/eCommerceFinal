import Auth from "./auth/Auth";
import MainPage from "./mainpage/MainPage";
import { Navigate, Route, Routes } from 'react-router-dom'
import { useState, useReducer } from "react";
import Cart from "./mainpage/component/Cart";
function App() {
  const [login, setLogin] = useState(true)
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path = "/login" element={<Auth login={login} />}/>
      <Route path = "/register" element={<Auth login={false} />}/>
      <Route path = "/mainpage" element={<MainPage type="main" />}/>
      <Route path="/product/:id" element={<MainPage type="detail"/>} />
      <Route path="/cart" element={<MainPage type="cart"/>} />
      
    </Routes>
  );
}

export default App;
