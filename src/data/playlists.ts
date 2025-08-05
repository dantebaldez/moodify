export interface Track {
  id: string
  title: string
  artist: string
  audioUrl: string
}

export interface Playlist {
  id: string
  title: string
  mood: 'animado' | 'relax' | 'focus'
  coverUrl: string
  externalUrl: string
  tracks?: Track[]
}

export const playlists: Playlist[] = [
  {
    id: '1',
    title: 'Animado para o dia',
    mood: 'animado',
    coverUrl: 'https://placehold.co/200x200/png?text=Animado',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC',
    tracks: [
      {
        id: 't1',
        title: 'Happy Vibes',
        artist: 'DJ Alegria',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
      {
        id: 't2',
        title: 'Dance Now',
        artist: 'Beat Master',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      },
    ],
  },
  {
    id: '2',
    title: 'Relax Total',
    mood: 'relax',
    coverUrl: 'https://placehold.co/200x200/png?text=Relax',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX3PIPIT6lEg5',
    tracks: [
      {
        id: 't3',
        title: 'Calm Waters',
        artist: 'Relaxation Guru',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      },
    ],
  },
  {
    id: '3',
    title: 'Focus na missão',
    mood: 'focus',
    coverUrl: 'https://placehold.co/200x200/png?text=Focus',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ',
    tracks: [
      {
        id: 't4',
        title: 'Coding Beats',
        artist: 'Dev DJ',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      },
    ],
  },
]
