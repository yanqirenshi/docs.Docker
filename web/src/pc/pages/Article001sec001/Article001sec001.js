import React from 'react';

import ArticleSecTitle from '../ArticleSecTitle';
import Article001secGraph       from '../Article001secGraph';
import Article001sec001TableObjects from './Article001sec001TableObjects';
import Article001sec001TableCommands from './Article001sec001TableCommands';

function Article001sec001 (props) {
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
        },
        tables_area: {
            display: 'flex',
        },
        table_left: {
            marginRight: '66px',
        }
    };

    let click = () => {
        console.log(props.source.fullpageApi);
        props.source.fullpageApi.moveSectionDown();
    };

    let graph = [
        "  +------------+               +--------+             +-----------+",
        "  | Dockerfile |+--- build --->| Image  |+--- run --->| Container |",
        "  +------------+               +--------+             +-----------+",
        "                                  ^   |                     ^      ",
        "                                  |  push                   |      ",
        "                                 pul  |                    exec    ",
        "                                  |   v                     |      ",
        "                             +------------+            +----------+",
        "                             | docker hub |            | terminal |",
        "                             +------------+            +----------+",
    ];

    return (
        <div className="section" style={style.section}>
          <div style={style.root}>

            <ArticleSecTitle titile="Overview"/>

            <Article001secGraph source={graph}/>

            <div style={style.tables_area}>
              <div style={style.table_left}>
                <Article001sec001TableObjects />
              </div>

              <div>
                <Article001sec001TableCommands />
              </div>
            </div>

          </div>
        </div>
    );
}

export default Article001sec001;
