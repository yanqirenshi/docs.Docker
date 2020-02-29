import React from 'react';

function Article001sec001Graph (props) {
    let style = {
        graph: {
            fontSize: '22px',
        },
        pre: {
            padding: '88px',
            borderRadius: '11px',
            lineHeight: '22px',
        },
    };

    let graph = [
        "  +------------+               +-------+             +-----------+",
        "  | Dockerfile |+--- build --->| Image |+--- nun --->| Container |",
        "  +------------+               +-------+             +-----------+",
        "                                                           ^      ",
        "                                                           |      ",
        "                                                          exec    ",
        "                                                           |      ",
        "                                                      +----------+",
        "                                                      | terminal |",
        "                                                      +----------+",
    ];

    return (
        <div>
          <p style={style.graph}>
            <pre style={style.pre}>{graph.join('\n')}</pre>
          </p>
        </div>
    );
}

export default Article001sec001Graph;
