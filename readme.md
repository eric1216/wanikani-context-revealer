# WaniKani Context Revealer

## Overview

**WaniKani Context Revealer** is a Chrome extension designed to enhance the learning experience on WaniKani by covering English text in context sentences and common word combinations with a gray box. The text is revealed when you hover over it, helping you focus on the Japanese content while still being able to access the English translations when needed.

## Features

- Text Covering: English text in context sentences and word combinations is covered with a gray box to minimize distraction.
- Hover Reveal: Hovering over the gray box reveals the underlying English text for reference.
- Customizable Styles: Easily adaptable styles through the extension’s CSS.

## Installation

1. **Download or Clone the Repository**
   You can download the extension files from the GitHub repository or clone the repository using Git:

```sh
git clone https://github.com/yourusername/wanikani-context-revealer.git
```

2. **Load the Extension into Chrome**

- Open Google Chrome.
- Go to chrome://extensions/.
- Enable “Developer mode” using the toggle switch at the top-right.
- Click “Load unpacked”.
- Select the directory where you have the extension files.

3. **Usage**
   Navigate to WaniKani to find the extension during lessons and reviews, as well as under vocabulary. English text in context sentences and word combinations will be covered with a gray box, which you can hover over to reveal the text.

## How It Works

1. **Content Script (content.js):**

- The content script applies styles to English text elements within the WaniKani context sentences and combination sections.
- Uses a MutationObserver to apply styles to dynamically loaded content.

2. **Styles (styles.css):**

- Styles are defined for the covered text and the hover effect.

3. **Manifest (manifest.json):**

- Defines the extension’s metadata, permissions, and content scripts.

## Development

To contribute to this project:

1. **Clone the Repository:**

```sh
git clone https://github.com/yourusername/wanikani-context-revealer.git
```

2. **Navigate to the Project Directory:**

```sh
cd wanikani-context-revealer
```

3. **Make Your Changes:**

- Modify the content.js and styles.css or add/remove content as needed.

1. **Test Locally:**

- Load your modified extension into Chrome as described in the Installation section or if its already installed reload it from the extension management page.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
