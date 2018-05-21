import React from 'react';
import './_film-description.css';

const FilmDescription = ({selectedFilm: {title, overview, release_date, runtime, genres, poster_path}}) => (
            <div className="description__block">
                <div className="description__block_picture">
                    <img src={poster_path}/>
                </div>
                <div className="description__block_info">
                    <span className="info__title">{title}</span>
                    <span className="info__description">{genres}</span>
                    <div>
                        <span className="info__date">{release_date}</span>
                        <span className="info__timeline">{runtime}</span>
                    </div>
                    <span className="info__description">{overview}</span>
                </div>
            </div>
        );

export default FilmDescription;