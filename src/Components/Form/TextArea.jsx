import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ label, id, value, error, onChange, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        className={styles.textarea}
        label={label}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      ></textarea>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextArea;
