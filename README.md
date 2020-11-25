# Reflekt UI

A React app that renders reflections in a `/reflections` directory.

The application has two modes:
1. Without a server for a zero setup experience
2. With a server for the ability to delete and keep reflections

## Development

### Read-Only Mode

1. Run:
```
npm ci
npm run start
```

2. Visit `/web/index.html` directly in your browser.

3. To speed up development with hot reloading visit:
   http://localhost:3000/

### Read/Write Mode

1. Run:
```
cd web
npm ci
npm run start
```

2. Visit:
   http://localhost:3001/

## Deployment

1. Run:
```
npm run build
```

2. Place `/dist/bundle.js` inside the Reflekt repo of your chosen language.
