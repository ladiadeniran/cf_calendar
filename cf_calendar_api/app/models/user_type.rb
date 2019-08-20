class UserType < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :type, dependent: :destroy
end
