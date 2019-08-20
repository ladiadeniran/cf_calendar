class CalendarEntry < ApplicationRecord
  belongs_to :user, dependent: :destroy

  def time
    super.to_s(:time)
  end
end
