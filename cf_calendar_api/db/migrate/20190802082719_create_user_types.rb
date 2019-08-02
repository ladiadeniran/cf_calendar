class CreateUserTypes < ActiveRecord::Migration[5.2]
  def up
    create_table :user_types do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :type_id, null: false, foreign_key: true
      t.index [:user_id, :type_id], unique: true

      t.timestamps
    end
  end

  def down
    drop_table :user_types
  end
end
