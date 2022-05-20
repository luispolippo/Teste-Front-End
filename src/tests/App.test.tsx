import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from '../App';

describe('Header', () => {
  it('Deve haver um título', () => {
    const { getByText } = render(<App />);
    expect(getByText('Teste front-end')).toBeInTheDocument();
  });
  it('Deve haver um botão', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button', {  name: /salvar/i})).toBeInTheDocument();
  });
});

describe('Form', () => {
  it('Deve haver um campo de "Nome"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('textbox', {  name: /nome/i})).toBeInTheDocument();
  });
  it('Deve haver um campo de "Data Inicial"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('textbox', {  name: /data inicial/i})).toBeInTheDocument();
  });
  it('Deve haver um campo de "Data Final"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('textbox', {  name: /data final/i})).toBeInTheDocument();
  });
  it('Deve haver um campo de "Propriedades"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button', {  name: /propriedades ​/i})).toBeInTheDocument();
  });
  it('Deve haver um campo de "Laboratórios"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button', {  name: /laboratórios ​/i})).toBeInTheDocument();
  });
  it('Deve haver um campo de "Observações"', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('textbox', {  name: /observações/i})).toBeInTheDocument();
  });
});