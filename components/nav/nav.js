const menuItems = [
  {
   display: "Inicio",
   url: '/'
  },
  {
    display: "Blog",
    url: '/'
   },
   {
    display: "Sobre mi",
    url: '/'
   }
]

export default function Nav() {
  return (
    <div>
      {menuItems.map(({display, url}) => {
        return (
          <p>Seccion: {display}, URL: {url}</p>
        )
      })}
    </div>
  )
  
}
