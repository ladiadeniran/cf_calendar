# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_20_001050) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendar_entries", force: :cascade do |t|
    t.date "day", null: false
    t.time "time", null: false
    t.integer "duration", null: false
    t.integer "user_id"
    t.boolean "available", default: true, null: false
    t.index ["day", "time", "user_id"], name: "index_calendar_entries_on_day_and_time_and_user_id", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "mentor_id", null: false
    t.date "datetime", null: false
    t.integer "duration"
    t.index ["mentor_id", "student_id", "datetime"], name: "index_events_on_mentor_id_and_student_id_and_datetime", unique: true
  end

  create_table "types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_types", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "type_id"], name: "index_user_types_on_user_id_and_type_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
