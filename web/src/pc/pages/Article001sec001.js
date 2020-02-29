import React from 'react';

import ArticleSecTitle from './ArticleSecTitle';

function Article001sec001 (props) {
    let style = {
        root: {
            width: '100%',
            height: '100%',
            background: props.source.color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '33px',
        },
        contents_root: {
            flexGrow: 1,
            display: 'flex',
        }
    };

    let click = () => {
        console.log(props.source.fullpageApi);
        props.source.fullpageApi.moveSectionDown();
    };

    return (
        <div className="section">
          <div style={style.root}>

            <ArticleSecTitle titile="Overview"/>

            <div style={style.contents_root}>
              <p>Dockerfile</p>
              <p>+--- build ---></p>
              <p>Image</p>
              <p>+--- nun ---></p>
              <p>Container</p>
              <p></p>
              <p></p>
              <p></p>
            </div>

          </div>
        </div>
    );
}

export default Article001sec001;
