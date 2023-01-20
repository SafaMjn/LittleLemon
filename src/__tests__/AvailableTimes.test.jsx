import { initializeTimes, updateTimes } from 'components/Reservations';

test('Initialize times', () => {
  const times = ['10:00', '11:00'];
  const initTimes = initializeTimes(times);
  expect(initTimes).toEqual(times);
});

test('Update times', () => {
  const times = ['10:00', '11:00', '12:00'];
  const initTimes = updateTimes(times, '10:00');
  expect(initTimes).not.toEqual(times);
});
