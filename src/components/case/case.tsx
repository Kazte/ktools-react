import React from 'react';

export interface CaseProps {
  condition: boolean;
  children: React.ReactNode;
}

export default function Case({ children, condition }: CaseProps) {
  condition;
  return <>{children}</>;
}
