import { ButtonLodeMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
    render() {
        const { images, onImageClick, getSearchLoad, loadeMore } = this.props;

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
                {loadeMore && (
                    <ButtonLodeMore getSearchLoad={getSearchLoad}>
                        Loade More
                    </ButtonLodeMore>
                )}
            </>
        );
    }
}
ImageGallery.propTypes = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
    getSearchLoad: PropTypes.func,
    loadMore: PropTypes.bool,
};
