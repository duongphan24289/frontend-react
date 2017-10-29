import React from 'react';
import classNames from 'classnames';

export default class LoadingPage extends React.Component {
  render() {
    return (
      <div className={classNames('loading-wrapper', { 'show-loading': true })}>
        <div className="loading-three-bounce">
          <div className="loading-bounce"></div>
          <div className="loading-bounce"></div>
          <div className="loading-bounce"></div>
        </div>
      </div>
    );
  }
}