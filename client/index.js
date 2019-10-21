import { html } from 'htm/react';
import ReactDOM from 'react-dom';
import App from './App';

const element = document.createElement('div');
element.id = 'root';
document.body.appendChild(element);

ReactDOM.render(html`<${App} />`, element);
