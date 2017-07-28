# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  user_id            :integer
#  album_id           :integer
#  title              :string
#  track_num          :integer
#  duration           :integer
#  download           :boolean
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
