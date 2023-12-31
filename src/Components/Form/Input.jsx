import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, id, type, value, error, onChange, onBlur, accept }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        accept={accept}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
