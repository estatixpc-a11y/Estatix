import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <span
          className={`inline-block text-[11px] font-bold uppercase tracking-widestBrand px-3 py-1 rounded-full border ${
            dark
              ? 'bg-teal-850/80 text-brand-accent border-teal-800'
              : 'bg-teal-50 text-teal-900 border-teal-100'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-sans leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
