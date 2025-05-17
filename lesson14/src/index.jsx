import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = () => {
  root.render(
    <React.StrictMode>
      <App store={Store} />
    </React.StrictMode>
  )
};

Store.rerenderTree = rerenderTree;
rerenderTree();