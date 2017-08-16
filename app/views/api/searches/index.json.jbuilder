@results.each do |item, result|
  json.set! item do
    json.type result[:type]
    json.id result[:id]
    json.name result[:name]
  end
end