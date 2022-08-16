import React from 'react';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 lg:px-[10%] pt-4 sm:pt-[4vh] pb-8 overflow-x-hidden">
      {children}
    </div>
  );
}
