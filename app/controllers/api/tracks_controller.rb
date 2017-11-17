# == Schema Information
#
# Table name: tracks
#
#  id        :integer          not null, primary key
#  user_id   :integer
#  album_id  :integer
#  title     :string
#  track_num :integer
#  duration  :integer
#  download  :boolean
#

class Api::TracksController < ApplicationController
  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def index
    @tracks = Track.all
    render :index
  end

  def update
    @track = Track.find(params[:id])
    if @track && @track.update_attributes(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])

    if @track.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private

  def track_params
    params.require(:track).permit(:duration, :title, :download, :album_id, :track_num, :audio)
  end
end
