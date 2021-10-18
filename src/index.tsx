import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';

function Root() {
    return (
        <div className="root">
            <canvas className="canvas" />
        </div>
    );
}

const rootDiv = document.getElementById('root');
if (rootDiv !== null) {
    ReactDom.render(<Root />, rootDiv);
}
