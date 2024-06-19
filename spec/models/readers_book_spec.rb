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
require 'rails_helper'

RSpec.describe ReadersBook, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
