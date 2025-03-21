import { useState, useEffect } from 'react';

export function useDarkPreview() {
  const [isDarkPreview, setIsDarkPreview] = useState<boolean>(false);
  
  // Load the saved preference from localStorage on component mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('darkPreview');
    if (savedPreference !== null) {
      setIsDarkPreview(savedPreference === 'true');
    }
  }, []);
  
  // Update localStorage when the preference changes
  const toggleDarkPreview = (value: boolean) => {
    setIsDarkPreview(value);
    localStorage.setItem('darkPreview', String(value));
  };
  
  return { isDarkPreview, toggleDarkPreview };
} 