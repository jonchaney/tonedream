# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all


# create user
u = User.create!(username: "jonathan", password: "password", email:"jonchaney@gmail.com")

# create artist
# slow_crawl = Artist.create!(name: "Slow Crawl", location: "San Francisco", bio: "post punk")
# slow_crawl.image = File.open('app/assets/images/slowcrawl.png')
# slow_crawl.save!
# swayed = Artist.create!(name: "Swayed", location: "San Francisco", bio: "dreampop")
# swayed.image = File.open('app/assets/images/swayed.png')
# swayed.save!

# # add artist to user
# u.artists << slow_crawl
# u.save!
# u.artists << swayed
# u.save!

# date = Date.new

# create album
# a = Album.create!(title: "Satan's Gulch", date: date, artist_id: slow_crawl.id)
# a.image = File.open('app/assets/images/satans_gulch.png')
# a.save!

# t = Track.create!(title: "Lost Coast", duration: 200,track_num: 1, download: true, album_id: a.id)
# t1 = Track.create!(title: "Shrubs and Trees", duration: 200, track_num: 2, download: true, album_id: a.id)
# t2 = Track.create!(title: "Reptile", duration: 200, track_num: 3, download: true, album_id: a.id)
# t3 = Track.create!(title: "Fadeaway", duration: 200, track_num: 4, download: true, album_id: a.id)
# t4 = Track.create!(title: "Jam", duration: 200, track_num: 5, download: true, album_id: a.id)

# t.audio = File.open('app/assets/audio/LostCoast.mp3')
# t.save!
# t1.audio = File.open('app/assets/audio/ShrubsandTrees.mp3')
# t1.save!
# t2.audio = File.open('app/assets/audio/Reptile.mp3')
# t2.save!
# t3.audio = File.open('app/assets/audio/Fadeaway.mp3')
# t3.save!
# t4.audio = File.open('app/assets/audio/Jam.mp3')
# t4.save!

# u = User.create!(username: "hazelswart", password: "password", email:"drowninhoney@gmail.com", band: "Hazel's Wart", location: "San Francisco", bio: "rock n roll band")
# a1 = Album.create!(title: 'Does A Secret Speak', date: date, user_id: u.id)
# a2 = Album.create!(title: 'Regretful Dependencies', date: date, user_id: u.id)
# a3 = Album.create!(title: 'Together We Didn\'t', date: date, user_id: u.id)
# a4 = Album.create!(title: 'Does A Secret Speak', date: date, user_id: u.id)
# a5 = Album.create!(title: 'Regretful Dependencies', date: date, user_id: u.id)
# a6 = Album.create!(title: 'Together We Didn\'t', date: date, user_id: u.id)

# a1.image = File.open('app/assets/images/does_a_secret_speak.jpg')
# a1.save!
# a2.image = File.open('app/assets/images/regretful_dependencies.jpg')
# a2.save!
# a3.image = File.open("app/assets/images/together_we_didn't.jpg")
# a3.save!
# a4.image = File.open('app/assets/images/does_a_secret_speak.jpg')
# a4.save!
# a5.image = File.open('app/assets/images/regretful_dependencies.jpg')
# a5.save!
# a6.image = File.open("app/assets/images/together_we_didn't.jpg")
# a6.save!

# u1 = User.create!(username: "funinthesun", password: "password", email:"demail", band: "Fun In The Sun", location: "Los Angeles", bio: "We are a fun band!")
# a1 = Album.create!(title: "Falling In Love", date: date, user_id: u1.id)
# a2 = Album.create!(title: 'You Give, You Take', date: date, user_id: u1.id)
# u1.image = File.open('app/assets/audio/fun_in_the_sun/14413.jpg')
# u1.save!

# t = Track.create!(title: "i love you more than that", track_num: 1, download: true, album_id: a1.id, user_id: u1.id)
# t1 = Track.create!(title: "give me another chance", track_num: 1, download: true, album_id: a1.id, user_id: u1.id)
# t2 = Track.create!(title: "love and death", track_num: 1, download: true, album_id: a1.id, user_id: u1.id)
# t3 = Track.create!(title: "invertigo", track_num: 1, download: true, album_id: a1.id, user_id: u1.id)
# t4 = Track.create!(title: "university blues", track_num: 1, download: true, album_id: a1.id, user_id: u1.id)
# t5 = Track.create!(title: "hype my love", track_num: 1, download: true, album_id: a1.id, user_id: u1.id)

