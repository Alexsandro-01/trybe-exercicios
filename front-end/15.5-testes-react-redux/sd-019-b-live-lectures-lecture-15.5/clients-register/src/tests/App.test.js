import { screen } from '@testing-library/react';
import renderWithRedux from './helpers/renderWithRedux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Cadastro de clientes', () => {
  const renderAppWithRouter = (initialEntries = ['/']) => {
    return (
      <Router history={ createMemoryHistory({ initialEntries }) }>
        <App />
      </Router>
    );
  }

  it('deveria exibir o titulo da pagina', () => {
    renderWithRedux(renderAppWithRouter());

    const title = screen.getByRole('heading', { level: 3});
    expect(title).toBeInTheDocument();
  });

  it('deveria salvar os dados de login na store', () => {
    const { store } = renderWithRedux(renderAppWithRouter(['/login']));

    // store.dispatch()
    // store.getState()

    const inputLogin = screen.getByPlaceholderText('email');
    expect(inputLogin).toBeInTheDocument();

    const inputPassword = screen.getByPlaceholderText('senha');
    expect(inputPassword).toBeInTheDocument();

    const btnLogin = screen.getByRole('link');

    userEvent.type(inputLogin, 'luanderson@betrybe.com');
    userEvent.type(inputPassword, '123');

    userEvent.click(btnLogin);

    console.log(store.getState())
    const loginInStore = store.getState().loginReducer.email;
    const passwordInStore = store.getState().loginReducer.password;

    expect(loginInStore).toBe('luanderson@betrybe.com');
    expect(passwordInStore).toBe('123');
  });

  it('deveria cadastrar clientes', () => {
    const INITIAL_STATE = {
      initialState: {
        registerReducer: [],
        loginReducer: { email: 'luanderson@betrybe.com', password: '123' }
      }
    }
    const { store } = renderWithRedux(
        renderAppWithRouter(['/register']), 
        INITIAL_STATE);
    
    const inputName = screen.getByPlaceholderText('Nome');
    expect(inputName).toBeInTheDocument();

    const inputAge = screen.getByPlaceholderText('Idade');
    expect(inputAge).toBeInTheDocument();

    const inputEmail = screen.getByPlaceholderText('Email');
    expect(inputEmail).toBeInTheDocument();

  });
});