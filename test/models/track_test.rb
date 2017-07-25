# == Schema Information
#
# Table name: tracks
#
#  id        :integer          not null, primary key
#  user_id   :integer
#  album_id  :integer
#  title     :string
#  track_num :integer
#  duration  :integer
#  download  :boolean
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
