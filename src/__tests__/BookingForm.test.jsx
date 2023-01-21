import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from 'components/Reservations/components/BookingForm';

const setup = () => {
  render(<BookingForm />);
  const form = screen.getByTestId('res-form');
  const dateInput = screen.getByTestId('res-date-value');
  const timeInput = screen.getByTestId('res-time-value');
  const guestInput = screen.getByTestId('res-guest-value');
  const occasionInput = screen.getByTestId('res-occasion-value');
  const submitBtn = screen.getByTestId('res-submit');
  return {
    form,
    dateInput,
    timeInput,
    guestInput,
    occasionInput,
    submitBtn,
  };
};

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now!');
  expect(headingElement).toBeInTheDocument();
});

test('Render 2 input components', () => {
  render(<BookingForm />);
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
});

test('Renders a submit button', () => {
  render(<BookingForm />);
  expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
});

test('Change inputs with empty values', () => {
  const { dateInput, timeInput, guestInput, occasionInput, submitBtn } =
    setup();
  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.change(timeInput, { target: { value: '' } });
  fireEvent.change(guestInput, { target: { value: '' } });
  fireEvent.change(occasionInput, { target: { value: '' } });
  fireEvent.submit(submitBtn);
});
