import React from 'react';

function Article001sec001TableObjects (props) {
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
              <th>Element</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Dockerfile</td> <td>Image を作成するためのファイル</td>
            </tr>
            <tr>
              <td>Image</td> <td>Container のためのファイルの集合体</td>
            </tr>
            <tr>
              <td>Container</td> <td></td>
            </tr>
          </tbody>

        </table>
    );
}

export default Article001sec001TableObjects;
