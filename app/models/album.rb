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

class Album < ApplicationRecord
  validates :title, :date, presence: true
  belongs_to :user
  
  has_attached_file :image, default_url: "default_album.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :set_default_date

  def set_default_date
    self.date ||= Date.today
  end

end
