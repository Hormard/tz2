import styles from "./Counter.module.css";

export function Counter({
  count,
  id,
  onClickDelete,
  onClickPlus,
  onClickMinus,
  onClickReset,
}) {
  return (
    <div className={styles.counter_container}>
      <div className={styles.container}>
        <p className={styles.count}>{count}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => onClickMinus(id)}>
          -
        </button>
        <button className={styles.button} onClick={() => onClickReset(id)}>
          Reset
        </button>
        <button className={styles.button} onClick={() => onClickPlus(id)}>
          +
        </button>
      </div>
      <button className={styles.button} onClick={() => onClickDelete(id)}>
        Delete
      </button>
    </div>
  );
}
