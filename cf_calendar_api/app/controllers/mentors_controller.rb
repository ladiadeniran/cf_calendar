class MentorsController < ApplicationController
  def index
    render_json(User.mentors)
  end
end