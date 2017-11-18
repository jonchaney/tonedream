Rails.application.routes.draw do

  get 'searches/index'

  get 'searches/show'

  get 'index/show'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :artists, only: [:create, :destroy, :show, :update, :index]
    resources :albums, only: [:create, :show, :update, :index]
    resources :tracks, only: [:create, :destroy, :show, :update, :index]  
    resources :searches, only: [:index, :show] 
    get '/artist/:artist_id/albums', to: 'albums#select_albums'
    delete 'artists/:artist_id/albums/:album_id', to: 'albums#destroy'
  end
  root "static_pages#root"
end
