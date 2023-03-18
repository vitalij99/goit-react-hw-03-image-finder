import { Component } from 'react';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {};
    render() {
        const { webformatURL, largeImageURL, onImageClick } = this.props;
        //
        return (
            <li className={style.ImageGalleryItem}>
                <img
                    src={webformatURL}
                    alt=""
                    className={style.ImageGalleryItemImage}
                    onClick={() => onImageClick(largeImageURL)}
                />
            </li>
        );
    }
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    onImageClick: PropTypes.func,
};
