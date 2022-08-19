import React from 'react';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto overflow-x-hidden px-4 pt-4 pb-8 sm:pt-[4vh] lg:px-[10%]">
      {children}
    </div>
  );
}