# t.audio = File.open('app/assets/audio/songs/3.mp3')
# t.save!
# t1.audio = File.open('app/assets/audio/songs/4.mp3')
# t1.save!
# t2.audio = File.open('app/assets/audio/songs/23e.mp3')
# t2.save!
# t3.audio = File.open('app/assets/audio/songs/32.mp3')
# t3.save!
# t4.audio = File.open('app/assets/audio/songs/2030.flac')
# t4.save!
# t5.audio = File.open('app/assets/audio/songs/12332.mp3')
# t5.save!

# u2 = User.create!(username: "jtevesobs", password: "password", email:"email", band: "Jteve Sobs", location: "Cupertino", bio: "rock n roll computer music")
# a3 = Album.create!(title: "UNIX/LINUX", date: date, user_id: u2.id)
# a4 = Album.create!(title: 'COMPUTERman', date: date, user_id: u2.id)
# u2.image = File.open('app/assets/audio/JteveSobs/PICOL_Computer.svg.png')
# u2.save!

# t12 = Track.create!(title: "fox con", track_num: 1, download: true, album_id: a3.id, user_id: u2.id)
# t7 = Track.create!(title: "UNIX4ever", track_num: 1, download: true, album_id: a3.id, user_id: u2.id)
# t8 = Track.create!(title: "pdf machine", track_num: 1, download: true, album_id: a3.id, user_id: u2.id)
# t9 = Track.create!(title: "Appel", track_num: 1, download: true, album_id: a4.id, user_id: u2.id)
# t10 = Track.create!(title: "Supertino", track_num: 1, download: true, album_id: a4.id, user_id: u2.id)
# t11 = Track.create!(title: "Ringo Starr", track_num: 1, download: true, album_id: a4.id, user_id: u2.id)

# t12.audio = File.open('app/assets/audio/songs/3.mp3')
# t12.save!
# t7.audio = File.open('app/assets/audio/songs/4.mp3')
# t7.save!
# t8.audio = File.open('app/assets/audio/songs/23e.mp3')
# t8.save!
# t9.audio = File.open('app/assets/audio/songs/32.mp3')
# t9.save!
# t10.audio = File.open('app/assets/audio/songs/2030.flac')
# t10.save!


# u3 = User.create!(username: "lovelykids", password: "password", email:"email1", band: "The Lovely Kids", location: "Outer Space", bio: "sappy love songs from the heart of darkness")
# a5 = Album.create!(title: 'The Day, The Year', date: date, user_id: u3.id)
# a6 = Album.create!(title: 'We Can Try', date: date, user_id: u3.id)
# u3.image = File.open('app/assets/audio/lovelyKids/Pink_or_Plum_Robot_Face_With_Green_Eyes.png')
# u3.save!

# t12 = Track.create!(title: "fox con", track_num: 1, download: true, album_id: a5.id, user_id: u3.id)
# t7 = Track.create!(title: "UNIX4ever", track_num: 1, download: true, album_id: a5.id, user_id: u3.id)
# t8 = Track.create!(title: "pdf machine", track_num: 1, download: true, album_id: a5.id, user_id: u3.id)
# t9 = Track.create!(title: "Appel", track_num: 1, download: true, album_id: a6.id, user_id: u3.id)
# t10 = Track.create!(title: "Supertino", track_num: 1, download: true, album_id: a6.id, user_id: u3.id)
# t11 = Track.create!(title: "Ringo Starr", track_num: 1, download: true, album_id: a6.id, user_id: u3.id)

# t12.audio = File.open('app/assets/audio/songs/iTerm.flac')
# t12.save!
# t7.audio = File.open('app/assets/audio/songs/hdf.mp3')
# t7.save!
# t8.audio = File.open('app/assets/audio/songs/dfs.mp3')
# t8.save!
# t9.audio = File.open('app/assets/audio/songs/sdfg.flac')
# t9.save!
# t10.audio = File.open('app/assets/audio/songs/tre.mp3')
# t10.save!
# t11.audio = File.open('app/assets/audio/songs/ceqw.mp3')
# t11.save!



