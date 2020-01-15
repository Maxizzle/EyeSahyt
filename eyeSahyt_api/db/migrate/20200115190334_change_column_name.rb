class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :stores, :image, :image_url
  end
end
