class StudentsController < ApplicationController
  def index
    render_json(User.students)
  end

  def show
    render_json(User.student_including_mentors(params[:id]))
  end
end