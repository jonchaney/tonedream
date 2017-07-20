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
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
