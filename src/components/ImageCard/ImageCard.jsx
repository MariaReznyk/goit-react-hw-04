import styles from './ImageCard.module.css';

export default function ImageCard({ src, alt }) {
  return (
    <div>
      <img className={styles.galleryImage} src={src} alt={alt} />
    </div>
  );
}
