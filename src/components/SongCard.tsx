import { AiFillHeart, AiFillPlayCircle } from 'solid-icons/ai'
import { AiOutlineHeart } from 'solid-icons/ai'
import { artist, thumbnail } from '../types'
import { A } from '@solidjs/router'

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
    <div class="group flex cursor-pointer items-center justify-between rounded-md p-2 pr-4 hover:bg-neutral-700/50">
      <div class="flex gap-2">
        <div class="relative">
          <img class="h-12 w-12 rounded-md" src={thumbnails[0].url} />
          <div class="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
            <button>
              <AiFillPlayCircle size="34" />
            </button>
          </div>
        </div>
        <div class="flex flex-col leading-none">
          <A
            href={`/songs/${id}`}
            class="text-lg text-neutral-200 hover:underline"
          >
            {title}
          </A>
          <A
            href={`/artists/${artists[0].id}`}
            class="max-w-max text-sm text-neutral-300 hover:underline"
          >
            {artists[0].name}
          </A>
        </div>
      </div>
      <span class="text-neutral-300">{albumName}</span>
      <div class="flex items-center gap-6 text-neutral-400">
        <button class="transition-colors duration-300 hover:text-white">
          {inLibrary && <AiFillHeart size="22" />}
          {!inLibrary && <AiOutlineHeart size="22" />}
        </button>
        <span>{duration}</span>
      </div>
    </div>
  )
}

SongCard.Medium = ({ id, title, thumbnails, artists }: SongCardMediumProps) => {
  return (
    <div class="group w-max">
      <button class="relative">
        <img class="h-full w-full rounded-md" src={thumbnails[1].url} />
        <div class="invisible absolute bottom-0 right-0 flex h-full w-full items-end justify-end bg-black/50 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
          <AiFillPlayCircle class="m-2" size="42" />
        </div>
      </button>
      <div class="flex flex-col">
        <A
          href={`/songs/${id}`}
          class="overflow-hidden text-ellipsis leading-none hover:underline"
        >
          {title}
        </A>
        <A
          href={`/artists/${artists[0].id}`}
          class="text-sm text-neutral-300 hover:underline"
        >
          {artists[0].name}
        </A>
      </div>
    </div>
  )
}

SongCard.Large = ({ id, title, thumbnails, artists }: SongCardLargeProps) => {
  return (
    <div class="group relative flex min-w-32 items-end justify-between overflow-hidden rounded-md bg-neutral-800 p-4">
      <div class="relative z-10">
        <img class="mb-2 h-32 w-32 rounded-md" src={thumbnails[1].url} />
        <div class="flex flex-col">
          <A href={`/songs/${id}`} class="text-3xl font-medium hover:underline">
            {title}
          </A>
          <A
            href={`/artists/${artists[0].id}`}
            class="max-w-max font-medium text-neutral-200 hover:underline"
          >
            {artists[0].name}
          </A>
        </div>
      </div>
      <img
        class="absolute left-0 top-0 h-full w-full object-cover blur-3xl"
        src={thumbnails[1].url}
      />
      <button class="invisible relative z-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <AiFillPlayCircle size="52" />
      </button>
    </div>
  )
}
