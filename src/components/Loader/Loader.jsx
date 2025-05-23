import styles from './Loader.module.css';
import { BarLoader } from 'react-spinners';

export default function Loader({ isLoading }) {
  const override = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div className={styles.loaderWrapper}>
      <BarLoader
        loading={isLoading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="navy"
      />
    </div>
  );
}
