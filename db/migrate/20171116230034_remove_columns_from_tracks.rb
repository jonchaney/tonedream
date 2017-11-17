class RemoveColumnsFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :user_id
  end
end
