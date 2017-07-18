class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.date :date, null: false
      t.string :genre
      t.string :artwork_url
    end

    add_index :albums, :title
    add_index :albums, :date
  end
end
