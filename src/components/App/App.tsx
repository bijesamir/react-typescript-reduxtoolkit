import { HashRouter } from 'react-router-dom';
import RouterConfig from './RouterConfig';

export function App() {
  return (
    // <Provider store={store}>
    <HashRouter>
      <RouterConfig />
    </HashRouter>
    // </Provider>
  );
}
