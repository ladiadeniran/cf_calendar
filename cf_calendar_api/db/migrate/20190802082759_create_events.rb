class CreateEvents < ActiveRecord::Migration[5.2]
  def up
    create_table :events do |t|
      t.integer :student_id, foreign_key: true, null: false
      t.integer :mentor_id, foreign_key: true, null: false
      t.timestamp :date, null: false
      t.integer :duration
    end

    add_index :events, [:mentor_id, :student_id, :date], unique: true
  end

  def down
    drop_table :events
  end
end
