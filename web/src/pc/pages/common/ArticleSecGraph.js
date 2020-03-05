import React from 'react';

function ArticleSecGraph (props) {
    let style = {
        root: {
            marginBottom: '33px',

        },
        pre: {
            padding: '33px',
            borderRadius: '11px',
            fontSize: '22px',
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

export default ArticleSecGraph;
