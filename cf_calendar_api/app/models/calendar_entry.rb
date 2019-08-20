class CalendarEntry < ApplicationRecord
  belongs_to :user, dependent: :destroy

  def time
    super.to_s(:time)
  end

  class << self
    def turn_availabitity_off(entry_id)
      find(entry_id).update(available: false)
    end
  end
end
