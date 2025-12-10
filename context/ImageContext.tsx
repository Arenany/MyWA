import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  images: Record<string, string>;
  isEditMode: boolean;
  updateImage: (id: string, file: File) => Promise<void>;
  toggleEditMode: (password: string) => boolean;
  logout: () => void;
  exportConfig: () => void;
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

  // Helper to compress image
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          // Max dimension logic
          const MAX_WIDTH = 800; // Limit width to 800px to save space
          const scaleSize = MAX_WIDTH / img.width;
          const width = Math.min(MAX_WIDTH, img.width);
          const height = img.height * (img.width > MAX_WIDTH ? scaleSize : 1);

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            // Compress to JPEG with 0.7 quality
            resolve(canvas.toDataURL('image/jpeg', 0.7));
          } else {
            reject(new Error("Canvas context failed"));
          }
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const updateImage = async (id: string, file: File) => {
    try {
      // 1. Compress the image first
      const compressedBase64 = await compressImage(file);
      
      // 2. Update State
      const newImages = { ...images, [id]: compressedBase64 };
      setImages(newImages);
      
      // 3. Save to LocalStorage
      try {
        localStorage.setItem('interacox_images', JSON.stringify(newImages));
      } catch (e) {
        if (e instanceof DOMException && e.name === 'QuotaExceededError') {
          alert("Storage Limit Reached: Even compressed, you have too many custom images for browser storage. Please export your config.");
        } else {
          console.error("Save failed", e);
        }
      }
    } catch (error) {
      console.error("Image processing failed", error);
      alert("Failed to process image. Please try another one.");
    }
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

  const exportConfig = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(images));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "interacox_images_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <ImageContext.Provider value={{ images, isEditMode, updateImage, toggleEditMode, logout, exportConfig }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error("useImages must be used within ImageProvider");
  return context;
};