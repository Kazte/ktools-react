import * as React from 'react'

interface SwitchProps {
  children: React.ReactNode
}

export default function Switch({ children }: SwitchProps) {
  let matchChild: React.ReactNode = null
  let defaultCase: React.ReactNode = null

  React.Children.forEach(children, (child: any) => {
    if (!matchChild && child.type == Case) {
      const { condition } = child.props

      const conditionResult = Boolean(condition)

      if (conditionResult) {
        matchChild = child
      }
    } else if (!defaultCase && child.type == Default) {
      defaultCase = child
    }
  })

  return matchChild ?? defaultCase ?? null
}

Switch.Case = Case
Switch.Default = Default

interface DefaultProps {
  children: React.ReactNode
}

function Default({ children }: DefaultProps) {
  return <>{children}</>
}

interface CaseProps {
  condition: boolean
  children: React.ReactNode
}

function Case({ children, condition }: CaseProps) {
  condition
  return <>{children}</>
}
