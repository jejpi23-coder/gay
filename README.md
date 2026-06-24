# Obrona DS — fiszki i quiz przed obroną magisterską

Aplikacja webowa (PWA) do nauki przed egzaminem dyplomowym/magisterskim, kierunek **Informatyka** (Politechnika Lubelska). Działa offline, na telefonie i komputerze. Tryb **Fiszki** i **Quiz**, pasek opanowania materiału, podział na działy.

## Zawartość bazy
- **25 działów**, **268 fiszek** i **85 pytań quizowych** (łącznie **353 pozycje**).
- Materiał z trzech list zagadnień: specjalnościowej (Data Science / bezpieczeństwo), dyplomowej (PL/SQL, BI, JEE, full-stack, Swift, Android, Python, wzorce) oraz ogólnej (architektura, systemy operacyjne, sieci, sygnały/DSP, elektronika, matematyka, podstawy programowania).

## Pliki
- `index.html` — aplikacja (interfejs + logika).
- `questions.js` — **cała baza pytań** (TOPICS, DECK, QUIZ). To tu edytujesz/dodajesz pytania.
- `manifest.webmanifest`, `sw.js`, `icons/` — obsługa PWA i trybu offline.

## Jak uruchomić lokalnie
Otwórz `index.html` przez prosty serwer (service worker nie działa z file://):
```
python3 -m http.server
```
i wejdź na http://localhost:8000

## Publikacja na GitHub Pages
1. Wrzuć wszystkie pliki do repozytorium (gałąź `main`).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
3. Strona pojawi się pod `https://UZYTKOWNIK.github.io/NAZWA-REPO/`.
4. Na telefonie: menu przeglądarki → „Dodaj do ekranu głównego” (instalacja jako aplikacja).

## Jak dodać/zmienić pytania
Edytuj `questions.js`:
- **Fiszka:** `{ id:"unik1", topic:"crypto", q:"pytanie", a:"odpowiedź" }`
- **Quiz:** `{ id:"q1", topic:"crypto", q:"...", options:["A","B","C","D"], correct:1, explain:"..." }`
- `topic` musi pasować do `id` istniejącego działu w `TOPICS`; `id` musi być unikalne; `correct` to indeks poprawnej opcji (liczony od 0).
