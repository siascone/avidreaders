class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null:false
      t.string :subtitle, null:false
      t.string :author, null:false
      t.text :summary, null:false

      t.timestamps
    end
    add_index :books, :title
  end
end