# u4 = User.create!(username: "pcoverlords", password: "password", email:"email2", band: "PC Overlords", location: "New York", bio: "ben: guitar, gus: chainsaw, jennifer: drums")
# a7 = Album.create!(title: '2030?', date: date, user_id: u4.id)
# a8 = Album.create!(title: 'swipe left', date: date, user_id: u4.id)
# u4.image = File.open('app/assets/audio/no_sleep/Geometric_series_14_square.svg.png')
# u4.save!

# t13 = Track.create!(title: "fox con", track_num: 1, download: true, album_id: a7.id, user_id: u4.id)
# t14 = Track.create!(title: "UNIX4ever", track_num: 1, download: true, album_id: a7.id, user_id: u4.id)
# t15 = Track.create!(title: "pdf machine", track_num: 1, download: true, album_id: a7.id, user_id: u4.id)
# t16 = Track.create!(title: "Appel", track_num: 1, download: true, album_id: a8.id, user_id: u4.id)
# t17 = Track.create!(title: "Supertino", track_num: 1, download: true, album_id: a8.id, user_id: u4.id)

# t13.audio = File.open('app/assets/audio/songs/iTerm.flac')
# t13.save!
# t14.audio = File.open('app/assets/audio/songs/hdf.mp3')
# t14.save!
# t15.audio = File.open('app/assets/audio/songs/dfs.mp3')
# t15.save!
# t16.audio = File.open('app/assets/audio/songs/sdfg.flac')
# t16.save!
# t17.audio = File.open('app/assets/audio/songs/tre.mp3')
# t17.save!

# u5 = User.create!(username: "ROBOT//HUMAN", password: "password", email:"email3", band: "Robot//Human", location: "The Matrix", bio: "somewhere between the void and self")
# a11 = Album.create!(title: '01010010101', date: date, user_id: u5.id)
# a10 = Album.create!(title: '0xHUD27YD', date: date, user_id: u5.id)
# u5.image = File.open('app/assets/audio/pcOverloads/2000px-Computer_keyboard_German-key-4.svg.png')
# u5.save!

# t18 = Track.create!(title: "between the void and self", track_num: 1, download: true, album_id: a11.id, user_id: u5.id)
# t19 = Track.create!(title: "electric sheeple", track_num: 1, download: true, album_id: a11.id, user_id: u5.id)
# t20 = Track.create!(title: ".gis data trackers", track_num: 1, download: true, album_id: a11.id, user_id: u5.id)
# t21 = Track.create!(title: "strongAI", track_num: 1, download: true, album_id: a10.id, user_id: u5.id)
# t22 = Track.create!(title: "weakAI", track_num: 1, download: true, album_id: a10.id, user_id: u5.id)

# t13.audio = File.open('app/assets/audio/songs/iTerm.flac')
# t13.save!
# t14.audio = File.open('app/assets/audio/songs/hdf.mp3')
# t14.save!
# t15.audio = File.open('app/assets/audio/songs/dfs.mp3')
# t15.save!
# t16.audio = File.open('app/assets/audio/songs/sdfg.flac')
# t16.save!
# t17.audio = File.open('app/assets/audio/songs/tre.mp3')
# t17.save!

# u6 = User.create!(username: "therunarounds", password: "password", email:"email4", band: "The Runarounds", location: "Austin", bio: "post punk band, just headlined SWSW, we did it mom")
# a11 = Album.create!(title: 'run away forever', date: date, user_id: u6.id)
# a13 = Album.create!(title: 'self titled', date: date, user_id: u6.id)
# a14 = Album.create!(title: 'born again', date: date, user_id: u6.id)
# u6.image = File.open('app/assets/audio/robot_human/NYEBall2.jpg')
# u6.save!

# t23 = Track.create!(title: "between the void and self", track_num: 1, download: true, album_id: a11.id, user_id: u6.id)
# t24 = Track.create!(title: "electric sheeple", track_num: 1, download: true, album_id: a11.id, user_id: u6.id)
# t25 = Track.create!(title: ".gis data trackers", track_num: 1, download: true, album_id: a11.id, user_id: u6.id)
# t26 = Track.create!(title: "Cubicle Syndrome", track_num: 1, download: true, album_id: a13.id, user_id: u6.id)
# t27 = Track.create!(title: "Beyond Orion", track_num: 1, download: true, album_id: a14.id, user_id: u6.id)

