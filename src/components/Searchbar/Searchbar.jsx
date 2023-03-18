import { Component } from 'react';
import style from './SearchBar.module.css';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
    state = {
        query: '',
    };

    handleChange = ({ target }) => {
        this.setState({ query: target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { getSearchToState } = this.props;
        getSearchToState(this.state.query);
    };

    render() {
        return (
            <header className={style.Searchbar}>
                <form className={style.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={style.SearchFormButton}>
                        <span className={style.SearchFormButtonLabel}>
                            Search
                        </span>
                    </button>

                    <input
                        className={style.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.query}
                    />
                </form>
            </header>
        );
    }
}
SearchBar.propTypes = {
    getSearchToState: PropTypes.func,
};
