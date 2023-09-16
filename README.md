# World-of-words

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

```sh
npm init vite@latest world-of-words -- --template react-ts
```

### Fetching APIs from [datamuse](https://www.datamuse.com/api/)

configure "**BASE_URL = process.env.BASE_URL ?? `https://api.datamuse.com`**" with node.process, with

```sh
npm i --save-dev @types/node
```

- For synonyms,

```js
${BASE_URL}/words?rel_syn=${word}
```
