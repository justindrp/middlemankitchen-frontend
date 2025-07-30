import { client } from '@/sanity/lib/client'

export default async function TestSanityPage() {
  const menuItems = await client.fetch(`*[_type == "menuItem"][0...1] {name}`)

  return (
    <div>
      <h1>Sanity Connection Test</h1>
      <pre>{JSON.stringify(menuItems, null, 2)}</pre>
    </div>
  )
}
