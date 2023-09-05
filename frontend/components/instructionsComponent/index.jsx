import styles from "./instructionsComponent.module.css";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            G28X0Y0 (Isaac)
          </h1>
          <h3>The start of something really sweet?</h3>
        </div>
      </header>
    </div>
  );
}
