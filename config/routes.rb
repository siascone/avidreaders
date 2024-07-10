Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


    namespace :api, defaults: { format: :json } do
        resources :users, only: [:index, :create]
        resources :books, only: [:index, :show]
        resources :authors, only: [:show]
        resource :session, only: [:show, :create, :destroy]
        resources :reads, only: [:index, :show, :create, :update, :destroy]
        resources :ratings, only: [:create, :update, :destroy]
    end

    get '*path', to: "static_pages#frontend_index"

end
