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
require 'rails_helper'

RSpec.describe Book, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
