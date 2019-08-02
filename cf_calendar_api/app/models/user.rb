class User < ApplicationRecord
  has_many :user_types
  has_many :types, through: :user_types
  has_many :events

  validates :first_name, :last_name, :email, presence: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true

  attr_reader :name

  scope :students, -> { where( types: { name: :student }) }
  scope :teachers, -> { where( types: { name: :teacher }) }

  def name
    "#{first_name.capitalize} #{last_name.capitalize}"
  end
end
