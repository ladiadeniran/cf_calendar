class User < ApplicationRecord
  has_many :user_types
  has_many :types, through: :user_types
  has_many :events
  has_many :calendar_entries

  has_many :student_mentors

  validates :first_name, :last_name, :email, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true


  scope :students, -> { joins("INNER JOIN student_mentors on users.id = student_mentors.student_id").distinct.order(:first_name) }
  scope :mentors, -> { joins("INNER JOIN student_mentors on users.id = student_mentors.mentor_id").distinct.order(:first_name) }
  scope :with_future_schedules, -> { joins(:calendar_entries).where("day >= '#{Date.today}'::DATE AND time >= '#{Time.now.to_s(:time)}'::TIME").distinct }

  class << self
    def my_mentors(student_id)
      mentors.where(:student_mentors => {student_id: student_id})
    end

    def my_mentors_and_schedules(student_id)
      my_mentors(student_id).with_future_schedules.map do |mentor|
        entries = mentor.calendar_entries.select { |entry| entry.day >= Date.today && entry.time >= Time.now.to_s(:time)}
        mentor.serialize_mentor(entries)
      end
    end


  end

  def first_name
    super&.capitalize
  end

  def last_name
    super&.capitalize
  end


  # TODO handle this more gracefully
  def serialize_mentor(entries)
    {
      id: self.id,
      first_name: self.first_name,
      calendar_entries: self.calendar_entries
    }
  end
end
