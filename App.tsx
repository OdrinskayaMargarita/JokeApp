import { Provider } from 'react-redux';

import { Navigation } from './src/navigation';
import { store } from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
