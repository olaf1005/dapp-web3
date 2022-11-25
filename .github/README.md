## About The Project

Create Web3 DApp is an npx package that allows developers to **create anything** from **a simple, barebones dApp** to a **feature-rich decentralized platform**, in ~2 minutes.

The create-web3-dapp package is a NextJs-based framework, **compatible with the most used blockchains including Ethereum, Polygon, Optimism, Arbitrum, Solana**, that helps web3 developers build a decentralized production-ready application at lightning speed, using pre-made React components, webhooks, and APIs.

## Quick Overview

```sh
npx create-web3-dapp
cd my-dapp
npm run dev
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, the CLI builder will notify you if a new version has been released. We always suggest you to run using the latest available version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like Rainbowkit, Phantom connect, Hardhat, or Anchor<br>
They will be automatically added and preconfigured so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, go through the following steps:

1. Create a new account on [Alchemy.com](https://alchemy.com)
2. Create a new Alchemy application.

3. In your terminal run:

```sh
  npx create-web3-dapp
```

4. The first time you run this command, it will install the package.

5. Once installed, run the following command again - This will start the DApp creation flow.:

```sh
    npx create-web3-dapp
```

6. Select the dependencies and components you want to include in your web3 application:
   ![product-screenshot-2]


It will create a directory called with the give name inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

Without Blockchain Development Environment
```
my-dapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

With Blockchain Development Environment
```
my-dapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your DApp.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-dapp
```
And, in case you've installed a blockchain development environment, navigate to the frontend folder.

Inside the newly created project, you can run some built-in commands:

### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

## User Guide

You can find detailed instructions on using Create Web3 DApp and many tips in [its documentation]().

## How to Update to New Versions?

Every time you run Create web3 DApp, the CLI builder will take care of updating your package to the latest version available.

## Philosophy

-   **One Dependency:** There is only one build dependency. It uses webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

-   **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

-   **No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

-  NextJS, React, JSX, ES6, TypeScript and Flow syntax support.
-  
-   Hassle-free updates for the above tools with a single dependency.

Check out [this guide (coming soon)]() to learn how to build with Create Web3 Dapp.

Check out [this guide (coming soon)]() for an overview of how to a full overview of the code base.


## Popular Alternatives

Create React App is a great fit for:

-   **Learning Web3** in a comfortable and feature-rich development environment.
-   **Starting new Web3 Applications**
-   **Creating examples and experiment** with React for your libraries and components.

Here are a few common cases where you might want to try something else:

-   If you want to **try React** without hundreds of transitive build tool dependencies, consider [using a single HTML file or an online sandbox instead](https://reactjs.org/docs/getting-started.html#try-react).

-   If you need to **integrate React code with a server-side template framework** like Rails, Django or Symfony, or if you’re **not building a single-page app**, consider using [nwb](https://github.com/insin/nwb), or [Neutrino](https://neutrino.js.org/) which are more flexible. For Rails specifically, you can use [Rails Webpacker](https://github.com/rails/webpacker). For Symfony, try [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/reactjs.html).

-   If you need to **publish a React component**, [nwb](https://github.com/insin/nwb) can [also do this](https://github.com/insin/nwb#react-components-and-libraries), as well as [Neutrino's react-components preset](https://neutrino.js.org/packages/react-components/).

-   If you want to do **server rendering** with React and Node.js, check out [Next.js](https://nextjs.org/) or [Razzle](https://github.com/jaredpalmer/razzle). Create React App is agnostic of the backend, and only produces static HTML/JS/CSS bundles.

-   If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/). Unlike Create React App, Gatsby pre-renders the website into HTML at build time. Next.js supports both server rendering and pre-rendering.

-   Finally, if you need **more customization**, check out [Neutrino](https://neutrino.js.org/) and its [React preset](https://neutrino.js.org/packages/react/).

All of the above tools can work with little to no configuration.

If you prefer configuring the build yourself, [follow this guide](https://reactjs.org/docs/add-react-to-a-website.html).
