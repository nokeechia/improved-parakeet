import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-[1200px]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl"
        >
          ✕ Close
        </button>
        <div className="relative w-full pt-[60%]">
          <Image
            src={src}
            alt={alt}
            className="rounded-lg"
            onClick={(e) => e.stopPropagation()}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ 
              objectFit: 'contain',
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
} 