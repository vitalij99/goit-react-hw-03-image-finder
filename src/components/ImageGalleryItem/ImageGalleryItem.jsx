import { Component } from 'react';
import style from './ImageGalleryItem.module.css';

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
