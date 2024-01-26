import React from 'react';
import Case from './case';
import Default from './default';

export interface SwitchProps {
  children: React.ReactNode;
}

export default function Switch({ children }: SwitchProps) {
  let matchChild: React.ReactNode = null;
  let defaultCase: React.ReactNode = null;

  React.Children.forEach(children, (child: any) => {
    if (!matchChild && child.type == Case) {
      const { condition } = child.props;

      const conditionResult = Boolean(condition);

      if (conditionResult) {
        matchChild = child;
      }
    } else if (!defaultCase && child.type == Default) {
      defaultCase = child;
    }
  });

  return matchChild ?? defaultCase ?? null;
}
