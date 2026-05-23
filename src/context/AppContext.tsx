import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextProps {
  favorites: string[];
  completed: string[];
  activeProphetId: string | null;
  toggleFavorite: (id: string) => void;
  toggleCompleted: (id: string) => void;
  setActiveProphetId: (id: string | null) => void;
  resetProgress: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('prophet_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [completed, setCompleted] = useState<string[]>(() => {
    const saved = localStorage.getItem('prophet_completed');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeProphetId, setActiveProphetId] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('prophet_active_id');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem('prophet_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('prophet_completed', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('prophet_active_id', activeProphetId ? JSON.stringify(activeProphetId) : '');
  }, [activeProphetId]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCompleted = (id: string) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const resetProgress = () => {
    setFavorites([]);
    setCompleted([]);
    setActiveProphetId(null);
    localStorage.removeItem('prophet_favorites');
    localStorage.removeItem('prophet_completed');
    localStorage.removeItem('prophet_active_id');
  };

  return (
    <AppContext.Provider value={{
      favorites,
      completed,
      activeProphetId,
      toggleFavorite,
      toggleCompleted,
      setActiveProphetId,
      resetProgress
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
