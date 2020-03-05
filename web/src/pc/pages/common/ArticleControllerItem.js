import React from 'react';

function ArticleControllerItem (props) {
    let style = {
        root: {
            background: 'rgba(255,255,255,0.3)',
            width: '22px',
            height: '22px',
            fontSize: '12px',
            borderRadius: '22px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '8px',
        },
    };

    let click = (e) => {
        props.callback('click-item', props.source);
    };

    let label = () => {
        let v = props.source.title;
        return v.substring(0,1);
    };

    return  (
        <div style={style.root} onClick={click}>
          {label()}
        </div>
    );
}

export default ArticleControllerItem;
