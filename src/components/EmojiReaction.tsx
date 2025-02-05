import React from 'react';

interface EmojiReactionProps {
  onSelect: (emoji: string) => void;
  selectedEmoji?: string;
}

const EMOJI_OPTIONS = [
  '👍', '❤️', '😍', '🎉', 
  '👏', '🔥', '🤩', '😮'
];

const EmojiReaction: React.FC<EmojiReactionProps> = ({ 
  onSelect, 
  selectedEmoji 
}) => {
  return (
    <div className="flex space-x-2 items-center">
      <span className="text-gray-600 mr-2">Réaction:</span>
      <div className="flex space-x-2">
        {EMOJI_OPTIONS.map((emoji) => (
          <button
            key={emoji}
            onClick={() => onSelect(emoji)}
            className={`
              text-2xl 
              transition-all 
              duration-200 
              transform 
              hover:scale-125 
              ${selectedEmoji === emoji 
                ? 'border-2 border-blue-500 rounded-full' 
                : 'opacity-60 hover:opacity-100'}
            `}
            aria-label={`Select ${emoji}`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiReaction;