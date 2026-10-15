import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// The build provides static HTML snapshots for indexing; the client owns interactive rendering.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><App /></React.StrictMode>);
