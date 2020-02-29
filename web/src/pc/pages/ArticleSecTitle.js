import React from 'react';

function ArticleSecTitle (props) {
    let style = {
        root: {
            fontSize: '66px',
        },
        title: {
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
