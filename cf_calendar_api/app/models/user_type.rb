class UserType < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :type, dependent: :destroy

  validates :user_id, :tyoe_id, presence: true
end
