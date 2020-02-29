import React from 'react';

function Article001sec004 (props) {
    let style = {
        root: {
            width: '100%',
            height: '100%',
            background: props.source.color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

    let click = () => {
        console.log(props.source.fullpageApi);
        props.source.fullpageApi.moveSectionDown();
    };

    return (
        <div className="section">
          <div style={style.root}>
            <div>
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={click}>
              Click me to move down
            </button>
            </div>
          </div>
        </div>
    );
}

export default Article001sec004;
