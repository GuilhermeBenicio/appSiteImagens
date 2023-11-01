import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ label, id, value, onChange }) => {
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
    </div>
  );
};

export default TextArea;
