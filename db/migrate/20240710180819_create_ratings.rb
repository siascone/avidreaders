class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :value, null: false
      t.integer :user_id, null: false
      t.integer :book_id, null: false

      t.timestamps
    end
    add_index :ratings, [:book_id, :user_id], unique: true
  end
end
