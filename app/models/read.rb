# == Schema Information
#
# Table name: reads
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  book_id    :bigint           not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Read < ApplicationRecord

    belongs_to :reader, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :book,
        primary_key: :id,
        foreign_key: :book_id,
        class_name: :Book
    
end
