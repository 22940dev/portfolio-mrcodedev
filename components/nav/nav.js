import Link from 'next/link'

const menuItems = [
  {
    id: 0,
    display: "Inicio",
    url: '/'
  },
  {
    id: 1,
    display: "Blog",
    url: '/blog'
  },
  {
    id: 2,
    display: "Sobre mi",
    url: '/sobre-mi'
  }
]

export default function Nav() {
  return (
    <div>
      {menuItems.map(({display, url}, key) => {
        return (
          <Link key={key} href={url}>
            <a>{display}</a>
          </Link>
        )
      })}
    </div>
  )
  
}
