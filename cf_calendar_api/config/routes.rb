Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "students" => "students#index"
  get "students/:student_id" => "students#show"

  post "events" => "events#create"

  root to: "students#index"
end
