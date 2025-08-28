import { render, screen, fireEvent } from '@testing-library/react';
import CountryCities from './CountryCities';

const cities = [
  { name: 'Lviv', coat: 'lviv.png', description: 'Beautiful city', population: 700000, area: 182 },
];

test('renders country and cities', () => {
  render(<CountryCities country="Ukraine" cities={cities} />);
  expect(screen.getByText(/Ukraine/i)).toBeInTheDocument();
  expect(screen.getByText(/Lviv/i)).toBeInTheDocument();
});

test('opens city modal on click', () => {
  render(<CountryCities country="Ukraine" cities={cities} />);
  fireEvent.click(screen.getByText(/Lviv/i));
  expect(screen.getByText(/Beautiful city/i)).toBeInTheDocument();
});