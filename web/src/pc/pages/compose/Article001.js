import React, { useState } from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import Article001sec001 from './Article001sec001/Article001sec001';
import Article001sec002 from './Article001sec001/Article001sec002';
import Article001sec003 from './Article001sec001/Article001sec003';
import Article001sec004 from './Article001sec001/Article001sec004';

import ArticleController from '../common/ArticleController';
import ArticleSecHead    from '../common/ArticleSecHead';
import ArticleSecFoot    from '../common/ArticleSecFoot';

function Article001 () {
    const [fullpage, setFullpage] = useState(null);

    let i = 1;
    let sections = [
        { id: i++, title: 'Overview',   comp: 'Article001sec001' },
    ];
    let source={
        sections: sections,
        callback: (action, data) => {
            if ('move-next'===action) {
                fullpage.moveSectionDown();
                return;
            }
            if ('move-prev'===action) {
                fullpage.moveSectionUp();
                return;
            }
            if ('click-item'===action) {
                fullpage.moveTo(data.id);
                return;
            }
        },
    };

    let background = () => {
        let colors = ['#89c3eb','#a0d8ef','#2ca9e1','#4c6cb3','#1e50a2'];
        let i = Math.floor( Math.random() * colors.length );

        return colors[i];
    };

    return (
        <>
          <ArticleController source={source}/>

          <ArticleSecHead source={source} />

          <ReactFullpage licenseKey = {'YOUR_KEY_HERE'}
                         scrollingSpeed = {1000}

                         render={({ state, fullpageApi }) => {
                             let sec_source={
                                 fullpageApi: fullpageApi,
                                 sections: sections,
                                 color: background(),
                             };
                             setFullpage(fullpageApi);
                             return (
                                 <ReactFullpage.Wrapper>
                                   <Article001sec001 source={sec_source}/>
                                   <Article001sec002 source={sec_source}/>
                                   <Article001sec003 source={sec_source}/>
                                   <Article001sec004 source={sec_source}/>
                                 </ReactFullpage.Wrapper>
                             );
                         }} />

          <ArticleSecFoot source={source} />
        </>
    );
}

export default Article001;
