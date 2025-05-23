import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ picturesArray }) {
  return (
    <ul className={styles.gallery}>
      {picturesArray.map(picture => {
        return (
          <li className={styles.galleryItem} key={picture.id}>
            <ImageCard src={picture.urls.small} alt={picture.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
