import { render, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { About } from './App';

describe('Teste a aplicação toda', () => {
  test('Deve renderizar o component App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  test('Deve renderizar o componente sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre'});
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
    expect(aboutTitle).toBeInTheDocument();
  })

  test('Deve testar a renderização do Not Found para um caminho não existente', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading', {
      name: 'Página não encontrada'
    });
    expect(notFoundTitle).toBeInTheDocument();
  })

  test('Deve renderizar o component About (Apenas component', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
    expect(aboutTitle).toBeInTheDocument();
  });
})
