Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "students" => "students#index"

  get "students/:id" => "students#show"

  root to: "students#index"
end