# == Schema Information
#
# Table name: authors
#
#  id         :bigint           not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  bio        :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :author do
    first_name { "MyString" }
    last_name { "MyString" }
    bio { "MyText" }
  end
end
