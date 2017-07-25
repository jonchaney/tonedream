# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  password_digest    :string           not null
#  session_token      :string           not null
#  username           :string           not null
#  band               :string
#  bio                :text
#  location           :string
#  banner_url         :string
#  background_img_url :string
#  email              :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true, presence: true
  validates :password, length: { minimum: 6, allow_nil: true,
                                 too_short: "must have length 6" }

  attr_reader :password

  after_initialize :ensure_session_token
  has_many :albums
  has_many :tracks

  has_attached_file :image, default_url: "default_profile_pic.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end

end
