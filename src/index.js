import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './sass/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
