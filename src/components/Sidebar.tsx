import { Link } from 'react-router'
import { IoIosHeart, IoIosAlbums, IoMdPerson } from 'react-icons/io'
import { cn } from '../utils'
import { ImperativePanelHandle } from 'react-resizable-panels'

const sidebarItems = [
  {
    label: 'Liked songs',
    icon: IoIosHeart,
    path: 'liked'
  },
  {
    label: 'Playlists',
    icon: IoIosAlbums,
    path: 'playlists'
  },
  {
    label: 'Albums',
    icon: IoIosAlbums,
    path: 'albums'
  },
  {
    label: 'Artists',
    icon: IoMdPerson,
    path: 'artists'
  }
]

export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <aside
      className={cn(
        'z-10 flex h-full w-full flex-col bg-neutral-900 py-4',
        isCollapsed && 'items-center px-1',
        !isCollapsed && 'px-4'
      )}
    >
      <Link
        to="/"
        className="mb-4 inline-block text-4xl font-medium text-white"
      >
        {isCollapsed ? 'Sx' : 'Soundmix'}
      </Link>
      <nav className="flex flex-col gap-1">
        {sidebarItems.map(({ label, path, icon: Icon }) => (
          <Link
            key={path}
            to="/"
            className="flex items-center gap-4 rounded-md px-4 py-3 text-neutral-400 transition-colors duration-300 hover:bg-neutral-800 hover:text-white"
          >
            <Icon size={24} />
            {!isCollapsed && (
              <span className="text-lg font-medium">{label}</span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
