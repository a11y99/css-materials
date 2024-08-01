<a href="https://css-materials.vercel.app/">
  <div align="center">
    <img src="https://css-materials.vercel.app/cheese.png" width="150" height="150" />
  </div>
  <div align="center">
    <img src="https://css-materials.vercel.app/text-logo.png" width="200" height="auto" />
  </div>
</a>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
- [Links](#links)
- [Contributing](#contributing)

## Overview

CSS Materials is a comprehensive library that offers a variety of components designed to be user-friendly, even for beginners. The library is regularly updated with new components, and we encourage users to submit suggestions and report any bugs they encounter.

## Features

- 📦 **Available via npm**
  - Install the package using npm for easy integration.
- 🌐 **Official Website**
  - Visit our official website for more information and updates.
- 📚 **Detailed Documentation**
  - Access our official documentation to get started quickly.
- 🧩 **Component Overview**
  - Explore the complete list of available components.

## Installation

To install the css-materials package, follow these steps:

1. Open your terminal.
2. Run the following command:

```
npm install css-materials
```

## Usage

To use the components and styles from the css-materials package in your project, follow these instructions:

1. **Import Components and Styles:**

```
import { Checkbox, Slider } from 'css-materials';
import 'css-materials/dist/styles.css';
```

2. **Utilize the Components in Your Project:**

```
const App = () => {
    const handleSliderChange = (value: number) => {
        console.log(value);
    };

    return (
        <div>
            <Checkbox label="Accept Terms" />
            <Slider value={50} onChange={handleSliderChange} />
        </div>
    );
};

export default App;
```

## Styling

The css-materials package comes with a pre-built CSS file. To include the styles in your project, simply import the CSS file as shown below:

```
import 'css-materials/dist/styles.css';
````

## Links

- [npm Package](https://www.npmjs.com/package/css-materials)
- [Official Website](https://css-materials.vercel.app)
- [Official Documentation](https://css-materials.vercel.app/docs/getting-started)
- [Component Overview](https://css-materials.vercel.app/components)

## Contributing

We welcome contributions from the community! If you have suggestions for new components or encounter any bugs, please open an issue on our GitHub repository.

- 🔧 **Submit New Component Suggestions:** [Submit an Issue](https://github.com/hn-104/css-materials/issues/new)
- 🐛 **Report Bugs:** [Report an Issue](https://github.com/hn-104/css-materials/issues/new)

We appreciate your support and contributions! 🌟