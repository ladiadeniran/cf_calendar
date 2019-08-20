class CalendarEntry < ApplicationRecord
  belongs_to :user, dependent: :destroy
end
