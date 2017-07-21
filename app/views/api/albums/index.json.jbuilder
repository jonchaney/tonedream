@albums.each do |album|
  json.set! album.id do
    json.extract! album,
      :id,
      :title,
      :date,
      :genre,
      :artwork_url
  end
end
