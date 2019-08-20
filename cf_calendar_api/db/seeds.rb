# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
CalendarEntry.destroy_all
StudentMentor.destroy_all

user_1 = User.create!(first_name: "ladi", last_name: "bond", email: "ladi.bond@gmail.com")
user_2 = User.create!(first_name: "biola", last_name: "stallion", email: "biola.stallion@gmail.com")
user_3 = User.create!(first_name: "dan", last_name: "abramov", email: "dan.abramov@gmail.com")
user_4 = User.create!(first_name: "tyler", last_name: "gummings", email: "tyler.gummings@gmail.com")


StudentMentor.create!(student_id: user_1.id, mentor_id: user_3.id)
StudentMentor.create!(student_id: user_1.id, mentor_id: user_4.id)
StudentMentor.create!(student_id: user_2.id, mentor_id: user_3.id)
StudentMentor.create!(student_id: user_2.id, mentor_id: user_4.id)

CalendarEntry.create!(user_id: user_3.id, day: Date.today, time: Time.now.end_of_day.to_s(:time), duration: 1)
CalendarEntry.create!(user_id: user_3.id, day: (Date.today + 1.day), time: Time.now.end_of_day.to_s(:time), duration: 1)
CalendarEntry.create!(user_id: user_3.id, day: (Date.today + 2.days), time: Time.now.end_of_day.to_s(:time), duration: 1)

CalendarEntry.create!(user_id: user_4.id, day: Date.today, time: Time.now.end_of_day.to_s(:time), duration: 1)
CalendarEntry.create!(user_id: user_4.id, day: Date.today + 1.day, time: Time.now.end_of_day.to_s(:time), duration: 1)
CalendarEntry.create!(user_id: user_4.id, day: Date.today + 2.days, time: Time.now.end_of_day.to_s(:time), duration: 1)
