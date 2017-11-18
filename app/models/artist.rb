class Artist < ApplicationRecord
  validates :name, :bio, :location, presence: true
  has_many :albums
  has_and_belongs_to_many :users

  has_attached_file :image, default_url: "https://s3-us-west-2.amazonaws.com/tonedream-dev/default_profile_pic.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
