import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../../redux/reducers';

// const store = createStore(rootReducers, initialState);

function renderWithRedux(
  component, 
  { initialState, store = createStore(rootReducers, initialState) } = {} )
{
  const allSelectors = render(
    <Provider store={store}>
      { component }
    </Provider>
  );

  return { ...allSelectors, store }
}

export default renderWithRedux;

// createStore(reducer);
// createStore(reducer, estadoInicial);
// createStore(reducer, configuracao - middwares);
// createStore(reducer, estadoInicial, configuracao - middwares);

// renderWithRedux(<App />, { initialState, store  })
// const { getByText, store } = renderWithRedux(<App />)