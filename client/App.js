import { html } from 'htm/react';
import { useQuery } from 'urql';

const query = `query { ping }`

const App = () => {
  const [{ data, fetching }] = useQuery({ query });
  return html`<p>${fetching ? 'loading' : data.ping}</p>`;
}

export default App;
