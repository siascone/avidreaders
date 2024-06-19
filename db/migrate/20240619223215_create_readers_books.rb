class CreateReadersBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :reads do |t|
      t.bigint :user_id, null: false
      t.bigint :book_id, null: false
      t.string :status, null: false

      t.timestamps
    end
    add_index :reads, [:book_id, :user_id], unique: true
  end
end
