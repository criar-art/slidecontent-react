import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import * as serviceWorker from './serviceWorker';

createRoot(document.getElementById('root')).render(<App />);

serviceWorker.register();
