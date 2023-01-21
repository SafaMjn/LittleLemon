import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Styled from '../styled';
import { occasions } from '../consts';
import BookingContext from './BookingContext';

export default function BookingForm() {
  const { booking, availableTimes, dispatch } = useContext(BookingContext);

  const handleSubmit = (values) => {
    // e.preventDefault();
    // dispatch({ type: 'update_times', data: e.target.value });
    console.log(booking, availableTimes);
  };

  const formik = useFormik({
    initialValues: {
      ...booking,
    },
    onSubmit: (values) => handleSubmit(values),
    validationSchema: Yup.object({
      reservationDate: Yup.string().required('Required'),
      reservationTime: Yup.string().required('Required'),
      guestsNumber: Yup.number()
        .min(1, 'Must be at least 1 guest')
        .max(10, 'Must be at most 10 guests')
        .required('Required'),
      occasion: Yup.string().required('Required'),
    }),
  });

  return (
    <Styled.Form onSubmit={formik.handleSubmit} data-testid='res-form'>
      <label htmlFor='res-date' data-testid='res-date-label'>
        Choose date
      </label>
      <input
        type='date'
        id='res-date'
        value={formik?.reservationDate}
        data-testid='res-date-value'
      />
      {!!formik.errors.reservationDate && formik.touched.reservationDate && (
        <Styled.ErrorMessage>
          {formik.errors.reservationDate}
        </Styled.ErrorMessage>
      )}
      <label htmlFor='res-time' data-testid='res-time-label'>
        Choose time
      </label>
      <select
        id='res-time '
        value={formik?.reservationTime}
        data-testid='res-time-value'
      >
        <option />
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      {!!formik.errors.reservationTime && formik.touched.reservationTime && (
        <Styled.ErrorMessage>
          {formik.errors.reservationTime}
        </Styled.ErrorMessage>
      )}
      <label htmlFor='guests' data-testid='res-guest-label'>
        Number of guests
      </label>
      <input
        type='number'
        min='1'
        max='10'
        id='guests'
        value={formik?.guestsNumber}
        data-testid='res-guest-value'
      />
      {!!formik.errors.guestsNumber && formik.touched.guestsNumber && (
        <Styled.ErrorMessage>{formik.errors.guestsNumber}</Styled.ErrorMessage>
      )}
      <label htmlFor='occasion' data-testid='res-occasion-label'>
        Occasion
      </label>
      <select
        id='occasion'
        value={formik?.occasion}
        data-testid='res-occasion-value'
      >
        <option />
        {occasions.map((occ, index) => (
          <option key={index}>{occ}</option>
        ))}
      </select>
      {!!formik.errors.occasion && formik.touched.occasion && (
        <Styled.ErrorMessage>{formik.errors.occasion}</Styled.ErrorMessage>
      )}
      <input
        type='submit'
        value='Make Your reservation'
        data-testid='res-submit'
      />
    </Styled.Form>
  );
}
