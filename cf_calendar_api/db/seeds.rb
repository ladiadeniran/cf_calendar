# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Type.destroy_all

user_1 = User.create!(first_name: "ladi", last_name: "bond", email: "ladi.bond@gmail.com")
user_2 = User.create!(first_name: "biola", last_name: "stallion", email: "biola.stallion@gmail.com")
user_3 = User.create!(first_name: "dan", last_name: "abramov", email: "dan.abramov@gmail.com")
user_4 = User.create!(first_name: "tyler", last_name: "gummings", email: "tyler.gummings@gmail.com")

type1 = Type.create!(name: :student)
type2 = Type.create!(name: :teacher)

UserType.create!(user_id: user_1.id, type_id: type1.id)
UserType.create!(user_id: user_2.id, type_id: type1.id)
UserType.create!(user_id: user_3.id, type_id: type2.id)
UserType.create!(user_id: user_4.id, type_id: type2.id)