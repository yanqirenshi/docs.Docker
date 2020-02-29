import React from 'react';

import Article001 from'./Article001';

function PageHome () {
    let style = {
        root: {
            width: '100vw',
            height: '100vh',
        },
    };

    return (
        <div style={style.root}>
            <Article001 />
        </div>
    );
}

export default PageHome;
