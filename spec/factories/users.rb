FactoryBot.define do
  factory :user do
    email { "MyString" }
    username { "MyString" }
    first_name { "MyString" }
    last_name { "MyString" }
    password { "" }
    session_token { "MyString" }
  end
end
