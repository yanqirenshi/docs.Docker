import React from 'react';

function Article001sec001TableCommands (props) {
    let style = {
        root: {
            fontSize: '22px',
        }
    };

    return (
        <table className="table is-bordered is-striped is-narrow is-hoverable"
               style={style.root}>

          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>build</td> <td>Dockerfile の内容で Image を作成する。</td>
            </tr>
            <tr>
              <td>run</td> <td>Image を Dockerエンジン上で稼動させる。</td>
            </tr>
            <tr>
              <td>exec</td> <td>稼動している Container に接続する。</td>
            </tr>
          </tbody>

        </table>
    );
}

export default Article001sec001TableCommands;
