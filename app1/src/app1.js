import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        This was rendered by app 1 IN IFRAME, which is written in React.
      </div>
    );
  }
}

const elementToRender = React.createElement(Root, {});
ReactDOM.render(elementToRender, document.getElementById('app1'));
