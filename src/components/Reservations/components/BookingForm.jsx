import React, { useContext } from 'react';
import * as Styled from '../styled';
import { occasions } from '../consts';
import BookingContext from './BookingContext';

export default function BookingForm() {
  const { booking, availableTimes, setBooking, dispatch } =
    useContext(BookingContext);
  const handleTimeChange = ({ target }) => {
    setBooking({ ...booking, reservationTime: target.value });
  };
  const handleGuestChange = ({ target }) =>
    setBooking({ ...booking, guestsNumber: target.value });
  const handleOccasionChange = ({ target }) =>
    setBooking({ ...booking, occasion: target.value });
  const handleDateChange = ({ target }) =>
    setBooking({ ...booking, reservationDate: target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'update_times', data: e.target.value });
  };

  return (
    <Styled.Form>
      <p>Book Now!</p>
      <label htmlFor='res-date' data-test-id='res-date-label'>
        Choose date
      </label>
      <input
        type='date'
        id='res-date'
        value={booking?.reservationDate}
        onChange={handleDateChange}
        data-test-id='res-date-value'
      />
      <label htmlFor='res-time' data-test-id='res-time-label'>
        Choose time
      </label>
      <select
        id='res-time '
        value={booking?.reservationTime}
        onChange={handleTimeChange}
        data-test-id='res-time-value'
      >
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <label htmlFor='guests' data-test-id='res-guest-label'>
        Number of guests
      </label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        value={booking?.guestsNumber}
        onChange={handleGuestChange}
        data-test-id='res-guest-value'
      />
      <label htmlFor='occasion' data-test-id='res-occasion-label'>
        Occasion
      </label>
      <select
        id='occasion'
        value={booking?.occasion}
        onChange={handleOccasionChange}
        data-test-id='res-occasion-value'
      >
        {occasions.map((occ, index) => (
          <option key={index}>{occ}</option>
        ))}
      </select>
      <input
        type='submit'
        value='Make Your reservation'
        onClick={handleSubmit}
        data-test-id='res-submit'
      />
    </Styled.Form>
  );
}
