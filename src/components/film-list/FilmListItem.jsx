import React from 'react';

const FilmListItem = ({title, date, genre, setActiveFilm, path})=> (
            <div
                className="film-list__item"
                onClick={setActiveFilm}
            >
                <div className="description__block_picture">
                    <img src={path} />
                </div>
                <div className="film-list__item_info">
                    <span className="item__title">{title}</span>
                    <span className="item__date">{date}</span>
                    <span className="item__category">{genre}</span>
                </div>
            </div>
        );

export default FilmListItem;