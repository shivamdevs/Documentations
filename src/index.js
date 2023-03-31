import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import { OasisMenuBlock } from 'oasismenu';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OasisMenuBlock>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster />
    </OasisMenuBlock>
  </React.StrictMode>
);