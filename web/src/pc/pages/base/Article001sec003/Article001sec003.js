import React from 'react';

import ArticleSecTitle          from '../../common/ArticleSecTitle';
import ArticleSecGraph          from '../../common/ArticleSecGraph';
import Article001sec003CRUD     from './Article001sec003CRUD';
import Article001sec003other    from './Article001sec003other';


function Article001sec003 (props) {
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
        "  +------------+               +========+                          ",
        "  | Dockerfile |+--- build ---># Image  #                          ",
        "  +------------+               +========+                          ",
        "                                  ^   |                            ",
        "                                  |  push                          ",
        "                                 pul  |                            ",
        "                                  |   v                            ",
        "                             +------------+                        ",
        "                             | docker hub |                        ",
        "                             +------------+                        ",
    ];

    return (
        <div className="section" style={style.section}>
          <div style={style.root}>

            <ArticleSecTitle titile="Image"/>

            <ArticleSecGraph source={graph}/>

            <div style={style.table_area}>
              <div style={style.left_table}>
                <Article001sec003CRUD />
              </div>

              <div style={style.right_table}>
                <Article001sec003other />
              </div>
            </div>

          </div>
        </div>
    );
}

export default Article001sec003;
