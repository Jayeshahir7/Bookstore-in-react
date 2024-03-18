import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Get_all from './Getall';
import Get_id from './Getid';
import Add_Edit from './add_edit';
import Nav from './nav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Nav/>}></Route>
    <Route path='/bs'  element={<Get_all/>}></Route>
    <Route path='/bs/:id' element={<Get_id/>}></Route>
    <Route path='/bs/add' element={<Add_Edit/>}></Route>
    <Route path='/bs/edit/:id'element={<Add_Edit/>}></Route>
  </Routes>
  </BrowserRouter>
);


// reportWebVitals();
