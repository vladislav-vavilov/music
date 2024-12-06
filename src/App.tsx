import { Song } from './pages/Song'
import { Search } from './pages/Search'
import { SearchInput } from './components/SearchInput/SearchInput'
import { Player } from './components/Player'
import { Sidebar } from './components/Sidebar'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  ImperativePanelHandle
} from 'react-resizable-panels'
import { BsArrowsExpandVertical } from 'react-icons/bs'
import { useRef, useState } from 'react'

const Test = () => {
  return (
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize={25}>panel</Panel>
      <PanelResizeHandle>hello</PanelResizeHandle>
      <Panel>panel</Panel>
      <PanelResizeHandle />
      <Panel defaultSize={25}>panel</Panel>
    </PanelGroup>
  )
}

const Layout = () => {
  const ref = useRef<ImperativePanelHandle>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggle = () => {
    const panel = ref.current

    if (panel) {
      isSidebarCollapsed ? panel.expand() : panel.collapse()
      setIsSidebarCollapsed(!isSidebarCollapsed)
    }
  }

  return (
    <PanelGroup direction="horizontal">
      <div className="flex h-full w-full bg-neutral-900 text-white">
        <Panel
          ref={ref}
          defaultSize={20}
          minSize={14}
          maxSize={25}
          collapsible
          collapsedSize={5}
          onCollapse={() => setIsSidebarCollapsed(true)}
          onExpand={() => setIsSidebarCollapsed(false)}
          className={isSidebarCollapsed ? 'min-w-20' : 'min-w-48'}
        >
          <Sidebar isCollapsed={isSidebarCollapsed} />
        </Panel>
        <PanelResizeHandle
          onDoubleClick={() => toggle()}
          hitAreaMargins={{ coarse: 0, fine: 0 }}
          className="relative z-10 -mx-2 h-full px-2 opacity-0 transition-opacity duration-300 hover:opacity-100 active:opacity-100"
        >
          <div className="h-full w-0.5 bg-white">
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2">
              <BsArrowsExpandVertical size={20} className="text-black" />
            </button>
          </div>
        </PanelResizeHandle>
        <Panel defaultSize={80}>
          <div className="mb-4 mr-4 flex h-full flex-auto flex-col gap-4 overflow-hidden">
            <div className="flex flex-auto flex-col overflow-y-auto">
              <header className="z-10 flex justify-center bg-neutral-900 p-4">
                <SearchInput />
              </header>
              <main className="relative flex w-full flex-auto flex-col gap-4 overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                <Outlet />
              </main>
            </div>
            <Player />
          </div>
        </Panel>
      </div>
    </PanelGroup>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/search">
          <Route index element={<Navigate to="/search/all" />} />
          <Route path=":filter" element={<Search />} />
        </Route>
        <Route path="/songs">
          <Route path=":id" element={<Song />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  )
}

export default App
