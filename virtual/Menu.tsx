import React from 'react'
import { Menu, MenuItem } from 'vtex.menu'
import { menuItems } from './modules/menu'

const MenuVirtual = () => {
  return (
    <Menu>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          type={menuItem.type}
          highlight={menuItem.highlight}
          itemProps={menuItem.itemProps}
          Submenu={menuItem.Submenu}
        />
      ))}
    </Menu>
  )
}

MenuVirtual.displayName = 'menuvirtual'

export default MenuVirtual
