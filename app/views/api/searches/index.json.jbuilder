@results.each do |item, result|
  json.set! item do
    json.type result[:type]
    json.artist_id result[:artist_id]
    if result[:type] != "Artist"
      json.album_id result[:album_id]
    end
    json.name result[:name]
    json.image result[:image]
  end
end