import React from 'react';

function Article001sec003CRUD (props) {
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
        { style: 'char', type: 'C',   operators: [ { command: 'docker build' } ]},
        { style: 'char', type: 'R',   operators: [ { command: 'docker image' } ]},
        { style: 'char', type: 'U',   operators: []},
        { style: 'char', type: 'D',   operators: [ { command: 'docker rmi' } ]},
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

export default Article001sec003CRUD;
