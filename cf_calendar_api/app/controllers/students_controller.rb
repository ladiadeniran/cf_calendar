class StudentsController < ApplicationController
  def index
    render_json(User.students)
  end

  def show
    result = {
      student: User.find(student_params[:student_id]),
      mentors: User.my_mentors_and_schedules(student_params[:student_id])
    }

    render_json(result)
  end

  private

  def student_params
    params.permit(:student_id)
  end
end