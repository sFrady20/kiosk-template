import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi.css';
import './index.css';
import App from './App';
import ContentProvider from './components/Content';

ReactDOM.render(
  <React.StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
