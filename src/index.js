import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 5:00PM"
        text="Cheers 😎 🍾"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
//ReactDOM.render(<App />, document.querySelector('#root'));
