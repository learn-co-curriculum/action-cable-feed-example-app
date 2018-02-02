import React from 'react';

const pluralizeTweets = num => {
  return num > 1 ? 'tweets' : 'tweet';
};

const NewTweetInfo = ({ newTweetCount, handleDisplayTweets }) => {
  return newTweetCount ? (
    <div onClick={handleDisplayTweets} className="ui message info">
      You have {newTweetCount} new {pluralizeTweets(newTweetCount)}
    </div>
  ) : null;
};

export default NewTweetInfo;
