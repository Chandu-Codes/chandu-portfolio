import React, { useState, useEffect } from 'react';

interface RoleSwitcherProps {
  roles: string[];
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100 - Math.random() * 40); // Random typing speed variance

        if (displayText === fullText) {
          // Finished typing, pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait 2s
        }
      } else {
        // Deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster deleting

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Brief pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.5em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400 font-mono font-bold tracking-tight">
      {displayText}
      <span className="ml-1 inline-block w-1.5 h-6 bg-blue-400 animate-pulse align-middle">|</span>
    </span>
  );
};
