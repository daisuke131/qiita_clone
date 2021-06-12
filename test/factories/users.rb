FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) {|n| "#{n}_" + Faker::Internet.email }
    password { Faker::Internet.password(8) }
    password_confirmation { password }
  end
end
