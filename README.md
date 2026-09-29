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

Immer **zuerst `build`**, dann `deploy`. `npm run deploy` schiebt nur den Inhalt von `dist/` auf `gh-pages` (`gh-pages -d dist`).

3. Kurz warten. Unter [pages-build-deployment](https://github.com/tobi-tobsen-berlin/nike-wessel/actions/workflows/pages/pages-build-deployment) erscheint ein neuer Run (typisch 30–40 Sekunden). Danach ist [nike-wessel.studio36.berlin](https://nike-wessel.studio36.berlin/) aktuell.

Kein eigener GitHub-Actions-Workflow nötig — der Pages-Job läuft automatisch, sobald `gh-pages` aktualisiert wird. Die Custom Domain steht in `public/CNAME` (`nike-wessel.studio36.berlin`) und kommt beim Build mit.

## GitHub-Account wechseln

Push und Deploy brauchen den Account **tobi-tobsen-berlin**, nicht `tobias-hansel-artory`. Das sind zwei getrennte Dinge: GitHub-Login (Push) und Git-Absender (Name/E-Mail in Commits).

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

Falls Git danach noch den alten Account nimmt (macOS Keychain):

```bash
printf "protocol=https\nhost=github.com\n" | git credential-osxkeychain erase
```

Beim nächsten `git push` oder `npm run deploy` fragt Git neu nach Login — dann **tobi-tobsen-berlin**.

### Commit-Absender (optional, nur dieses Repo)

Nicht `git config --global` ändern, sonst gilt der Wechsel überall (auch Artory-Repos).

Nur in diesem Projekt:

```bash
git config user.name "Tobias Hansel"
git config user.email "DEINE-GITHUB-EMAIL-VON-tobi-tobsen-berlin"
```

Die E-Mail sollte zu dem Account passen, den GitHub für Commits zeigen soll (Account → Settings → Emails).
