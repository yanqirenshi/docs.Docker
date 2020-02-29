import React from 'react';

function Article001Controller (props) {
    let style = {
        root: {
            position: 'fixed',
            right: '0px',
            zIndex: '888',
        },
    };

    let click = (e) => {
        let target = e.target;
        let id = target.getAttribute('item-id') * 1;

        let item = props.source.sections.find((d) => {
            return d.id===id;
        });

        // props.source.fullpageApi.moveTo(item.id);
    };

    return (
        <div style={style.root}>
          {
              props.source.sections.map((d) => {
                  return <div key={d.id}
                              item-id={d.id}
                              onClick={click}>
                           {d.title}
                         </div>;
              })
          }
        </div>
    );
}

export default Article001Controller;
