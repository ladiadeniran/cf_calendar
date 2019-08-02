class CreateTypes < ActiveRecord::Migration[5.2]
  def up
    create_table :types do |t|
      t.string :name, null: false

      t.timestamps
    end
  end

  def down
    drop_table :types
  end
end
