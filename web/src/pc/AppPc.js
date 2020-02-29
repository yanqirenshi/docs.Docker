import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';

function AppPc () {
    return (
        <BrowserRouter>
          <Route exact path='/docs.Docker' component={PageHome} />
        </BrowserRouter>
    );
}

export default AppPc;
