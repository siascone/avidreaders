# == Schema Information
#
# Table name: readers_books
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  book_id    :bigint           not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :readers_book do
    user_id { "" }
    book_id { "" }
    status { "MyString" }
  end
end
