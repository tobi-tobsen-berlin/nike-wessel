# Nike Wessel

Website von Nike Wessel: [nike-wessel.studio36.berlin](https://nike-wessel.studio36.berlin/)

React + TypeScript + Vite. Live-Hosting über GitHub Pages mit Custom Domain.

## Lokal entwickeln

```bash
npm install
npm run dev
```

Build lokal prüfen:

```bash
npm run build
npm run preview
```

## Änderungen veröffentlichen

Die Live-Seite kommt **nicht** von `main`. GitHub Pages liefert den Branch `gh-pages` aus.

1. Code auf `main` ändern, committen und pushen:

```bash
git add .
git commit -m "Deine Änderung"
git push origin main
```

`main` allein ändert die Website **nicht**.

2. Bauen und deployen:

```bash
npm run build
npm run deploy
```

### Login umstellen (nötig zum Publishen)

```bash
gh auth logout -h github.com -u tobias-hansel-artory
gh auth login -h github.com
```

Bei `login`:

- **GitHub.com**
- **HTTPS**
- **Login with a web browser**
- Im Browser als **tobi-tobsen-berlin** einloggen

Prüfen:

```bash
gh auth status
```

Es sollte `tobi-tobsen-berlin` stehen.