class TweetsController < ApplicationController

  def create
    tweet = Tweet.new(content: params[:content], feed_id: 1)
    if tweet.save
      #  broadcast the fact that this happened out to anyone subscribed to the right Channel
      ActionCable.server.broadcast('my_feed', tweet)
      render json: tweet
    else
      render json: {error: 'Could not create that tweet'}, status: 422
    end
  end

end
