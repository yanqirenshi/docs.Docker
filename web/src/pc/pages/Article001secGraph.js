import React from 'react';

function Article001secGraph (props) {
    let style = {
        root: {
            marginBottom: '33px',

        },
        graph: {
            fontSize: '22px',
        },
        pre: {
            padding: '66px',
            borderRadius: '11px',
            lineHeight: '22px',
        },
    };

    return (
        <div style={style.root}>
          <p style={style.graph}>
            <pre style={style.pre}>{props.source.join('\n')}</pre>
          </p>
        </div>
    );
}

export default Article001secGraph;
