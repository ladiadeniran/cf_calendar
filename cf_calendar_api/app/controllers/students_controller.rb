class StudentsController < ApplicationController
  def index
    render_json(User.students)
  end

  def show
    render_json(User.find(params[:student_id]))
  end
end