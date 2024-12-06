import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { artist, thumbnail } from '../types'
import { PlayButton } from './PlayButton'
import { Link } from 'react-router'
import { BlurredBackground } from './BlurredBackground'

type CommonProps = {
  id: string
  title: string
  artists: artist[]
  thumbnails: thumbnail[]
}

type SongCardSmallProps = {
  size: 'sm'
  duration: string
  inLibrary: boolean
  albumName?: string
} & CommonProps

type SongCardMediumProps = {
  size: 'md'
} & CommonProps

type SongCardLargeProps = {
  size: 'lg'
} & CommonProps

type SongCardProps =
  | SongCardSmallProps
  | SongCardMediumProps
  | SongCardLargeProps

export const SongCard = ({ ...props }: SongCardProps) => {
  const sizes = {
    sm: <SongCard.Small {...(props as SongCardSmallProps)} />,
    md: <SongCard.Medium {...(props as SongCardMediumProps)} />,
    lg: <SongCard.Large {...(props as SongCardLargeProps)} />
  }

  return sizes[props.size]
}

SongCard.Small = ({
  id,
  title,
  inLibrary,
  duration,
  thumbnails,
  albumName,
  artists
}: Omit<SongCardSmallProps, 'size'>) => {
  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-md p-2 pr-4 hover:bg-neutral-700/50">
      <div className="flex gap-2">
        <div className="relative">
          <img className="h-12 w-12 rounded-md" src={thumbnails[0].url} />
          <div className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50 opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
            <PlayButton size={34} />
          </div>
        </div>
        <div className="flex flex-col leading-none">
          <Link
            to={`/songs/${id}`}
            className="text-lg text-neutral-200 hover:underline"
          >
            {title}
          </Link>
          <Link
            to={`/artists/${artists[0].id}`}
            className="max-w-max text-sm text-neutral-300 hover:underline"
          >
            {artists[0].name}
          </Link>
        </div>
      </div>
      {albumName && <span className="text-neutral-300">{albumName}</span>}
      <div className="flex items-center gap-6 text-neutral-400">
        <button className="transition-colors duration-300 hover:text-white">
          {inLibrary && <IoIosHeart size="22" />}
          {!inLibrary && <IoIosHeartEmpty size="22" />}
        </button>
        <span>{duration}</span>
      </div>
    </div>
  )
}

SongCard.Medium = ({ id, title, thumbnails, artists }: SongCardMediumProps) => {
  return (
    <div className="group w-max">
      <div className="relative">
        <img className="h-full w-full rounded-md" src={thumbnails[1].url} />
        <PlayButton
          size={42}
          className="invisible absolute bottom-2 right-2 opacity-0 group-hover:visible group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-col">
        <Link
          to={`/songs/${id}`}
          className="overflow-hidden text-ellipsis leading-none hover:underline"
        >
          {title}
        </Link>
        <Link
          to={`/artists/${artists[0].id}`}
          className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
        >
          {artists[0].name}
        </Link>
      </div>
    </div>
  )
}

SongCard.Large = ({ id, title, thumbnails, artists }: SongCardLargeProps) => {
  return (
    <BlurredBackground
      className="group rounded-md"
      imageURI={thumbnails[1].url}
    >
      <div className="flex items-end justify-between gap-4 p-4">
        <div className="flex flex-col">
          <img className="mb-2 h-32 w-32 rounded-md" src={thumbnails[1].url} />
          <Link
            to={`/songs/${id}`}
            className="text-3xl font-medium hover:underline"
          >
            {title}
          </Link>
          <Link
            to={`/artists/${artists[0].id}`}
            className="max-w-max font-medium text-neutral-200 hover:underline"
          >
            {artists[0].name}
          </Link>
        </div>
        <PlayButton className="invisible z-10 opacity-0 group-hover:visible group-hover:opacity-100" />
      </div>
    </BlurredBackground>
  )
}
