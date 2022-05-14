import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

const renderWithRedux = (component, { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}) => {
  const utils = render(
    <Provider store={ store }>
      { component }
    </Provider>
  )

  return {
    ...utils,
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button ant a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('After click in button the page show text "1"', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('After click in button with initial state = {counter: 10,} the page show text "11"', () => {
    const INITIAL = {
      initialState: {
        clickReducer: { counter: 10, }
      }
    }
    const { store } = renderWithRedux(<App />, INITIAL );
    const buttonAdicionar = screen.queryByText('Clique aqui');
    console.log(store.getState())

    expect(buttonAdicionar).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
  
})