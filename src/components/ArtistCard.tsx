import { Link } from 'react-router'
import { thumbnail } from '../types'

interface ArtistCardProps {
  id: string
  name: string
  subscribers: string
  thumbnail: thumbnail
}

export const ArtistCard = ({
  id,
  name,
  subscribers,
  thumbnail
}: ArtistCardProps) => {
  return (
    <Link
      to={`/artists/${id}`}
      className="group relative min-w-32 overflow-hidden rounded-md p-4"
    >
      <div className="relative z-10 flex gap-4">
        <img className="mb-2 h-32 w-32 rounded-full" src={thumbnail.url} />
        <div className="mt-4 flex flex-col gap-2">
          <div>
            <h3 className="text-2xl font-medium group-hover:underline">
              {name}
            </h3>
            <span className="leading-none">{subscribers} subscribers</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log('Subscribe')
            }}
            className="rounded-md bg-white px-2 py-1 font-medium text-black transition-colors duration-200 hover:bg-neutral-200"
          >
            Subscribe
          </button>
        </div>
      </div>
      <img
        className="absolute left-0 top-0 h-full w-full object-cover blur-3xl"
        src={thumbnail.url}
      />
    </Link>
  )
}
