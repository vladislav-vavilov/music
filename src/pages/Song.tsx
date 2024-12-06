import { Link } from 'react-router'
import { IoIosHeartEmpty } from 'react-icons/io'
import { PlayButton } from '../components/PlayButton'
import { BlurredBackground } from '../components/BlurredBackground'

const song = {
  title: 'Blinding Lights',
  viewCount: 166873905,
  channel: { name: 'The Rare Occasions', id: 'UCgphzjoaBKOlRsstds5xl_w' },
  durationInSeconds: '2:38',
  releaseDate: '2020-09-30',
  thumbnails: [
    {
      url: 'https://lh3.googleusercontent.com/sRlKLg0OYYp2Zu0dBlwlON2qBP2TPKPkfs-T7o_Lb_V0vErapiCFBLlPJHT8UFtmqWUy03vMQAR9RG8B=w544-h544-l90-rj',
      width: 544,
      height: 544
    }
  ]
}

export const Song = () => {
  const formattedViewsNumber = Intl.NumberFormat('en-US', {
    notation: 'compact'
  }).format(song.viewCount)

  return (
    <BlurredBackground
      className="-m-4 h-full flex-auto p-6"
      imageURI={song.thumbnails[0].url}
    >
      <div className="flex gap-6">
        <img className="rounded-md" src={song.thumbnails[0].url} />
        <div className="flex flex-auto flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-4xl font-medium">{song.title}</h1>
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <span>{song.durationInSeconds}</span>
              <div className="mx-1 h-1 w-1 rounded-full bg-neutral-300" />
              <span>{song.releaseDate}</span>
              <div className="mx-1 h-1 w-1 rounded-full bg-neutral-300" />
              <span>{formattedViewsNumber}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PlayButton />
            <button className="text-neutral-300 transition-colors duration-300 hover:text-white">
              <IoIosHeartEmpty size="38" />
            </button>
          </div>
          <hr className="w-full border-neutral-300" />
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="group flex items-center gap-2">
                <img
                  className="h-12 w-12 rounded-full"
                  src={song.thumbnails[0].url}
                />
                <span className="text-lg font-medium group-hover:underline">
                  Daft Punk
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="group flex items-center gap-2">
                <img
                  className="h-12 w-12 rounded-full"
                  src={song.thumbnails[0].url}
                />
                <span className="text-lg font-medium group-hover:underline">
                  Daft Punk
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </BlurredBackground>
  )
}
