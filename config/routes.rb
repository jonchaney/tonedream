Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :albums, only: [:create, :destroy, :show, :update, :index]
    resources :tracks, only: [:create, :destroy, :show, :update, :index]   
  end


  root "static_pages#root"

end
