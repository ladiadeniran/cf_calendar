class MentorsController < ApplicationController
  def index
    # TODO we should serialize this in a service object
    render_json(User.mentors_with_free_schedules)
  end
end