class AddDownloadColumnToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :download, :boolean
  end
end
