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

class Track < ApplicationRecord
  validates :title, :track_num, :download, :album_id, presence: true

  belongs_to :album
  has_one :user,
    through: :album,
    class_name: :User

  has_attached_file :audio
  validates_attachment_content_type :audio,
  :content_type => [
    'audio/mpeg',
    'audio/x-mpeg',
    'audio/mp3',
    'audio/x-mp3',
    'audio/mpeg3',
    'audio/x-mpeg3',
    'audio/mpg',
    'audio/x-mpg',
    'audio/x-mpegaudio',
    'audio/mp4',
    'audio/x-mp4',
    'audio/x-mp4audio'
  ]
  
end
