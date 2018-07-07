import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//document.getElementById("root").className = "root";
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
