import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import { Form } from './components/form';
import UserData from './components/conditional';
import AddCardItem from './components/validateStock';
import Practice from './components/practice/practice_1';
import NotFound from './components/NotFound';
import NameCard from './components/utils/NameCard';
import Table from './components/utils/Table';
import ServerData from './components/utils/ServerData';
import ServerData2 from './components/utils/ServerData2';
import Form_submit from './components/utils/NewForm';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
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
        <Route path="/namecard" element={<NameCard />} />
        <Route path="/table" element={<Table />} />
        <Route path="/serverdata" element={<ServerData />} />
        <Route path="/serverdata2" element={<ServerData2 />} />
        <Route path="/app" element={<App />} />
        <Route path="/form_submit" element={<Form_submit />} />
      </Routes>
    </BrowserRouter>
  </>
);
