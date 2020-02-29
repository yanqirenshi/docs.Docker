import React from 'react';

function ArticleSecTitle (props) {
    let style = {
        root: {
        },
        title: {
            fontSize: '111px',
            margin: '0px',
        },
    };
    console.log(props.titile);
    return (
        <div style={style.root}>
          <h1 className="title"
              style={style.title}>{props.titile}</h1>
        </div>
    );
}

export default ArticleSecTitle;
