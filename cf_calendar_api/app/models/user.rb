class User < ApplicationRecord
  has_many :user_types
  has_many :types, through: :user_types
  has_many :events

  validates :first_name, :last_name, :email, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true

  attr_reader :name

  scope :students, -> { joins(:types).where(types: { name: "student"}).order(:first_name) }
  scope :teachers, -> { joins(:types).where(types: { name: "teacher"}).order(:first_name) }

  def name
    "#{first_name.capitalize} #{last_name.capitalize}"
  end

  def self.student_including_mentors(student_id)
    {
      student: find(student_id),
      mentors: teachers
    }
  end

end
