class User < ApplicationRecord
  has_many :user_types
  has_many :types, through: :user_types
  has_many :events
  has_many :calendar_entries

  validates :first_name, :last_name, :email, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true


  scope :students, -> { joins(:types).where(types: { name: "student"}).order(:first_name) }
  scope :mentors, -> { joins(:types).where(types: { name: "mentor"}).order(:first_name) }
  scope :with_future_calendar_entries, -> { joins(:calendar_entries).where("day >= '#{Date.today}'::DATE AND time >= '#{Time.now.to_s(:time)}'::TIME").distinct }

  def first_name
    super.capitalize
  end

  def last_name
    super.capitalize
  end
end
