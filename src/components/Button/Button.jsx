import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Button.module.css';

export class ButtonLodeMore extends Component {
    render() {
        const { getSearchLoad, children } = this.props;
        return (
            <button
                className={style.LoadeMore}
                onClick={() => {
                    getSearchLoad();
                }}
            >
                {children}
            </button>
        );
    }
}

ButtonLodeMore.propTypes = {
    getSearchLoad: PropTypes.func,
};
