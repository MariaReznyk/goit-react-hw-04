import styles from './Section.module.css';

function Section({ children, style }) {
  return (
    <section className={styles.section} style={style}>
      {children}
    </section>
  );
}

export default Section;
