class EventsController < ApplicationController
  def create
    event = Event.create!(event_params)
    CalendarEntry.turn_availabitity_off(params[:entry_id])
    render_json(event)
  end

  private

  def event_params
    params.require(:event).permit(:student_id, :mentor_id, :date, :duration)
  end

end