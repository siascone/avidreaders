# == Schema Information
#
# Table name: books
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  subtitle   :string           not null
#  summary    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :bigint           not null
#  genre      :string           not null
#
class Book < ApplicationRecord

    has_many :reads,
        primary_key: :id,
        foreign_key: :book_id,
        class_name: :Read

    has_many :readers,
        through: :reads,
        source: :reader

    has_many :ratings,
        foreign_key: :book_id,
        class_name: :Rating

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Author
end
