<h1 align='center'>Kazte's react tools</h1>

<p align='center'>
  <a href='https://www.npmjs.com/package/ktools-r'>
    <img src='https://img.shields.io/npm/v/ktools-r' alt='npm version' />
  </a>
  <a href='https://www.npmjs.com/package/ktools-r'>
    <img src='https://img.shields.io/npm/dt/ktools-r?color=blue&style=flat-square' alt='npm downloads' />
  </a>
  <a href='https://www.npmjs.com/package/ktools-r'>
    <img src='https://img.shields.io/npm/l/ktools-r' alt='license' />
  </a>
</p>

<h1>Index</h1>

- [Description](#description)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
  - [Switch](#switch)
- [Loader](#loader)

## Description

A collection of react tools that I use in my projects. I decided to make this package to make my life easier and to help other developers. This package is still in development and I will add more tools in the future.

I use [tailwindcss](https://www.npmjs.com/package/tailwindcss) in my projects, so I decided to use it in this package too. If you don't use tailwindcss, feel free to open an pull request to add support for other css frameworks.

## Dependencies

- [React](https://www.npmjs.com/package/react)
- [React-dom](https://www.npmjs.com/package/react-dom)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)

## Installation

```bash
npm install ktools-r
# or
yarn add ktools-r
# or
pnpm add ktools-r
```

## Usage

### Switch

```tsx
import { Switch } from 'ktools-r'

enum APP_STATE {
  CASE_1,
  CASE_2,
  NONE,
}

function App() {
  const [appState, setAppState] = useState(APP_STATE.CASE_1)

  return (
    <Switch>
      <Switch.Case condition={appState === APP_STATE.CASE_1}>
        <div>
          <h1>Case 1</h1>
        </div>
      </Switch.Case>
      <Switch.Case condition={appState === APP_STATE.CASE_2}>
        <div>
          <h1>Case 2</h1>
        </div>
      </Switch.Case>

      {/* ... */}
      {/* As many cases as you want */}
      {/* ... */}

      <Switch.Default>
        <div>
          <h1>Default</h1>
        </div>
      </Switch.Default>
    </Switch>
  )
}
```

## Loader

```tsx

```
