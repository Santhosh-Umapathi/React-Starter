import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle = "Management Tool"/>, document.getElementById('root'));
registerServiceWorker();
