import { render, screen } from '@testing-library/react';
import BookingForm from 'components/Reservations/components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now!');
  expect(headingElement).toBeInTheDocument();
});