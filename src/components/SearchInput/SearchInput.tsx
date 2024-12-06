import { For } from 'solid-js'

const searchHistory = [
  'search 1',
  'search 2',
  'search 3',
  'search 4',
  'search 5',
  'search 6',
  'search 7',
  'search 8',
  'search 9',
  'search 10'
]

export const SearchInput = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-md bg-neutral-800">
        <input
          className="w-full bg-transparent px-4 py-1.5 outline-none"
          placeholder="Search"
        />
      </div>
      {/*

      <div className="absolute my-2 p-2 w-full rounded-md overflow-hidden bg-neutral-800">
        <ul className="flex flex-col gap-1">
          <For each={searchHistory}>
            {(item) => (
              <li className="text-neutral-300 hover:bg-neutral-700/50 transition-colors duration-300 rounded-md p-2 cursor-pointer">
                {item}
              </li>
            )}
          </For>
        </ul>
      </div>
        */}
    </div>
  )
}
