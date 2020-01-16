class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :image
      t.string :address
      t.integer :number

      t.timestamps
    end
  end
end
