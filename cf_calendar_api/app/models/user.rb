class User < ApplicationRecord
  has_many :user_types
  has_many :types, through: :user_types
  has_many :events
  has_many :calendar_entries

  validates :first_name, :last_name, :email, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true


  scope :students, -> { joins(:types).where(types: { name: "student"}).order(:first_name) }
  scope :mentors, -> { joins(:types).where(types: { name: "mentor"}).order(:first_name) }
  scope :with_free_schedules, -> { joins(:calendar_entries).where("day >= '#{Date.today}'::DATE AND time >= '#{Time.now.to_s(:time)}'::TIME AND available IS TRUE").distinct }

  def first_name
    super.capitalize
  end

  def last_name
    super.capitalize
  end

  def self.mentors_with_free_schedules
    mentors.with_free_schedules.map do |mentor|
      entries = mentor.calendar_entries.select { |entry| entry.day >= Date.today && entry.time >= Time.now.to_s(:time) && entry.available == true }
      mentor.serialize_mentor(entries)
    end
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
