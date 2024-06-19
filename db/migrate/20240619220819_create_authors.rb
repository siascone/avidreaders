class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.text :bio, null: false

      t.timestamps
    end

    add_index :authors, :first_name
    add_index :authors, :last_name
  end
end
