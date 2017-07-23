# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all

date = Date.new
guest = User.create!(username: "guest", band: "Hazel's Wart", password: "password", location: "San Francisco", bio: "rock and roll band" email: "drowninhoney@gmail.com")
Album.create!(title: 'Does A Secret Speak', date: date, user_id: guest.id)
Album.create!(title: 'Regretful Dependencies', date: date, user_id: guest.id)
Album.create!(title: 'Together We Didn\'t', date: date, user_id: guest.id)
Album.create!(title: 'Does A Secret Speak', date: date, user_id: guest.id)
Album.create!(title: 'Regretful Dependencies', date: date, user_id: guest.id)
Album.create!(title: 'Together We Didn\'t', date: date, user_id: guest.id)

