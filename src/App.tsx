import { Navigate, Route, Router } from '@solidjs/router'
import { Song } from './pages/Song'
import { Search } from './pages/Search'
import { SearchInput } from './components/SearchInput/SearchInput'
import { ParentProps } from 'solid-js'

const Layout = ({ children }: ParentProps) => {
  return (
    <div class="h-screen bg-neutral-900 text-white">
      <header class="flex justify-center p-4">
        <div class="basis-1/3">
          <SearchInput />
        </div>
      </header>
      <main class="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {children}
      </main>
    </div>
  )
}

function App() {
  return (
    <Router root={Layout}>
      <Route path="/search">
        <Route path="/:filter" component={Search} />
        <Route component={() => <Navigate href="all" />} />
      </Route>
      <Route path="/song" component={Song} />
    </Router>
  )
}

export default App
