# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
User.destroy_all
Track.destroy_all

date = Date.new

u = User.create!(username: "guest", password: "password", email:"drowninhoney@gmail.com", band: "Hazel's Wart", location: "San Francisco", bio: "rock n roll band")
u2 = User.create!(username: "slowcrawl", password: "password", email:"jonchaney@gmail.com", band: "Slow Crawl", location: "San Francisco", bio: "post punk")

a1 = Album.create!(title: 'Does A Secret Speak', date: date, user_id: u.id)
a2 = Album.create!(title: 'Regretful Dependencies', date: date, user_id: u.id)
a3 = Album.create!(title: 'Together We Didn\'t', date: date, user_id: u.id)
a4 = Album.create!(title: 'Does A Secret Speak', date: date, user_id: u.id)
a5 = Album.create!(title: 'Regretful Dependencies', date: date, user_id: u.id)
a6 = Album.create!(title: 'Together We Didn\'t', date: date, user_id: u.id)

a = Album.create!(title: "Satan's Gulch", date: date, user_id: u2.id)
a.image = File.open('app/assets/images/satans_gulch.png')
a.save!

a1.image = File.open('app/assets/images/does_a_secret_speak.jpg')
a1.save!

a2.image = File.open('app/assets/images/regretful_dependencies.jpg')
a2.save!

a3.image = File.open("app/assets/images/together_we_didn't.jpg")
a3.save!

a4.image = File.open('app/assets/images/does_a_secret_speak.jpg')
a4.save!

a5.image = File.open('app/assets/images/regretful_dependencies.jpg')
a5.save!

a6.image = File.open("app/assets/images/together_we_didn't.jpg")
a6.save!

t = Track.create!(title: "Lost Coast", track_num: 1, download: true, album_id: a.id, user_id: u2.id)
t1 = Track.create!(title: "Shrubs and Trees", track_num: 2, download: true, album_id: a.id, user_id: u2.id)
t2 = Track.create!(title: "Reptile", track_num: 3, download: true, album_id: a.id, user_id: u2.id)
t3 = Track.create!(title: "Fadeaway", track_num: 4, download: true, album_id: a.id, user_id: u2.id)
t4 = Track.create!(title: "Jam", track_num: 5, download: true, album_id: a.id, user_id: u2.id)


t.audio = File.open('app/assets/audio/LostCoast.mp3')
t.save!
t1.audio = File.open('app/assets/audio/ShrubsandTrees.mp3')
t1.save!
t2.audio = File.open('app/assets/audio/Reptile.mp3')
t2.save!
t3.audio = File.open('app/assets/audio/Fadeaway.mp3')
t3.save!
t4.audio = File.open('app/assets/audio/Jam.mp3')
t4.save!