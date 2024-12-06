import { searchFilters } from '../consts'
import { NavLink } from 'react-router'
import { cn } from '../utils'

export const SearchFilters = () => {
  return (
    <div className="flex items-center gap-2">
      {searchFilters.map((item) => (
        <NavLink
          key={item.path}
          to={`/search${item.path}`}
          className={({ isActive }) => {
            return cn(
              'whitespace-nowrap rounded-md bg-neutral-800 p-2 leading-none',
              isActive && 'bg-white font-medium text-black',
              !isActive && 'bg-neutral-800'
            )
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}
