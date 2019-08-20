class MentorsController < ApplicationController
  def index
    render_json(User.mentors.with_future_calendar_entries)
  end
end