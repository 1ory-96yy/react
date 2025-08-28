import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Weather from './Weather';
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          name: 'Kyiv',
          sys: { country: 'UA', sunrise: 1690000000, sunset: 1690040000 },
          main: { temp: 20 },
          weather: [{ description: 'clear sky' }],
        }),
    })
  );
});
test('renders form inputs', () => {
  render(<Weather />);
  expect(screen.getByPlaceholderText(/City/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Country/i)).toBeInTheDocument();
});
test('fetches and shows weather', async () => {
  render(<Weather />);
  fireEvent.change(screen.getByPlaceholderText(/City/i), { target: { value: 'Kyiv' } });
  fireEvent.submit(screen.getByText(/Get Weather/i));
  await waitFor(() => expect(screen.getByText(/Kyiv/i)).toBeInTheDocument());
  expect(screen.getByText(/Temperature:/i)).toHaveTextContent('20');
});
