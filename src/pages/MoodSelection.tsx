import styled from 'styled-components'

type Mood = 'animado' | 'relax' | 'focus'

type Props = {
  selectedMood: Mood
  onSelectMood: (mood: Mood) => void
}

const Container = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 2rem;
`

const Button = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  background: ${({ selected }) => (selected ? '#9933cc' : '#333')};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ selected }) => (selected ? '#aa44dd' : '#555')};
  }
`

export default function MoodSelection({ selectedMood, onSelectMood }: Props) {
  const moods: Mood[] = ['animado', 'relax', 'focus']

  return (
    <Container>
      {moods.map((m) => (
        <Button
          key={m}
          selected={m === selectedMood}
          onClick={() => onSelectMood(m)}
        >
          {m}
        </Button>
      ))}
    </Container>
  )
}
