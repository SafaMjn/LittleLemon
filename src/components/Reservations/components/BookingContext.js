import { createContext } from 'react';

const BookingContext = createContext({
  booking: {},
  setBooking: () => {},
  availableTimes: [],
  dispatch: () => {},
});

export default BookingContext;
