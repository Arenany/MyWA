import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  images: Record<string, string>;
  isEditMode: boolean;
  updateImage: (id: string, file: File) => void;
  toggleEditMode: (password: string) => boolean;
  logout: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Load saved images from local storage
    const saved = localStorage.getItem('interacox_images');
    if (saved) {
      try {
        setImages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load images", e);
      }
    }
    
    // Check session for admin status
    const sessionAuth = sessionStorage.getItem('interacox_admin');
    if (sessionAuth === 'true') {
      setIsEditMode(true);
    }
  }, []);

  const updateImage = (id: string, file: File) => {
    // Simple file size check (limit to ~2MB for local storage safety)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image is too large for this demo (Max 2MB). Please pick a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      try {
        const newImages = { ...images, [id]: base64 };
        setImages(newImages);
        localStorage.setItem('interacox_images', JSON.stringify(newImages));
      } catch (e) {
        alert("Browser storage is full. Cannot save more images in this demo.");
      }
    };
    reader.readAsDataURL(file);
  };

  const toggleEditMode = (password: string) => {
    // Hardcoded password for demo purposes
    if (password === 'admin') {
      setIsEditMode(true);
      sessionStorage.setItem('interacox_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsEditMode(false);
    sessionStorage.removeItem('interacox_admin');
  };

  return (
    <ImageContext.Provider value={{ images, isEditMode, updateImage, toggleEditMode, logout }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error("useImages must be used within ImageProvider");
  return context;
};