import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import AddCardItem from "./components/validateStock";
import Practice from "./practice/practice_1";
import UserData from "./components/conditional";
import { Form } from "./components/form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/cart" element={<AddCardItem />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);
