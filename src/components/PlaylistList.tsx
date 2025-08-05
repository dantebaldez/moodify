import styled from 'styled-components'
import { motion } from 'framer-motion'
import type { Playlist } from '../data/playlists'

const ListContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 12px;
`

const Card = styled(motion.div)`
  min-width: 180px;
  background: #222;
  color: #eee;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  &:hover {
    box-shadow: 0 4px 12px #9933cc;
  }
`

type PlaylistListProps = {
  playlists: Playlist[]
  onSelect: (playlist: Playlist) => void
}

const cardVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export default function PlaylistList({ playlists, onSelect }: PlaylistListProps) {
  return (
    <ListContainer>
      {playlists.map((p) => (
        <Card
          key={p.id}
          onClick={() => onSelect(p)}
          whileHover="hover"
          whileTap="tap"
          variants={cardVariants}
        >
          <img src={p.coverUrl} alt={`Capa da playlist ${p.title}`} />
          <h4>{p.title}</h4>
        </Card>
      ))}
    </ListContainer>
  )
}
