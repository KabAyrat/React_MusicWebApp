import React from 'react';

const LyricsViewer = ({ lyrics }) => {
  return (
    <div className="p-4 border-t border-gray-300">
      <h3 className="text-lg font-semibold mb-2">Текст песни</h3>
      <p>{lyrics || 'Select a song to see the lyrics'}</p>
    </div>
  );
};

export default LyricsViewer;
