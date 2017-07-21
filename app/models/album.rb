# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  date        :date             not null
#  genre       :string
#  artwork_url :string
#

class Album < ApplicationRecord
  validates :title, :date, presence: true

  belongs_to :user

end
