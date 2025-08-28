import { render, screen } from '@testing-library/react';
import Blog from './Blog';
const posts = [
  { title: 'First Post', 
    date: '2025-08-01', 
    text: 'Hello world', 
    tags: ['intro'] },
];
test('renders blog and post', () => {
  render(<Blog posts={posts} />);
    expect(screen.getByText(/Блог/i)).toBeInTheDocument();
    expect(screen.getByText(/First Post/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
});