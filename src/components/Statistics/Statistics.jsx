import React from 'react';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <ul className="list-group">
            <li className='list-group-item'><p>Good: {good}</p></li>
            <li className='list-group-item'><p>Neutral: {neutral}</p></li>
            <li className='list-group-item'><p>Bad: {bad}</p></li>
            <li className='list-group-item'><p>Total: {total}</p></li>
            <li className='list-group-item'><p>Percentage: {percentage}%</p></li>
        </ul>
    );
  };
