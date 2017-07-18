class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.string :username, null: false
      t.string :band, null: false
      t.text :bio
      t.string :location
      t.string :banner_url
      t.string :background_img_url
    end

    add_index :users, :band

  end
end