# t23.audio = File.open('app/assets/audio/songs/iTerm.flac')
# t23.save!
# t24.audio = File.open('app/assets/audio/songs/iamaComputerMan.mp3')
# t24.save!
# t25.audio = File.open('app/assets/audio/songs/dfs.mp3')
# t25.save!
# t26.audio = File.open('app/assets/audio/songs/wer.mp3')
# t26.save!
# t27.audio = File.open('app/assets/audio/songs/unix4ever.flac')
# t27.save!

# u7 = User.create!(username: "theheyheyheys", password: "password", email:"email5", band: "The Hey Hey Heys", location: "Seattle", bio: "noise pop band. post-post-grunge from the cloudy city in the north")
# a15 = Album.create!(title: 'run away forever', date: date, user_id: u7.id)
# a16 = Album.create!(title: 'before i leave ya', date: date, user_id: u7.id)
# a15 = Album.create!(title: 'love and death in a hole in the groun', date: date, user_id: u7.id)
# a16 = Album.create!(title: 'refried beans', date: date, user_id: u7.id)
# u7.image = File.open('app/assets/audio/the_runarounds/Exo_love_me_right.jpg')
# u7.save!

# t31 = Track.create!(title: "between the void and self", track_num: 1, download: true, album_id: a15.id, user_id: u7.id)
# t32 = Track.create!(title: "electric sheeple", track_num: 1, download: true, album_id: a15.id, user_id: u7.id)
# t33 = Track.create!(title: ".gis data trackers", track_num: 1, download: true, album_id: a15.id, user_id: u7.id)
# t34 = Track.create!(title: "Cubicle Syndrome", track_num: 1, download: true, album_id: a16.id, user_id: u7.id)
# t35 = Track.create!(title: "Beyond Orion", track_num: 1, download: true, album_id: a16.id, user_id: u7.id)

# t31.audio = File.open('app/assets/audio/songs/iTerm.flac')
# t31.save!
# t32.audio = File.open('app/assets/audio/songs/iamaComputerMan.mp3')
# t32.save!
# t33.audio = File.open('app/assets/audio/songs/dfs.mp3')
# t33.save!
# t34.audio = File.open('app/assets/audio/songs/wer.mp3')
# t34.save!
# t35.audio = File.open('app/assets/audio/songs/unix4ever.flac')
# t35.save!


# u8 = User.create!(username: "thetabletops", password: "password", email:"email6", band: "No Sleep", location: "Paris", bio: "first european band on tonedream! look out america, we are here to stay.")
# a15 = Album.create!(title: 'run away forever', date: date, user_id: u8.id)
# a16 = Album.create!(title: 'before i leave ya', date: date, user_id: u8.id)
# u8.image = File.open('app/assets/audio/the_runarounds/Exo_love_me_right.jpg')
# u8.save!

# t35 = Track.create!(title: "between the void and self", track_num: 1, download: true, album_id: a15.id, user_id: u8.id)
# t36 = Track.create!(title: "electric sheeple", track_num: 1, download: true, album_id: a15.id, user_id: u8.id)
# t37 = Track.create!(title: ".gis data trackers", track_num: 1, download: true, album_id: a15.id, user_id: u8.id)
# t38 = Track.create!(title: "Cubicle Syndrome", track_num: 1, download: true, album_id: a16.id, user_id: u8.id)
# t39 = Track.create!(title: "Beyond Orion", track_num: 1, download: true, album_id: a16.id, user_id: u8.id)

# t35.audio = File.open('app/assets/audio/songs/iTerm.flac')
# t35.save!
# t36.audio = File.open('app/assets/audio/songs/iamaComputerMan.mp3')
# t36.save!
# t37.audio = File.open('app/assets/audio/songs/dfs.mp3')
# t37.save!
# t38.audio = File.open('app/assets/audio/songs/wer.mp3')
# t38.save!
# t39.audio = File.open('app/assets/audio/songs/unix4ever.flac')
# t39.save!
