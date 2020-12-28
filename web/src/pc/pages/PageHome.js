import React from 'react';

import { Link } from 'react-router-dom';

function PageHome () {
    let style = {
        root: {
        },
        background: {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: '0',
            background: 'rgba(137, 195, 235, 0.9)',
            color: 'rgba(137, 195, 235, 1)',
            fontSize: '333px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
        },
        forground: {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: '8',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        forground_item: {
            color: '#f3f3f3',
            fontWeight: 'bold',
            fontSize: '111px',
        },
    };

    return (
        <div style={style.root}>
          <div style={style.background}>
            <p>Docker</p>
          </div>

          <div style={style.forground}>
            <Link to="/docs.Docker/kubernetes">
              <p style={style.forground_item}>Kubernetes</p>
            </Link>

            <Link to="/docs.Docker/base">
              <p style={style.forground_item}>Base</p>
            </Link>

            <Link to="/docs.Docker/compose">
              <p style={style.forground_item}>Compose</p>
            </Link>
          </div>
        </div>
    );
}

export default PageHome;
