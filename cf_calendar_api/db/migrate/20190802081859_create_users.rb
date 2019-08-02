class CreateUsers < ActiveRecord::Migration[5.2]
  def up
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false, unique: true

      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
