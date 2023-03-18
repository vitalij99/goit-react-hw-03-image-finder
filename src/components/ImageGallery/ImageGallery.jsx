import { ButtonLodeMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import style from './ImageGallery.module.css';

export class ImageGallery extends Component {
    render() {
        const { images, onImageClick, getSearchLoad } = this.props;

        return (
            <>
                <ul className={style.ImageGallery}>
                    {images.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            onImageClick={onImageClick}
                        />
                    ))}
                </ul>
                <ButtonLodeMore getSearchLoad={getSearchLoad}>
                    Loade More
                </ButtonLodeMore>
            </>
        );
    }
}
