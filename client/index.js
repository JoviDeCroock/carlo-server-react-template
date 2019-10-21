import { html } from 'htm/react';
import ReactDOM from 'react-dom';
import { Provider } from 'urql';
import App from './App';
import client from './global/urqlClient';

const element = document.createElement('div');
element.id = 'root';
document.body.appendChild(element);

ReactDOM.render(html`
  <${Provider} value=${client}>
    <${App} />
  </${Provider}>
`, element);
