import React, {Component} from 'react';
import './_search.css';
import {bindActionCreators} from 'redux';
import {changeSearchValue, changeSearchField, fetchFilms} from '../../actions/actions';
import {SEARCH_FIELDS} from './consts';
import {connect} from "react-redux";

@connect(state => ({
    searchValue: state.searchValue,
    searchField: state.searchField,
    sortField: state.sortField,
}))
export default class Search extends Component {

    changeValue = (value) => {
        const {dispatch} = this.props;
        bindActionCreators(changeSearchValue, dispatch)(value);
    };

    changeField = (value) => {
        const {dispatch, searchField} = this.props;
        if (searchField !== value) {
            bindActionCreators(changeSearchField, dispatch)(value);
        }
    };

    resolveFieldClassName = (value) => {
        const {searchField} = this.props;
        return value === searchField ? "search__options_button--active" : "search__options_button"
    };

    searchFilms = () => {
        const {dispatch, searchValue, searchField, sortField} = this.props;
        bindActionCreators(fetchFilms, dispatch)(searchValue, searchField, sortField);
    }

    render() {
        const {searchValue} = this.props;
        return (
            <div className="search">
                <span className="search__title">FIND YOUR MOVIE</span>
                <input type="text" className="search__input" onChange={(e) => this.changeValue(e.target.value)}
                       value={searchValue}/>
                <div className="search__options">
                    <div>
                        <span className="search__options_title">SEARCH BY</span>
                        <div className={this.resolveFieldClassName(SEARCH_FIELDS.title.name)}
                             onClick={() => this.changeField(SEARCH_FIELDS.title.name)}>
                            {SEARCH_FIELDS.title.title}
                        </div>
                        <div className={this.resolveFieldClassName(SEARCH_FIELDS.genre.name)}
                             onClick={() => this.changeField(SEARCH_FIELDS.genre.name)}>
                            {SEARCH_FIELDS.genre.title}
                        </div>
                    </div>
                    <div
                        onClick={this.searchFilms}
                        className="search-button">
                        SEARCH
                    </div>
                </div>
            </div>
        );
    }
}