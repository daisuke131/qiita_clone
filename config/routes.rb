Rails.application.routes.draw do
  root "home#index"
  namespace :api, { format: "json" } do
    namespace :v1 do
      resources :articles
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: "api/v1/auth/registrations",
      }
    end
  end
end
