class Api::SearchesController < ApplicationController
  def index
    ## code written by [mincer_ray]: https://github.com/mincer-ray/grandcamp/blob/master/app/controllers/api/searches_controller.rb
    query = search_params[:query].downcase
    artists = Artist.where("LOWER(name) ~ ?", query)
    albums = Album.where("LOWER(title) ~ ?", query)
    tracks = Track.where("LOWER(title) ~ ?", query)
    @results = {}
    counter = 1;

    artists.each do |artist|
      @results[counter] = {}
      @results[counter][:type] = "Artist"
      @results[counter][:artist_id] = artist.id
      @results[counter][:name] = artist.name
      @results[counter][:image] = artist.image.url
      counter += 1
    end
    
    albums.each do |album|
      @results[counter] = {}
      @results[counter][:type] = "Album"
      @results[counter][:album_id] = album.id
      @results[counter][:artist_id] = album.artist.id
      @results[counter][:name] = album.title
      @results[counter][:artist] = album.artist.name
      @results[counter][:image] = album.image.url
      counter += 1
    end

    tracks.each do |track|
      @results[counter] = {}
      @results[counter][:type] = "Track"
      @results[counter][:album] = track.album.title
      @results[counter][:artist_id] = track.album.artist.id
      @results[counter][:name] = track.title
      @results[counter][:artist] = track.album.artist.name
      @results[counter][:image] = track.album.image.url
      counter += 1
    end

    if @results.keys.length > 0
      render "api/searches/index"
    else
      render json: ["nothing found"], status: 200
    end
  end

  def show
    @featured_artists = Artist.order("RANDOM()").first(5)
    
    render "api/searches/featured"
  end
  
  private

  def search_params
    params.require(:search).permit(:query, :id)
  end
end
