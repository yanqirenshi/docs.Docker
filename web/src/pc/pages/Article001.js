import React, { useState } from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import Article001sec001     from './Article001sec001/Article001sec001';
import Article001sec002     from './Article001sec002';
import Article001sec003     from './Article001sec003/Article001sec003';
import Article001sec004     from './Article001sec004/Article001sec004';
import Article001Controller from './Article001Controller';

import ArticleSecHead from './ArticleSecHead';
import ArticleSecFoot from './ArticleSecFoot';

function Article001 () {
    const [fullpage, setFullpage] = useState(null);

    let i = 1;
    let sections = [
        { id: i++, title: 'Overview',   comp: 'Article001sec001' },
        { id: i++, title: 'Dockerfile', comp: 'Article001sec002' },
        { id: i++, title: 'Image',      comp: 'Article001sec003' },
        { id: i++, title: 'Container',  comp: 'Article001sec004' },
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
          <Article001Controller source={source}/>

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
