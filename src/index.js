import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 5:00PM"
        text="Cheers 😎 🍾"
      />
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
//ReactDOM.render(<App />, document.querySelector('#root'));
