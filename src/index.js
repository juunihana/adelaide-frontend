import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import MainLayout from "./MainLayout";
import ContentLayout from "./ContentLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MainLayout>
          <Nav/>
          <ContentLayout></ContentLayout>
      </MainLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
