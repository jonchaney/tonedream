# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170723013710) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.date "date", null: false
    t.string "genre"
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["date"], name: "index_albums_on_date"
    t.index ["title"], name: "index_albums_on_title"
  end

  create_table "tracks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "album_id"
    t.string "title"
    t.integer "track_num"
    t.integer "duration"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "username", null: false
    t.string "band"
    t.text "bio"
    t.string "location"
    t.string "banner_url"
    t.string "background_img_url"
    t.string "email", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["band"], name: "index_users_on_band"
  end

end
