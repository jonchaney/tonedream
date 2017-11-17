class RemoveColumnsFromUsersTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :band
    remove_column :users, :bio
    remove_column :users, :banner_url
    remove_column :users, :location
    remove_column :users, :background_img_url
  end
end
