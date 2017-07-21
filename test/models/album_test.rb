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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
