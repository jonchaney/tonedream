class RemoveArtworkUrlColumnFromAlbums < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :artwork_url
  end
end
