import React from 'react';

function ArticleSecTitle (props) {
    let style = {
        root: {
            marginBottom: '33px',
        },
        title: {
            fontSize: '88px',
            color: '#f3f3f3',
            margin: '0px',
            lineHeight: '88px',
        },
    };

    return (
        <div style={style.root}>
          <h1 style={style.title}>{props.titile}</h1>
        </div>
    );
}

export default ArticleSecTitle;
