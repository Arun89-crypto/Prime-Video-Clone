import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const Main = () => {
  return (
    <React.Fragment>
      <App></App>
    </React.Fragment>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));