import { useState } from 'react'
import styled from 'styled-components'
import MoodSelection from '../components/MoodSelection'
import PlaylistList from '../components/PlaylistList'
import type { Playlist } from '../data/playlists'
import { playlists as allPlaylists } from '../data/playlists'

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const Sidebar = styled.aside`
  width: 30%;
  background: linear-gradient(135deg, #9933cc, #66cc99);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  text-align: left;
  overflow-y: auto;
  box-sizing: border-box;
`

const SidebarContent = styled.div`
  /* só para agrupar title + text */
`

const Content = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #121212;
  padding: 2rem;
  color: #f2f2f2;
`

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<'animado' | 'relax' | 'focus'>('animado')
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null)

  const filteredPlaylists = allPlaylists.filter(p => p.mood === selectedMood)

  return (
    <PageContainer>
      <Sidebar>
        <SidebarContent>
          <h1>Moodify</h1>
          <p>
            Encontre a trilha sonora perfeita para seu humor ou atividade.<br /><br />
            Desenvolvido por Dante com carinho e a companhia do Mimin 🐶
          </p>
        </SidebarContent>
      </Sidebar>
      <Content>
        <MoodSelection
          selectedMood={selectedMood}
          onSelectMood={(m: 'animado' | 'relax' | 'focus') => {
            setSelectedMood(m)
            setSelectedPlaylist(null)
          }}
        />
        <PlaylistList playlists={filteredPlaylists} onSelect={setSelectedPlaylist} />
      </Content>
    </PageContainer>
  )
}
