import { render, screen } from '@testing-library/react';
import MovieSchedule from './MovieSchedule';



const movies = [
  {
    title: 'Inception',
    poster: 'inception.jpg',
    description: 'Sci-fi thriller',
    sessions: ['12:00', '18:00'],

    
    },
];
test('renders movie schedule', () => {
  render(<MovieSchedule movies={movies} />);
  expect(screen.getByText(/Кіноафіша/i)).toBeInTheDocument();
    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
  expect(screen.getByText(/Sci-fi thriller/i)).toBeInTheDocument();
  expect(screen.getByText('12:00')).toBeInTheDocument();
    }
);