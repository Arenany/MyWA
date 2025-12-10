import React, { useRef } from 'react';
import { useImages } from '../context/ImageContext';
import { Camera } from 'lucide-react';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageId: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ imageId, src, className, alt, ...props }) => {
  const { images, isEditMode, updateImage } = useImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use saved image if available, otherwise default to prop src
  const currentSrc = images[imageId] || src;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateImage(imageId, e.target.files[0]);
    }
  };

  return (
    <>
      <img 
        src={currentSrc} 
        alt={alt} 
        className={className}
        loading="lazy" // Native lazy loading
        decoding="async" // Async decoding to prevent main thread blocking
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
            <div className="bg-white/90 backdrop-blur text-slate-900 px-4 py-3 rounded-xl font-bold flex items-center gap-2 shadow-2xl transform hover:scale-105 transition-transform border border-white/50">
              <Camera size={20} className="text-[#25D366]" />
              <span className="text-sm">Edit Image</span>
            </div>
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