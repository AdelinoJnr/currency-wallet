import React from 'react';
import './style.css';

export default function Toast({ text }) {
  return (
    <div className="snackbar">
      <span>{text}</span>
      <div className="toast-progress-bar" />
    </div>
  );
}
