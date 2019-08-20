class AddDescriptionToEvents < ActiveRecord::Migration[5.2]
  def up
    add_column :events, :description, :text
  end

  def down
    remove_column :events, :description
  end
end
