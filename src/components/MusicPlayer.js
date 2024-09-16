import React, { useState, useRef } from 'react';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 border-t border-gray-300">
      {song && song.audioFile ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Now Playing: {song.title}</h2>
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio
            ref={audioRef}
            src={`/audio/${song.audioFile}`} //
            className="w-full mt-2"
            controls
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <p className="text-center text-gray-600">Select a song to play</p>
      )}
    </div>
  );
};

export default MusicPlayer;
