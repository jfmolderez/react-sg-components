import React from 'react';
import { faker } from '@faker-js/faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div
        className="content"
        style={{
          display: 'inline-block',
          padding: '0px 20px',
        }}
      >
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
