import React from 'react';

function ArticleSecFoot (props) {
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
            background: 'rgba(255,255,255,0.3)',
            display: 'inline-block',
            margin: '0px',
            borderRadius: '5px 5px 0px 0px',
        },
    };

    let click = () => {
        props.source.callback('move-next');
    };

    return (
        <div style={style.root}>
          <p style={style.item} onClick={click}>Next</p>
        </div>
    );
}

export default ArticleSecFoot;
