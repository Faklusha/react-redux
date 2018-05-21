import React from 'react';
import './_header.css';

const Header = ({isFilmSelected, resetActiveFilm}) => (
            <div className="header">
                <span className="main-title">netflixroulette</span>
                {isFilmSelected &&
                <div
                    onClick={resetActiveFilm}
                    className="search-button">
                    SEARCH
                </div>}
            </div>
        );

export default Header;