import { For } from 'solid-js'
import { SearchInput } from '../components/SearchInput/SearchInput'
import { SongCard } from '../components/SongCard'
import { SearchFilters } from '../components/SearchFilters'
import { ArtistCard } from '../components/ArtistCard'
import { AlbumCard } from '../components/AlbumCard'
import { A } from '@solidjs/router'

const searchResults = [
  {
    category: 'Songs',
    resultType: 'song',
    title: 'Blinding Lights',
    album: {
      name: 'Blinding Lights',
      id: 'MPREb_4U7yfKKFZLv'
    },
    inLibrary: false,
    feedbackTokens: {
      add: null,
      remove: null
    },
    videoId: 'J7p4bzqLvCw',
    videoType: 'MUSIC_VIDEO_TYPE_ATV',
    duration: '3:22',
    year: null,
    artists: [
      {
        name: 'The Weeknd',
        id: 'UClYV6hHlupm_S_ObS1W-DYw'
      }
    ],
    duration_seconds: 202,
    isExplicit: false,
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w60-h60-l90-rj',
        width: 60,
        height: 60
      },
      {
        url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w120-h120-l90-rj',
        width: 120,
        height: 120
      }
    ]
  },
  {
    category: 'Songs',
    resultType: 'song',
    title: 'Blinding Lights',
    album: {
      name: 'Blinding Lights',
      id: 'MPREb_4U7yfKKFZLv'
    },
    inLibrary: false,
    feedbackTokens: {
      add: null,
      remove: null
    },
    videoId: 'J7p4bzqLvCw',
    videoType: 'MUSIC_VIDEO_TYPE_ATV',
    duration: '3:22',
    year: null,
    artists: [
      {
        name: 'The Weeknd',
        id: 'UClYV6hHlupm_S_ObS1W-DYw'
      }
    ],
    duration_seconds: 202,
    isExplicit: false,
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w60-h60-l90-rj',
        width: 60,
        height: 60
      },
      {
        url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w120-h120-l90-rj',
        width: 120,
        height: 120
      }
    ]
  },
  {
    category: 'Songs',
    resultType: 'song',
    title: 'Blinding Lights',
    album: {
      name: 'Blinding Lights',
      id: 'MPREb_4U7yfKKFZLv'
    },
    inLibrary: false,
    feedbackTokens: {
      add: null,
      remove: null
    },
    videoId: 'J7p4bzqLvCw',
    videoType: 'MUSIC_VIDEO_TYPE_ATV',
    duration: '3:22',
    year: null,
    artists: [
      {
        name: 'The Weeknd',
        id: 'UClYV6hHlupm_S_ObS1W-DYw'
      }
    ],
    duration_seconds: 202,
    isExplicit: false,
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w60-h60-l90-rj',
        width: 60,
        height: 60
      },
      {
        url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w120-h120-l90-rj',
        width: 120,
        height: 120
      }
    ]
  }
]

const topResult = {
  category: 'Top result',
  resultType: 'video',
  videoId: 'vU05Eksc_iM',
  title: 'Wonderwall',
  artists: [
    {
      name: 'Oasis',
      id: 'UCmMUZbaYdNH0bEd1PAlAqsA'
    }
  ],
  views: '1.4M',
  videoType: 'MUSIC_VIDEO_TYPE_OMV',
  duration: '4:38',
  duration_seconds: 278,
  thumbnails: [
    {
      url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w60-h60-l90-rj',
      width: 60,
      height: 60
    },
    {
      url: 'https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w120-h120-l90-rj',
      width: 120,
      height: 120
    }
  ]
}

const artist = {
  category: 'Top result',
  resultType: 'artist',
  subscribers: '36.6M',
  artists: [
    {
      name: 'The Weeknd',
      id: 'UClYV6hHlupm_S_ObS1W-DYw'
    }
  ],
  thumbnails: [
    {
      url: 'https://lh3.googleusercontent.com/U-SAmNOu4TynE818gLCfKsuHZ0U5YNEtO9mrjSI9WCCKERs98LzrCal5kajBBTQNwdcisoB2Bn-pHp4=w60-h60-p-l90-rj',
      width: 60,
      height: 60
    },
    {
      url: 'https://lh3.googleusercontent.com/U-SAmNOu4TynE818gLCfKsuHZ0U5YNEtO9mrjSI9WCCKERs98LzrCal5kajBBTQNwdcisoB2Bn-pHp4=w120-h120-p-l90-rj',
      width: 120,
      height: 120
    }
  ]
}

const album = {
  category: null,
  resultType: 'album',
  title: 'The Highlights',
  type: 'Album',
  playlistId: 'OLAK5uy_kV50TS1vNk_sh6koJHk0ZprW3F1qOokug',
  duration: null,
  year: '2021',
  artists: [
    {
      name: 'The Weeknd',
      id: 'UClYV6hHlupm_S_ObS1W-DYw'
    }
  ],
  browseId: 'MPREb_8xvQsQro2af',
  isExplicit: true,
  thumbnails: [
    {
      url: 'https://lh3.googleusercontent.com/xLHFXJ73tMze3T13ju7mjrBv_njAZYIM7G0WHJjqpTvXQBwM_zUDrdVlVjXkmg5CH2kx2LQLNRghNklgYg=w60-h60-l90-rj',
      width: 60,
      height: 60
    },
    {
      url: 'https://lh3.googleusercontent.com/xLHFXJ73tMze3T13ju7mjrBv_njAZYIM7G0WHJjqpTvXQBwM_zUDrdVlVjXkmg5CH2kx2LQLNRghNklgYg=w120-h120-l90-rj',
      width: 120,
      height: 120
    },
    {
      url: 'https://lh3.googleusercontent.com/xLHFXJ73tMze3T13ju7mjrBv_njAZYIM7G0WHJjqpTvXQBwM_zUDrdVlVjXkmg5CH2kx2LQLNRghNklgYg=w226-h226-l90-rj',
      width: 226,
      height: 226
    },
    {
      url: 'https://lh3.googleusercontent.com/xLHFXJ73tMze3T13ju7mjrBv_njAZYIM7G0WHJjqpTvXQBwM_zUDrdVlVjXkmg5CH2kx2LQLNRghNklgYg=w544-h544-l90-rj',
      width: 544,
      height: 544
    }
  ]
}

export const Search = () => {
  return (
    <>
      <SearchFilters />
      <div class="flex gap-2">
        <div class="flex-auto">
          <SongCard
            id={topResult.videoId}
            title={topResult.title}
            thumbnails={topResult.thumbnails}
            artists={topResult.artists}
            size="lg"
          />
        </div>
        <div class="flex-auto">
          <For each={searchResults}>
            {(item) => (
              <SongCard
                id={item.videoId}
                title={item.title}
                inLibrary={item.inLibrary}
                duration={item.duration}
                thumbnails={item.thumbnails}
                artists={item.artists}
                size="sm"
              />
            )}
          </For>
          <A
            href="/search/songs"
            class="pl-2 text-neutral-300 underline underline-offset-2"
          >
            More songs
          </A>
        </div>
      </div>
      <SongCard
        id={topResult.videoId}
        title={topResult.title}
        thumbnails={topResult.thumbnails}
        artists={topResult.artists}
        size="md"
      />
      <AlbumCard
        title={album.title}
        thumbnail={album.thumbnails[1]}
        artists={album.artists}
        year={album.year}
      />
      <ArtistCard
        id={artist.artists[0].id}
        name={artist.artists[0].name}
        subscribers={artist.subscribers}
        thumbnail={artist.thumbnails[1]}
      />
    </>
  )
}
