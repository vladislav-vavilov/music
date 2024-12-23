import { Link } from 'react-router'
import { artist, thumbnail } from '../types'

interface AlbumCardProps {
  title: string
  thumbnail: thumbnail
  artists: artist[]
  year: string
}

export const AlbumCard = ({
  title,
  thumbnail,
  artists,
  year
}: AlbumCardProps) => {
  return (
    <Link to="/" className="group relative m-3 w-max">
      <div className="relative">
        <img className="relative z-20 rounded-md" src={thumbnail.url} />
        <div className="absolute left-0 top-0 z-10 h-full w-full -translate-x-1 -translate-y-1 rounded-md border border-neutral-900 bg-neutral-600/80 transition-transform duration-300 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5" />
        <div className="absolute left-0 top-0 h-full w-full -translate-x-2 -translate-y-2 rounded-md bg-neutral-600/50 transition-transform duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3" />
      </div>
      <div className="absolute left-0 top-0 z-30 flex h-full w-full items-end overflow-hidden rounded-md">
        <div className="flex h-full w-full translate-y-full flex-col justify-between gap-4 bg-black/50 p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="overflow-hidden text-ellipsis font-medium leading-none">
            {title}
          </h3>
          <div className="flex flex-col text-sm leading-none">
            <object>
              <Link
                to={`/artists/${artists[0].id}`}
                className="hover:underline"
              >
                {artists[0].name}
              </Link>
            </object>
            <span className="text-neutral-300">{year}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
