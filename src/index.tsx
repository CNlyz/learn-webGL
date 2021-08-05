import React from 'react';
import ReactDom from 'react-dom';

function Root() {
    return (
        <div>hi</div>
    );
}

const rootDiv = document.getElementById('root');
if (rootDiv !== null) {
    ReactDom.render(<Root />, rootDiv);
}
