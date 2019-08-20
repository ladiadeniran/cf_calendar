class CreateCalendarEntries < ActiveRecord::Migration[5.2]
  def up
    create_table :calendar_entries do |t|
      t.date :day, null: false
      t.time :time, null: false
      t.integer :duration, null: false
      t.integer :user_id, foreign_key: true
      t.boolean :available, null: false, default: true
    end

    add_index :calendar_entries, [:day, :time, :user_id], unique: true
  end

  def down
    drop_table :calendar_entries
  end
end
