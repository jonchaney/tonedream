class ChangeDateInAlbumsToString < ActiveRecord::Migration[5.1]
  def change
    change_column :albums, :date, :string
  end
end
