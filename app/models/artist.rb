class Artist < ApplicationRecord
  validates :name, :bio, :location, presence: true
  has_many :albums
  has_and_belongs_to_many :users
end
