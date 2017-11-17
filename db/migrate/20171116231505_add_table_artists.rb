class AddTableArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.text :bio
    end
  end
end
