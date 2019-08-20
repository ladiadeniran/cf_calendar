FactoryBot.define do
  factory :user do
    first_name { "Ladi" }
    last_name { "Adeniran" }
    email { Faker::Internet.email }
  end
end