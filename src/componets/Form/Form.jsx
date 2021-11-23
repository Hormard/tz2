import styles from "./Form.module.css";

function getId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function Form({ onClick, onClickReset, counters }) {
  const onClickAdd = () => {
    const newCounter = {
      id: getId(),
      count: 0,
    };

    onClick(newCounter);
  };

  const sumCounts = () => {
    const sum = counters.reduce((acc, item) => acc + item.count, 0);
    return sum;
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onClickAdd}>
          Add Counter
        </button>
        <button className={styles.button} onClick={onClickReset}>
          Reset
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.text}>Counters: {counters.length}</p>
        <p className={styles.text}>Sum: {sumCounts()}</p>
      </div>
    </div>
  );
}
