import React, { useState } from 'react';
import useSubmit from '../hooks/useSubmit';
import './BookingForm.css';

const BookingForm = () => {
  const { isLoading, response, submit } = useSubmit();

  const [availableTimes, _setAvailableTimes] = useState(['17.00', '18.00', '19.00', '20.00', '21.00', '23.00']);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('17.00');
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('birthday');

  const getIsFormValid = () => {
    return date && time && guest >= 1 && guest <= 10 && occasion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Form Submit Successfully!');
    setDate('');
    setTime('17.00');
    setGuest(1);
    setOccasion('birthday');
  };

  return (
    <div className="booking-form">
      <form>
        <label htmlFor="res-date" className="required-label">
          Choose date
        </label>
        <input id="res-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <label htmlFor="res-time" className="required-label">
          Choose time
        </label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests" className="required-label">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          required
        />
        <label htmlFor="occasion" className="required-label">
          Occasion
        </label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value="birthday">Birthday</option>
          <option value="Anniversaryrole">Anniversary</option>
        </select>
        <input
          type="submit"
          className="submit-btn"
          value="Make Your reservation"
          onClick={handleSubmit}
          disabled={!getIsFormValid()}></input>
      </form>
    </div>
  );
};

export default BookingForm;

{
  /* <form style="display: grid; max-width: 200px; gap: 20px">
<label for="res-date">Choose date</label>
<input type="date" id="res-date" required />
<label for="res-time">Choose time</label>
<select id="res-time ">
  <option>17:00</option>
  <option>18:00</option>
  <option>19:00</option>
  <option>20:00</option>
  <option>21:00</option>
  <option>22:00</option>
</select>
<label for="guests">Number of guests</label>
<input type="number" placeholder="1" min="1" max="10" id="guests" />
<label for="occasion">Occasion</label>
<select id="occasion">
  <option>Birthday</option>
  <option>Anniversary</option>
</select>
<input type="submit" value="Make Your reservation"></input>
</form> */
}
