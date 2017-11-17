class RemoveColumnsFromAlbums < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :user_id
    remove_column :albums, :genre
  end
end
