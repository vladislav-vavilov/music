import { For } from 'solid-js'
import { searchFilters } from '../consts'
import { A } from '@solidjs/router'

export const SearchFilters = () => {
  return (
    <div class="flex items-center gap-2 overflow-x-auto">
      <For each={searchFilters}>
        {(item) => (
          <A
            href={`/search${item.path}`}
            activeClass="bg-white text-black font-medium"
            class="whitespace-nowrap rounded-md bg-neutral-800 p-2 leading-none"
          >
            {item.name}
          </A>
        )}
      </For>
    </div>
  )
}
