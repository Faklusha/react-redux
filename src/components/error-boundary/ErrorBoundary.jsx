import React, {Component} from 'react';
import './_error-boundary.css';

export default class ErrorBoundary extends Component {
    state = {
        isErrorExisted: false,
    }

    componentDidCatch(error) {
        this.setState({isErrorExisted: true});
        console.error(error);
    }

    resetError = () => this.setState({isErrorExisted: false});

    render() {
        const {isErrorExisted} = this.state;
        const {children} = this.props;
        return isErrorExisted ?
            (
                <div
                    className="error"
                >
                    <span className="error__title">We're sorry — something's gone wrong.</span>
                    <span
                        className="error__link"
                        onClick={this.resetError}>
                        HIDE
                    </span>
                </div>
            ) : children
    }

}