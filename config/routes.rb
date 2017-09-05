Rails.application.routes.draw do

  get 'searches/index'

  get 'searches/show'

  get 'index/show'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :albums, only: [:create, :destroy, :show, :update, :index]
    resources :tracks, only: [:create, :destroy, :show, :update, :index]  
    resources :searches, only: [:index, :show] 
    get '/user/:user_id/albums', to: 'albums#select_albums'
  end
  root "static_pages#root"

end
