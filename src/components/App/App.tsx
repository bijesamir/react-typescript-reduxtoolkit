import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../../store';
import RouterConfig from './RouterConfig';

export function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterConfig />
      </HashRouter>
    </Provider>
  );
}
