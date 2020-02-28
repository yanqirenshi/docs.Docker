import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';

function AppPc () {
    return (
        <BrowserRouter>
          <Route exact path='/' component={PageHome} />
        </BrowserRouter>
    );
}

export default AppPc;
