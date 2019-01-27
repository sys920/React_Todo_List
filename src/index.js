import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';
import {  BrowserRouter } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
  <ToDoList />
</BrowserRouter>
, document.getElementById('root'));


