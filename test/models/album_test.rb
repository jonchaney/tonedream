# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  date               :date             not null
#  genre              :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
