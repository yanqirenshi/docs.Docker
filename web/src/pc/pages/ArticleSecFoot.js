import React from 'react';

function ArticleSecFoot () {
    let style = {
        root: {
            width: '100vw',
            position: 'fixed',
            bottom: '0px',
            left: '0px',
            zIndex: '666',
            textAlign: 'center',
        },
        item: {
            padding: '6px 22px',
            background: 'rgba(255,255,255,0.8)',
            display: 'inline-block',
            margin: '0px',
            borderRadius: '5px 5px 0px 0px',
        },
    };

    return (
        <div style={style.root}>
          <p style={style.item}>Next</p>
        </div>
    );
}

export default ArticleSecFoot;
