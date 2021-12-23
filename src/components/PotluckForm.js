import React from 'react';

export default function PotluckForm(props) {
  const { values, change, submit } = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  const onChange = evt => {
    const { name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <div className='dash-cont'>
      <div className='potluck-evt-container shadow-lg'>
        <form className='pl-form' onSubmit={onSubmit}>
          <h1>Create your potluck event</h1>
          {/* Potluck Title */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='plTitle'>Name Your Potluck</label>
            <input 
              name='plTitle'
              type='text'
              placeholder='Potluck Name'
              className='form-control'
              id='plTitle'
              value={values.plTitle}
              onChange={onChange}
            />
          </div>
          {/* Date */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='plDate'>Date</label>
            <input 
              name='date'
              type='date'
              className='form-control'
              id='plDate'
              value={values.date}
              onChange={onChange}
            />
          </div>
          {/* Time */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='plTime'>Time</label>
            <input 
              name='time'
              type='time'
              className='form-control'
              id='plTime'
              value={values.time}
              onChange={onChange}
            />
          </div>
          {/* Location */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='plLocation'>Location</label>
            <input 
              name='location'
              type='text'
              className='form-control'
              id='plLocation'
              value={values.location}
              onChange={onChange}
            />
          </div>
          {/* Submit */}
          <button type='submit' className='btn btn-primary btn-block'>Create Event</button>
        </form>
      </div>
    </div>
  )
}