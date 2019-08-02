class Type < ApplicationRecord
  enum name: {
    student: "student",
    teacher: "teacher"
  }

  has_many :user_types
  has_many :users, through: :user_types

  validates :name, uniqueness: true
end
