# Candidate Search Application

## Overview
A web application that enables users to search and explore GitHub profiles. Built with TypeScript and integrated with the GitHub API, this tool allows for username-based searches and random profile discovery.

## Features
- **GitHub Profile Search**: Search for any GitHub user by their username
- **Random Profile Discovery**: Generate and view random GitHub user profiles
- **Detailed User Information**: Access comprehensive user details including:
  - Bio and personal information
  - Follower statistics
  - Repository listings
  - Location data
- **Responsive Design**: Optimized for both desktop and mobile viewing

## Technology Stack
- **Frontend**: TypeScript, HTML, CSS
- **Data Source**: GitHub REST API
- **Hosting**: Render
- **Source Control**: Git

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- GitHub API token

### Installation

1. Clone the repository
```bash
git clone https://github.com/HPOGFD/wyaREACT.git
cd your-repo-name
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
# Create .env file in project root
REACT_APP_GITHUB_TOKEN=your_token_here
```

## Usage

1. Start the development server
```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000`

3. Begin searching:
   - Enter a GitHub username in the search bar
   - Or click "Load Random Users" to discover new profiles

[LINK TO RENDER PAGE](https://wyareact.onrender.com/)

<img width="589" alt="image" src="https://github.com/user-attachments/assets/452914a6-ad95-4f78-89cc-649f03ad8e5f" />
<img width="956" alt="image" src="https://github.com/user-attachments/assets/60fcc722-daa8-4e46-bb2b-05c6887e1944" />


## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes:
```bash
git commit -m "Add amazing feature"
```
4. Push to the branch:
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

## Acknowledgments
- Special thanks to ChatGPT for development support and documentation assistance

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contact

- **Developer**: Harry P Oyarvide
- **Email**: poyarvide87@yahoo.com
- **GitHub**: [HPOGFD](https://github.com/HPOGFD)

---



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
