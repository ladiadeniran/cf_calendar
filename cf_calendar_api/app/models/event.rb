class Event < ApplicationRecord
  belongs_to :student, foreign_key: :student_id, class_name: "User"
  belongs_to :mentor, foreign_key: :mentor_id, class_name: "User"

  validates :student_id, :mentor_id, :date, :duration, presence: true
end
