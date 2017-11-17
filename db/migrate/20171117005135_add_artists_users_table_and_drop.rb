class AddArtistsUsersTableAndDrop < ActiveRecord::Migration[5.1]
  def change
    create_table :artists_users, id: false do |t|
      t.integer :user_id
      t.integer :artist_id
    end

    drop_table :users_artists
  end
end
