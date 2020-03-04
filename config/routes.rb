Rails.application.routes.draw do
  # get 'pages/index'
  root 'pages#index'
  get 'products', to: 'products#index' 
  get 'products/get_prod', to: 'products#get_prod'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
