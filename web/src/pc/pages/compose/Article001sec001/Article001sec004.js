import React from 'react';

import ArticleSecTitle from '../../common/ArticleSecTitle';

function Article001sec004 (props) {
    let style = {
        section: {
            padding: '0px'
        },
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
        props.source.fullpageApi.moveSectionDown();
    };

    return (
        <div className="section" style={style.section}>
          <div style={style.root}>
            <ArticleSecTitle titile="down"/>

            <div style={style.contents_root}>
            </div>
          </div>
        </div>
    );
}

export default Article001sec004;
