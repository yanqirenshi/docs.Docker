import React from 'react';

import ArticleControllerItem from './ArticleControllerItem';

function ArticleController (props) {
    let style = {
        root: {
            position: 'fixed',
            right: '8px',
            zIndex: '888',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
    };

    let label = (v) => {
        return v.substring(0,1);
    };

    return (
        <div style={style.root}>
          {
              props.source.sections.map((d) => {
                  return <ArticleControllerItem source={d}
                                                callback={props.source.callback}/>;
              })
          }
        </div>
    );
}

export default ArticleController;
