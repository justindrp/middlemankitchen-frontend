// src/app/menu/page.tsx
import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

interface MenuItem {
  _id: string
  name: string
  description?: string
  image?: any // can type this properly later
  priceRegular?: number
  priceSmall?: number
  isSignature?: boolean
  orderLinkGrab?: string
  orderLinkShopee?: string
}

const builder = imageUrlBuilder(client)
function urlFor(source: object) {
  return builder.image(source)
}

// Fetch menu items from Sanity
export default async function MenuPage() {
  const menuItems = await client.fetch(
    `*[_type == "menuItem"] | order(isSignature desc, name asc){
      _id,
      name,
      description,
      image,
      priceRegular,
      priceSmall,
      isSignature,
      orderLinkGrab,
      orderLinkShopee
    }`
  )

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
      <div className="grid gap-8">
        {menuItems.map((item: MenuItem) => (
          <div
            key={item._id}
            className="rounded-xl shadow-md border flex flex-col md:flex-row gap-4 p-4 items-center"
          >
            {item.image && (
              <img
                src={urlFor(item.image).width(300).height(200).fit('crop').url()}
                alt={item.name}
                className="w-[120px] h-[120px] object-cover rounded-lg"
                loading="lazy"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-semibold">
                  {item.name}
                  {item.isSignature && (
                    <span className="ml-2 text-orange-500 font-bold">★</span>
                  )}
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                  Regular: Rp{item.priceRegular?.toLocaleString('id-ID')}
                </span>
                <span className="bg-orange-50 text-orange-500 px-2 py-1 rounded text-xs">
                  Small: Rp{item.priceSmall?.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="flex gap-3">
                {item.orderLinkGrab && (
                  <a
                    href={item.orderLinkGrab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Order via GrabFood
                  </a>
                )}
                {item.orderLinkShopee && (
                  <a
                    href={item.orderLinkShopee}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Order via ShopeeFood
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
