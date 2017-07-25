# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
User.destroy_all

date = Date.new

u = User.create!(username: "guest", password: "password", email:"drowninhoney@gmail.com", band: "Hazel's Wart", location: "San Francisco", bio: "rock n roll band")

Album.create!(title: 'Does A Secret Speak', date: date, user_id: u.id)
Album.create!(title: 'Regretful Dependencies', date: date, user_id: u.id)
Album.create!(title: 'Together We Didn\'t', date: date, user_id: u.id)
Album.create!(title: 'Does A Secret Speak', date: date, user_id: u.id)
Album.create!(title: 'Regretful Dependencies', date: date, user_id: u.id)
Album.create!(title: 'Together We Didn\'t', date: date, user_id: u.id)
