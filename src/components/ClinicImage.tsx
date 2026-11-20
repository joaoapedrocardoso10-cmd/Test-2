import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ClinicImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  priority?: boolean;
}

export function ClinicImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  priority = false,
}: ClinicImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F4F5] via-[#EFE7E9] to-[#C5A9AD]/35 text-[#29232C] p-8 text-center ${className}`}
      >
        <div className="w-11 h-11 rounded-full border border-[#29232C]/15 bg-white/80 flex items-center justify-center mb-3">
          <Sparkles className="w-5 h-5 text-[#29232C]" aria-hidden="true" />
        </div>
        <p className="font-display text-xl font-medium tracking-tight text-[#29232C]">
          {fallbackTitle}
        </p>
        {fallbackSubtitle && (
          <p className="mt-1 text-xs text-[#29232C]/70">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
