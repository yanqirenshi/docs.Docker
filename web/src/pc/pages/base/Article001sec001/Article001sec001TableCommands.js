import React from 'react';

function Article001sec001TableCommands (props) {
    let style = {
        header: {
            char: { fontSize: '44px', lineHeight: '44px', color: '#f3f3f3', padding: '11px 22px', textAlign: 'center' },
            str:  { fontSize: '33px', lineHeight: '33px', color: '#f3f3f3', padding: '11px 22px', textAlign: 'center' },
        },
        operator: {
            char: { fontSize: '22px', lineHeight: '22px', color: '#f3f3f3', padding: '11px 22px', verticalAlign: 'middle' },
            str:  { fontSize: '22px', lineHeight: '22px', color: '#f3f3f3', padding: '11px 22px', verticalAlign: 'middle' },
        },
    };

    let click = () => {
        console.log(props.source.fullpageApi);
        props.source.fullpageApi.moveSectionDown();
    };

    let data = [
        { style: 'char', type: 'build',     operators: [ { command: 'Dockerfile の内容で Image を作成する。' } ]},
        { style: 'char', type: 'run',       operators: [ { command: 'Image を Dockerエンジン上で稼動させる。' } ]},
        { style: 'char', type: 'pull/push', operators: []},
        { style: 'char', type: 'exec',      operators: [ { command: '稼動している Container に接続する。' } ]},
    ];


    return (
        <table>
          <tbody>

            {
                data.map((d) => {
                    return <tr>
                           <td style={style.header[d.style]}>
                             <p>{d.type}</p>
                           </td>
                           <td style={style.operator[d.style]}>
                             {
                                 d.operators.map((o) => {
                                     return <p>{o.command}</p>;
                                 })
                             }
                           </td>
                         </tr>;
                })
            }

          </tbody>
        </table>
    );
}

export default Article001sec001TableCommands;
