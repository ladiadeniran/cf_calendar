class CreateStudentMentors < ActiveRecord::Migration[5.2]
  def up
    create_table :student_mentors do |t|
      t.integer :student_id, foreign_key: true, table_name: User
      t.integer :mentor_id, foreign_key: true, table_name: User
      t.index [:mentor_id, :student_id], unique: true
    end
  end

  def down
    drop_table :student_mentors
  end
end
