class Api::AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def index
    @artist = Artist.find_by(id: params[:artist_id])
    @albums = @artist.albums
    render :index
  end

  def select_albums
    @artist = Artist.find_by(id: params[:artist_id])
    @albums = @artist.albums
    render :index
  end

  def update
    artist = current_user.artists.find_by_id(params[:artist_id])
    if artist
      @album = artist.albums.find_by_id(params[:album_id])
    else
      @album = false
    end 
    
    if @album
      if @album.update_attributes(album_params)
        render :show
      else
       render json: @album.errors.full_messages, status: 422
      end
    else
      render json: ['error'], status: 404
    end
  end

  def destroy
    artist = current_user.artists.find_by_id(params[:artist_id])
    if artist
      @album = artist.albums.find_by_id(params[:album_id])
    else
      @album = false
    end 
    
    if @album
      @album.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :date, :artist_id, :image)
  end
end
