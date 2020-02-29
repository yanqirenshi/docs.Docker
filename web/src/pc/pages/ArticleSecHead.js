import React from 'react';

function ArticleSecHead () {
    let style = {
        root: {
            width: '100vw',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '666',
            textAlign: 'center',
        },
        item: {
            padding: '8px 22px',
            background: 'rgba(255,255,255,0.8)',
            display: 'inline-block',
            margin: '0px',
            borderRadius: '0px 0px 5px 5px',
        },
    };

    return (
        <div style={style.root}>
          <p style={style.item}>Prev</p>
        </div>
    );
}

export default ArticleSecHead;
