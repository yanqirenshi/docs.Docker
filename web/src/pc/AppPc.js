import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHome       from './pages/PageHome';
import PageBase       from './pages/base/PageBase';
import PageCompose    from './pages/compose/PageCompose';
import PageKubernetes from './pages/kubernetes/PageKubernetes';

function AppPc () {
    return (
        <BrowserRouter>
          <Route exact path='/docs.Docker'            component={PageHome} />
          <Route exact path='/docs.Docker/base'       component={PageBase} />
          <Route exact path='/docs.Docker/compose'    component={PageCompose} />
          <Route exact path='/docs.Docker/kubernetes' component={PageKubernetes} />
        </BrowserRouter>
    );
}

export default AppPc;
