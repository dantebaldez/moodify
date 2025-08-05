// src/components/MoodSelection.tsx
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f2f2f2; /* texto claro */
`

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`

const OptionButton = styled(motion.button)`
  background: #262626;               /* botão escuro */
  color: #f2f2f2;                    /* texto claro */
  border: 1px solid #333;            /* borda sutil */
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: transform 0.2s ease, background 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: #333;               /* hover um pouquinho mais claro */
  }
`

const moods = ['Feliz', 'Triste', 'Ansioso', 'Animado']
const activities = ['Quero dormir', 'Quero dançar', 'Quero estudar', 'Quero relaxar']

export default function MoodSelection() {
  const navigate = useNavigate()

  function handleSelect(option: string) {
    navigate(`/playlists?mood=${encodeURIComponent(option)}`)
  }

  return (
    <Wrapper>
      <Section>
        <SectionTitle>Como você está se sentindo?</SectionTitle>
        <OptionsGrid>
          {moods.map((mood) => (
            <OptionButton
              key={mood}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(mood.toLowerCase())}
            >
              {mood}
            </OptionButton>
          ))}
        </OptionsGrid>
      </Section>

      <Section>
        <SectionTitle>O que você quer fazer?</SectionTitle>
        <OptionsGrid>
          {activities.map((activity) => (
            <OptionButton
              key={activity}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(activity.toLowerCase())}
            >
              {activity}
            </OptionButton>
          ))}
        </OptionsGrid>
      </Section>
    </Wrapper>
  )
}
