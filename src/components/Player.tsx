import { IoPlaySkipForward, IoPlaySkipBack } from 'react-icons/io5'
import { PlayButton } from './PlayButton'
import { Link } from 'react-router'

export const Player = () => {
  return (
    <div className="flex min-h-[88px] items-center gap-4 overflow-hidden rounded-xl border border-neutral-800 bg-gray-800 p-3">
      <div className="flex basis-1/5 items-center gap-2">
        <img
          className="h-16 w-16 rounded-md"
          src="https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI=w60-h60-l90-rj"
        />
        <div className="flex flex-col py-2 leading-tight">
          <Link to="/" className="font-medium hover:underline">
            The Weeknd
          </Link>
          <Link
            to="/"
            className="text-neutral-400 transition-colors duration-300 hover:text-white"
          >
            Album name
          </Link>
        </div>
      </div>
      <div className="flex flex-auto items-center justify-center gap-2 text-neutral-400">
        <button className="transition-colors duration-300 hover:text-white">
          <IoPlaySkipBack size="32" />
        </button>
        <PlayButton />
        <button className="transition-colors duration-300 hover:text-white">
          <IoPlaySkipForward size="32" />
        </button>
      </div>
      <div className="basis-1/5">buttons</div>
    </div>
  )
}
