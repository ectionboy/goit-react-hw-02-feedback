import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className='list-group'>
      {options.map(option => (
        <li key={option} >
          <button onClick={() => onLeaveFeedback(option)} className='btn btn-success mb-2'>{option}</button>
        </li>
      ))}
    </ul>
  );
};
