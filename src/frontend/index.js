import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { overrideComponentTypeChecker } from 'react-toolbox';

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
      <App />,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./component/App', render);
  }
}

render();
