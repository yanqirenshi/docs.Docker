import React from 'react';

import ArticleSecTitle          from '../ArticleSecTitle';
import Article001secGraph       from '../Article001secGraph';
import Article001sec004CRUD     from './Article001sec004CRUD';
import Article001sec004other    from './Article001sec004other';

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
        table_area: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
        },
        left_table: {
            marginRight: '33px',
        },
        right_table: {
            display: 'flex',
            height: '100%',
            alignItems: 'flex-end',
        }
    };

    let graph = [
        "                               +--------+             +===========+",
        "                               | Image  |+--- run ---># Container #",
        "                               +--------+             +===========+",
        "                                                            ^      ",
        "                                                            |      ",
        "                                                           exec    ",
        "                                                            |      ",
        "                                                       +----------+",
        "                                                       | terminal |",
        "                                                       +----------+",
    ];

    return (
        <div className="section" style={style.section}>
          <div style={style.root}>

            <ArticleSecTitle titile="Container"/>

            <Article001secGraph source={graph}/>

            <div style={style.table_area}>
              <div style={style.left_table}>
                <Article001sec004CRUD />
              </div>

              <div style={style.right_table}>
                <Article001sec004other />
              </div>
            </div>

          </div>
        </div>
    );
}

export default Article001sec004;
