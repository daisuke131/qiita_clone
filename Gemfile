source "https://rubygems.org"
git_source(:github) {|repo| "https://github.com/#{repo}.git" }

ruby "3.0.1"

gem "bootsnap", ">= 1.4.4", require: false
gem "mysql2", "~> 0.5"
gem "puma", "~> 5.0"
gem "rails", "~> 6.1.3", ">= 6.1.3.2"
gem "sass-rails", ">= 6"
gem "turbolinks", "~> 5"
gem "webpacker", "~> 5.0"

gem "active_model_serializers"
gem "devise"
gem "devise_token_auth"
gem "rack-cors"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-byebug"
  gem "pry-doc"
  gem "pry-rails"
end

group :development do
  gem "listen", "~> 3.3"
  gem "pre-commit", require: false
  gem "rack-mini-profiler", "~> 2.0"
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
  gem "spring"
  gem "web-console", ">= 4.1.0"
end

group :test do
  gem "factory_bot_rails"
  gem "faker"
  gem "rexml"
  gem "rspec-rails"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
