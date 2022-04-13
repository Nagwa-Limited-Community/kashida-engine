# Kashida Engine <!-- omit in toc -->

A kashida engine that adds kashida to poem lines to unify their widths to match the widest text.

## Table of Content <!-- omit in toc -->

- [1. Getting Started](#1-getting-started)
  - [1.1. Installation](#11-installation)
    - [1.1.1. Using `script` tag](#111-using-script-tag)
    - [1.1.2. Using `npm`](#112-using-npm)
  - [1.2. Documentation](#12-documentation)
    - [1.2.1. API Interface](#121-api-interface)
    - [1.2.2. API Explanation](#122-api-explanation)
- [2. Forking Guide](#2-forking-guide)
  - [2.1. Prerequisites](#21-prerequisites)
  - [2.2. Installing](#22-installing)
- [3. Built With](#3-built-with)
- [4. Main Features](#4-main-features)
- [5. Git Style](#5-git-style)
  - [5.1. Message Structure](#51-message-structure)
    - [5.1.1. The Type](#511-the-type)
    - [5.1.2. The Subject](#512-the-subject)
    - [5.1.3. The Body](#513-the-body)

## 1. Getting Started

These instructions will guide you to consume the API provided by the app.

### 1.1. Installation

Following these instructions will integrate the app into your website and will provide a globally defined API to be used.
Also, if you're using the [Script tag method](#using-script-tag) then the app will automatically add kashidas to the poem lines if the following structure is found in DOM, if not then check the [API interface](#api-interface) to manually invoke the required functions.

```HTML
<element class="poem">
  <element class="linesGroup">
    <div>
      <div> [The line should exist here] </div>
    </div>
  </element>
  <element class="linesGroup">
    <div>
      <div> [The line should exist here] </div>
      <div> [The line should exist here] </div>
    </div>
  </element>
</element>
```

#### 1.1.1. Using `script` tag

1. Download the latest version of the app.
2. Link the app's Javascript file in the body of your HTML File. Example:

   ```HTML
   <body>
     <script src="/static/js/NagwaHTMLEditor.js"></script>
   </body>
   ```

#### 1.1.2. Using `npm`

Run the following command:

```cli
npm i kashida-engine
```

### 1.2. Documentation

Here will explain the API provided by our app that can be found under the globally defined namespace NagwaHTMLEditor.

#### 1.2.1. API Interface

The `KashidaEngine` is implementing the following interface:

```TypeScript
interface KashidaEngine  {
    unifyTextsWidths: (texts: string[], font: string) => string[]
    renderKashidaToPoems: (poemSelector?: string, lineSelector?: string) => void
    renderKashidaToPoems: (e?: Event) => void
    getTextWidth: (text: string, font: string) => number
    getTextsWidths: (texts: string[], font: string) => TextWidths
}

interface TextWidths {
  textWidths: number[]
  maxTextWidth: number
}
```

#### 1.2.2. API Explanation

Here's an explanation of the provided API:

- `KashidaEngine`:
  - `unifyTextsWidths`: Unifies the widths of all the inputted texts to match the max width.
  - `renderKashidaToPoems`: Has two overloads to render all the poem lines after adding kashida to it and unifying all its widths for all the poems available on page and still be able to use it as an event handler by using the second overload that accepts an `Event` as an argument.
  - `getTextWidth`: Uses `canvas.measureText` to compute and return the width of the given text of given font in pixels.
  - `getTextsWidths`: Uses `getTextWidth` to compute and return the widths of the given texts of given font in pixels and the max width of all the sentences.
- `TextWidths`:
  - `textWidths`: An array of the width of the sentences.
  - `maxTextWidth`: The maximum width of all of these widths.

## 2. Forking Guide

These instructions will get you a copy of the project up and running on your local machine.

### 2.1. Prerequisites

You have to have Node.js v17.2.0, and npm v8.1.4 installed.
Also, check `./package.json` for all the packages used in this project.

### 2.2. Installing

Clone this repo, open the terminal and navigate to the repo directory on your local machine, and then run:

```cli
npm install
```

wait until it's done and you're good to go!

## 3. Built With

- [TypeScript](https://www.typescriptlang.org/) - The main language used.
- [Webpack](https://webpack.js.org/) - The main bundler used.

## 4. Main Features

- Unify the poem lines widths with kashidas if the expected structure is met.
- Provide a method in the public API to manually run the unifying widths method.
- Provide a method in the public API to manually run the method that calculates the widths.
- Provide a method in the public API that adds kashidas to a list of strings.

## 5. Git Style

### 5.1. Message Structure

A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

```Git
type: subject

body
```

#### 5.1.1. The Type

The type is contained within the title and can be one of these types:

- **feat:** a new feature
- **fix:** a bug fix
- **docs:** changes to documentation
- **style:** formatting, missing semi colons, etc; no code change
- **refactor:** refactoring production code
- **test:** adding tests, refactoring test; no production code change
- **chore:** updating build tasks, package manager configs, etc; no production code change

#### 5.1.2. The Subject

Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period.

Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

#### 5.1.3. The Body

Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.

When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.

For more information about the style guide for Git and programming Languages check: [Udacity's Code Style Guide](https://udacity.github.io/git-styleguide/) or [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
