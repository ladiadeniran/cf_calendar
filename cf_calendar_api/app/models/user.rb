class User < ApplicationRecord
  has_many :user_types
  has_many :types, through: :user_types
  has_many :events

  validates :first_name, :last_name, :email, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true


  scope :students, -> { joins(:types).where(types: { name: "student"}).order(:first_name) }
  scope :mentors, -> { joins(:types).where(types: { name: "mentor"}).order(:first_name) }

  def first_name
    super.capitalize
  end

  def last_name
    super.capitalize
  end
end
