# Obrona DS — fiszki i quiz przed obroną magisterską

Aplikacja do nauki przed obroną pracy magisterskiej na kierunku **Informatyka**,
specjalność **Systemy analiz danych (Data Science)** — Politechnika Lubelska.

- **76 fiszek** (pytanie → odpowiedź modelowa) z 8 działów
- **77 pytań quizu** jednokrotnego wyboru z wyjaśnieniami
- Tryb **Fiszki** (oceniaj „Umiem” / „Powtórz”, pierścień postępu) i tryb **Quiz** (punktacja + rozbicie wyników na działy)
- Działa na telefonie i komputerze, **offline**, instaluje się jak aplikacja (PWA)
- Postęp zapisywany lokalnie w przeglądarce, jasny i ciemny motyw, obsługa klawiatury

## Zakres materiału (działy)

| Kod | Dział |
|-----|-------|
| PUB | Przygotowanie i publikowanie artykułów naukowych |
| EXD | Zaawansowana eksploracja i analiza danych (w tym dane przestrzenne, SPC) |
| MCR | Metody wnioskowania wielokryterialnego |
| BI  | Projektowanie i implementacja systemów Business Intelligence |
| SQL | Programowanie aplikacji w języku PL/SQL |
| PY  | Zaawansowane programowanie w języku Python |
| IOT | Internet Rzeczy |
| A11Y| Bariery w przestrzeni cyfrowej (dostępność, użyteczność) |

## Uruchomienie lokalne

Otwórz `index.html` w przeglądarce. To wszystko — plik jest samowystarczalny.

## Wdrożenie na GitHub Pages

1. Utwórz repozytorium na GitHub (np. `obrona-ds`) i wgraj wszystkie pliki z tego folderu
   (`index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, folder `icons/`).

   Z linii poleceń:
   ```bash
   git init
   git add .
   git commit -m "Obrona DS"
   git branch -M main
   git remote add origin https://github.com/TWOJ_LOGIN/obrona-ds.git
   git push -u origin main
   ```

2. W repozytorium wejdź w **Settings → Pages**.
3. W sekcji **Build and deployment** wybierz **Source: Deploy from a branch**,
   gałąź `main`, katalog `/ (root)`, zapisz.
4. Po chwili strona będzie pod adresem:
   `https://TWOJ_LOGIN.github.io/obrona-ds/`

Adres otworzysz na dowolnym urządzeniu.

## Instalacja na telefonie (PWA)

Otwórz adres GitHub Pages w przeglądarce na telefonie i:

- **Android (Chrome):** menu ⋮ → *Dodaj do ekranu głównego* / *Zainstaluj aplikację*.
- **iOS (Safari):** przycisk *Udostępnij* → *Dodaj do ekranu początkowego*.

Aplikacja zadziała potem także bez internetu.

## Edycja i dodawanie pytań

Wszystkie pytania znajdują się w `index.html`, w sekcji oznaczonej komentarzem
`BAZA PYTAŃ`. Dwie tablice:

- **`DECK`** — fiszki: `{ id, topic, q, a }`
- **`QUIZ`** — quiz: `{ id, topic, q, options:[...], correct: <indeks od 0>, explain }`

Pole `topic` musi odpowiadać jednemu z `id` z tablicy `TOPICS`
(`pub`, `explore`, `multi`, `bi`, `plsql`, `python`, `iot`, `barriers`).
Każdy wpis potrzebuje unikalnego `id`. Po edycji odśwież stronę.

## Uwaga

Materiał ma charakter pomocniczy do nauki — przed obroną warto zweryfikować
treści z notatkami z zajęć i aktualnymi zagadnieniami podanymi przez uczelnię.
