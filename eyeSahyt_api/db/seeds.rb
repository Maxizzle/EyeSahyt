# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Store.create([
    {name: 'optical shop', image: 'https://www.coroflot.com/yogeshtripathi/Optical-Shops-Retails' , address:' 923 broadway new york NY 10010', number: 212-222-1212 },
    {name: 'optical boutique', image: 'https://www.indiamart.com/proddetail/optical-showroom-solution-3669944891.html' , address: '808 5th ave new york NY 10010', number:212-347-1631 },
    {name: 'optical store', image: 'https://www.coroflot.com/yogeshtripathi/Optical-Shops-Retails' , address: '347 8th ave new york NY 10020', number:212-631-1516 },

])

Product.create([
    {image: 'https://www.stepanistyle.com/tom-ford-butterfly-eyeglasses-tf5272-005-size-53mm-rose-gold-black-ft5272/' , brand: 'Tom Ford', store_id:1}
])

p 'seeded'