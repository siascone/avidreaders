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
class Author < ApplicationRecord

    has_many :books,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Book

    has_many :readers,
        through: :books,
        source: :readers
        
end
