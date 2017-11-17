class AddJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :users_artists, id: false do |t|
      t.integer :user_id
      t.integer :artist_id
    end
  end
end
