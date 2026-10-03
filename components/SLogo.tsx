'use client';

import React from 'react';

interface SLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function SLogo({ className = 'w-16 h-22 sm:w-20 sm:h-28', width, height }: SLogoProps) {
  return (
    <svg
      viewBox="0 0 400 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 hover:scale-105 drop-shadow-sm ${className}`}
      style={width && height ? { width, height } : undefined}
      aria-label="Logo S Study Grup Mahasiswa"
    >
      <path
        fill="#E50914"
        d="
          M 130 80
          L 330 80
          L 330 155
          L 180 155
          L 330 305
          L 330 410
          L 270 470
          L 70 470
          L 70 395
          L 220 395
          L 70 245
          L 70 140
          Z
        "
      />
    </svg>
  );
}
