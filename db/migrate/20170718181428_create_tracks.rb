class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :title, null: false
      t.integer :track_num, null: false
      t.integer :duration
    end
    add_index :tracks, :title
  end
end
