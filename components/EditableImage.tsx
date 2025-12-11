import React, { useRef, useState, useEffect } from 'react';
import { useImages } from '../context/ImageContext';
import { Camera, Check } from 'lucide-react';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageId: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ imageId, src, className, alt, ...props }) => {
  const { images, isEditMode, updateImage } = useImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Determine the source to use (saved > prop)
  const sourceUrl = images[imageId] || src;
  const [imgSrc, setImgSrc] = useState(sourceUrl);
  const [hasError, setHasError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Sync state when props or context changes
  useEffect(() => {
    setImgSrc(sourceUrl);
    setHasError(false);
  }, [sourceUrl]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await updateImage(imageId, e.target.files[0]);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  const handleError = () => {
    setHasError(true);
    // Use a reliable placeholder service
    setImgSrc("https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Unavailable");
  };

  return (
    <>
      <img 
        src={imgSrc} 
        alt={alt} 
        className={`${className} ${hasError ? 'object-contain bg-slate-100 p-4' : ''}`}
        loading="lazy"
        decoding="async"
        onError={handleError}
        {...props}
      />
      
      {isEditMode && (
        <>
          <div 
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity cursor-pointer group-hover:opacity-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            title="Click to change image"
          >
            {isSaved ? (
              <div className="bg-green-500 text-white px-4 py-3 rounded-xl font-bold flex items-center gap-2 shadow-2xl animate-fade-in-up">
                <Check size={20} />
                <span className="text-sm">Saved!</span>
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur text-slate-900 px-4 py-3 rounded-xl font-bold flex items-center gap-2 shadow-2xl transform hover:scale-105 transition-transform border border-white/50">
                <Camera size={20} className="text-[#25D366]" />
                <span className="text-sm">Edit Image</span>
              </div>
            )}
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*"
            onChange={handleFileChange}
          />
        </>
      )}
    </>
  );
};

export default EditableImage;