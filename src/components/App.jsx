import { fetchImages } from 'api/api';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';
import { Report } from 'notiflix/build/notiflix-report-aio';

export class App extends Component {
    state = {
        search: '',
        images: [],
        page: 1,
        isLoading: false,
        error: null,
        modal: {
            openModal: false,
            largeImageURL: '',
        },
    };

    getSearchToState = async search => {
        this.setState({ search, page: 1, isLoading: true });
        try {
            const mass = await fetchImages(search, 1);
            const images = mass.hits;
            this.setState({ images });
        } catch (error) {
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
    };
    getSearchLoad = async () => {
        const nextPage = this.state.page + 1;
        try {
            const mass = await fetchImages(this.state.search, nextPage);
            this.setState(prevState => ({
                images: [...prevState.images, ...mass.hits],
                page: prevState.page + 1,
            }));
        } catch (error) {
            this.setState({ error });
        }
    };
    onImageClick = largeImageURL => {
        this.setState({ modal: { largeImageURL, openModal: true } });
    };
    closeModal = e => {
        this.setState({ modal: { largeImageURL: '', openModal: false } });
    };
    render() {
        const { error, images, isLoading, modal, search } = this.state;
        return (
            <>
                <SearchBar getSearchToState={this.getSearchToState}></SearchBar>
                {isLoading && <Loader />}
                {error && Report.warning('Error', error.message, 'Okay')}
                {images.length === 0 &&
                    !isLoading &&
                    search &&
                    !error &&
                    Report.info('Images not found', 'Something went wrong')}
                {images.length > 0 && !isLoading && (
                    <ImageGallery
                        images={images}
                        getSearchLoad={this.getSearchLoad}
                        onImageClick={this.onImageClick}
                    ></ImageGallery>
                )}
                {modal.openModal && (
                    <Modal
                        largeImageURL={modal.largeImageURL}
                        closeModal={this.closeModal}
                    ></Modal>
                )}
            </>
        );
    }
}
