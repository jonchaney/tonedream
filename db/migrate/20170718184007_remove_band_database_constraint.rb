class RemoveBandDatabaseConstraint < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :band, :string, null: true
  end
end
