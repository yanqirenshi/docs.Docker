import React from 'react';

function ArticleSecTitle (props) {
    let style = {
        root: {
            marginBottom: '88px',
        },
        title: {
            fontSize: '111px',
            color: '#f3f3f3',
            margin: '0px',
        },
    };

    return (
        <div style={style.root}>
          <h1 style={style.title}>{props.titile}</h1>
        </div>
    );
}

export default ArticleSecTitle;
