import React from 'react';

export interface DefaultProps {
  children: React.ReactNode;
}

export default function Default({ children }: DefaultProps) {
  return <>{children}</>;
}
