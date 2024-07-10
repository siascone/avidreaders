# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  user_id    :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Rating < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :book,
        foreign_key: :book_id,
        class_name: :Book
end
