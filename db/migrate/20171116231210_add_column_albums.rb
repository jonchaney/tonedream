class AddColumnAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :artist_id, :integer
  end
end
