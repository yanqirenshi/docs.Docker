import React from 'react';

function Article001sec004other (props) {
    let style = {
        header: {
            char: { fontSize: '88px', lineHeight: '88px', color: '#f3f3f3', padding: '11px 22px', textAlign: 'center' },
            str:  { fontSize: '66px', lineHeight: '66px', color: '#f3f3f3', padding: '11px 22px', textAlign: 'center' },
        },
        operator: {
            char: { fontSize: '33px', lineHeight: '33px', color: '#f3f3f3', padding: '11px 22px', verticalAlign: 'middle' },
            str:  { fontSize: '33px', lineHeight: '33px', color: '#f3f3f3', padding: '11px 22px', verticalAlign: 'middle' },
        },
    };

    let click = () => {
        console.log(props.source.fullpageApi);
        props.source.fullpageApi.moveSectionDown();
    };

    let data = [
        { style: 'str',  type: 'Command', operators: [
            { command: 'docker container exec' },
        ]},
        { style: 'str',  type: 'File', operators: [
            { command: 'docker container cp' },
        ]},
        { style: 'str',  type: 'Output', operators: [
            { command: 'docker container logs' },
        ]},
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

export default Article001sec004other;
