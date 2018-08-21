import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App article={document.getElementById('root').getAttribute('article')} />, document.getElementById('root'));
// console.log(document.getElementById('root').getAttribute('article'));
ReactDOM.render(
	<App
		dataId={document.getElementById('root').getAttribute('data-id')}
		dataList={document.getElementById('root').getAttribute('data-list')}
		dataListName={document.getElementById('root').getAttribute('data-list-name')}
		dataHeadline={document.getElementById('root').getAttribute('data-headline')}
		dataAuthor={document.getElementById('root').getAttribute('data-author')}
		dataSection={document.getElementById('root').getAttribute('data-section')}
		dataUrl={document.getElementById('root').getAttribute('data-url')}
		articleId={document.getElementById('root').getAttribute('article-id')}
		articleHeadline={document.getElementById('root').getAttribute('article-headline')}
		articleAuthor={document.getElementById('root').getAttribute('article-author')}
		articlePublishedAt={document.getElementById('root').getAttribute('article-publishedat')}
		readingTime={document.getElementById('root').getAttribute('reading_time')}
		articleContent={document.getElementById('root').getAttribute('article-content')}
		articleImage={document.getElementById('root').getAttribute('article-image')}
	/>, document.getElementById('root'));
registerServiceWorker();
