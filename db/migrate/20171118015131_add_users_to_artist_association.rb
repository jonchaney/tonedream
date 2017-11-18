class AddUsersToArtistAssociation < ActiveRecord::Migration[5.1]
  def change
    create_table :users_artists, id: false do |t|
      t.integer :artist_id
      t.integer :user_id
    end
  end
end
