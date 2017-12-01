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

class Track < ApplicationRecord
  validates :title, :track_num, :download, :album_id, presence: true
      
  belongs_to :album

  has_one :artist,
    through: :album,
    source: :artist


  # spoofing protection removed -- fix later (validate_media_type: false)
  
  has_attached_file :audio, presence: true, validate_media_type: false



  # , url: ':s3_domain_url', path: '/:class/:attachment/:id_partition/:style/:filename', bucket: 'tonedream'
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/
  
end
