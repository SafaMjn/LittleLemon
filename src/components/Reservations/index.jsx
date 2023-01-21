import React, { useState, useMemo, useReducer } from 'react';
import BookingForm from './components/BookingForm';
import * as Styled from './styled';
import { bookingTimes } from './consts';
import BookingContext from './components/BookingContext';

export const initializeTimes = (state) => state;
export const updateTimes = (state, data) =>
  state.filter((time) => time !== data);
export default function Reservations() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'initialize_times': {
        return initializeTimes(state);
      }
      case 'update_times': {
        return updateTimes(state, action.data);
      }
      default:
        return state;
    }
  };
  const [availableTimes, dispatch] = useReducer(reducer, bookingTimes);
  const [booking, setBooking] = useState({
    reservationDate: '',
    reservationTime: '',
    guestsNumber: 0,
    occasion: '',
  });

  const bookingContext = useMemo(
    () => ({ booking, availableTimes, setBooking, dispatch }),
    [availableTimes, booking]
  );
  return (
    <BookingContext.Provider value={bookingContext}>
      <Styled.BookingContainer>
        <h1>Please fill out this form to make your reservation</h1>
        <BookingForm />
      </Styled.BookingContainer>
    </BookingContext.Provider>
  );
}
