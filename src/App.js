import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';
import LyricsViewer from './components/LyricsViewer';
import './index.css';

const App = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Song 1' },
    { id: 2, title: 'Song 2' },
  ]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [lyrics, setLyrics] = useState('');

  const handleSearch = (query) => {
    // Логика поиска песен
    setSongs([
      { id: 1, title: 'Song 1' },
      { id: 2, title: 'Song 2' },
    ]);
  };

  const handleSelectSong = (song) => {
    setSelectedSong(song);
    // Логика получения текста песни
    setLyrics(`Lyrics for ${song.title}`);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-1/3">
          <SongList songs={songs} onSelectSong={handleSelectSong} />
        </div>
        <div className="md:w-2/3">
          <MusicPlayer song={selectedSong} />
          <LyricsViewer lyrics={lyrics} />
        </div>
      </div>
    </div>
  );
};

export default App;
