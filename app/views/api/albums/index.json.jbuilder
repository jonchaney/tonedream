json.array! @albums do |album|
  json.partial! "album", album: album
end

# albums.each do |album|
#   json.set! album.id do
#     json.extract! album,
#       :id,
#       :title,
#       :date,
#       :genre
#   end
# end
