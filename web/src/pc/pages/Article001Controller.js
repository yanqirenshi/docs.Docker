import React from 'react';

import Article001ControllerItem from './Article001ControllerItem';

function Article001Controller (props) {
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
                  return <Article001ControllerItem source={d}
                                                   callback={props.source.callback}/>;
              })
          }
        </div>
    );
}

export default Article001Controller;
