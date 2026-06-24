/* ============================================================
   Baza pytań - egzamin magisterski/dyplomowy, Informatyka (PL)
   Pełny zakres z trzech list zagadnien (25 dzialow).
   Fiszka:  { id, topic, q, a }
   Quiz:    { id, topic, q, options:[4], correct:<indeks 0..3>, explain }
   'topic' musi pasowac do 'id' z TOPICS. Edytuj swobodnie.
   ============================================================ */

const TOPICS = [
 {
  "id": "pub",
  "code": "PUB",
  "name": "Publikowanie artykułów naukowych"
 },
 {
  "id": "explore",
  "code": "EXD",
  "name": "Zaawansowana eksploracja i analiza danych"
 },
 {
  "id": "multi",
  "code": "MCR",
  "name": "Wnioskowanie wielokryterialne"
 },
 {
  "id": "bi",
  "code": "BI",
  "name": "Business Intelligence"
 },
 {
  "id": "plsql",
  "code": "SQL",
  "name": "Programowanie w PL/SQL"
 },
 {
  "id": "python",
  "code": "PY",
  "name": "Zaawansowane programowanie w Pythonie"
 },
 {
  "id": "iot",
  "code": "IOT",
  "name": "Internet Rzeczy"
 },
 {
  "id": "barriers",
  "code": "A11Y",
  "name": "Bariery w przestrzeni cyfrowej"
 },
 {
  "id": "cloud",
  "code": "CLD",
  "name": "Bezpieczeństwo środowiska i aplikacji chmurowych"
 },
 {
  "id": "crypto",
  "code": "CRY",
  "name": "Algorytmy kryptograficzne"
 },
 {
  "id": "netsec",
  "code": "NET",
  "name": "Bezpieczeństwo w sieciach komputerowych"
 },
 {
  "id": "access",
  "code": "ACC",
  "name": "Ochrona sieci dostępowych"
 },
 {
  "id": "telesec",
  "code": "TEL",
  "name": "Bezpieczeństwo sieci teleinformatycznych"
 },
 {
  "id": "ossec",
  "code": "OS",
  "name": "Bezpieczeństwo systemów operacyjnych i usług"
 },
 {
  "id": "websec",
  "code": "WEB",
  "name": "Bezpieczeństwo aplikacji internetowych"
 },
 {
  "id": "jee",
  "code": "JEE",
  "name": "Programowanie aplikacji internetowych w JEE"
 },
 {
  "id": "fullstack",
  "code": "FS",
  "name": "Programowanie full-stack w chmurze"
 },
 {
  "id": "swift",
  "code": "SWF",
  "name": "Zaawansowane programowanie w Swift"
 },
 {
  "id": "android",
  "code": "AND",
  "name": "Programowanie aplikacji mobilnych na Android"
 },
 {
  "id": "patterns",
  "code": "PAT",
  "name": "Wzorce projektowe i czysty kod"
 },
 {
  "id": "arch",
  "code": "ARCH",
  "name": "Architektura komputerów i systemy operacyjne"
 },
 {
  "id": "netbasics",
  "code": "NETB",
  "name": "Sieci komputerowe (podstawy)"
 },
 {
  "id": "dsp",
  "code": "DSP",
  "name": "Sygnały, multimedia i matematyka"
 },
 {
  "id": "elec",
  "code": "ELE",
  "name": "Elektronika"
 },
 {
  "id": "prog",
  "code": "PROG",
  "name": "Programowanie (podstawy)"
 }
];

const DECK = [
 {
  "id": "pub1",
  "topic": "pub",
  "q": "Struktura publikacji naukowych — schemat IMRaD.",
  "a": "IMRaD = Introduction, Methods, Results and Discussion — standardowy układ artykułu empirycznego. Wprowadzenie (cel, hipoteza, luka badawcza), Metody (jak przeprowadzono badanie — odtwarzalność), Wyniki (co uzyskano, bez interpretacji), Dyskusja (interpretacja, odniesienie do literatury, ograniczenia, wnioski). Towarzyszą: tytuł, abstrakt, słowa kluczowe, bibliografia."
 },
 {
  "id": "pub2",
  "topic": "pub",
  "q": "Identyfikator ORCID. Indeks Hirscha (h-index).",
  "a": "ORCID — trwały 16-cyfrowy identyfikator jednoznacznie odróżniający naukowca (rozwiązuje problem zbieżnych nazwisk), powiązany z dorobkiem. Indeks Hirscha (h): autor ma indeks h, gdy h jego publikacji ma co najmniej h cytowań każda; łączy produktywność z cytowalnością. Wada: zależy od dziedziny i stażu, nie maleje."
 },
 {
  "id": "pub3",
  "topic": "pub",
  "q": "Rodzaje artykułów naukowych.",
  "a": "Oryginalny artykuł badawczy, artykuł przeglądowy (review/systematic review), metaanaliza, komunikat/krótkie doniesienie (letter, short communication), studium przypadku (case study), artykuł koncepcyjny/teoretyczny, materiały konferencyjne, artykuł metodologiczny, data paper."
 },
 {
  "id": "pub4",
  "topic": "pub",
  "q": "Wskaźniki bibliometryczne. Lista Filadelfijska.",
  "a": "Wskaźniki: Impact Factor (JCR, Clarivate), CiteScore (Scopus), SJR, SNIP, h-index, liczba cytowań, kwartyl (Q1–Q4). Lista Filadelfijska — potoczna nazwa wykazu czasopism indeksowanych w bazach ISI/Web of Science (dawniej Institute for Scientific Information w Filadelfii, dziś Clarivate); obecność świadczy o renomie czasopisma."
 },
 {
  "id": "pub5",
  "topic": "pub",
  "q": "Bazy danych bibliograficznych. Baza Scopus.",
  "a": "Bazy: Scopus, Web of Science, Google Scholar, PubMed, IEEE Xplore, ACM DL, DBLP. Scopus (Elsevier) — duża baza abstraktów i cytowań recenzowanych czasopism, materiałów konferencyjnych i książek; dostarcza wskaźniki CiteScore, SJR, SNIP oraz narzędzia śledzenia cytowań i profili autorów."
 },
 {
  "id": "pub6",
  "topic": "pub",
  "q": "Narzędzia AI w pracy naukowca.",
  "a": "Wyszukiwanie i streszczanie literatury (Elicit, Semantic Scholar, Consensus), korekta i styl (Grammarly, DeepL Write), generowanie i parafraza (ChatGPT, Claude), zarządzanie bibliografią (Zotero, Mendeley), tłumaczenie, wykrywanie plagiatu. Ograniczenia: ryzyko halucynacji i błędnych cytowań, etyka i polityki wydawców (weryfikacja i ujawnianie użycia AI)."
 },
 {
  "id": "exd1",
  "topic": "explore",
  "q": "Metody zapisu danych przestrzennych. Typ SDO_GEOMETRY.",
  "a": "Dane przestrzenne zapisuje się jako geometrie wektorowe (punkt, linia, poligon) lub rastry. W Oracle Spatial służy do tego typ obiektowy SDO_GEOMETRY o atrybutach: SDO_GTYPE (typ i wymiar), SDO_SRID (układ współrzędnych), SDO_POINT, SDO_ELEM_INFO (budowa elementów), SDO_ORDINATES (tablica współrzędnych). Standardy: WKT/WKB, GeoJSON, Shapefile."
 },
 {
  "id": "exd2",
  "topic": "explore",
  "q": "Funkcje i operatory przestrzenne. Zapytania przestrzenne.",
  "a": "Operatory (korzystają z indeksu przestrzennego, np. R-drzewo): SDO_RELATE (relacje topologiczne: TOUCH, OVERLAP, INSIDE, CONTAINS), SDO_WITHIN_DISTANCE, SDO_NN (najbliższy sąsiad), SDO_FILTER. Funkcje SDO_GEOM: SDO_AREA, SDO_LENGTH, SDO_DISTANCE, SDO_BUFFER, SDO_INTERSECTION. Przykłady: obiekty w promieniu 5 km, przecięcia działek, najbliższy szpital."
 },
 {
  "id": "exd3",
  "topic": "explore",
  "q": "Analiza danych przestrzennych — przykładowe zastosowanie.",
  "a": "Analiza wzorców w przestrzeni: GIS, geomarketing, wyznaczanie tras, analiza gęstości (hot-spot), buforowanie, nakładanie warstw (overlay), autokorelacja przestrzenna (I Morana). Przykład: wybór lokalizacji sklepu — analiza gęstości klientów, odległości od konkurencji i dostępności komunikacyjnej w buforze, by zmaksymalizować zasięg."
 },
 {
  "id": "exd4",
  "topic": "explore",
  "q": "Metody identyfikacji obserwacji odstających. Omów jedną.",
  "a": "Metody: reguła 3 sigma / Z-score, rozstęp międzykwartylowy IQR (boxplot), odległość Mahalanobisa, LOF, Isolation Forest, DBSCAN, One-Class SVM. IQR: liczymy Q1, Q3 oraz IQR = Q3 − Q1; obserwacja jest odstająca, gdy leży poniżej Q1 − 1,5·IQR lub powyżej Q3 + 1,5·IQR. Metoda nieparametryczna, odporna na rozkład."
 },
 {
  "id": "exd5",
  "topic": "explore",
  "q": "Metody estymacji gęstości rozkładu prawdopodobieństwa. Omów jedną.",
  "a": "Metody parametryczne (dopasowanie rozkładu, MLE), histogram, estymator jądrowy KDE, k-najbliższych sąsiadów, mieszaniny rozkładów (GMM). KDE: gęstość estymujemy jako sumę funkcji jądrowych (np. gaussowskich) nad każdą obserwacją; kluczowy parametr to szerokość pasma h (bandwidth) — za mała daje przeszumienie, za duża nadmierne wygładzenie. Metoda nieparametryczna."
 },
 {
  "id": "exd6",
  "topic": "explore",
  "q": "ANOVA, MANOVA — postawienie zagadnienia i zastosowania.",
  "a": "ANOVA testuje, czy średnie jednej zmiennej zależnej różnią się między co najmniej 3 grupami; H0: wszystkie średnie równe; statystyka F porównuje wariancję międzygrupową z wewnątrzgrupową. MANOVA — uogólnienie na wiele zmiennych zależnych jednocześnie (uwzględnia korelacje, np. test Wilksa). Zastosowania: porównanie metod/leków; zaleta — kontrola błędu I rodzaju."
 },
 {
  "id": "exd7",
  "topic": "explore",
  "q": "Modele regresji. Regresja wielokrotna — postawienie zagadnienia.",
  "a": "Regresja modeluje zależność zmiennej zależnej (ciągłej) od predyktorów. Regresja wielokrotna: y = b0 + b1·x1 + ... + bk·xk + e. Współczynniki estymuje się metodą najmniejszych kwadratów (OLS). Cel: predykcja i ocena wpływu zmiennych. Założenia: liniowość, niezależność i normalność reszt, homoskedastyczność, brak współliniowości."
 },
 {
  "id": "exd8",
  "topic": "explore",
  "q": "Metody redukcji wymiaru i liczności próby. Omów jedną.",
  "a": "Redukcja wymiaru: PCA, LDA, t-SNE, UMAP, autoenkodery, selekcja cech (filter/wrapper/embedded). Redukcja liczności: próbkowanie (losowe, warstwowe), prototypy/klasteryzacja, agregacja. PCA: rzutowanie na ortogonalne składowe główne (wektory własne macierzy kowariancji) uporządkowane wg malejącej wyjaśnianej wariancji; odrzuca mało istotne kierunki przy minimalnej stracie informacji."
 },
 {
  "id": "exd9",
  "topic": "explore",
  "q": "Metody analizy skupień. Omów jedną.",
  "a": "Metody: k-średnich, hierarchiczna (aglomeracyjna/dzieląca), DBSCAN (gęstościowa), EM/GMM, k-medoids, spektralna. k-średnich: zadajemy k, inicjalizujemy centroidy, iteracyjnie przypisujemy punkty do najbliższego centroidu i przeliczamy centroidy jako średnie — aż do zbieżności. Minimalizuje sumę kwadratów odległości wewnątrz skupień (WCSS); wrażliwa na k, inicjalizację i skalę cech."
 },
 {
  "id": "exd10",
  "topic": "explore",
  "q": "Systemy rekomendacji — rodzaje i przykład.",
  "a": "Rodzaje: filtrowanie kolaboracyjne (user-based / item-based, faktoryzacja macierzy), oparte na treści (content-based), oparte na wiedzy, hybrydowe. Przykład — kolaboracyjne item-based: szuka przedmiotów podobnych do wysoko ocenionych przez użytkownika (podobieństwo np. kosinusowe) i je rekomenduje. Problemy: zimny start, rzadkość macierzy ocen, skalowalność."
 },
 {
  "id": "exd11",
  "topic": "explore",
  "q": "Metody porównania modeli uczenia maszynowego. Omów na przykładzie.",
  "a": "Porównujemy modele na tym samym zbiorze przy walidacji krzyżowej (k-fold, 5x2 cv). Istotność różnic ocenia się testami: sparowany t-test, test McNemara (klasyfikacja), test Friedmana + post-hoc Nemenyiego (wiele modeli, wiele zbiorów). Przykład: dwa klasyfikatory oceniamy 10-krotną CV, liczymy różnice F1 na foldach i sparowanym t-testem sprawdzamy, czy średnia różnica jest istotna."
 },
 {
  "id": "exd12",
  "topic": "explore",
  "q": "Ocena jakości modeli klasyfikacyjnych.",
  "a": "Podstawą jest macierz pomyłek (TP, FP, FN, TN). Metryki: accuracy, precyzja = TP/(TP+FP), czułość/recall = TP/(TP+FN), F1 (średnia harmoniczna precyzji i czułości), specyficzność, krzywa ROC i AUC, krzywa PR, log-loss, MCC. Przy niezbalansowanych klasach accuracy myli — lepiej F1, AUC-PR, MCC."
 },
 {
  "id": "exd13",
  "topic": "explore",
  "q": "Ocena jakości modeli regresyjnych i prognozujących.",
  "a": "Metryki błędu: MAE, MSE i RMSE (karzą duże błędy), MAPE (procentowo), R2 (udział wyjaśnionej wariancji), skorygowane R2. Dla prognoz: błąd liczony out-of-sample, MASE, analiza reszt (losowość, brak autokorelacji), porównanie z modelem naiwnym/sezonowym."
 },
 {
  "id": "exd14",
  "topic": "explore",
  "q": "Ocena jakości modeli analizy skupień.",
  "a": "Miary wewnętrzne (bez etykiet): wskaźnik sylwetki (silhouette), indeks Daviesa-Bouldina (mniej = lepiej), Calińskiego-Harabasza, WCSS + metoda łokcia do doboru k. Miary zewnętrzne (przy znanym podziale): indeks Randa i ARI, NMI, homogeniczność i kompletność. Ocenia się zwartość i separację skupień."
 },
 {
  "id": "exd15",
  "topic": "explore",
  "q": "Statystyczne sterowanie procesem (SPC) — cel i metody.",
  "a": "Cel: monitorowanie stabilności procesu i odróżnianie zmienności losowej (przyczyny wspólne) od przyczyn specjalnych (sygnał do interwencji). Metody: karty kontrolne Shewharta (X-R, X-S, p, np, c, u) z linią centralną i granicami +/-3 sigma, reguły Western Electric, analiza zdolności procesu (Cp, Cpk), histogram, diagram Pareto, diagram Ishikawy."
 },
 {
  "id": "mcr1",
  "topic": "multi",
  "q": "Główne zadania normalizacji wartości kryteriów optymalizacji.",
  "a": "Normalizacja sprowadza kryteria o różnych jednostkach i zakresach do wspólnej, porównywalnej i bezwymiarowej skali (najczęściej [0,1]), by można je agregować i ważyć. Ujednolica też kierunek optymalizacji — kryteria typu koszt przekształca tak, by większa wartość znaczyła lepiej, jak dla kryteriów typu zysk. Metody: min-max, normalizacja wektorowa, dzielenie przez maksimum/sumę."
 },
 {
  "id": "mcr2",
  "topic": "multi",
  "q": "Na czym polega metoda leksykograficzna?",
  "a": "Kryteria porządkuje się według malejącej ważności. Najpierw optymalizuje się najważniejsze kryterium; spośród wariantów najlepszych pod jego względem wybiera się najlepsze pod względem kolejnego itd. Metoda niekompensacyjna — przewaga w kryterium ważniejszym nie może być zrekompensowana przewagą w mniej ważnym."
 },
 {
  "id": "mcr3",
  "topic": "multi",
  "q": "Jak wyznacza się wagi ważności kryteriów w metodzie AHP?",
  "a": "AHP (Saaty): tworzy się macierz porównań parami kryteriów w skali 1–9. Wagi to znormalizowany wektor własny odpowiadający największej wartości własnej (w praktyce: normalizacja kolumn i uśrednienie wierszy). Spójność ocen sprawdza się współczynnikiem CR = CI/RI; akceptowalne, gdy CR < 0,1."
 },
 {
  "id": "mcr4",
  "topic": "multi",
  "q": "Warianty optymalne w sensie Pareto.",
  "a": "Wariant jest optymalny w sensie Pareto (niezdominowany), gdy nie istnieje inny wariant lepszy od niego w co najmniej jednym kryterium bez pogorszenia w którymkolwiek innym. Zbiór takich wariantów tworzy front Pareto — rozwiązania kompromisowe, spośród których decydent wybiera ostateczne."
 },
 {
  "id": "mcr5",
  "topic": "multi",
  "q": "Scharakteryzuj metodę Blina.",
  "a": "Metoda Blina należy do metod opartych na relacjach preferencji i porządkach (teoria wyboru społecznego, pokrewna Condorcetowi). Z indywidualnych rankingów wariantów wg poszczególnych kryteriów buduje się macierz częstości preferencji, a następnie wyznacza ranking zbiorowy najbliższy preferencjom cząstkowym, minimalizujący łączną niezgodność."
 },
 {
  "id": "bi1",
  "topic": "bi",
  "q": "Różnice między hurtownią danych a data mart.",
  "a": "Hurtownia danych (DW) to scentralizowane, zintegrowane repozytorium danych całej organizacji, obejmujące wiele obszarów i długą historię. Data mart to mniejszy, tematyczny wycinek dla jednego działu (np. sprzedaż). Marty bywają zależne (z DW) lub niezależne. Różnice: zakres, wielkość, odbiorca, czas wdrożenia."
 },
 {
  "id": "bi2",
  "topic": "bi",
  "q": "Modele danych stosowane w hurtowniach danych.",
  "a": "Schemat gwiazdy (star) — centralna tabela faktów + zdenormalizowane wymiary; prosty i szybki. Schemat płatka śniegu (snowflake) — wymiary znormalizowane (podtabele); mniej redundancji, więcej złączeń. Schemat konstelacji faktów (galaxy) — wiele tabel faktów współdzielących wymiary."
 },
 {
  "id": "bi3",
  "topic": "bi",
  "q": "Możliwe architektury hurtowni danych.",
  "a": "Jednowarstwowa (rzadka), dwuwarstwowa (źródła do DW), trójwarstwowa: źródła + staging/ODS do hurtowni do warstwy prezentacji (OLAP, raporty). Podejścia: Inmona (top-down, korporacyjna znormalizowana DW, z niej marty) i Kimballa (bottom-up, najpierw wymiarowe data marty łączone magistralą)."
 },
 {
  "id": "bi4",
  "topic": "bi",
  "q": "Różnice między hurtownią danych a systemem klasy ERP.",
  "a": "ERP to system transakcyjny (OLTP) wspierający bieżące procesy — dane aktualne, model znormalizowany, krótkie operacje zapisu/odczytu. Hurtownia to system analityczny (OLAP) — dane historyczne i zagregowane, model zdenormalizowany, zoptymalizowany pod złożone zapytania odczytu i wspomaganie decyzji. ERP zasila DW przez ETL."
 },
 {
  "id": "bi5",
  "topic": "bi",
  "q": "Pojęcia: Fakt, Wymiar, Miara — z przykładami.",
  "a": "Fakt — zdarzenie/proces biznesowy będący przedmiotem analizy (np. transakcja sprzedaży). Miara — liczbowy, agregowalny atrybut faktu (kwota, liczba sztuk, marża). Wymiar — kontekst opisujący fakt, po którym analizujemy miary (Czas: rok/kwartał/dzień; Produkt; Klient; Lokalizacja)."
 },
 {
  "id": "bi6",
  "topic": "bi",
  "q": "Procesy w ramach działań ETL.",
  "a": "Extract — pobranie danych ze źródeł (bazy, pliki, API). Transform — czyszczenie i ujednolicenie: usuwanie duplikatów, uzupełnianie braków, konwersje, walidacja, standaryzacja, agregacje, klucze zastępcze. Load — załadowanie do hurtowni (pełne lub przyrostowe). Wariant ELT przenosi transformacje do bazy docelowej."
 },
 {
  "id": "bi7",
  "topic": "bi",
  "q": "Wymiary wolnozmienne (SCD) — zastosowanie i rodzaje.",
  "a": "SCD obsługują zmiany atrybutów wymiaru w czasie, zachowując poprawność analiz historycznych. Typy: 0 — bez zmian; 1 — nadpisanie (brak historii); 2 — nowy wiersz z wersją i datami obowiązywania (pełna historia); 3 — dodatkowa kolumna z poprzednią wartością (ograniczona historia); 4/6 — hybrydowe."
 },
 {
  "id": "bi8",
  "topic": "bi",
  "q": "Architektura systemu Business Intelligence.",
  "a": "Warstwy: (1) źródła danych (OLTP/ERP, pliki, strumienie); (2) integracja — ETL/ELT i staging; (3) skład — hurtownia i data marty; (4) warstwa analityczna — kostki OLAP, data mining; (5) prezentacja — raporty, dashboardy, eksploracja ad-hoc. Całość spinają metadane i zarządzanie jakością danych."
 },
 {
  "id": "bi9",
  "topic": "bi",
  "q": "Operacje realizowane w ramach ROLAP.",
  "a": "ROLAP realizuje OLAP na relacyjnej bazie (SQL na schemacie gwiazdy). Operacje: roll-up (agregacja w górę hierarchii), drill-down (uszczegółowienie w dół), slice (wybór jednej wartości jednego wymiaru), dice (podkostka — zakresy kilku wymiarów), pivot/rotate (obrót układu wymiarów)."
 },
 {
  "id": "bi10",
  "topic": "bi",
  "q": "Wiodące narzędzia BI i ich funkcjonalności.",
  "a": "Power BI, Tableau, Qlik (QlikView/Sense), Microsoft BI (SSIS — ETL, SSAS — kostki/model, SSRS — raporty), Oracle BI, SAP BusinessObjects, Looker. Funkcje: łączenie i modelowanie danych, ETL, kostki OLAP, interaktywne dashboardy i wizualizacje, raportowanie, eksploracja, udostępnianie."
 },
 {
  "id": "sql1",
  "topic": "plsql",
  "q": "Ogólna budowa bloku PL/SQL.",
  "a": "Blok ma trzy sekcje: DECLARE (opcjonalna — deklaracje zmiennych, kursorów, typów, wyjątków), BEGIN (obowiązkowa — instrukcje wykonywalne), EXCEPTION (opcjonalna — obsługa wyjątków) oraz END. Bloki bywają anonimowe lub nazwane (procedury, funkcje, pakiety, wyzwalacze) i można je zagnieżdżać."
 },
 {
  "id": "sql2",
  "topic": "plsql",
  "q": "Czym są kursory i do czego się je wykorzystuje?",
  "a": "Kursor to wskaźnik na obszar roboczy ze zbiorem wynikowym zapytania, umożliwiający przetwarzanie wyników wiersz po wierszu. Niejawne tworzą się automatycznie dla pojedynczych instrukcji; jawne deklaruje programista i obsługuje (OPEN, FETCH, CLOSE) przy wielu wierszach. Atrybuty: %FOUND, %NOTFOUND, %ROWCOUNT, %ISOPEN."
 },
 {
  "id": "sql3",
  "topic": "plsql",
  "q": "Jakie działania realizuje pętla kursora?",
  "a": "Pętla FOR rekord IN kursor LOOP ... END LOOP automatycznie otwiera kursor, pobiera kolejne wiersze do zmiennej rekordowej, iteruje aż do wyczerpania zbioru i na końcu zamyka kursor. Upraszcza kod — bez ręcznego OPEN/FETCH/CLOSE i sprawdzania %NOTFOUND."
 },
 {
  "id": "sql4",
  "topic": "plsql",
  "q": "Czym są wyjątki i jak się nimi posługiwać w PL/SQL?",
  "a": "Wyjątek to sygnał błędu w czasie wykonania, przechwytywany w sekcji EXCEPTION (WHEN nazwa THEN ...). Predefiniowane: NO_DATA_FOUND, TOO_MANY_ROWS, ZERO_DIVIDE, DUP_VAL_ON_INDEX. Własne zgłasza się RAISE, a komunikaty — RAISE_APPLICATION_ERROR. WHEN OTHERS łapie pozostałe; SQLCODE/SQLERRM dają kod i opis."
 },
 {
  "id": "sql5",
  "topic": "plsql",
  "q": "Definiowanie i posługiwanie się funkcjami i procedurami PL/SQL.",
  "a": "Procedura wykonuje akcję i nie musi zwracać wartości; parametry IN, OUT, IN OUT. Funkcja zawiera RETURN i zwraca jedną wartość, więc można jej użyć w wyrażeniu. Składnia: CREATE [OR REPLACE] PROCEDURE/FUNCTION nazwa(param) IS ... BEGIN ... END. Procedurę wywołuje się jako instrukcję, funkcję jako element wyrażenia."
 },
 {
  "id": "sql6",
  "topic": "plsql",
  "q": "Składowane procedury i funkcje — definiowanie i zastosowanie.",
  "a": "To nazwane, skompilowane jednostki zapisane w bazie (CREATE OR REPLACE ...). Zalety: wielokrotne użycie i centralizacja logiki, mniejszy ruch sieciowy, lepsza wydajność, bezpieczeństwo (uprawnienia EXECUTE zamiast bezpośredniego dostępu do tabel), spójność reguł. Wywoływane z aplikacji, procedur, wyzwalaczy."
 },
 {
  "id": "sql7",
  "topic": "plsql",
  "q": "Rodzaje kolekcji w PL/SQL.",
  "a": "Tablice asocjacyjne (index-by) — indeksowane liczbą lub łańcuchem, rozmiar nieograniczony, tylko w PL/SQL. VARRAY — uporządkowane, o zadanym maksymalnym rozmiarze, gęste, mogą być kolumną tabeli. Tablice zagnieżdżone (nested tables) — bez ustalonego maksimum, mogą być rzadkie, przechowywane w bazie. Służą do list/zbiorów wartości tego samego typu."
 },
 {
  "id": "sql8",
  "topic": "plsql",
  "q": "Czym są wyzwalacze bazy danych?",
  "a": "Wyzwalacz (trigger) to nazwany blok uruchamiany automatycznie w reakcji na zdarzenie: DML (INSERT/UPDATE/DELETE), DDL, systemowe. Atrybuty: BEFORE/AFTER, na poziomie wiersza (FOR EACH ROW, z :NEW/:OLD) lub instrukcji. Zastosowania: walidacja i reguły biznesowe, audyt, spójność i wartości pochodne, autonumeracja."
 },
 {
  "id": "sql9",
  "topic": "plsql",
  "q": "Pakiety PL/SQL — tworzenie, zawartość, zastosowanie.",
  "a": "Pakiet grupuje powiązane obiekty: procedury, funkcje, typy, kursory, zmienne. Składa się ze specyfikacji (CREATE PACKAGE — interfejs publiczny) i ciała (CREATE PACKAGE BODY — implementacja i elementy prywatne). Zalety: modularność i hermetyzacja, ukrycie implementacji, przeładowanie, wydajność, stan w sesji."
 },
 {
  "id": "sql10",
  "topic": "plsql",
  "q": "Dynamiczny SQL i PL/SQL — charakterystyka i przykład.",
  "a": "To budowanie i wykonywanie instrukcji w czasie działania, gdy ich treść (np. nazwa tabeli, warunki) nie jest znana podczas kompilacji. Realizacja: EXECUTE IMMEDIATE 'instrukcja' [USING ...] lub pakiet DBMS_SQL. Przykład: EXECUTE IMMEDIATE 'DROP TABLE ' || nazwa. Należy używać zmiennych wiązanych (USING), by uniknąć SQL injection."
 },
 {
  "id": "py1",
  "topic": "python",
  "q": "Co to są i do czego służą dekoratory funkcji?",
  "a": "Dekorator to funkcja przyjmująca inną funkcję i zwracająca jej zmodyfikowaną wersję — dodaje zachowanie bez zmiany kodu udekorowanego (składnia @dekorator). Zastosowania: logowanie, pomiar czasu, cache (functools.lru_cache), kontrola dostępu, walidacja, rejestrowanie. functools.wraps zachowuje metadane oryginału."
 },
 {
  "id": "py2",
  "topic": "python",
  "q": "Co to są metaklasy i jakie mają zastosowania?",
  "a": "Metaklasa to klasa, której instancjami są klasy — kontroluje tworzenie i konfigurację klas. Domyślną jest type; własne dziedziczą po type i nadpisują __new__/__init__. Zastosowania: ORM (mapowanie pól na kolumny), automatyczna rejestracja klas (pluginy), wymuszanie konwencji i walidacja definicji, wzorce (singleton)."
 },
 {
  "id": "py3",
  "topic": "python",
  "q": "Mechanizm obsługi wyjątków try-except.",
  "a": "try zawiera kod mogący zgłosić wyjątek; except przechwytuje wskazany typ (wiele bloków/krotki typów); else wykonuje się przy braku wyjątku; finally — zawsze (sprzątanie zasobów). Wyjątek zgłasza się przez raise. Praktyki: łapać konkretne typy, nie używać gołego except, używać menedżerów kontekstu (with)."
 },
 {
  "id": "py4",
  "topic": "python",
  "q": "Co to są i do czego służą klasy abstrakcyjne?",
  "a": "Klasa abstrakcyjna definiuje wspólny interfejs, ale nie może być bezpośrednio zinstancjonowana; tworzy się ją po abc.ABC (lub z ABCMeta). Metody @abstractmethod muszą być zaimplementowane w podklasach. Zapewnia kontrakt (polimorfizm) i wymusza spójność implementacji w hierarchii."
 },
 {
  "id": "py5",
  "topic": "python",
  "q": "Metody specjalne (dunder) — po co i przykład.",
  "a": "Metody __nazwa__ pozwalają obiektom współpracować ze składnią języka i przeciążać operatory. Przykłady: __init__ (inicjalizacja), __str__/__repr__ (reprezentacje), __len__ (len()), __eq__/__lt__ (porównania), __add__ (+), __iter__/__next__ (iteracja), __getitem__ (indeksowanie). __str__ zwraca czytelny opis używany przez print()/str()."
 },
 {
  "id": "py6",
  "topic": "python",
  "q": "Funkcje lambda — czym są i zastosowania.",
  "a": "Lambda to anonimowa funkcja jednowyrażeniowa: lambda argumenty: wyrażenie. Zwraca wynik bez słowa return. Stosuje się je jako krótkie funkcje przekazywane jako argument: klucz sortowania (sorted(..., key=lambda x: x[1])), map(), filter(), callbacki. Do złożonej logiki lepsza jest funkcja def."
 },
 {
  "id": "py7",
  "topic": "python",
  "q": "Co to jest funkcja mapująca w Pythonie?",
  "a": "map(funkcja, iterowalne, ...) stosuje funkcję do każdego elementu obiektu(ów) iterowalnych i zwraca leniwy iterator (Python 3). Wynik często opakowuje się w list()/tuple(). Przykład: list(map(str.upper, ['a','b'])) daje ['A','B']. Alternatywą bywa list comprehension."
 },
 {
  "id": "py8",
  "topic": "python",
  "q": "Czym różnią się *args i **kwargs?",
  "a": "*args zbiera dowolną liczbę argumentów pozycyjnych w krotkę; **kwargs zbiera argumenty nazwane (klucz=wartość) w słownik. Pozwalają tworzyć funkcje o zmiennej liczbie parametrów i przekazywać argumenty dalej (f(*lista, **slownik)). Przykład: def f(*args, **kwargs); f(1,2,a=3) daje args=(1,2), kwargs={'a':3}."
 },
 {
  "id": "py9",
  "topic": "python",
  "q": "Jak działa list comprehension?",
  "a": "To zwięzła składnia tworzenia listy: [wyrażenie for element in iterowalne if warunek]. Łączy iterację, transformację i filtrowanie, jest czytelniejsza i zwykle szybsza od pętli z append(). Przykład: [x*x for x in range(10) if x % 2 == 0]. Istnieją też set/dict comprehension i wyrażenia generatorowe."
 },
 {
  "id": "py10",
  "topic": "python",
  "q": "Jak działa metoda __init__ w klasie?",
  "a": "__init__ to inicjalizator wywoływany automatycznie po utworzeniu obiektu (po __new__) przy Klasa(...). Pierwszy parametr self to referencja do instancji; w ciele ustawia się atrybuty (self.pole = wartość). Nie zwraca wartości. To konstruktor w potocznym sensie, choć obiekt formalnie tworzy __new__."
 },
 {
  "id": "iot1",
  "topic": "iot",
  "q": "Krótko opisz zagadnienie Internetu Rzeczy.",
  "a": "Internet Rzeczy (IoT) to sieć fizycznych obiektów z czujnikami, oprogramowaniem i łącznością, które zbierają dane o otoczeniu, wymieniają je przez sieć i mogą być zdalnie monitorowane oraz sterowane. Warstwy: percepcji (sensory/aktuatory), sieci, przetwarzania (chmura/edge), aplikacji. Zastosowania: smart home, przemysł 4.0, miasta, rolnictwo, zdrowie."
 },
 {
  "id": "iot2",
  "topic": "iot",
  "q": "Magistrala, interfejs, protokół — charakterystyka i różnice.",
  "a": "Magistrala to wspólny zestaw linii do przesyłania danych między układami (I2C, SPI, CAN) — fizyczny kanał współdzielony. Interfejs to punkt/standard połączenia (sprzętowy lub programowy) określający, jak urządzenia się łączą (UART, USB). Protokół to reguły komunikacji (format ramek, kolejność, timing, kontrola błędów). Różnica: magistrala = medium, interfejs = sposób połączenia, protokół = reguły."
 },
 {
  "id": "iot3",
  "topic": "iot",
  "q": "Mikrokontroler a mikroprocesor — różnice.",
  "a": "Mikrokontroler to kompletny komputer w jednym układzie (CPU + RAM i ROM/Flash + peryferia I/O), do sterowania, tani, energooszczędny, autonomiczny (AVR, STM32, ESP32). Mikroprocesor to sam rdzeń obliczeniowy (CPU) — wymaga zewnętrznej pamięci i peryferiów, ma większą moc, stosowany w komputerach/serwerach (x86)."
 },
 {
  "id": "iot4",
  "topic": "iot",
  "q": "Co oznacza skrót CISC?",
  "a": "CISC = Complex Instruction Set Computer. Architektura z rozbudowanym zestawem złożonych instrukcji o zmiennej długości; pojedyncza instrukcja może wykonać wiele operacji. Cechy: mniej instrukcji w programie, skomplikowany dekoder, instrukcje wielocyklowe, mniej rejestrów. Przykład: x86."
 },
 {
  "id": "iot5",
  "topic": "iot",
  "q": "Co oznacza skrót RISC?",
  "a": "RISC = Reduced Instruction Set Computer. Uproszczony zestaw prostych instrukcji o stałej długości, zwykle w jednym cyklu. Cechy: dużo rejestrów, architektura load/store, łatwy potok (pipelining), prosty dekoder, dłuższy kod ale szybkie i energooszczędne wykonanie. Przykłady: ARM, RISC-V, MIPS."
 },
 {
  "id": "iot6",
  "topic": "iot",
  "q": "UART a USRT — opis i różnice.",
  "a": "UART (asynchroniczny) — brak wspólnego zegara, synchronizacja przez bity startu i stopu oraz ustaloną prędkość (baud); prostsze okablowanie, mniejsze prędkości. USRT (synchroniczny) — wspólny sygnał zegarowy nadawcy i odbiornika, wyższe i pewniejsze prędkości kosztem dodatkowej linii zegara. USART łączy oba tryby."
 },
 {
  "id": "iot7",
  "topic": "iot",
  "q": "Czym jest i co powoduje pojemność pasożytnicza?",
  "a": "To niepożądana pojemność elektryczna między blisko położonymi przewodnikami (ścieżki, wyprowadzenia, uzwojenia), wynikająca z geometrii układu. Powoduje opóźnienia i zaokrąglanie zboczy (filtr RC), ograniczenie maksymalnej częstotliwości, przesłuchy (crosstalk) i zakłócenia. Minimalizuje się ją projektem PCB i ekranowaniem."
 },
 {
  "id": "iot8",
  "topic": "iot",
  "q": "Cechy sensora inteligentnego.",
  "a": "Ma wbudowany mikrokontroler i potrafi: kondycjonować i wstępnie przetwarzać sygnał, konwertować A/C, kalibrować się i kompensować temperaturę, prowadzić autodiagnostykę, komunikować się cyfrowo (standardowy interfejs, adresowalność), filtrować i agregować dane. Odciąża system nadrzędny i dostarcza wiarygodne odczyty."
 },
 {
  "id": "iot9",
  "topic": "iot",
  "q": "Czym są i do czego służą aktuatory?",
  "a": "Aktuatory (elementy wykonawcze) przekształcają sygnał sterujący i energię (elektryczną, pneumatyczną, hydrauliczną) na działanie fizyczne — ruch, siłę, ciepło. Realizują reakcję systemu na otoczenie. Przykłady: silniki, serwa, siłowniki, zawory, przekaźniki, grzałki. W IoT zamykają pętlę: sensor mierzy, system decyduje, aktuator wykonuje."
 },
 {
  "id": "iot10",
  "topic": "iot",
  "q": "Zasada działania modulacji szerokości impulsów (PWM).",
  "a": "PWM to sygnał prostokątny o stałej częstotliwości, w którym zmienia się współczynnik wypełnienia (duty cycle) — stosunek czasu stanu wysokiego do okresu. Średnia wartość/moc jest proporcjonalna do wypełnienia, więc reguluje się ją bez strat regulacji liniowej. Zastosowania: jasność LED, prędkość silników, sterowanie serwami, przetwornice."
 },
 {
  "id": "a11y1",
  "topic": "barriers",
  "q": "Projektowanie uniwersalne — idea, przepisy, zasady.",
  "a": "Idea: projektowanie produktów i usług użytecznych dla jak najszerszego grona bez potrzeby adaptacji, niezależnie od sprawności. 7 zasad: równość wykorzystania, elastyczność, prostota i intuicyjność, czytelność informacji, tolerancja błędów, niski wysiłek fizyczny, odpowiednia wielkość i przestrzeń. Przepisy: Konwencja ONZ o prawach osób niepełnosprawnych, European Accessibility Act, ustawa o dostępności cyfrowej."
 },
 {
  "id": "a11y2",
  "topic": "barriers",
  "q": "Ergonomia interfejsów oprogramowania — definicja, obszary, typy.",
  "a": "To dostosowanie interakcji do możliwości i ograniczeń percepcyjnych, poznawczych i motorycznych użytkownika, by praca była wydajna i komfortowa. Obszary: percepcja (czytelność, kontrast, układ), poznanie (obciążenie pamięci, zrozumiałość), motoryka (dostępność i wielkość elementów). Typy: ergonomia fizyczna, poznawcza, organizacyjna."
 },
 {
  "id": "a11y3",
  "topic": "barriers",
  "q": "Użyteczność i dostępność interfejsu oprogramowania.",
  "a": "Użyteczność (ISO 9241-11) — stopień, w jakim użytkownicy realizują cele skutecznie, wydajnie i z satysfakcją; obejmuje naukę obsługi i niski poziom błędów. Dostępność — możliwość korzystania przez osoby z różnymi niepełnosprawnościami. Relacja: dostępność jest warunkiem użyteczności dla wszystkich."
 },
 {
  "id": "a11y4",
  "topic": "barriers",
  "q": "Technologie wspomagające osoby z niepełnosprawnościami.",
  "a": "Czytniki ekranu (NVDA, JAWS, VoiceOver) i syntezatory mowy, monitory brajlowskie, programy powiększające i tryb wysokiego kontrastu, alternatywne klawiatury i przełączniki, sterowanie głosem i wzrokiem (eye-tracking), napisy i transkrypcje, komunikacja wspomagająca (AAC). Współpracują z oprogramowaniem przez interfejsy dostępności (ARIA)."
 },
 {
  "id": "a11y5",
  "topic": "barriers",
  "q": "Wytyczne WCAG 2.1 — zasady, poziomy, weryfikacja.",
  "a": "WCAG 2.1 opiera się na 4 zasadach (POUR): Postrzegalność, Funkcjonalność, Zrozumiałość, Solidność. Kryteria sukcesu mają 3 poziomy: A (minimum), AA (standard wymagany prawnie), AAA (najwyższy). Weryfikacja: narzędzia automatyczne (axe, Lighthouse, WAVE), testy manualne (klawiatura, czytnik ekranu) oraz testy z użytkownikami."
 },
 {
  "id": "a11y6",
  "topic": "barriers",
  "q": "Metody oceny jakości interfejsu — klasyfikacja, typy.",
  "a": "Podział: metody z udziałem użytkowników (empiryczne — testy użyteczności, ankiety, wywiady, eye-tracking) i bez udziału (inspekcyjne/analityczne — ocena heurystyczna, wędrówka poznawcza, przegląd ekspercki, listy kontrolne). Inny podział: formatywne (w trakcie projektowania) vs sumatywne (ocena gotowego produktu); ilościowe vs jakościowe."
 },
 {
  "id": "a11y7",
  "topic": "barriers",
  "q": "Techniki oceny z udziałem i bez udziału użytkowników.",
  "a": "Z udziałem: testy użyteczności (think-aloud), testy A/B, ankiety (np. SUS), wywiady, obserwacja, eye-tracking, analiza logów. Bez udziału: ocena heurystyczna (Nielsen), wędrówka poznawcza (cognitive walkthrough), przegląd ekspercki, audyt wg WCAG, modele predykcyjne (GOMS/KLM)."
 },
 {
  "id": "a11y8",
  "topic": "barriers",
  "q": "Metodyka SUS (System Usability Scale).",
  "a": "SUS to standaryzowany kwestionariusz: 10 stwierdzeń w 5-stopniowej skali Likerta, naprzemiennie pozytywne i negatywne. Po przeliczeniu (wkład 0–4, suma x2,5) uzyskuje się wynik 0–100. Około 68 to średnia; powyżej oznacza dobrą użyteczność. Zalety: szybki, tani, wiarygodny dla małych prób, porównywalny."
 },
 {
  "id": "a11y9",
  "topic": "barriers",
  "q": "Ocena heurystyczna — heurystyki Nielsena-Molicha.",
  "a": "To inspekcja interfejsu przez ekspertów wg 10 zasad Nielsena: widoczność stanu systemu; zgodność z rzeczywistością; kontrola i swoboda użytkownika; spójność i standardy; zapobieganie błędom; rozpoznawanie zamiast przypominania; elastyczność i efektywność; estetyka i minimalizm; pomoc w naprawie błędów; pomoc i dokumentacja. Zaleca się 3–5 ewaluatorów."
 },
 {
  "id": "a11y10",
  "topic": "barriers",
  "q": "Okulografia — idea, urządzenia, eksperyment, rezultaty.",
  "a": "Okulografia (eye-tracking) bada, gdzie i jak długo patrzy użytkownik. Urządzenia (okulografy) używają kamer i podczerwieni rejestrującej odbicie od rogówki. Mierzy fiksacje, sakkady i ścieżki wzroku. Eksperyment: użytkownik wykonuje zadania, a system zapisuje punkty spojrzeń. Rezultaty: mapy cieplne (heatmapy), ścieżki spojrzeń, czas do pierwszej fiksacji — pokazują, co przyciąga uwagę."
 },
 {
  "id": "cld1",
  "topic": "cloud",
  "q": "Cechy chmury obliczeniowej wg NIST.",
  "a": "Pięć cech: samoobsługa na żądanie (on-demand self-service), szeroki dostęp sieciowy (broad network access), pula współdzielonych zasobów (resource pooling, wielodostępność), szybka elastyczność (rapid elasticity — skalowanie w górę/dół) oraz mierzalność usługi (measured service — rozliczanie wg zużycia)."
 },
 {
  "id": "cld2",
  "topic": "cloud",
  "q": "Główne zagrożenia bezpieczeństwa chmury.",
  "a": "Błędna konfiguracja, słabe zarządzanie tożsamością i poświadczeniami, niezabezpieczone interfejsy/API, wyciek i utrata danych, ryzyka współdzielenia zasobów (multi-tenancy), zagrożenia wewnętrzne, przejęcie konta, brak widoczności i kontroli, ataki DoS/DDoS oraz kwestie zgodności i lokalizacji danych."
 },
 {
  "id": "cld3",
  "topic": "cloud",
  "q": "Modele chmur komputerowych.",
  "a": "Modele wdrożenia: publiczna, prywatna, hybrydowa, społecznościowa (community). Modele usług: IaaS (infrastruktura), PaaS (platforma), SaaS (oprogramowanie); czasem dodaje się FaaS/serverless. Różnią się zakresem odpowiedzialności i kontroli klienta."
 },
 {
  "id": "cld4",
  "topic": "cloud",
  "q": "Czy do bezpieczeństwa chmury trzeba podchodzić inaczej niż w klasycznym IT?",
  "a": "Tak. Obowiązuje model współodpowiedzialności (shared responsibility), brak fizycznego dostępu, dynamiczne i efemeryczne zasoby, API jako duża powierzchnia ataku, wielodostępność, szybka skalowalność oraz kwestie jurysdykcji i zgodności. Klasyczne metody trzeba uzupełnić o zarządzanie tożsamością, konfiguracją (CSPM) i automatyzację."
 },
 {
  "id": "cld5",
  "topic": "cloud",
  "q": "W którym modelu dostawca odpowiada za infrastrukturę i platformę, a klient za aplikacje i dane?",
  "a": "W modelu PaaS (Platform as a Service). Dostawca zarządza infrastrukturą, systemem operacyjnym i środowiskiem uruchomieniowym, a klient odpowiada za swój kod aplikacji oraz dane. W IaaS klient odpowiada też za system operacyjny, w SaaS głównie za dane i konfigurację dostępu."
 },
 {
  "id": "cld6",
  "topic": "cloud",
  "q": "Czym jest IAM w bezpieczeństwie chmurowym?",
  "a": "IAM (Identity and Access Management) to zarządzanie tożsamościami i dostępem: uwierzytelnianie, autoryzacja, role, grupy i polityki określające, kto i do jakich zasobów ma dostęp. Realizuje zasadę najmniejszych uprawnień i centralizuje kontrolę dostępu."
 },
 {
  "id": "cld7",
  "topic": "cloud",
  "q": "Czym jest MFA w kontekście chmury?",
  "a": "MFA (Multi-Factor Authentication) to uwierzytelnianie wieloskładnikowe — wymaga co najmniej dwóch niezależnych czynników: coś, co wiesz (hasło), coś, co masz (token, telefon), czym jesteś (biometria). Chroni konto nawet przy wykradzionym haśle."
 },
 {
  "id": "cld8",
  "topic": "cloud",
  "q": "Czym są mechanizmy RBAC i ABAC?",
  "a": "RBAC (Role-Based Access Control) przyznaje dostęp na podstawie ról przypisanych użytkownikom. ABAC (Attribute-Based Access Control) decyduje na podstawie atrybutów (użytkownika, zasobu, środowiska, np. czasu, lokalizacji) i reguł. ABAC jest bardziej elastyczny i kontekstowy, RBAC prostszy w zarządzaniu."
 },
 {
  "id": "cld9",
  "topic": "cloud",
  "q": "Szyfrowanie danych w spoczynku i w tranzycie.",
  "a": "W spoczynku (at rest) — szyfrowanie zapisanych danych (dyski, bazy, kopie), np. AES-256; chroni przed dostępem do nośników. W tranzycie (in transit) — szyfrowanie danych przesyłanych przez sieć (TLS/HTTPS, VPN); chroni przed podsłuchem i manipulacją. Stosuje się oba jednocześnie."
 },
 {
  "id": "cld10",
  "topic": "cloud",
  "q": "Czym jest RPO (Recovery Point Objective)?",
  "a": "RPO to maksymalna akceptowalna ilość utraconych danych wyrażona w czasie — jak stare mogą być dane po odtworzeniu po awarii. Wyznacza wymaganą częstotliwość tworzenia kopii zapasowych/replikacji (np. RPO = 1 h oznacza utratę najwyżej godziny danych)."
 },
 {
  "id": "cld11",
  "topic": "cloud",
  "q": "Czym jest RTO (Recovery Time Objective)?",
  "a": "RTO to maksymalny akceptowalny czas przywrócenia usługi/systemu po awarii — jak długo system może być niedostępny. Wpływa na dobór rozwiązań ciągłości działania (np. zapasowa infrastruktura, replikacja, automatyczny failover)."
 },
 {
  "id": "cld12",
  "topic": "cloud",
  "q": "Do czego służą Virtual Private Clouds (VPC) w kontekście bezpieczeństwa?",
  "a": "VPC to logicznie wydzielona, izolowana sieć w chmurze publicznej z własną adresacją, podsieciami, tablicami routingu, bramami i grupami bezpieczeństwa. Zapewnia izolację zasobów, kontrolę ruchu wejściowego/wyjściowego i segmentację, ograniczając powierzchnię ataku."
 },
 {
  "id": "cld13",
  "topic": "cloud",
  "q": "Czym jest mechanizm TDE?",
  "a": "TDE (Transparent Data Encryption) to szyfrowanie danych w spoczynku na poziomie bazy danych/plików, przezroczyste dla aplikacji (nie wymaga zmian w kodzie). Chroni pliki bazy, dzienniki i kopie zapasowe przed odczytaniem w razie kradzieży nośnika."
 },
 {
  "id": "cld14",
  "topic": "cloud",
  "q": "Co oznacza pojęcie Data minimization?",
  "a": "Data minimization (minimalizacja danych) to zasada (m.in. RODO) zbierania i przetwarzania wyłącznie danych niezbędnych do realizacji określonego celu, przez niezbędny czas. Ogranicza ryzyko i skutki ewentualnego wycieku oraz wspiera zgodność z przepisami."
 },
 {
  "id": "cld15",
  "topic": "cloud",
  "q": "Czym jest OWASP Top 10?",
  "a": "OWASP Top 10 to publikowana przez OWASP lista dziesięciu najpoważniejszych i najczęstszych kategorii podatności aplikacji webowych (np. Broken Access Control, Injection, Cryptographic Failures, Security Misconfiguration). Stanowi punkt odniesienia przy projektowaniu i testowaniu bezpieczeństwa aplikacji."
 },
 {
  "id": "cry1",
  "topic": "crypto",
  "q": "Czym zajmuje się kryptografia, a czym kryptoanaliza? Cele.",
  "a": "Kryptografia projektuje mechanizmy ochrony informacji; kryptoanaliza bada metody ich łamania (bez znajomości klucza). Razem tworzą kryptologię. Podstawowe cele mechanizmów kryptograficznych: poufność, integralność, uwierzytelnianie (autentyczność) i niezaprzeczalność."
 },
 {
  "id": "cry2",
  "topic": "crypto",
  "q": "Klasyfikacja systemów kryptograficznych.",
  "a": "Symetryczne — ten sam tajny klucz do szyfrowania i deszyfrowania (szybkie, problem dystrybucji klucza). Asymetryczne — para kluczy: publiczny i prywatny (rozwiązują wymianę klucza, podpis). Blokowe — szyfrują bloki danych (AES); strumieniowe — bit/bajt po bicie (RC4, ChaCha20)."
 },
 {
  "id": "cry3",
  "topic": "crypto",
  "q": "Zasada Kerckhoffsa — na czym polega i dlaczego jest ważna?",
  "a": "Bezpieczeństwo systemu powinno zależeć wyłącznie od tajności klucza, a nie od tajności algorytmu — algorytm może być jawny. Ważna, bo umożliwia publiczny audyt i analizę algorytmu, odporność na ujawnienie konstrukcji oraz łatwą wymianę samego klucza zamiast całego systemu."
 },
 {
  "id": "cry4",
  "topic": "crypto",
  "q": "Tajność doskonała. Dlaczego one-time pad jest doskonały, a ponowne użycie klucza niebezpieczne?",
  "a": "Tajność doskonała (Shannon): szyfrogram nie ujawnia żadnej informacji o tekście jawnym. One-time pad z kluczem losowym, równym długością wiadomości i jednorazowym jest doskonale tajny. Ponowne użycie tego samego klucza pozwala zXOR-ować dwa szyfrogramy (znika klucz) i odzyskać zależności między tekstami jawnymi."
 },
 {
  "id": "cry5",
  "topic": "crypto",
  "q": "Szyfry klasyczne (podstawieniowe, przestawieniowe) vs nowoczesne.",
  "a": "Klasyczne podstawieniowe (zamiana znaków) i przestawieniowe (zmiana kolejności) są łatwe do złamania (analiza częstości, znana struktura). Nowoczesne opierają się na trudnych problemach matematycznych, długich kluczach, dyfuzji i konfuzji oraz zasadzie Kerckhoffsa — bezpieczeństwo opiera się na kluczu, nie na utajnieniu metody."
 },
 {
  "id": "cry6",
  "topic": "crypto",
  "q": "Tryby pracy szyfrów blokowych — po co i jakie.",
  "a": "Tryby określają, jak szyfrować dane dłuższe niż blok. ECB — każdy blok osobno (ujawnia wzorce, niezalecany). CBC — łańcuchowanie z wektorem inicjującym IV. CFB/OFB — działanie strumieniowe. CTR — tryb licznikowy (równoległy). GCM — CTR + uwierzytelnianie (AEAD: poufność i integralność). Potrzebne dla bezpieczeństwa i unikania powtarzalnych wzorców."
 },
 {
  "id": "cry7",
  "topic": "crypto",
  "q": "Rola klucza w kryptografii symetrycznej i asymetrycznej. Co rozwiązuje klucz publiczny?",
  "a": "W symetrycznej ten sam tajny klucz szyfruje i deszyfruje — problem to bezpieczna dystrybucja klucza. W asymetrycznej para kluczy: publicznym szyfruje się/weryfikuje, prywatnym deszyfruje/podpisuje. Kryptografia klucza publicznego rozwiązuje problem wymiany klucza w niezabezpieczonym kanale i umożliwia podpis cyfrowy."
 },
 {
  "id": "cry8",
  "topic": "crypto",
  "q": "Idea protokołu Diffiego-Hellmana.",
  "a": "DH pozwala dwóm stronom uzgodnić wspólny tajny klucz przez niezabezpieczony kanał, bez przesyłania go. Każda strona wybiera sekret, oblicza i wymienia wartość publiczną, a następnie z otrzymanej wartości i własnego sekretu liczy ten sam wspólny sekret. Bezpieczeństwo opiera się na trudności problemu logarytmu dyskretnego."
 },
 {
  "id": "cry9",
  "topic": "crypto",
  "q": "Na czym opiera się bezpieczeństwo RSA?",
  "a": "Na trudności faktoryzacji iloczynu n dwóch dużych liczb pierwszych. Klucze generuje się z arytmetyki modularnej; klucz publiczny (n, e), prywatny (n, d). Znając tylko n trudno odtworzyć d bez rozłożenia n na czynniki pierwsze. Liczby pierwsze i arytmetyka modulo są podstawą całej konstrukcji."
 },
 {
  "id": "cry10",
  "topic": "crypto",
  "q": "Porównaj RSA i ElGamal.",
  "a": "RSA opiera się na trudności faktoryzacji; ElGamal na problemie logarytmu dyskretnego. RSA jest deterministyczny (bez paddingu), ElGamal probabilistyczny (ten sam tekst daje różne szyfrogramy, szyfrogram dwa razy dłuższy). Oba są asymetryczne; RSA częściej w podpisach i szyfrowaniu kluczy, ElGamal m.in. w podpisach (DSA) i krzywych eliptycznych."
 },
 {
  "id": "cry11",
  "topic": "crypto",
  "q": "Podpis elektroniczny — własności; różnica między szyfrowaniem a podpisem.",
  "a": "Podpis zapewnia uwierzytelnienie nadawcy, integralność wiadomości i niezaprzeczalność. Podpisuje się skrót wiadomości kluczem prywatnym, a weryfikuje kluczem publicznym. Różnica: szyfrowanie zapewnia poufność (szyfrujemy kluczem publicznym odbiorcy), podpis zapewnia autentyczność (podpisujemy kluczem prywatnym nadawcy)."
 },
 {
  "id": "cry12",
  "topic": "crypto",
  "q": "Funkcje skrótu — czym są i jakie cechy ma bezpieczna funkcja.",
  "a": "Funkcja skrótu przekształca dane dowolnej długości w skrót o stałej długości, jednokierunkowo. Cechy bezpiecznej: jednokierunkowość (trudno odtworzyć wejście — preimage), odporność na drugi przeciwobraz, odporność na kolizje, efekt lawinowy (mała zmiana wejścia, duża zmiana skrótu). Przykłady: SHA-256, SHA-3."
 },
 {
  "id": "cry13",
  "topic": "crypto",
  "q": "Do czego służą kody MAC? Porównanie z podpisem cyfrowym.",
  "a": "MAC (Message Authentication Code) zapewnia integralność i autentyczność wiadomości za pomocą wspólnego tajnego klucza (np. HMAC). Różnica od podpisu: MAC jest symetryczny — obie strony znają klucz, więc brak niezaprzeczalności (nie da się dowieść, kto z dwóch utworzył MAC). Podpis cyfrowy jest asymetryczny i daje niezaprzeczalność."
 },
 {
  "id": "cry14",
  "topic": "crypto",
  "q": "Główna idea kryptografii krzywych eliptycznych (ECC). Zalety.",
  "a": "ECC opiera bezpieczeństwo na trudności problemu logarytmu dyskretnego na krzywej eliptycznej. Zaleta: ten sam poziom bezpieczeństwa co RSA przy znacznie krótszych kluczach — mniejsze zużycie pamięci, mocy i pasma, co czyni ECC atrakcyjnym w urządzeniach mobilnych i IoT."
 },
 {
  "id": "cry15",
  "topic": "crypto",
  "q": "Wyzwania komputerów kwantowych. Kryptografia kwantowa vs postkwantowa.",
  "a": "Algorytm Shora łamie RSA i ECC (faktoryzacja, log dyskretny), a Grover osłabia szyfry symetryczne (zaleca się dłuższe klucze). Kryptografia kwantowa (np. QKD) wykorzystuje prawa fizyki kwantowej do bezpiecznej dystrybucji klucza. Kryptografia postkwantowa to klasyczne algorytmy odporne na ataki kwantowe (oparte na kratach, kodach, funkcjach skrótu)."
 },
 {
  "id": "net1",
  "topic": "netsec",
  "q": "Podstawowe zadania bezpieczeństwa w infrastrukturze sieciowej.",
  "a": "Zapewnienie poufności, integralności i dostępności (CIA), kontrola dostępu i uwierzytelnianie, segmentacja sieci, monitorowanie i analiza ruchu, wykrywanie i reagowanie na incydenty, hardening urządzeń i usług, aktualizacje oraz zarządzanie ryzykiem i politykami."
 },
 {
  "id": "net2",
  "topic": "netsec",
  "q": "Rola systemów Windows i Linux w analizie bezpieczeństwa sieci.",
  "a": "Oba są platformami do narzędzi (skanery, sniffery, analiza logów) i hostowania usług. Linux dominuje w testach penetracyjnych (dystrybucje typu Kali, bogaty zestaw narzędzi), Windows w środowiskach korporacyjnych (Active Directory, polityki GPO). Znajomość obu jest konieczna do oceny i obrony heterogenicznych sieci."
 },
 {
  "id": "net3",
  "topic": "netsec",
  "q": "Analiza protokołów i usług sieciowych w ocenie bezpieczeństwa.",
  "a": "Polega na identyfikacji działających usług i protokołów (skanowanie portów), sprawdzeniu ich wersji i konfiguracji pod kątem podatności (przestarzałe protokoły, słabe szyfrowanie, otwarte porty) oraz przechwytywaniu i analizie ruchu, by wykryć błędy konfiguracji i nieprawidłowości."
 },
 {
  "id": "net4",
  "topic": "netsec",
  "q": "Klasyfikacja najważniejszych rodzajów ataków sieciowych.",
  "a": "Pasywne (podsłuch, analiza ruchu) i aktywne (modyfikacja, wstrzykiwanie). Wg celu: rozpoznanie, DoS/DDoS, MITM (man-in-the-middle), spoofing (ARP/IP/DNS), przejęcie sesji, ataki na protokoły i usługi, malware. Często klasyfikowane też wg warstw modelu OSI."
 },
 {
  "id": "net5",
  "topic": "netsec",
  "q": "Metody detekcji i obrony przed atakami w warstwie II OSI.",
  "a": "Ataki: ARP spoofing, MAC flooding, VLAN hopping, manipulacja STP. Obrona: port security (limit MAC), DHCP snooping, Dynamic ARP Inspection (DAI), BPDU guard i root guard, kontrola VLAN (wyłączenie auto-trunkingu), 802.1X."
 },
 {
  "id": "net6",
  "topic": "netsec",
  "q": "Metody detekcji i obrony przed atakami w warstwie III OSI.",
  "a": "Ataki: IP spoofing, ataki na routing i ICMP, skanowanie, fragmentacja. Obrona: listy kontroli dostępu (ACL), filtrowanie antyspoofingowe (uRPF), firewalle, IPsec, segmentacja podsieci, monitorowanie i wykrywanie anomalii."
 },
 {
  "id": "net7",
  "topic": "netsec",
  "q": "Narzędzia służące do identyfikacji ataków na protokoły i usługi.",
  "a": "Systemy wykrywania/zapobiegania włamaniom IDS/IPS (Snort, Suricata), analizatory ruchu (Wireshark, tcpdump), skanery sieci i podatności (nmap), systemy SIEM do korelacji zdarzeń oraz honeypoty do wykrywania i analizy aktywności atakujących."
 },
 {
  "id": "net8",
  "topic": "netsec",
  "q": "Monitorowanie ruchu sieciowego w wykrywaniu nieprawidłowości i incydentów.",
  "a": "Polega na ciągłym zbieraniu i analizie ruchu oraz logów (NetFlow/sFlow, kopie pakietów), wykrywaniu odstępstw od wzorca normalnego (baseline) i znanych sygnatur ataków, korelacji zdarzeń w SIEM oraz generowaniu alertów umożliwiających szybką reakcję."
 },
 {
  "id": "net9",
  "topic": "netsec",
  "q": "Metody zapobiegania nieuprawnionemu dostępowi do zasobów.",
  "a": "Silne uwierzytelnianie i MFA, kontrola dostępu do sieci (NAC, 802.1X), zasada najmniejszych uprawnień, szyfrowanie komunikacji, polityki haseł, regularne aktualizacje i łatki, fizyczna ochrona urządzeń oraz audyt i monitorowanie dostępu."
 },
 {
  "id": "net10",
  "topic": "netsec",
  "q": "Segmentacja, minimalizacja uprawnień i inspekcja ruchu w ograniczaniu skutków ataków.",
  "a": "Segmentacja (VLAN, podsieci, mikrosegmentacja) ogranicza propagację ataku i ruch poprzeczny. Minimalizacja uprawnień zmniejsza skutki kompromitacji konta. Inspekcja ruchu (firewall, IPS, DPI) wykrywa i blokuje zagrożenia między strefami. Razem realizują strategię obrony w głąb (defense-in-depth)."
 },
 {
  "id": "net11",
  "topic": "netsec",
  "q": "Podstawowe działania administratora w zabezpieczaniu infrastruktury sieciowej.",
  "a": "Hardening urządzeń (wyłączanie zbędnych usług, zmiana domyślnych haseł), aktualizacje i łatki, konfiguracja firewalli i ACL, segmentacja, monitorowanie i analiza logów, kopie zapasowe, zarządzanie tożsamością i uprawnieniami oraz przygotowanie planów reagowania na incydenty."
 },
 {
  "id": "net12",
  "topic": "netsec",
  "q": "Praktyczne znaczenie narzędzi Wireshark, nmap i narzędzi diagnostycznych.",
  "a": "Wireshark — głęboka analiza przechwyconych pakietów (diagnostyka, wykrywanie anomalii i ataków). nmap — skanowanie hostów, portów, usług i wersji oraz wykrywanie systemów. Narzędzia systemowe (ping, traceroute, netstat, ss) — diagnostyka łączności i aktywnych połączeń. Wspierają wykrywanie podatności i incydentów."
 },
 {
  "id": "acc1",
  "topic": "access",
  "q": "Podstawowe zagrożenia w lokalnych sieciach komputerowych i ich wpływ.",
  "a": "Podsłuch ruchu, ARP/MAC spoofing, MAC flooding, rogue DHCP, VLAN hopping, nieautoryzowane urządzenia, ataki na warstwę II. Wpływ: przechwycenie i modyfikacja danych (MITM), kradzież poświadczeń, niedostępność usług (DoS) oraz utrata integralności i poufności w segmencie sieci."
 },
 {
  "id": "acc2",
  "topic": "access",
  "q": "Podatności technologii Ethernet i protokołów w sieciach lokalnych.",
  "a": "Brak uwierzytelniania ramek, zaufanie do komunikatów ARP i DHCP, rozgłaszanie (broadcast), słabości STP i automatycznego trunkingu. Umożliwiają one spoofing, przekierowanie i podsłuch ruchu oraz wprowadzenie fałszywych urządzeń pośredniczących."
 },
 {
  "id": "acc3",
  "topic": "access",
  "q": "Znaczenie monitorowania sieci lokalnej w wykrywaniu incydentów.",
  "a": "Pozwala szybko wykryć anomalie, nieautoryzowane urządzenia i ataki, ustalić wzorzec normalnego ruchu (baseline) do porównań, dostarcza materiał (logi, pakiety) do analizy incydentów oraz wspiera reagowanie i działania powłamaniowe."
 },
 {
  "id": "acc4",
  "topic": "access",
  "q": "Narzędzia do monitorowania i analizy ruchu w sieciach lokalnych.",
  "a": "Analizatory pakietów (Wireshark, tcpdump), zbieranie przepływów (NetFlow/sFlow), systemy IDS/IPS (Snort, Suricata), narzędzia zarządzania przełącznikami i SNMP, skanery (nmap) oraz systemy SIEM do korelacji i alertowania."
 },
 {
  "id": "acc5",
  "topic": "access",
  "q": "Zasady projektowania bezpiecznej LAN i zabezpieczanie urządzeń.",
  "a": "Segmentacja (VLAN), zasada najmniejszych uprawnień, port security i 802.1X na portach, DHCP snooping i Dynamic ARP Inspection, hardening przełączników i routerów, wyłączanie nieużywanych portów i usług, regularne aktualizacje oraz zabezpieczanie urządzeń końcowych (EDR, kontrola dostępu)."
 },
 {
  "id": "acc6",
  "topic": "access",
  "q": "Zagrożenia komunikacji bezprzewodowej i sposoby jej zabezpieczania.",
  "a": "Zagrożenia: podsłuch, rogue AP, evil twin, ataki deautoryzacji, słabe szyfrowanie (WEP), słabe hasła. Ochrona: WPA2/WPA3, silne hasła lub 802.1X z RADIUS, segmentacja sieci gościnnej, aktualizacje firmware, kontrola dostępu, systemy WIDS/WIPS."
 },
 {
  "id": "acc7",
  "topic": "access",
  "q": "Rola wielowarstwowej ochrony w zabezpieczaniu sieci lokalnych.",
  "a": "Defense-in-depth zakłada nakładanie wielu niezależnych warstw zabezpieczeń (fizyczne, sieciowe, hostowe, aplikacyjne, organizacyjne). Kompromitacja jednej warstwy nie przełamuje całego systemu, co zwiększa odporność i daje czas na wykrycie oraz reakcję."
 },
 {
  "id": "acc8",
  "topic": "access",
  "q": "Audyt bezpieczeństwa, testy penetracyjne i ocena podatności.",
  "a": "Audyt sprawdza zgodność z politykami i normami oraz poprawność konfiguracji. Ocena podatności to skanowanie i identyfikacja słabości (z priorytetyzacją). Test penetracyjny to kontrolowana symulacja realnego ataku weryfikująca, czy podatności da się wykorzystać i jakie jest faktyczne ryzyko."
 },
 {
  "id": "acc9",
  "topic": "access",
  "q": "Źródła, struktura i ocena alertów bezpieczeństwa w sieciach lokalnych.",
  "a": "Źródła: IDS/IPS, firewalle, logi systemów i urządzeń, EDR. Struktura alertu: czas, źródło/cel, typ zdarzenia, waga/priorytet, opis. Ocena: ustalenie priorytetu, odsianie fałszywych alarmów (false positive), korelacja powiązanych zdarzeń i eskalacja do reagowania na incydent."
 },
 {
  "id": "acc10",
  "topic": "access",
  "q": "Systemy zarządzania bezpieczeństwem informacji w ochronie sieci lokalnych.",
  "a": "ISMS (np. wg ISO/IEC 27001) to usystematyzowane podejście do zarządzania bezpieczeństwem informacji: polityki, analiza i postępowanie z ryzykiem, dobór kontroli (zabezpieczeń), role i odpowiedzialności oraz ciągłe doskonalenie (cykl PDCA)."
 },
 {
  "id": "acc11",
  "topic": "access",
  "q": "Zagrożenia i metody ochrony systemów mobilnych oraz urządzeń IoT.",
  "a": "Zagrożenia: słabe lub domyślne hasła, brak aktualizacji, niezabezpieczona komunikacja, duża i zróżnicowana powierzchnia ataku, podatne firmware. Ochrona: segmentacja (osobny VLAN dla IoT), aktualizacje, silne uwierzytelnianie, szyfrowanie, zarządzanie urządzeniami (MDM) oraz monitorowanie."
 },
 {
  "id": "tel1",
  "topic": "telesec",
  "q": "Ataki: rozpoznanie, uzyskanie dostępu oraz inżynieria społeczna.",
  "a": "Rozpoznanie (reconnaissance) — zbieranie informacji o celu (OSINT, skanowanie). Uzyskanie dostępu — wykorzystanie podatności, łamanie lub kradzież poświadczeń. Inżynieria społeczna — manipulacja człowiekiem (phishing, pretexting, podszywanie), by uzyskać dane lub dostęp z pominięciem zabezpieczeń technicznych."
 },
 {
  "id": "tel2",
  "topic": "telesec",
  "q": "Standardy i dobre praktyki: ISO 27001, NIS2 i inne.",
  "a": "ISO/IEC 27001 — norma systemu zarządzania bezpieczeństwem informacji (ISMS). NIS2 — dyrektywa UE podnosząca wymagania cyberbezpieczeństwa i obowiązki podmiotów kluczowych/ważnych. Inne: NIST Cybersecurity Framework, CIS Controls, ISO 27002 (zabezpieczenia), RODO (ochrona danych)."
 },
 {
  "id": "tel3",
  "topic": "telesec",
  "q": "Zabezpieczanie styku sieci teleinformatycznej z sieciami zewnętrznymi.",
  "a": "Firewalle brzegowe i NGFW, strefa zdemilitaryzowana (DMZ) dla usług publicznych, systemy IPS, kontrola ruchu wejściowego i wyjściowego, filtrowanie i proxy, bezpieczne kanały VPN oraz segmentacja oddzielająca sieć wewnętrzną od zewnętrznej."
 },
 {
  "id": "tel4",
  "topic": "telesec",
  "q": "Kontrola dostępu do sieci oraz mechanizmy NAC.",
  "a": "NAC (Network Access Control) weryfikuje tożsamość i stan (compliance) urządzenia przed dopuszczeniem do sieci — np. 802.1X z uwierzytelnianiem, profilowanie urządzeń, sprawdzanie aktualności zabezpieczeń, przydział do odpowiedniego VLAN lub kwarantanna urządzeń niezgodnych."
 },
 {
  "id": "tel5",
  "topic": "telesec",
  "q": "Technologie uwierzytelniania i autoryzacji: RADIUS, TACACS+, ISE.",
  "a": "RADIUS — protokół AAA (uwierzytelnianie, autoryzacja, rozliczanie), szyfruje tylko hasło, działa po UDP, łączy autoryzację z uwierzytelnianiem. TACACS+ (Cisco) — szyfruje cały pakiet, działa po TCP, rozdziela funkcje AAA (precyzyjna kontrola poleceń). Cisco ISE — platforma do NAC i centralnych polityk dostępu."
 },
 {
  "id": "tel6",
  "topic": "telesec",
  "q": "Rodzaje firewalli oraz zasady tworzenia polityk i reguł.",
  "a": "Pakietowy (bezstanowy), stanowy (stateful — śledzi sesje), aplikacyjny/proxy, NGFW (DPI, rozpoznawanie aplikacji, IPS, kontrola tożsamości). Polityki: zasada domyślnie blokuj (default deny), reguły wg najmniejszych uprawnień, jawne reguły zezwalające, kolejność reguł, dokumentacja i regularny przegląd."
 },
 {
  "id": "tel7",
  "topic": "telesec",
  "q": "DPI w wykrywaniu zagrożeń. Zadania i ograniczenia IDS i IPS.",
  "a": "Głęboka inspekcja pakietów (DPI) analizuje zawartość, nie tylko nagłówki. IDS wykrywa i alarmuje o podejrzanym ruchu; IPS dodatkowo blokuje go w czasie rzeczywistym. Wykrywanie sygnaturowe lub anomalii. Ograniczenia: ruch szyfrowany, fałszywe alarmy, wpływ na wydajność, ataki 0-day i techniki uniku."
 },
 {
  "id": "tel8",
  "topic": "telesec",
  "q": "Adaptacyjne urządzenia zabezpieczające i ich rola w sieciach korporacyjnych.",
  "a": "To urządzenia łączące wiele funkcji (firewall stanowy, VPN, IPS, kontrola aplikacji i tożsamości), np. Cisco ASA / NGFW. Centralizują ochronę styku i wnętrza sieci, dynamicznie dostosowują reguły, integrują się z systemami tożsamości i wspierają segmentację oraz bezpieczny zdalny dostęp."
 },
 {
  "id": "tel9",
  "topic": "telesec",
  "q": "Zastosowanie sieci VPN oraz wybrane technologie VPN.",
  "a": "VPN tworzy bezpieczny, szyfrowany tunel przez sieć publiczną, zapewniając poufność, integralność i uwierzytelnianie. Technologie: IPsec (głównie site-to-site), SSL/TLS VPN (zdalny dostęp użytkowników), nowsze rozwiązania (np. WireGuard). Łączą oddziały i umożliwiają pracę zdalną."
 },
 {
  "id": "tel10",
  "topic": "telesec",
  "q": "Etapy i metody testowania bezpieczeństwa sieci teleinformatycznych.",
  "a": "Etapy: rozpoznanie, skanowanie i enumeracja, ocena podatności, eksploatacja (kontrolowana), post-eksploatacja, raportowanie z rekomendacjami. Metody: testy black/grey/white-box, skanowanie podatności, testy penetracyjne, audyt konfiguracji, weryfikacja zgodności."
 },
 {
  "id": "tel11",
  "topic": "telesec",
  "q": "Rola sztucznej inteligencji i uczenia maszynowego w ochronie sieci.",
  "a": "AI/ML wspiera wykrywanie anomalii i nieznanych zagrożeń, analizę ogromnych wolumenów logów i ruchu, klasyfikację malware, priorytetyzację alertów i automatyzację reakcji (SOAR). Wyzwania: fałszywe alarmy, potrzeba dobrych danych, ataki adwersarialne i interpretowalność modeli."
 },
 {
  "id": "os1",
  "topic": "ossec",
  "q": "Podstawowe cele bezpieczeństwa systemów operacyjnych i usług sieciowych.",
  "a": "Zapewnienie poufności, integralności i dostępności; kontrola dostępu i uwierzytelnianie, izolacja procesów i ochrona pamięci, rozliczalność (audyt i logi), odporność na ataki oraz bezpieczna konfiguracja usług sieciowych."
 },
 {
  "id": "os2",
  "topic": "ossec",
  "q": "Architektura systemu operacyjnego z punktu widzenia bezpieczeństwa.",
  "a": "Rozdział na tryb jądra (uprzywilejowany) i tryb użytkownika, pierścienie ochrony procesora, separacja procesów i przestrzeni adresowych, mechanizmy kontroli dostępu oraz zaufana baza obliczeniowa (TCB) — minimalny zestaw komponentów, którym trzeba ufać."
 },
 {
  "id": "os3",
  "topic": "ossec",
  "q": "Jądro systemu, separacja przestrzeni użytkownika i ochrona pamięci.",
  "a": "Jądro działa w trybie uprzywilejowanym i pośredniczy w dostępie do zasobów. Jednostka MMU izoluje przestrzenie adresowe procesów, uniemożliwiając wzajemny dostęp. Mechanizmy ochrony pamięci: ASLR (losowanie układu), DEP/NX (brak wykonywania danych), stack canaries (ochrona stosu)."
 },
 {
  "id": "os4",
  "topic": "ossec",
  "q": "Zarządzanie użytkownikami, uprawnieniami i kontrolą dostępu.",
  "a": "Konta i grupy, uprawnienia do plików i zasobów, zasada najmniejszych uprawnień, kontrolowana eskalacja (sudo, UAC), rozdział obowiązków oraz okresowy przegląd uprawnień. Centralizacja przez usługi katalogowe (LDAP/AD)."
 },
 {
  "id": "os5",
  "topic": "ossec",
  "q": "Modele kontroli dostępu: DAC, MAC i RBAC.",
  "a": "DAC (uznaniowa) — właściciel zasobu decyduje, kto ma dostęp (np. uprawnienia plików). MAC (obowiązkowa) — system narzuca dostęp wg etykiet i polityk niezależnie od właściciela (np. SELinux, AppArmor). RBAC — dostęp przyznawany wg ról przypisanych użytkownikom."
 },
 {
  "id": "os6",
  "topic": "ossec",
  "q": "Mechanizmy uwierzytelniania: hasła, klucze SSH, 2FA, IAM, SSO.",
  "a": "Hasła (przechowywane jako hasze z solą), klucze SSH (uwierzytelnianie kluczem publiczno-prywatnym, bez hasła w sieci), 2FA/MFA (drugi czynnik), IAM (centralne zarządzanie tożsamością i uprawnieniami), SSO (jednokrotne logowanie do wielu usług, np. przez OAuth2/SAML/OIDC)."
 },
 {
  "id": "os7",
  "topic": "ossec",
  "q": "Zapobieganie i wykrywanie zagrożeń w systemach operacyjnych.",
  "a": "Hardening i bezpieczna konfiguracja, regularne aktualizacje i łatki, antywirus/EDR, hostowe IDS (HIDS), firewall hostowy, monitorowanie i analiza logów, kontrola integralności plików (np. AIDE/Tripwire) oraz kopie zapasowe."
 },
 {
  "id": "os8",
  "topic": "ossec",
  "q": "Zastosowanie kryptografii w ochronie danych i komunikacji.",
  "a": "Szyfrowanie dysków i plików w spoczynku (LUKS, BitLocker), szyfrowanie komunikacji (TLS, SSH, VPN/IPsec), zapewnienie integralności (sumy kontrolne, podpisy), uwierzytelnianie (certyfikaty, klucze) oraz bezpieczne zarządzanie kluczami."
 },
 {
  "id": "os9",
  "topic": "ossec",
  "q": "Najczęstsze ataki na aplikacje webowe i mechanizmy ich ograniczania.",
  "a": "SQL Injection, XSS, CSRF, niewłaściwa kontrola dostępu, błędna konfiguracja. Ograniczanie: walidacja i sanityzacja danych wejściowych, zapytania parametryzowane, kodowanie danych wyjściowych, tokeny anty-CSRF, nagłówki bezpieczeństwa (CSP), zasada najmniejszych uprawnień, WAF i aktualizacje."
 },
 {
  "id": "os10",
  "topic": "ossec",
  "q": "Bezpieczeństwo podstawowych usług sieci lokalnej: DHCP, DNS, NAT, HTTP, FTP.",
  "a": "DHCP — DHCP snooping i autoryzowane serwery (ochrona przed rogue DHCP). DNS — DNSSEC i ochrona przed spoofingiem/cache poisoning. NAT — ukrywa adresację wewnętrzną. HTTP — wymuszanie HTTPS (TLS). FTP — zamiana na SFTP/FTPS. Ogólnie: wyłączanie zbędnych usług, hardening i aktualizacje."
 },
 {
  "id": "os11",
  "topic": "ossec",
  "q": "Proces reagowania na incydenty oraz podstawy analizy powłamaniowej.",
  "a": "Etapy reagowania: przygotowanie, identyfikacja, powstrzymanie (izolacja), eliminacja, odtworzenie, wnioski i lekcje. Analiza powłamaniowa (forensyka): zabezpieczenie dowodów (obrazy dysków, pamięci), zachowanie łańcucha dowodowego, analiza logów i artefaktów oraz rekonstrukcja przebiegu ataku."
 },
 {
  "id": "os12",
  "topic": "ossec",
  "q": "Testy penetracyjne, ocena podatności oraz bazy CVE i MITRE ATT&CK.",
  "a": "Test penetracyjny symuluje realny atak i weryfikuje ryzyko; ocena podatności skanuje i identyfikuje słabości. CVE — publiczny katalog znanych podatności z unikalnymi identyfikatorami. MITRE ATT&CK — baza wiedzy o taktykach i technikach atakujących, używana do mapowania zagrożeń, detekcji i obrony."
 },
 {
  "id": "web1",
  "topic": "websec",
  "q": "Czym jest atak SQL Injection? Pojęcie i przykłady.",
  "a": "To wstrzyknięcie złośliwego kodu SQL przez niewalidowane dane wejściowe, gdy aplikacja buduje zapytania przez sklejanie łańcuchów. Pozwala obejść uwierzytelnianie, odczytać lub zmodyfikować dane, a czasem przejąć serwer. Przykład: w polu logowania wartość typu ' OR '1'='1 może spełnić warunek zawsze prawdziwy."
 },
 {
  "id": "web2",
  "topic": "websec",
  "q": "Techniki obrony przed atakami SQL Injection.",
  "a": "Zapytania parametryzowane (prepared statements) i ORM zamiast sklejania łańcuchów, walidacja i sanityzacja danych wejściowych, zasada najmniejszych uprawnień konta bazy, procedury składowane, ograniczanie komunikatów błędów oraz dodatkowo Web Application Firewall (WAF)."
 },
 {
  "id": "web3",
  "topic": "websec",
  "q": "Czym jest atak XSS? Pojęcie i przykłady.",
  "a": "Cross-Site Scripting to wstrzyknięcie skryptu, który wykonuje się w przeglądarce ofiary w kontekście zaufanej strony. Typy: reflected (z parametru żądania), stored (zapisany w bazie, np. w komentarzu), DOM-based. Skutki: kradzież sesji/ciasteczek, podszywanie, modyfikacja treści. Obrona: kodowanie wyjścia, walidacja, CSP, flaga HttpOnly."
 },
 {
  "id": "web4",
  "topic": "websec",
  "q": "Porównaj metody uwierzytelniania użytkowników.",
  "a": "Hasła (proste, podatne na wyciek i phishing), 2FA/MFA (dodatkowy czynnik), tokeny (np. JWT), uwierzytelnianie federacyjne OAuth2/OpenID Connect (logowanie zewnętrznym dostawcą), certyfikaty klienta, biometria. Wybór to kompromis między bezpieczeństwem, kosztem a wygodą użytkownika."
 },
 {
  "id": "web5",
  "topic": "websec",
  "q": "Powody rejestrowania aktywności użytkowników w systemie.",
  "a": "Wykrywanie i analiza incydentów bezpieczeństwa, audyt i rozliczalność (kto, co, kiedy zrobił), diagnostyka błędów i wydajności, zgodność z przepisami i regulacjami oraz materiał dowodowy przy analizie powłamaniowej."
 },
 {
  "id": "web6",
  "topic": "websec",
  "q": "Przykład sposobu przechowywania uprawnień użytkowników w bazie.",
  "a": "Model RBAC: tabela użytkowników, tabela ról i tabela uprawnień oraz tabele łączące (użytkownik-rola, rola-uprawnienie). Użytkownik dostaje role, role zawierają uprawnienia, a aplikacja sprawdza uprawnienia przy każdym żądaniu. Upraszcza zarządzanie i zmianę dostępu."
 },
 {
  "id": "web7",
  "topic": "websec",
  "q": "Jaki jest cel testowania bezpieczeństwa aplikacji internetowej?",
  "a": "Wykrycie podatności zanim zrobi to atakujący, ocena ryzyka i wpływu, weryfikacja skuteczności zabezpieczeń i zgodności z wymaganiami oraz dostarczenie rekomendacji naprawczych. Efekt: zwiększenie odporności aplikacji i ochrona danych użytkowników."
 },
 {
  "id": "web8",
  "topic": "websec",
  "q": "Jak serwer rozpoznaje tożsamość zalogowanego użytkownika?",
  "a": "Po zalogowaniu serwer tworzy sesję i wysyła identyfikator sesji w ciasteczku (cookie); przy każdym żądaniu klient odsyła to ciasteczko, a serwer odnajduje powiązaną sesję. Alternatywnie używa się tokenów (np. JWT) przesyłanych w nagłówku Authorization, które serwer weryfikuje i wiąże z użytkownikiem."
 },
 {
  "id": "jee1",
  "topic": "jee",
  "q": "Model aplikacji wielowarstwowej Java/Jakarta EE i komponenty webowe.",
  "a": "Aplikacja dzieli się na warstwy: prezentacji (web), logiki biznesowej i dostępu do danych (oraz integracji). Komponenty webowe: serwlety (obsługa żądań HTTP), JSP, filtry, JSF, a logika biznesowa w komponentach (np. EJB/CDI). Kontener aplikacyjny zarządza ich cyklem życia i usługami (transakcje, bezpieczeństwo)."
 },
 {
  "id": "jee2",
  "topic": "jee",
  "q": "Podstawowe mechanizmy w Spring: IoC, DI, AOP.",
  "a": "IoC (Inversion of Control) — kontener Springa zarządza tworzeniem i cyklem życia obiektów (beanów). DI (Dependency Injection) — wstrzykiwanie zależności do obiektów (przez konstruktor, setter, pole) zamiast tworzenia ich ręcznie. AOP — programowanie aspektowe, wydzielanie zagadnień przekrojowych (logowanie, transakcje, bezpieczeństwo)."
 },
 {
  "id": "jee3",
  "topic": "jee",
  "q": "Co to jest stereotyp w Spring? Najważniejsze stereotypy.",
  "a": "Stereotyp to adnotacja oznaczająca klasę jako komponent zarządzany przez Springa. @Component — ogólny komponent; @Service — warstwa logiki biznesowej; @Repository — warstwa dostępu do danych (z tłumaczeniem wyjątków); @Controller/@RestController — warstwa webowa obsługująca żądania."
 },
 {
  "id": "jee4",
  "topic": "jee",
  "q": "Rola kontrolera w Spring Web MVC i podstawowe adnotacje.",
  "a": "Kontroler obsługuje żądania HTTP, wywołuje logikę i zwraca odpowiedź lub nazwę widoku. Adnotacje: @Controller/@RestController, @RequestMapping oraz @GetMapping/@PostMapping/@PutMapping/@DeleteMapping, @RequestParam, @PathVariable, @RequestBody (mapowanie ciała na obiekt), @ResponseBody (zwrot danych jako odpowiedź)."
 },
 {
  "id": "jee5",
  "topic": "jee",
  "q": "Niezbędne adnotacje stosowane w klasie encji w Spring (JPA).",
  "a": "@Entity (klasa jako encja), @Table (mapowanie na tabelę), @Id (klucz główny), @GeneratedValue (strategia generowania klucza), @Column (mapowanie pola na kolumnę) oraz adnotacje relacji: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany i @JoinColumn."
 },
 {
  "id": "jee6",
  "topic": "jee",
  "q": "Jak wykorzystać i jakie metody udostępnia JpaRepository?",
  "a": "JpaRepository (Spring Data) to interfejs, który po rozszerzeniu daje gotowe metody bez implementacji: save, saveAll, findById, findAll, existsById, count, deleteById, delete oraz stronicowanie i sortowanie. Dodatkowo metody pochodne z nazwy (findByNazwa) i własne zapytania (@Query)."
 },
 {
  "id": "jee7",
  "topic": "jee",
  "q": "Metody dostępu do baz danych w Spring. Wzorce DAO i DTO.",
  "a": "Dostęp: JDBC (JdbcTemplate), JPA/Hibernate, Spring Data JPA. DAO (Data Access Object) hermetyzuje operacje na danych, oddzielając je od logiki biznesowej. DTO (Data Transfer Object) to obiekt do przenoszenia danych między warstwami/po sieci, bez ujawniania encji i bez logiki — dobiera tylko potrzebne pola."
 },
 {
  "id": "jee8",
  "topic": "jee",
  "q": "Na czym polega ORM? Adnotacje relacji między encjami w Spring.",
  "a": "ORM (Object-Relational Mapping) automatycznie mapuje obiekty na tabele relacyjne i odwrotnie (Hibernate/JPA), ukrywając SQL. Relacje definiują adnotacje: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany wraz z @JoinColumn/@JoinTable; sterują kluczami obcymi i strategią ładowania (lazy/eager)."
 },
 {
  "id": "jee9",
  "topic": "jee",
  "q": "Jak implementować mechanizmy bezpieczeństwa w Spring Boot?",
  "a": "Za pomocą Spring Security: konfiguracja łańcucha filtrów i reguł dostępu, uwierzytelnianie (formularz, Basic, JWT, OAuth2), autoryzacja oparta na rolach/uprawnieniach (@PreAuthorize), kodowanie haseł (BCrypt), ochrona CSRF oraz UserDetailsService do pobierania danych użytkownika."
 },
 {
  "id": "jee10",
  "topic": "jee",
  "q": "Czym jest wzorzec REST? Cechy i przykład w Spring Boot.",
  "a": "REST to styl architektury usług sieciowych: bezstanowość, zasoby identyfikowane przez URI, operacje przez metody HTTP (GET/POST/PUT/DELETE), reprezentacje danych (zwykle JSON), jednolity interfejs. W Spring Boot: klasa z @RestController, metoda z @GetMapping zwracająca obiekt mapowany automatycznie na JSON."
 },
 {
  "id": "fs1",
  "topic": "fullstack",
  "q": "Poziomy chmur komputerowych wykorzystywane w programowaniu aplikacji.",
  "a": "IaaS — infrastruktura (maszyny wirtualne, sieć, storage), pełna kontrola. PaaS — platforma uruchomieniowa, bazy i usługi, programista skupia się na kodzie. SaaS — gotowe aplikacje. FaaS/serverless — uruchamianie funkcji bez zarządzania serwerem. Wybór poziomu zależy od potrzebnej kontroli i nakładu utrzymania."
 },
 {
  "id": "fs2",
  "topic": "fullstack",
  "q": "Programowanie full-stack w chmurze — zasady i rozwiązania.",
  "a": "Łączenie front-endu, back-endu i bazy z wykorzystaniem usług zarządzanych chmury. Zasady: bezstanowość usług dla skalowalności, automatyczne skalowanie, CI/CD, infrastruktura jako kod (IaC), konteneryzacja, zarządzanie sekretami i bezpieczeństwo, monitoring oraz projektowanie pod awarie (resilience)."
 },
 {
  "id": "fs3",
  "topic": "fullstack",
  "q": "Usługi chmurowe dostępne dla programistów full-stack.",
  "a": "Zarządzane bazy danych (relacyjne i NoSQL), magazyn obiektowy (storage), funkcje serverless, kolejki i komunikaty (pub/sub), usługi uwierzytelniania i tożsamości, bramy API, CDN, cache, kontenery i orkiestracja, monitoring i logowanie oraz usługi CI/CD."
 },
 {
  "id": "fs4",
  "topic": "fullstack",
  "q": "Szkielety programistyczne wykorzystywane do programowania full-stack.",
  "a": "Front-end: React, Angular, Vue. Back-end: Node.js/Express, Spring Boot, Django/Flask, ASP.NET. Full-stack/meta: Next.js, Nuxt. Dodatkowo narzędzia konteneryzacji (Docker) i orkiestracji (Kubernetes) oraz biblioteki ORM i klienty API."
 },
 {
  "id": "fs5",
  "topic": "fullstack",
  "q": "Programowanie full-stack aplikacji stanowych (stateful) w chmurze.",
  "a": "Aplikacja stanowa przechowuje stan (sesję, dane) między żądaniami. W chmurze stan utrzymuje się w zewnętrznym, współdzielonym magazynie (baza, cache jak Redis, wolumeny trwałe), bo instancje mogą być wymieniane. Trudniejsza w skalowaniu poziomym; w Kubernetes używa się StatefulSet i trwałych wolumenów."
 },
 {
  "id": "fs6",
  "topic": "fullstack",
  "q": "Programowanie full-stack aplikacji bezstanowych (stateless) w chmurze.",
  "a": "Aplikacja bezstanowa nie trzyma stanu na serwerze — każde żądanie jest niezależne i zawiera potrzebny kontekst (np. token). Ułatwia to skalowanie poziome i odporność (dowolna instancja obsłuży żądanie). Stan przenosi się do tokenów, baz lub zewnętrznego cache; podejście naturalne dla REST i serverless."
 },
 {
  "id": "fs7",
  "topic": "fullstack",
  "q": "System Kubernetes w programowaniu full-stack.",
  "a": "Kubernetes to system orkiestracji kontenerów: automatyzuje wdrażanie, skalowanie, równoważenie obciążenia i samonaprawę aplikacji. Podstawowe obiekty: Pod (kontenery), Deployment (zarządzanie replikami i wdrożeniami), Service (dostęp i load balancing), ConfigMap/Secret (konfiguracja), Ingress (ruch wejściowy)."
 },
 {
  "id": "fs8",
  "topic": "fullstack",
  "q": "Powiązanie aplikacji z chmurową bazą danych — sposoby i wtyczki.",
  "a": "Połączenie przez sterowniki (JDBC, klienty natywne), warstwy ORM (Hibernate, Sequelize, SQLAlchemy) lub SDK dostawcy. Parametry połączenia i poświadczenia trzyma się w zmiennych środowiskowych / menedżerze sekretów. Stosuje się pule połączeń, a do baz NoSQL dedykowane klienty/wtyczki."
 },
 {
  "id": "fs9",
  "topic": "fullstack",
  "q": "Zarządzanie użytkownikami i bezpieczeństwem w aplikacjach chmurowych.",
  "a": "Usługi tożsamości (OAuth2/OpenID Connect, np. Cognito, Firebase Auth, Auth0), role i polityki IAM, zasada najmniejszych uprawnień, szyfrowanie danych w spoczynku i tranzycie, zarządzanie sekretami, MFA, audyt i logowanie dostępu oraz ochrona API (klucze, limity, tokeny)."
 },
 {
  "id": "fs10",
  "topic": "fullstack",
  "q": "Integracja innych serwisów z aplikacją chmurową.",
  "a": "Przez API REST lub GraphQL, webhooki (powiadomienia zdarzeń), kolejki i systemy komunikatów (asynchroniczna integracja), bramy API (API Gateway) zarządzające ruchem i bezpieczeństwem oraz gotowe integracje z usługami zewnętrznymi (płatności, mapy, powiadomienia, poczta)."
 },
 {
  "id": "swf1",
  "topic": "swift",
  "q": "Omów wzorzec projektowy MVVM.",
  "a": "Model-View-ViewModel: Model — dane i logika biznesowa; View — interfejs użytkownika; ViewModel — pośrednik przechowujący stan i logikę prezentacji, wiążący model z widokiem (data binding). Zalety: separacja odpowiedzialności, testowalność ViewModelu bez UI, łatwiejsze utrzymanie; w SwiftUI naturalnie wspierany przez wiązania."
 },
 {
  "id": "swf2",
  "topic": "swift",
  "q": "Typy generyczne w Swift — na przykładzie.",
  "a": "Generyki pozwalają pisać kod parametryzowany typem, zachowując bezpieczeństwo typów i unikając powielania. Np. funkcja func swap<T>(a: inout T, b: inout T) działa dla dowolnego typu T; podobnie struktury (Stack<Element>). Można nakładać ograniczenia (where T: Comparable lub konformacja do protokołu)."
 },
 {
  "id": "swf3",
  "topic": "swift",
  "q": "Zmienne funkcyjne w Swift — z przykładem.",
  "a": "W Swift funkcje są obywatelami pierwszej klasy: można je przypisywać do zmiennych, przekazywać jako argumenty i zwracać. Typ funkcyjny: (Int, Int) -> Int. Przykład: let dodaj: (Int,Int)->Int = { a,b in a+b }. Wykorzystuje domknięcia (closures) — np. jako parametry metod sortujących czy callbacki."
 },
 {
  "id": "swf4",
  "topic": "swift",
  "q": "Typ wyliczeniowy (enum) w Swift — na przykładzie.",
  "a": "enum definiuje zbiór powiązanych wartości i może mieć: wartości surowe (raw, np. enum Kierunek: Int), wartości skojarzone (associated, np. case wspolrzedne(Double, Double)), metody i właściwości obliczane oraz konformację do protokołów. Bezpieczny w użyciu ze switch, który musi pokryć wszystkie przypadki."
 },
 {
  "id": "swf5",
  "topic": "swift",
  "q": "Rola i składnia protokołów w Swift.",
  "a": "Protokół definiuje kontrakt — wymagane metody, właściwości, inicjalizatory — bez implementacji. Typy (struct, class, enum) deklarują konformację (struct A: P). Protokoły wspierają polimorfizm i programowanie zorientowane na protokoły; rozszerzenia protokołów (extension P) dostarczają implementacji domyślnych."
 },
 {
  "id": "swf6",
  "topic": "swift",
  "q": "Opcjonalność w Swift i mechanizmy unwrapping.",
  "a": "Optional (Typ?) reprezentuje wartość albo jej brak (nil), co chroni przed błędami pustych referencji. Rozpakowanie: opcjonalne wiązanie (if let, guard let), operator nil-coalescing (??), optional chaining (?.), wymuszone rozpakowanie (!) ryzykowne przy nil. Zwiększa bezpieczeństwo i stabilność, wymuszając obsługę braku wartości."
 },
 {
  "id": "swf7",
  "topic": "swift",
  "q": "Znaczenie rozszerzeń (extensions) w Swift — przykłady.",
  "a": "Rozszerzenia dodają funkcjonalność do istniejących typów (także bibliotecznych i protokołów) bez dziedziczenia: nowe metody, właściwości obliczane, inicjalizatory, konformację do protokołu. Przykład: extension String dodające właściwość zwracającą odwrócony łańcuch. Pozwalają porządkować i rozszerzać kod."
 },
 {
  "id": "swf8",
  "topic": "swift",
  "q": "Właściwości obserwowane (property observers) w Swift.",
  "a": "willSet i didSet to obserwatory uruchamiane przed i po zmianie wartości właściwości (nie dotyczą inicjalizacji). willSet daje nową wartość (newValue), didSet starą (oldValue). Służą do reagowania na zmiany, np. aktualizacji UI lub walidacji, bez stosowania metod ustawiających."
 },
 {
  "id": "swf9",
  "topic": "swift",
  "q": "Różnica między @StateObject a @ObservedObject.",
  "a": "@StateObject — widok jest właścicielem obiektu (ObservableObject); tworzy go raz i zachowuje przy rekompozycjach widoku. @ObservedObject — obiekt przekazywany z zewnątrz; widok nie jest jego właścicielem i nie odpowiada za jego cykl życia. Błędne użycie @ObservedObject do tworzenia obiektu grozi jego ponownym utworzeniem i utratą stanu."
 },
 {
  "id": "swf10",
  "topic": "swift",
  "q": "Różnice między strukturami (struct) a klasami (class) w Swift.",
  "a": "struct to typ wartościowy (kopiowany przy przypisaniu/przekazaniu), bez dziedziczenia, bezpieczny przy współbieżności; class to typ referencyjny (współdzielona instancja), wspiera dziedziczenie i ma deinit. Struktur używa się dla prostych modeli danych i w SwiftUI; klas — gdy potrzebna tożsamość, współdzielenie stanu lub dziedziczenie."
 },
 {
  "id": "and1",
  "topic": "android",
  "q": "Mechanizm końcowej lambdy (trailing lambda) w Kotlinie.",
  "a": "Gdy ostatni argument funkcji jest lambdą, można ją zapisać poza nawiasami wywołania, co poprawia czytelność i umożliwia składnię przypominającą bloki/DSL. Przykład: button.setOnClickListener { ... } zamiast setOnClickListener({ ... }). Jeśli lambda jest jedynym argumentem, nawiasy można pominąć."
 },
 {
  "id": "and2",
  "topic": "android",
  "q": "Rozwiązania Kotlina zmniejszające ilość kodu.",
  "a": "Klasy danych (data class) automatycznie generują equals/hashCode/toString/copy i componentN. Funkcje rozszerzające dodają metody do istniejących typów bez dziedziczenia. Parametry nazwane i domyślne ograniczają przeciążanie i poprawiają czytelność wywołań. Razem znacząco redukują kod szablonowy (boilerplate)."
 },
 {
  "id": "and3",
  "topic": "android",
  "q": "Funkcje @Composable w Jetpack Compose — cechy.",
  "a": "To funkcje opisujące UI deklaratywnie. Cechy: oznaczone adnotacją @Composable, wywoływane tylko z innych funkcji @Composable, zwykle zwracają Unit (emitują UI), mogą być wywoływane wielokrotnie (rekompozycja), powinny być bez efektów ubocznych i idempotentne, a ich kolejność/pomijanie zależy od stanu."
 },
 {
  "id": "and4",
  "topic": "android",
  "q": "Właściwości procesu rekompozycji interfejsu w Jetpack Compose.",
  "a": "Rekompozycja to ponowne wykonanie funkcji @Composable po zmianie obserwowanego stanu. Jest inteligentna (przelicza tylko zależne fragmenty), może być pomijana dla niezmienionych części i wykonywana w dowolnej kolejności lub równolegle. Dlatego funkcje muszą być szybkie, idempotentne i pozbawione efektów ubocznych."
 },
 {
  "id": "and5",
  "topic": "android",
  "q": "Cykl życia elementów interfejsu w kompozycji.",
  "a": "Element wchodzi do kompozycji (enter), podlega rekompozycjom przy zmianach stanu i opuszcza ją (leave), gdy znika z UI. Na zachowanie wpływają: klucze (key) identyfikujące elementy, remember (zachowanie stanu między rekompozycjami) oraz efekty uboczne (LaunchedEffect, DisposableEffect) zarządzające zasobami w cyklu życia."
 },
 {
  "id": "and6",
  "topic": "android",
  "q": "Mechanizm wyciągania stanu (state hoisting) w Jetpack Compose.",
  "a": "State hoisting to przeniesienie stanu z komponentu w górę, do jego wywołującego (rodzica). Komponent staje się bezstanowy: otrzymuje wartość i funkcję zwrotną (zdarzenie) do jej zmiany. Służy: jednemu źródłu prawdy, współdzieleniu i wielokrotnemu użyciu, łatwiejszemu testowaniu oraz jednokierunkowemu przepływowi danych."
 },
 {
  "id": "and7",
  "topic": "android",
  "q": "Stan w remember(), osobnej klasie i ViewModel — zalety i wady.",
  "a": "remember — stan przeżywa rekompozycje, ale ginie przy zmianie konfiguracji (chyba że rememberSaveable); prosty, lokalny. Osobna klasa (state holder) — enkapsuluje logikę stanu UI, testowalna. ViewModel — stan przeżywa zmiany konfiguracji i ma zasięg ekranu, dobry do logiki i danych, ale to większy narzut. Wybór zależy od trwałości i zasięgu stanu."
 },
 {
  "id": "and8",
  "topic": "android",
  "q": "Podstawowe komponenty w Material Design.",
  "a": "Scaffold (struktura ekranu), TopAppBar, BottomNavigation/NavigationBar, Button/FloatingActionButton, TextField, Card, Dialog, Snackbar, Checkbox/Switch, lista (LazyColumn). Zapewniają spójny wygląd i zachowanie zgodne z wytycznymi Material oraz obsługę motywów (kolory, typografia, kształty)."
 },
 {
  "id": "and9",
  "topic": "android",
  "q": "Podstawowe zasady tworzenia aplikacji w Jetpack Compose.",
  "a": "Jedno źródło prawdy (single source of truth) — stan ma jednego właściciela, a inne elementy go obserwują. Jednokierunkowy przepływ danych (UDF) — stan płynie w dół (do komponentów), a zdarzenia w górę (do właściciela stanu). Dzięki temu UI jest przewidywalny, łatwiejszy w testowaniu i mniej podatny na błędy."
 },
 {
  "id": "and10",
  "topic": "android",
  "q": "Zalecana architektura współczesnej aplikacji na Android.",
  "a": "Architektura warstwowa: warstwa UI (Compose + state holder/ViewModel), opcjonalna warstwa domeny (przypadki użycia) i warstwa danych (repozytoria + źródła: sieć, baza). Obowiązuje separacja odpowiedzialności, jednokierunkowy przepływ danych i jedno źródło prawdy; reaktywne strumienie (Flow) łączą warstwy."
 },
 {
  "id": "and11",
  "topic": "android",
  "q": "Najlepsze praktyki tworzenia aplikacji mobilnych na Android.",
  "a": "Separacja warstw i odpowiedzialności, ViewModel do logiki UI, repozytoria jako jedno źródło prawdy, korutyny i Flow do operacji asynchronicznych, wstrzykiwanie zależności (Hilt), niemutowalny stan UI, obsługa cyklu życia i konfiguracji, testy jednostkowe oraz reagujący i dostępny interfejs."
 },
 {
  "id": "and12",
  "topic": "android",
  "q": "Cechy właściciela stanu logiki biznesowej.",
  "a": "Właścicielem logiki biznesowej jest zwykle warstwa danych/domeny (repozytoria, przypadki użycia). Cechy: zarządza danymi i regułami biznesowymi, jest niezależny od UI i jego cyklu życia, stanowi jedno źródło prawdy dla danych, przeżywa poszczególne ekrany i jest testowalny w izolacji."
 },
 {
  "id": "and13",
  "topic": "android",
  "q": "Cechy właściciela stanu logiki interfejsu użytkownika.",
  "a": "Właścicielem stanu UI jest state holder lub ViewModel. Cechy: przechowuje i wystawia stan ekranu (np. jako StateFlow), reaguje na zdarzenia użytkownika i przygotowuje dane do wyświetlenia, jest powiązany z cyklem życia ekranu i przeżywa zmiany konfiguracji (ViewModel), nie zawiera bezpośrednio kodu widoku."
 },
 {
  "id": "and14",
  "topic": "android",
  "q": "Budowa warstwy danych w aplikacji na Android.",
  "a": "Warstwa danych składa się z repozytoriów (publiczne API danych, jedno źródło prawdy) oraz źródeł danych (data sources): zdalnych (sieć/API) i lokalnych (baza Room, DataStore, pliki). Repozytorium ukrywa szczegóły źródeł, łączy je, obsługuje cache i synchronizację oraz udostępnia dane w spójnej formie (np. Flow)."
 },
 {
  "id": "and15",
  "topic": "android",
  "q": "Cechy warstwy domeny w aplikacji na Android.",
  "a": "Warstwa domeny jest opcjonalna i zawiera przypadki użycia (use cases) hermetyzujące pojedyncze operacje logiki biznesowej. Cechy: oddziela warstwę UI od warstwy danych, umożliwia ponowne użycie logiki między ViewModelami, upraszcza je, jest testowalna i zależy tylko od abstrakcji warstwy danych."
 },
 {
  "id": "pat1",
  "topic": "patterns",
  "q": "Konstrukcyjne wzorce projektowe — wymień i scharakteryzuj.",
  "a": "Dotyczą tworzenia obiektów. Singleton — jedna instancja w systemie. Factory Method — metoda wytwórcza, podklasy decydują o typie. Abstract Factory — tworzenie rodzin powiązanych obiektów. Builder — krokowe budowanie złożonych obiektów. Prototype — tworzenie przez kopiowanie istniejącego wzorca."
 },
 {
  "id": "pat2",
  "topic": "patterns",
  "q": "Strukturalne wzorce projektowe — wymień i scharakteryzuj.",
  "a": "Organizują klasy i obiekty. Adapter — dopasowanie niezgodnych interfejsów. Bridge — oddzielenie abstrakcji od implementacji. Composite — struktura drzewiasta (część-całość). Decorator — dynamiczne dodawanie funkcji. Facade — uproszczony interfejs do podsystemu. Flyweight — współdzielenie obiektów. Proxy — zastępca kontrolujący dostęp."
 },
 {
  "id": "pat3",
  "topic": "patterns",
  "q": "Behawioralne wzorce projektowe — wymień i scharakteryzuj.",
  "a": "Dotyczą komunikacji i odpowiedzialności. Strategy — wymienne algorytmy. Observer — powiadamianie obserwatorów o zmianach. Command — żądanie jako obiekt. Iterator — sekwencyjny dostęp do elementów. State — zmiana zachowania wraz ze stanem. Template Method — szkielet algorytmu. Chain of Responsibility, Mediator, Visitor, Memento."
 },
 {
  "id": "pat4",
  "topic": "patterns",
  "q": "Czym różni się wzorzec Proxy od wzorca Facade?",
  "a": "Proxy jest zastępcą jednego obiektu i ma ten sam interfejs co obiekt rzeczywisty — kontroluje do niego dostęp (leniwe ładowanie, ochrona, zdalny dostęp, cache). Facade udostępnia nowy, uproszczony interfejs do całego złożonego podsystemu (wielu klas), ukrywając jego skomplikowanie. Proxy: 1 obiekt, ten sam interfejs; Facade: wiele klas, nowy interfejs."
 },
 {
  "id": "pat5",
  "topic": "patterns",
  "q": "Czym różni się Simple Factory od Factory Method?",
  "a": "Simple Factory to jedna klasa/metoda tworząca obiekty na podstawie parametru (idiom, nie klasyczny wzorzec GoF) — logika wyboru w jednym miejscu. Factory Method to wzorzec, w którym klasa bazowa definiuje metodę wytwórczą, a podklasy nadpisują ją, decydując o tworzonym typie — rozszerzalny przez dziedziczenie, zgodny z OCP."
 },
 {
  "id": "pat6",
  "topic": "patterns",
  "q": "Zastosowania wzorca Flyweight.",
  "a": "Flyweight oszczędza pamięć przy bardzo wielu podobnych obiektach, współdzieląc ich niezmienny stan wewnętrzny, a stan zewnętrzny przekazując z kontekstu. Zastosowania: znaki/glify w edytorze tekstu, kafelki i obiekty w grach, ikony, drzewa w terenie, pule obiektów graficznych."
 },
 {
  "id": "pat7",
  "topic": "patterns",
  "q": "Przykłady zastosowania wzorca Chain of Responsibility.",
  "a": "Łańcuch obiektów obsługujących żądanie — każdy decyduje, czy je obsłużyć, czy przekazać dalej. Przykłady: filtry/middleware HTTP, łańcuch walidacji, obsługa zdarzeń w GUI, poziomy zatwierdzania wniosków, logowanie z poziomami, obsługa wyjątków. Luźno wiąże nadawcę z odbiorcą."
 },
 {
  "id": "pat8",
  "topic": "patterns",
  "q": "Techniki implementacji wzorca Singleton w Javie.",
  "a": "Prywatny konstruktor + statyczny dostęp do instancji. Techniki: eager (instancja od razu), lazy z synchronized (kosztowne), double-checked locking z polem volatile, idiom uchwytu (statyczna klasa wewnętrzna z instancją — leniwy i bezpieczny wątkowo) oraz enum (najprostszy, odporny na serializację i refleksję)."
 },
 {
  "id": "pat9",
  "topic": "patterns",
  "q": "Co oznacza skrót SOLID?",
  "a": "Pięć zasad projektowania obiektowego: Single Responsibility (jedna odpowiedzialność klasy), Open/Closed (otwarte na rozszerzenie, zamknięte na modyfikację), Liskov Substitution (podtypy zastępowalne), Interface Segregation (małe, wyspecjalizowane interfejsy), Dependency Inversion (zależność od abstrakcji, nie implementacji). Ułatwiają utrzymanie i rozwój kodu."
 },
 {
  "id": "pat10",
  "topic": "patterns",
  "q": "Co mówią techniki czystego kodu o komentarzach?",
  "a": "Kod powinien być samodokumentujący (dobre nazwy, krótkie funkcje), a komentarze stosować oszczędnie — głównie do wyjaśnienia dlaczego, a nie co robi kod. Należy unikać komentarzy oczywistych, nieaktualnych, wprowadzających w błąd oraz zakomentowanego kodu (od tego jest system kontroli wersji)."
 },
 {
  "id": "pat11",
  "topic": "patterns",
  "q": "Co to jest refactoring i jak go przeprowadzić?",
  "a": "Refaktoryzacja to poprawa wewnętrznej struktury kodu bez zmiany jego zachowania zewnętrznego. Przeprowadza się ją małymi, bezpiecznymi krokami, opierając się na testach (regresja). Techniki: wydzielanie metody/klasy, zmiana nazw, usuwanie duplikacji, upraszczanie warunków, wprowadzanie polimorfizmu."
 },
 {
  "id": "pat12",
  "topic": "patterns",
  "q": "Co to jest programowanie aspektowe i jak je zrealizować w Javie?",
  "a": "Programowanie aspektowe (AOP) wydziela zagadnienia przekrojowe (logowanie, transakcje, bezpieczeństwo, cache), które przecinają wiele modułów, do osobnych aspektów. W Javie realizuje się je przez AspectJ lub Spring AOP (proxy, adnotacje @Aspect, punkty przecięcia pointcut i porady advice)."
 },
 {
  "id": "pat13",
  "topic": "patterns",
  "q": "Co to jest programowanie funkcyjne i jak je zrealizować w Javie?",
  "a": "Paradygmat traktujący funkcje jako wartości, preferujący niemutowalność i brak efektów ubocznych. W Javie: wyrażenia lambda, interfejsy funkcyjne (Function, Predicate), referencje do metod, Stream API (map/filter/reduce), Optional. Sprzyja zwięzłości, czytelności i przetwarzaniu kolekcji."
 },
 {
  "id": "pat14",
  "topic": "patterns",
  "q": "Zasady czystego kodu: nazwy, długość kodu, argumenty funkcji.",
  "a": "Nazwy: opisowe, jednoznaczne, ujawniające intencję, spójne. Funkcje: krótkie, robiące jedną rzecz, jeden poziom abstrakcji. Argumenty: jak najmniej (najlepiej 0–2), unikać argumentów-flag i zbyt wielu parametrów (lepiej obiekt). Cel: czytelność, łatwość zrozumienia i utrzymania."
 },
 {
  "id": "pat15",
  "topic": "patterns",
  "q": "Co daje stosowanie abstrakcji w kontekście utrzymania i rozwoju kodu?",
  "a": "Abstrakcja ukrywa szczegóły implementacji za interfejsem/kontraktem, zmniejsza zależności (luźne sprzężenie), pozwala wymieniać implementacje bez zmiany klientów, ułatwia testowanie (mocki), zwiększa czytelność i ponowne użycie oraz ogranicza wpływ zmian — co usprawnia utrzymanie i rozwój systemu."
 },
 {
  "id": "arch1",
  "topic": "arch",
  "q": "Magistrala (szyna) systemowa — elementy składowe.",
  "a": "Magistrala systemowa łączy procesor, pamięć i urządzenia we/wy. Składa się z trzech magistral: adresowej (przesyła adresy komórek pamięci/urządzeń, zwykle jednokierunkowa), danych (przesyła właściwe dane, dwukierunkowa) i sterującej (sygnały kontrolne: odczyt/zapis, zegar, przerwania, gotowość). Szerokość magistrali danych i adresowej wpływa na wydajność i adresowalną pamięć."
 },
 {
  "id": "arch2",
  "topic": "arch",
  "q": "Założenia maszyny von Neumanna.",
  "a": "Wspólna pamięć dla danych i programu (program przechowywany), sekwencyjne pobieranie i wykonywanie instrukcji, jednostka centralna z ALU i jednostką sterującą, pamięć, urządzenia we/wy oraz wspólna magistrala. Cechą jest wąskie gardło von Neumanna (jedna magistrala dla danych i instrukcji). Alternatywa: architektura harwardzka (oddzielne pamięci/magistrale)."
 },
 {
  "id": "arch3",
  "topic": "arch",
  "q": "Proces i wątek — różnice.",
  "a": "Proces to wykonujący się program z własną przestrzenią adresową i zasobami; jest izolowany od innych procesów. Wątek to jednostka wykonania wewnątrz procesu, współdzieląca jego pamięć i zasoby. Wątki są lżejsze, szybciej się przełączają i komunikują (wspólna pamięć), ale wymagają synchronizacji; procesy są bezpieczniejsze przez izolację."
 },
 {
  "id": "arch4",
  "topic": "arch",
  "q": "Podstawowe metody komunikacji między procesami (IPC).",
  "a": "Pamięć współdzielona (shared memory — najszybsza), kolejki komunikatów (message queues), potoki (pipes, named pipes), gniazda (sockets — także sieciowe), sygnały, semafory i muteksy do synchronizacji, pliki. Wybór zależy od izolacji, wydajności i tego, czy procesy są na jednej maszynie."
 },
 {
  "id": "arch5",
  "topic": "arch",
  "q": "Pojęcie systemu operacyjnego.",
  "a": "Oprogramowanie zarządzające zasobami sprzętowymi i pośredniczące między sprzętem a aplikacjami. Zadania: zarządzanie procesami (szeregowanie), pamięcią, systemem plików, urządzeniami we/wy oraz bezpieczeństwem i dostępem. Udostępnia interfejs programistyczny (API, wywołania systemowe) i użytkownika (powłoka, GUI). Przykłady: Windows, Linux, macOS."
 },
 {
  "id": "arch6",
  "topic": "arch",
  "q": "Rodzaje pamięci systemów komputerowych.",
  "a": "Hierarchia wg szybkości i pojemności: rejestry procesora (najszybsze), pamięć podręczna cache (L1/L2/L3), pamięć operacyjna RAM (ulotna, robocza), pamięć masowa (SSD/HDD — trwała, duża), pamięć ROM/Flash (nieulotna, np. firmware). Im bliżej procesora, tym szybsza, mniejsza i droższa — to kompromis szybkość/pojemność/koszt."
 },
 {
  "id": "arch7",
  "topic": "arch",
  "q": "Architektura komputerów — co opisuje.",
  "a": "Organizacja i zasada działania komputera: procesor (ALU, jednostka sterująca, rejestry), pamięć, układy we/wy i magistrale. Obejmuje listę rozkazów, tryby adresowania, potokowość (pipelining). Modele: von Neumanna i harwardzka; filozofie listy rozkazów: CISC i RISC."
 },
 {
  "id": "arch8",
  "topic": "arch",
  "q": "System operacyjny czasu rzeczywistego (RTOS).",
  "a": "Zapewnia deterministyczny, przewidywalny czas reakcji na zdarzenia w określonych ramach czasowych. Twardy RTOS — przekroczenie terminu oznacza awarię (ABS, sterowanie przemysłowe); miękki — dopuszcza sporadyczne opóźnienia (multimedia). Cechy: szeregowanie priorytetowe z wywłaszczaniem, niskie i przewidywalne opóźnienia."
 },
 {
  "id": "arch9",
  "topic": "arch",
  "q": "RAID — rodzaje.",
  "a": "Technologia łączenia dysków dla wydajności i/lub niezawodności. RAID 0 (striping — wydajność, brak redundancji), RAID 1 (mirroring — kopia lustrzana), RAID 5 (striping + rozproszona parzystość, odporność na utratę 1 dysku), RAID 6 (podwójna parzystość, odporność na 2 dyski), RAID 10 (1+0 — lustro + striping, wydajność i bezpieczeństwo)."
 },
 {
  "id": "nb1",
  "topic": "netbasics",
  "q": "Model OSI.",
  "a": "Model odniesienia o 7 warstwach: fizyczna, łącza danych, sieciowa, transportowa, sesji, prezentacji, aplikacji. Każda warstwa świadczy usługi warstwie wyższej i korzysta z niższej, co standaryzuje i porządkuje komunikację sieciową. Model TCP/IP jest jego uproszczeniem (4 warstwy)."
 },
 {
  "id": "nb2",
  "topic": "netbasics",
  "q": "IPv4 a IPv6 — różnice.",
  "a": "IPv4 — adres 32-bitowy (ok. 4,3 mld adresów), zapis dziesiętny z kropkami, wyczerpana pula, powszechny NAT. IPv6 — adres 128-bitowy (ogromna pula), zapis szesnastkowy z dwukropkami, autokonfiguracja (SLAAC), wbudowane wsparcie IPsec, brak broadcastu (multicast/anycast), uproszczony nagłówek."
 },
 {
  "id": "nb3",
  "topic": "netbasics",
  "q": "Klasy adresów IP — organizacja adresów.",
  "a": "Klasowy podział IPv4: klasa A (0–127, duże sieci), B (128–191, średnie), C (192–223, małe), D (224–239, multicast), E (240–255, eksperymentalna). Adres dzieli się na część sieci i hosta. Współcześnie klasy zastąpiono adresowaniem bezklasowym CIDR (maski o dowolnej długości, np. /24)."
 },
 {
  "id": "nb4",
  "topic": "netbasics",
  "q": "Kontrola zasięgu pakietów IP (TTL).",
  "a": "Pole TTL (Time To Live) w nagłówku IP to licznik zmniejszany o 1 przez każdy router na trasie. Gdy osiągnie 0, pakiet jest odrzucany, a nadawca dostaje komunikat ICMP (Time Exceeded). Zapobiega to krążeniu pakietów w pętli w nieskończoność; mechanizm wykorzystuje narzędzie traceroute."
 },
 {
  "id": "nb5",
  "topic": "netbasics",
  "q": "Sterowanie prędkością transmisji w protokole TCP.",
  "a": "TCP stosuje kontrolę przepływu (okno przesuwne — by nie zalać wolniejszego odbiorcy) i kontrolę przeciążenia sieci: slow start (wykładniczy wzrost okna), congestion avoidance (wzrost liniowy), fast retransmit i fast recovery. Okno rośnie przy potwierdzeniach (ACK), a maleje przy stratach pakietów."
 },
 {
  "id": "nb6",
  "topic": "netbasics",
  "q": "Sposoby przesyłania informacji między dwoma punktami.",
  "a": "Kierunkowość: simpleks (jednokierunkowo), półdupleks (naprzemiennie w obu kierunkach), pełny dupleks (jednocześnie w obu). Sposób: transmisja szeregowa vs równoległa. Sposób zestawienia: komutacja łączy (circuit switching — dedykowana ścieżka) i komutacja pakietów (packet switching — dane w pakietach)."
 },
 {
  "id": "nb7",
  "topic": "netbasics",
  "q": "Sieci bezprzewodowe — wady i zalety.",
  "a": "Zalety: mobilność, łatwa i tania instalacja (brak okablowania), skalowalność, dostęp w trudnych miejscach. Wady: mniejsze bezpieczeństwo (łatwy podsłuch), zakłócenia i tłumienie sygnału, mniejsza i zmienna przepustowość, zależność od zasięgu i przeszkód, współdzielone medium (kolizje, spadek wydajności)."
 },
 {
  "id": "nb8",
  "topic": "netbasics",
  "q": "Translacja adresów w sieciach IP (NAT).",
  "a": "NAT (Network Address Translation) tłumaczy prywatne adresy IP sieci lokalnej na publiczny adres (i odwrotnie) na routerze brzegowym. Oszczędza pulę publicznych adresów IPv4 i ukrywa wewnętrzną strukturę sieci (dodatkowa warstwa ochrony). Tablica translacji wiąże połączenia wewnętrzne z zewnętrznymi."
 },
 {
  "id": "nb9",
  "topic": "netbasics",
  "q": "Porównanie NAT i PAT.",
  "a": "NAT mapuje adresy IP (np. 1:1 lub z puli adresów). PAT (Port Address Translation, zwany NAT overload) mapuje wiele adresów prywatnych na jeden publiczny, rozróżniając poszczególne połączenia po numerach portów. PAT jest najczęściej spotykany w domowych routerach (wiele urządzeń, jeden publiczny IP)."
 },
 {
  "id": "nb10",
  "topic": "netbasics",
  "q": "Switch a router — różnice.",
  "a": "Przełącznik (switch) działa w warstwie 2 (łącza danych) i przełącza ramki w obrębie jednej sieci LAN na podstawie adresów MAC. Router działa w warstwie 3 (sieciowej) i trasuje pakiety między różnymi sieciami na podstawie adresów IP i tablicy routingu. Switch buduje sieć lokalną, router łączy sieci."
 },
 {
  "id": "nb11",
  "topic": "netbasics",
  "q": "Protokoły i usługi sieciowe.",
  "a": "Protokoły określają reguły komunikacji: HTTP/HTTPS, FTP, SMTP/IMAP/POP3, DNS, DHCP, TCP, UDP, IP, ICMP, ARP. Usługi realizują funkcje dla użytkownika: serwer WWW, poczta, DNS (zamiana nazw na adresy IP), DHCP (automatyczny przydział adresów), udostępnianie plików. Protokół to zasady, usługa to świadczona funkcja."
 },
 {
  "id": "nb12",
  "topic": "netbasics",
  "q": "Enkapsulacja.",
  "a": "Proces zagnieżdżania danych w nagłówki kolejnych warstw przy schodzeniu w dół stosu protokołów: dane aplikacji to segment TCP, to pakiet IP, to ramka Ethernet (z adresami MAC). Każda warstwa dodaje swój nagłówek (tworząc PDU). U odbiorcy następuje odwrotny proces — dekapsulacja."
 },
 {
  "id": "nb13",
  "topic": "netbasics",
  "q": "Multicasting.",
  "a": "Rozsyłanie grupowe — jeden nadawca wysyła pakiet jednocześnie do grupy zainteresowanych odbiorców, efektywnie wykorzystując pasmo (w odróżnieniu od unicastu 1:1 i broadcastu do wszystkich). Wykorzystuje adresy klasy D i protokół IGMP do zarządzania grupami. Zastosowania: streaming, IPTV, wideokonferencje."
 },
 {
  "id": "nb14",
  "topic": "netbasics",
  "q": "Technologia VoIP.",
  "a": "Voice over IP — przesyłanie głosu w postaci pakietów danych przez sieć IP zamiast tradycyjnej telefonii komutowanej. Wykorzystuje protokoły sygnalizacyjne (SIP, H.323) i transmisji w czasie rzeczywistym (RTP) oraz kodeki głosu. Zalety: niższy koszt, integracja usług; wyzwania: opóźnienia, jitter, zapewnienie QoS."
 },
 {
  "id": "nb15",
  "topic": "netbasics",
  "q": "Usługi w sieciach ATM i ich przeznaczenie.",
  "a": "ATM (Asynchronous Transfer Mode) przesyła dane w komórkach o stałym rozmiarze 53 bajtów i oferuje klasy usług z gwarancją jakości (QoS): CBR (stała przepływność — głos, wideo), VBR (zmienna), ABR (dostępna, z informacją zwrotną), UBR (bez gwarancji — dane). Pozwala integrować ruch o różnych wymaganiach."
 },
 {
  "id": "nb16",
  "topic": "netbasics",
  "q": "Struktura sieci GSM.",
  "a": "Stacja ruchoma (MS z kartą SIM); podsystem stacji bazowych BSS — BTS (nadajnik-odbiornik w komórce) i BSC (kontroler stacji bazowych); podsystem sieciowy NSS — MSC (centrala komutacyjna), rejestry abonentów HLR i VLR oraz centrum uwierzytelniania AuC. Obszar dzieli się na komórki obsługiwane przez BTS."
 },
 {
  "id": "dsp1",
  "topic": "dsp",
  "q": "Metody analizy sygnałów (głównie częstotliwościowe).",
  "a": "Analiza częstotliwościowa przenosi sygnał z dziedziny czasu do dziedziny częstotliwości, ujawniając jego widmo. Narzędzia: transformata Fouriera (FT), dyskretna DFT i szybka FFT, analiza widmowa, transformata Z, krótkoczasowa STFT i transformata falkowa (wavelet) dla sygnałów niestacjonarnych."
 },
 {
  "id": "dsp2",
  "topic": "dsp",
  "q": "Twierdzenie o próbkowaniu (Nyquista-Shannona).",
  "a": "Aby wiernie odtworzyć sygnał analogowy z jego próbek, częstotliwość próbkowania musi być co najmniej dwa razy większa od najwyższej częstotliwości w sygnale: fs >= 2·fmax. Niespełnienie warunku powoduje aliasing (nakładanie się widm i zniekształcenia). Połowa częstotliwości próbkowania to częstotliwość Nyquista."
 },
 {
  "id": "dsp3",
  "topic": "dsp",
  "q": "Kompresja stratna i bezstratna.",
  "a": "Bezstratna odtwarza oryginał dokładnie (ZIP, PNG, FLAC; metody RLE, Huffman, LZ77) — mniejszy stopień kompresji. Stratna usuwa część informacji (mało istotnej percepcyjnie) dla znacznie większej kompresji (JPEG, MP3, MPEG) i jest nieodwracalna. To kompromis między rozmiarem a jakością."
 },
 {
  "id": "dsp4",
  "topic": "dsp",
  "q": "Kodeki.",
  "a": "Kodek (koder-dekoder) to algorytm/program kompresujący i dekompresujący dane audio lub wideo na potrzeby transmisji i przechowywania. Określa format, stopień kompresji i jakość. Przykłady wideo: H.264, H.265 (HEVC), VP9, AV1; audio: MP3, AAC, Opus, FLAC."
 },
 {
  "id": "dsp5",
  "topic": "dsp",
  "q": "Kodowanie JPEG.",
  "a": "Stratna kompresja obrazu: konwersja RGB do przestrzeni YCbCr i podpróbkowanie chrominancji (oko mniej czułe na kolor), podział na bloki 8x8, dyskretna transformata kosinusowa (DCT), kwantyzacja współczynników (główne źródło strat), a następnie kodowanie entropijne (RLE i Huffmana)."
 },
 {
  "id": "dsp6",
  "topic": "dsp",
  "q": "Filtry — pasmo i częstotliwości charakterystyczne.",
  "a": "Rodzaje wg pasma przepuszczania: dolnoprzepustowy (LP), górnoprzepustowy (HP), pasmowoprzepustowy (BP), pasmowozaporowy (BS). Częstotliwość graniczna (cutoff) wyznacza się zwykle przy spadku o 3 dB. Filtry opisują charakterystyka amplitudowa i fazowa; realizacja analogowa lub cyfrowa (FIR/IIR)."
 },
 {
  "id": "dsp7",
  "topic": "dsp",
  "q": "Transmitancja.",
  "a": "Transmitancja (funkcja przejścia) to stosunek transformaty Laplace'a sygnału wyjściowego do wejściowego przy zerowych warunkach początkowych: H(s) = Y(s)/X(s). Opisuje zachowanie liniowego układu — jego bieguny i zera, stabilność oraz charakterystyki częstotliwościowe."
 },
 {
  "id": "dsp8",
  "topic": "dsp",
  "q": "Aproksymacja i interpolacja — różnica.",
  "a": "Interpolacja wyznacza wartości funkcji w punktach pośrednich tak, by krzywa przechodziła dokładnie przez wszystkie znane punkty (np. wielomianowa, splajny). Aproksymacja dopasowuje funkcję przybliżającą dane, niekoniecznie przez punkty, minimalizując błąd (np. metoda najmniejszych kwadratów) — lepsza przy danych zaszumionych."
 },
 {
  "id": "dsp9",
  "topic": "dsp",
  "q": "Różniczkowanie i całkowanie.",
  "a": "Różniczkowanie wyznacza tempo zmian funkcji (pochodną); całkowanie wyznacza pole pod krzywą i jest operacją odwrotną do różniczkowania. W przetwarzaniu sygnałów różniczkowanie uwypukla szybkie zmiany (krawędzie), a całkowanie wygładza i sumuje. Numerycznie: różnice skończone, metoda trapezów, metoda Simpsona."
 },
 {
  "id": "dsp10",
  "topic": "dsp",
  "q": "Definicja pochodnej.",
  "a": "Pochodna funkcji f w punkcie x to granica ilorazu różnicowego: f'(x) = lim (h dążącego do 0) z [f(x+h) - f(x)] / h. Geometrycznie jest to nachylenie stycznej do wykresu w danym punkcie, a fizycznie — chwilowa szybkość zmian wielkości."
 },
 {
  "id": "dsp11",
  "topic": "dsp",
  "q": "Wartość średnia i chwilowa.",
  "a": "Wartość chwilowa to wartość sygnału w danej chwili t. Wartość średnia to wartość uśredniona w okresie/przedziale (składowa stała); dla czystej sinusoidy za okres wynosi 0. Dla sygnałów zmiennych istotna jest też wartość skuteczna (RMS), np. dla sinusoidy równa amplitudzie podzielonej przez pierwiastek z 2."
 },
 {
  "id": "dsp12",
  "topic": "dsp",
  "q": "Wektory i macierze.",
  "a": "Wektor to uporządkowany ciąg liczb (wiersz lub kolumna); macierz to prostokątna tablica liczb. Operacje: dodawanie, mnożenie przez skalar, mnożenie macierzy, transpozycja, wyznacznik, macierz odwrotna. Zastosowania: rozwiązywanie układów równań, przekształcenia liniowe, grafika komputerowa, uczenie maszynowe."
 },
 {
  "id": "dsp13",
  "topic": "dsp",
  "q": "Odchylenie standardowe.",
  "a": "Miara rozproszenia danych wokół wartości średniej — pierwiastek kwadratowy z wariancji (średniej kwadratów odchyleń od średniej). Im większe, tym dane są bardziej rozproszone. W rozkładzie normalnym około 68% wartości mieści się w przedziale plus/minus jedno odchylenie standardowe od średniej."
 },
 {
  "id": "dsp14",
  "topic": "dsp",
  "q": "Wzmocnienie i jednostka mocy (decybel).",
  "a": "Wzmocnienie to stosunek sygnału wyjściowego do wejściowego. Wyraża się w decybelach (dB) — skala logarytmiczna: dla mocy 10·log10(Pwy/Pwe), dla napięcia 20·log10(Uwy/Uwe). Wzrost o 3 dB oznacza około podwojenie mocy. Moc mierzy się w watach (W); dBm odnosi się do 1 mW."
 },
 {
  "id": "dsp15",
  "topic": "dsp",
  "q": "Porównanie fali świetlnej z falą elektromagnetyczną.",
  "a": "Światło jest falą elektromagnetyczną — szczególnym przypadkiem w zakresie widzialnym (ok. 380–750 nm). Wszystkie fale EM rozchodzą się w próżni z prędkością c i mają wzajemnie prostopadłe pola elektryczne i magnetyczne, prostopadłe do kierunku ruchu. Różni je zakres częstotliwości/długości fali: widmo EM obejmuje fale radiowe, mikrofale, podczerwień, światło widzialne, ultrafiolet, promieniowanie X i gamma."
 },
 {
  "id": "elec1",
  "topic": "elec",
  "q": "Zasada działania tranzystora.",
  "a": "Tranzystor to półprzewodnikowy element sterujący przepływem prądu. Bipolarny (BJT): mały prąd bazy steruje znacznie większym prądem między kolektorem a emiterem (efekt wzmacniania). Unipolarny (FET/MOSFET): napięcie na bramce steruje przewodnością kanału. Tranzystor pełni funkcję wzmacniacza sygnału lub przełącznika (klucza) w układach cyfrowych."
 },
 {
  "id": "elec2",
  "topic": "elec",
  "q": "Elementy półprzewodnikowe.",
  "a": "Bazują na półprzewodnikach (krzem, german) domieszkowanych do typu n i p; działanie opiera się na złączu p-n i sterowaniu nośnikami ładunku. Należą do nich: dioda (przewodzi w jednym kierunku), tranzystor, tyrystor, dioda LED, fotodioda oraz układy scalone integrujące wiele takich elementów."
 },
 {
  "id": "elec3",
  "topic": "elec",
  "q": "Wzmacniacz operacyjny — parametry.",
  "a": "Wzmacniacz różnicowy o bardzo dużym wzmocnieniu, zwykle pracujący ze sprzężeniem zwrotnym. Ważne parametry: bardzo duże wzmocnienie otwartej pętli, duża impedancja wejściowa, mała impedancja wyjściowa, pasmo (iloczyn wzmocnienie-pasmo GBW), napięcie niezrównoważenia (offset), współczynnik tłumienia sygnału wspólnego (CMRR) oraz szybkość narastania (slew rate)."
 },
 {
  "id": "elec4",
  "topic": "elec",
  "q": "Przerzutniki.",
  "a": "Podstawowe elementy pamiętające w technice cyfrowej, przechowujące 1 bit. Rodzaje: RS (SR), D (zatrzaskuje wartość wejścia), JK (uniwersalny), T (zliczający, zmienia stan). Zatrzaski (latch) są poziomowe/asynchroniczne, a przerzutniki taktowane (flip-flop) reagują na zbocze zegara. Budują rejestry, liczniki i pamięci."
 },
 {
  "id": "prog1",
  "topic": "prog",
  "q": "Programowanie sekwencyjne i strukturalne.",
  "a": "Sekwencyjne — instrukcje wykonywane kolejno, jedna po drugiej. Strukturalne — program budowany z trzech podstawowych struktur sterowania: sekwencji, wyboru (warunek) i iteracji (pętla), z podziałem na podprogramy (funkcje, procedury) i bez instrukcji skoku goto. Poprawia czytelność, testowanie i utrzymanie kodu."
 },
 {
  "id": "prog2",
  "topic": "prog",
  "q": "Programowanie obiektowe — konstruktor i destruktor.",
  "a": "Konstruktor to specjalna metoda wywoływana przy tworzeniu obiektu — inicjalizuje jego stan (atrybuty) i może alokować zasoby. Destruktor jest wywoływany przy niszczeniu obiektu i zwalnia zasoby (pamięć, pliki, połączenia). W językach z automatycznym odśmiecaniem pamięci (Java, Python) sprzątanie realizują mechanizmy GC i metody specjalne (finalizatory, __del__)."
 },
 {
  "id": "prog3",
  "topic": "prog",
  "q": "Przekazanie parametrów do procedury.",
  "a": "Przez wartość — przekazywana jest kopia argumentu, więc zmiany wewnątrz procedury nie wpływają na oryginał. Przez referencję/wskaźnik — przekazywany jest dostęp do oryginału, więc zmiany są widoczne na zewnątrz. Istnieje też przekazywanie przez nazwę. Wybór wpływa na efekty uboczne i wydajność (kopiowanie dużych struktur)."
 },
 {
  "id": "prog4",
  "topic": "prog",
  "q": "Algorytm a kod programu.",
  "a": "Algorytm to skończony, jednoznaczny ciąg kroków rozwiązujący problem, niezależny od języka programowania (zapis np. w pseudokodzie lub schemacie blokowym). Kod programu to konkretna implementacja algorytmu w wybranym języku, wykonywalna przez komputer. W skrócie: algorytm to metoda/pomysł, kod to jego realizacja."
 }
];

const QUIZ = [
 {
  "id": "qpub1",
  "topic": "pub",
  "q": "Co oznacza skrót IMRaD?",
  "options": [
   "Introduction, Methods, Results and Discussion",
   "Index, Method, Review, Data",
   "Introduction, Materials, References, Data",
   "International Method for Research and Documentation"
  ],
  "correct": 0,
  "explain": "IMRaD to standardowy układ artykułu empirycznego: Wprowadzenie, Metody, Wyniki, Dyskusja."
 },
 {
  "id": "qpub2",
  "topic": "pub",
  "q": "Indeks Hirscha (h) wynosi h, gdy:",
  "options": [
   "autor opublikował h prac",
   "h prac autora ma co najmniej h cytowań każda",
   "autor ma h współautorów",
   "praca była cytowana h razy w jednym roku"
  ],
  "correct": 1,
  "explain": "h-index łączy produktywność z cytowalnością: h prac z co najmniej h cytowaniami każda."
 },
 {
  "id": "qpub3",
  "topic": "pub",
  "q": "Impact Factor jest wskaźnikiem dotyczącym:",
  "options": [
   "pojedynczego autora",
   "czasopisma",
   "uczelni",
   "konkretnego artykułu"
  ],
  "correct": 1,
  "explain": "Impact Factor (JCR) opisuje średnią cytowalność czasopisma."
 },
 {
  "id": "qexd1",
  "topic": "explore",
  "q": "Metoda IQR uznaje obserwację za odstającą, gdy leży poza:",
  "options": [
   "średnia +/- 2 sigma",
   "Q1 - 1,5·IQR oraz Q3 + 1,5·IQR",
   "mediana +/- IQR",
   "0 i 1 po normalizacji"
  ],
  "correct": 1,
  "explain": "Reguła IQR: poniżej Q1-1,5·IQR lub powyżej Q3+1,5·IQR."
 },
 {
  "id": "qexd2",
  "topic": "explore",
  "q": "Która metryka jest najlepsza przy silnie niezbalansowanych klasach?",
  "options": [
   "accuracy",
   "F1 / AUC-PR / MCC",
   "liczba TP",
   "RMSE"
  ],
  "correct": 1,
  "explain": "Przy niezbalansowaniu accuracy myli; lepsze są F1, AUC-PR, MCC."
 },
 {
  "id": "qexd3",
  "topic": "explore",
  "q": "PCA redukuje wymiar przez:",
  "options": [
   "usuwanie losowych cech",
   "rzutowanie na składowe główne (max wariancji)",
   "klasteryzację k-średnich",
   "normalizację min-max"
  ],
  "correct": 1,
  "explain": "PCA rzutuje dane na ortogonalne składowe o największej wariancji."
 },
 {
  "id": "qexd4",
  "topic": "explore",
  "q": "Algorytm k-średnich minimalizuje:",
  "options": [
   "entropię",
   "sumę kwadratów odległości wewnątrz skupień (WCSS)",
   "liczbę skupień",
   "współczynnik sylwetki"
  ],
  "correct": 1,
  "explain": "k-średnich minimalizuje WCSS — wariancję wewnątrzgrupową."
 },
 {
  "id": "qmcr1",
  "topic": "multi",
  "q": "Wariant niezdominowany (Pareto-optymalny) to taki, którego:",
  "options": [
   "nie da się poprawić w żadnym kryterium bez pogorszenia innego",
   "suma kryteriów jest największa",
   "wszystkie kryteria są równe",
   "waga jest najwyższa"
  ],
  "correct": 0,
  "explain": "Pareto-optymalność: brak wariantu lepszego w jednym kryterium bez pogorszenia innego."
 },
 {
  "id": "qmcr2",
  "topic": "multi",
  "q": "W metodzie AHP wagi kryteriów wyznacza się z:",
  "options": [
   "macierzy porównań parami (wektor własny)",
   "średniej arytmetycznej ocen",
   "losowania",
   "sumy rang"
  ],
  "correct": 1,
  "explain": "AHP: macierz porównań parami w skali 1–9, wagi z wektora własnego."
 },
 {
  "id": "qmcr3",
  "topic": "multi",
  "q": "Metoda leksykograficzna jest:",
  "options": [
   "kompensacyjna",
   "niekompensacyjna (kryteria wg ważności)",
   "probabilistyczna",
   "oparta na sieci neuronowej"
  ],
  "correct": 1,
  "explain": "Optymalizuje kryteria kolejno wg ważności; brak kompensacji."
 },
 {
  "id": "qbi1",
  "topic": "bi",
  "q": "Schemat gwiazdy ma wymiary:",
  "options": [
   "znormalizowane (podtabele)",
   "zdenormalizowane (jedna tabela na wymiar)",
   "bez tabeli faktów",
   "wyłącznie tekstowe"
  ],
  "correct": 1,
  "explain": "Star schema: zdenormalizowane wymiary wokół tabeli faktów."
 },
 {
  "id": "qbi2",
  "topic": "bi",
  "q": "ETL to kolejno:",
  "options": [
   "Encode, Transfer, Load",
   "Extract, Transform, Load",
   "Export, Test, Link",
   "Extract, Transmit, Log"
  ],
  "correct": 1,
  "explain": "ETL: Extract (pobranie), Transform (przetworzenie), Load (załadowanie)."
 },
 {
  "id": "qbi3",
  "topic": "bi",
  "q": "SCD typu 2 obsługuje zmianę atrybutu przez:",
  "options": [
   "nadpisanie wartości",
   "dodanie nowego wiersza z wersją i datami",
   "usunięcie rekordu",
   "ignorowanie zmiany"
  ],
  "correct": 1,
  "explain": "SCD2 dodaje nowy wiersz z wersją — pełna historia zmian."
 },
 {
  "id": "qbi4",
  "topic": "bi",
  "q": "Operacja drill-down w OLAP polega na:",
  "options": [
   "agregacji w górę hierarchii",
   "uszczegółowieniu danych w dół hierarchii",
   "obrocie wymiarów",
   "wyborze jednej wartości"
  ],
  "correct": 1,
  "explain": "Drill-down = przejście do bardziej szczegółowego poziomu."
 },
 {
  "id": "qsql1",
  "topic": "plsql",
  "q": "Obowiązkowa sekcja bloku PL/SQL to:",
  "options": [
   "DECLARE",
   "BEGIN ... END",
   "EXCEPTION",
   "COMMIT"
  ],
  "correct": 1,
  "explain": "Obowiązkowa jest sekcja wykonywalna BEGIN ... END."
 },
 {
  "id": "qsql2",
  "topic": "plsql",
  "q": "Wyjątek NO_DATA_FOUND zgłaszany jest, gdy:",
  "options": [
   "zapytanie SELECT INTO nie zwróci wierszy",
   "dzielimy przez zero",
   "jest duplikat klucza",
   "kursor jest otwarty"
  ],
  "correct": 0,
  "explain": "NO_DATA_FOUND występuje, gdy SELECT INTO nie zwraca wiersza."
 },
 {
  "id": "qsql3",
  "topic": "plsql",
  "q": "Funkcja w PL/SQL w odróżnieniu od procedury:",
  "options": [
   "nie ma parametrów",
   "zwraca wartość (RETURN)",
   "nie może być w pakiecie",
   "nie używa zmiennych"
  ],
  "correct": 1,
  "explain": "Funkcja zwraca wartość przez RETURN i może być użyta w wyrażeniu."
 },
 {
  "id": "qpy1",
  "topic": "python",
  "q": "Dekorator w Pythonie to:",
  "options": [
   "typ danych",
   "funkcja modyfikująca inną funkcję",
   "pętla",
   "wyjątek"
  ],
  "correct": 1,
  "explain": "Dekorator przyjmuje funkcję i zwraca jej zmodyfikowaną wersję."
 },
 {
  "id": "qpy2",
  "topic": "python",
  "q": "*args w definicji funkcji zbiera:",
  "options": [
   "argumenty nazwane w słownik",
   "argumenty pozycyjne w krotkę",
   "tylko jeden argument",
   "zmienne globalne"
  ],
  "correct": 1,
  "explain": "*args zbiera argumenty pozycyjne w krotkę; **kwargs — nazwane w słownik."
 },
 {
  "id": "qpy3",
  "topic": "python",
  "q": "Metoda __init__ służy do:",
  "options": [
   "tworzenia obiektu w pamięci",
   "inicjalizacji atrybutów nowego obiektu",
   "usuwania obiektu",
   "kopiowania obiektu"
  ],
  "correct": 1,
  "explain": "__init__ inicjalizuje stan obiektu (obiekt tworzy __new__)."
 },
 {
  "id": "qpy4",
  "topic": "python",
  "q": "Klasa abstrakcyjna w Pythonie:",
  "options": [
   "może być instancjonowana",
   "nie może być bezpośrednio instancjonowana",
   "nie ma metod",
   "jest tym samym co metaklasa"
  ],
  "correct": 1,
  "explain": "Klasy abstrakcyjnej (abc.ABC) nie można bezpośrednio zinstancjonować."
 },
 {
  "id": "qiot1",
  "topic": "iot",
  "q": "Mikrokontroler w odróżnieniu od mikroprocesora:",
  "options": [
   "wymaga zewnętrznej pamięci i peryferiów",
   "integruje CPU, pamięć i peryferia w jednym układzie",
   "ma większą moc obliczeniową",
   "nie wykonuje programów"
  ],
  "correct": 1,
  "explain": "Mikrokontroler to kompletny komputer w jednym układzie."
 },
 {
  "id": "qiot2",
  "topic": "iot",
  "q": "RISC charakteryzuje się:",
  "options": [
   "złożonymi instrukcjami o zmiennej długości",
   "prostymi instrukcjami o stałej długości",
   "brakiem rejestrów",
   "brakiem potoku"
  ],
  "correct": 1,
  "explain": "RISC: proste instrukcje stałej długości, dużo rejestrów, load/store."
 },
 {
  "id": "qiot3",
  "topic": "iot",
  "q": "W modulacji PWM reguluje się:",
  "options": [
   "częstotliwość nośnej",
   "współczynnik wypełnienia (duty cycle)",
   "amplitudę zasilania",
   "fazę zegara"
  ],
  "correct": 1,
  "explain": "PWM zmienia duty cycle przy stałej częstotliwości, regulując średnią moc."
 },
 {
  "id": "qa11y1",
  "topic": "barriers",
  "q": "WCAG opiera się na 4 zasadach (POUR). Poziom wymagany prawnie to zwykle:",
  "options": [
   "A",
   "AA",
   "AAA",
   "B"
  ],
  "correct": 1,
  "explain": "Standardem prawnym jest zwykle poziom AA."
 },
 {
  "id": "qa11y2",
  "topic": "barriers",
  "q": "SUS (System Usability Scale) daje wynik w skali:",
  "options": [
   "0–10",
   "0–100",
   "1–5",
   "0–68 maksymalnie"
  ],
  "correct": 1,
  "explain": "SUS przelicza 10 stwierdzeń na wynik 0–100 (ok. 68 to średnia)."
 },
 {
  "id": "qa11y3",
  "topic": "barriers",
  "q": "Okulografia (eye-tracking) mierzy m.in.:",
  "options": [
   "napięcie mięśni",
   "fiksacje i sakkady wzroku",
   "tętno",
   "czas reakcji klawiatury"
  ],
  "correct": 1,
  "explain": "Eye-tracking rejestruje fiksacje, sakkady i ścieżki wzroku (heatmapy)."
 },
 {
  "id": "qcld1",
  "topic": "cloud",
  "q": "W modelu PaaS klient odpowiada przede wszystkim za:",
  "options": [
   "sprzęt i sieć",
   "system operacyjny i hypervisor",
   "kod aplikacji i dane",
   "chłodzenie serwerowni"
  ],
  "correct": 2,
  "explain": "W PaaS dostawca daje platformę; klient odpowiada za aplikację i dane."
 },
 {
  "id": "qcld2",
  "topic": "cloud",
  "q": "MFA to:",
  "options": [
   "szyfrowanie dysku",
   "uwierzytelnianie wieloskładnikowe",
   "firewall aplikacyjny",
   "kopia zapasowa"
  ],
  "correct": 1,
  "explain": "MFA wymaga co najmniej dwóch niezależnych czynników uwierzytelnienia."
 },
 {
  "id": "qcld3",
  "topic": "cloud",
  "q": "RPO określa:",
  "options": [
   "maksymalny czas przywrócenia usługi",
   "maksymalną akceptowalną utratę danych w czasie",
   "przepustowość sieci",
   "liczbę użytkowników"
  ],
  "correct": 1,
  "explain": "RPO = ile danych (wyrażone w czasie) można stracić; RTO = czas przywrócenia."
 },
 {
  "id": "qcld4",
  "topic": "cloud",
  "q": "VPC zapewnia w chmurze przede wszystkim:",
  "options": [
   "szyfrowanie haseł",
   "izolowaną, prywatną sieć",
   "kopie zapasowe",
   "równoważenie CPU"
  ],
  "correct": 1,
  "explain": "VPC to logicznie wydzielona, izolowana sieć z kontrolą ruchu."
 },
 {
  "id": "qcry1",
  "topic": "crypto",
  "q": "Zasada Kerckhoffsa mówi, że bezpieczeństwo ma zależeć od:",
  "options": [
   "tajności algorytmu",
   "tajności klucza",
   "długości wiadomości",
   "szybkości procesora"
  ],
  "correct": 1,
  "explain": "Bezpieczeństwo zależy od tajności klucza; algorytm może być jawny."
 },
 {
  "id": "qcry2",
  "topic": "crypto",
  "q": "Bezpieczeństwo RSA opiera się na trudności:",
  "options": [
   "logarytmu dyskretnego",
   "faktoryzacji iloczynu dużych liczb pierwszych",
   "odwracania funkcji skrótu",
   "problemu plecakowego"
  ],
  "correct": 1,
  "explain": "RSA opiera się na trudności rozkładu n na czynniki pierwsze."
 },
 {
  "id": "qcry3",
  "topic": "crypto",
  "q": "Podpis cyfrowy tworzy się, szyfrując skrót wiadomości:",
  "options": [
   "kluczem publicznym nadawcy",
   "kluczem prywatnym nadawcy",
   "kluczem publicznym odbiorcy",
   "kluczem symetrycznym"
  ],
  "correct": 1,
  "explain": "Podpis: skrót szyfrowany kluczem prywatnym nadawcy, weryfikacja publicznym."
 },
 {
  "id": "qcry4",
  "topic": "crypto",
  "q": "Diffie-Hellman służy do:",
  "options": [
   "szyfrowania plików",
   "uzgodnienia wspólnego klucza przez niezabezpieczony kanał",
   "tworzenia funkcji skrótu",
   "kompresji danych"
  ],
  "correct": 1,
  "explain": "DH pozwala uzgodnić wspólny sekret bez przesyłania go."
 },
 {
  "id": "qnet1",
  "topic": "netsec",
  "q": "ARP spoofing to atak w warstwie:",
  "options": [
   "fizycznej",
   "łącza danych (II)",
   "sieciowej (III)",
   "aplikacji"
  ],
  "correct": 1,
  "explain": "ARP działa w warstwie II — stąd ARP spoofing to atak L2."
 },
 {
  "id": "qnet2",
  "topic": "netsec",
  "q": "IDS w odróżnieniu od IPS:",
  "options": [
   "blokuje ruch",
   "wykrywa i alarmuje, ale nie blokuje",
   "szyfruje pakiety",
   "trasuje pakiety"
  ],
  "correct": 1,
  "explain": "IDS wykrywa i alarmuje; IPS dodatkowo blokuje ruch."
 },
 {
  "id": "qnet3",
  "topic": "netsec",
  "q": "Triada CIA w bezpieczeństwie to:",
  "options": [
   "Control, Integrity, Access",
   "Confidentiality, Integrity, Availability",
   "Cipher, Identity, Audit",
   "Cloud, Internet, Access"
  ],
  "correct": 1,
  "explain": "CIA: poufność, integralność, dostępność."
 },
 {
  "id": "qacc1",
  "topic": "access",
  "q": "DHCP snooping chroni przed:",
  "options": [
   "atakiem SQL injection",
   "nieautoryzowanym (rogue) serwerem DHCP",
   "przepełnieniem bufora",
   "atakiem XSS"
  ],
  "correct": 1,
  "explain": "DHCP snooping dopuszcza tylko autoryzowane serwery DHCP."
 },
 {
  "id": "qacc2",
  "topic": "access",
  "q": "Defense-in-depth oznacza:",
  "options": [
   "jeden silny firewall",
   "wiele niezależnych warstw zabezpieczeń",
   "wyłącznie szyfrowanie",
   "brak monitoringu"
  ],
  "correct": 1,
  "explain": "Obrona w głąb nakłada wiele warstw — awaria jednej nie przełamuje całości."
 },
 {
  "id": "qacc3",
  "topic": "access",
  "q": "Test penetracyjny różni się od oceny podatności tym, że:",
  "options": [
   "tylko skanuje porty",
   "kontrolowanie wykorzystuje (eksploatuje) podatności",
   "nie wymaga zgody",
   "dotyczy tylko WiFi"
  ],
  "correct": 1,
  "explain": "Pentest weryfikuje realne wykorzystanie podatności, nie tylko ich wykrycie."
 },
 {
  "id": "qtel1",
  "topic": "telesec",
  "q": "TACACS+ w odróżnieniu od RADIUS:",
  "options": [
   "działa po UDP",
   "szyfruje cały pakiet i rozdziela funkcje AAA",
   "nie szyfruje niczego",
   "jest standardem IETF dla WiFi"
  ],
  "correct": 1,
  "explain": "TACACS+ (Cisco, TCP) szyfruje cały pakiet i rozdziela AAA."
 },
 {
  "id": "qtel2",
  "topic": "telesec",
  "q": "DMZ w sieci to:",
  "options": [
   "szyfrowany tunel",
   "strefa dla usług publicznych oddzielona od sieci wewnętrznej",
   "rodzaj firewalla aplikacyjnego",
   "protokół routingu"
  ],
  "correct": 1,
  "explain": "DMZ izoluje usługi dostępne z zewnątrz od sieci wewnętrznej."
 },
 {
  "id": "qtel3",
  "topic": "telesec",
  "q": "VPN zapewnia przede wszystkim:",
  "options": [
   "większą przepustowość",
   "szyfrowany tunel (poufność, integralność, uwierzytelnianie)",
   "kompresję obrazu",
   "równoważenie obciążenia"
  ],
  "correct": 1,
  "explain": "VPN tworzy bezpieczny, szyfrowany tunel przez sieć publiczną."
 },
 {
  "id": "qos1",
  "topic": "ossec",
  "q": "Model MAC (Mandatory Access Control) charakteryzuje to, że:",
  "options": [
   "właściciel pliku decyduje o dostępie",
   "system narzuca dostęp wg etykiet/polityk",
   "dostęp zależy od roli",
   "brak kontroli dostępu"
  ],
  "correct": 1,
  "explain": "W MAC polityki narzuca system (np. SELinux), niezależnie od właściciela."
 },
 {
  "id": "qos2",
  "topic": "ossec",
  "q": "ASLR to mechanizm:",
  "options": [
   "szyfrowania dysku",
   "losowania układu pamięci utrudniającego exploity",
   "kontroli dostępu do plików",
   "kopii zapasowych"
  ],
  "correct": 1,
  "explain": "ASLR losuje rozmieszczenie obszarów pamięci, utrudniając ataki."
 },
 {
  "id": "qos3",
  "topic": "ossec",
  "q": "MITRE ATT&CK to:",
  "options": [
   "katalog podatności CVE",
   "baza taktyk i technik atakujących",
   "norma ISO",
   "skaner sieci"
  ],
  "correct": 1,
  "explain": "ATT&CK to baza wiedzy o taktykach i technikach przeciwnika."
 },
 {
  "id": "qweb1",
  "topic": "websec",
  "q": "Najskuteczniejsza obrona przed SQL Injection to:",
  "options": [
   "ukrycie komunikatów błędów",
   "zapytania parametryzowane (prepared statements)",
   "dłuższe hasła",
   "wyłączenie cookies"
  ],
  "correct": 1,
  "explain": "Parametryzacja zapytań oddziela dane od kodu SQL."
 },
 {
  "id": "qweb2",
  "topic": "websec",
  "q": "Atak XSS polega na:",
  "options": [
   "wstrzyknięciu SQL do bazy",
   "wykonaniu skryptu w przeglądarce ofiary",
   "przepełnieniu stosu",
   "skanowaniu portów"
  ],
  "correct": 1,
  "explain": "XSS wstrzykuje skrypt wykonywany w przeglądarce użytkownika."
 },
 {
  "id": "qweb3",
  "topic": "websec",
  "q": "Token JWT jest zwykle przesyłany w:",
  "options": [
   "adresie IP",
   "nagłówku Authorization",
   "numerze portu",
   "masce podsieci"
  ],
  "correct": 1,
  "explain": "JWT przesyła się najczęściej w nagłówku Authorization (Bearer)."
 },
 {
  "id": "qjee1",
  "topic": "jee",
  "q": "Dependency Injection (DI) oznacza:",
  "options": [
   "ręczne tworzenie obiektów",
   "wstrzykiwanie zależności przez kontener",
   "mapowanie obiekt-tabela",
   "szyfrowanie haseł"
  ],
  "correct": 1,
  "explain": "DI: kontener dostarcza obiektowi jego zależności zamiast ręcznego tworzenia."
 },
 {
  "id": "qjee2",
  "topic": "jee",
  "q": "Adnotacja @Repository oznacza warstwę:",
  "options": [
   "prezentacji",
   "logiki biznesowej",
   "dostępu do danych",
   "konfiguracji"
  ],
  "correct": 2,
  "explain": "@Repository to komponent warstwy dostępu do danych."
 },
 {
  "id": "qjee3",
  "topic": "jee",
  "q": "REST jest stylem architektury, w którym usługi są:",
  "options": [
   "stanowe",
   "bezstanowe, zasoby przez URI i metody HTTP",
   "oparte tylko na SOAP",
   "wyłącznie lokalne"
  ],
  "correct": 1,
  "explain": "REST: bezstanowość, zasoby przez URI, operacje metodami HTTP."
 },
 {
  "id": "qfs1",
  "topic": "fullstack",
  "q": "Aplikacja bezstanowa (stateless):",
  "options": [
   "trzyma sesję na serwerze",
   "każde żądanie jest niezależne, łatwa do skalowania",
   "nie działa w chmurze",
   "wymaga jednej instancji"
  ],
  "correct": 1,
  "explain": "Stateless: brak stanu na serwerze, łatwe skalowanie poziome."
 },
 {
  "id": "qfs2",
  "topic": "fullstack",
  "q": "Kubernetes to:",
  "options": [
   "baza danych",
   "system orkiestracji kontenerów",
   "framework front-end",
   "protokół sieciowy"
  ],
  "correct": 1,
  "explain": "Kubernetes automatyzuje wdrażanie, skalowanie i samonaprawę kontenerów."
 },
 {
  "id": "qfs3",
  "topic": "fullstack",
  "q": "IaaS w odróżnieniu od SaaS dostarcza:",
  "options": [
   "gotową aplikację",
   "infrastrukturę (maszyny, sieć, storage)",
   "tylko bazę danych",
   "wyłącznie funkcje serverless"
  ],
  "correct": 1,
  "explain": "IaaS daje infrastrukturę; SaaS — gotową aplikację."
 },
 {
  "id": "qswf1",
  "topic": "swift",
  "q": "Optional (Typ?) w Swift reprezentuje:",
  "options": [
   "liczbę zmiennoprzecinkową",
   "wartość lub jej brak (nil)",
   "tablicę",
   "domknięcie"
  ],
  "correct": 1,
  "explain": "Optional przechowuje wartość albo nil, wymuszając obsługę braku."
 },
 {
  "id": "qswf2",
  "topic": "swift",
  "q": "struct w Swift jest typem:",
  "options": [
   "referencyjnym",
   "wartościowym (kopiowanym)",
   "abstrakcyjnym",
   "wyłącznie liczbowym"
  ],
  "correct": 1,
  "explain": "struct to typ wartościowy; class — referencyjny."
 },
 {
  "id": "qswf3",
  "topic": "swift",
  "q": "@StateObject w SwiftUI oznacza, że widok:",
  "options": [
   "nie jest właścicielem obiektu",
   "jest właścicielem i tworzy obiekt (zachowywany)",
   "kopiuje obiekt przy każdej zmianie",
   "ignoruje zmiany stanu"
  ],
  "correct": 1,
  "explain": "@StateObject: widok tworzy i posiada obiekt, zachowywany między rekompozycjami."
 },
 {
  "id": "qand1",
  "topic": "android",
  "q": "Rekompozycja w Jetpack Compose to:",
  "options": [
   "restart aplikacji",
   "ponowne wykonanie funkcji @Composable po zmianie stanu",
   "kompilacja kodu",
   "migracja bazy"
  ],
  "correct": 1,
  "explain": "Rekompozycja przelicza UI po zmianie obserwowanego stanu."
 },
 {
  "id": "qand2",
  "topic": "android",
  "q": "State hoisting polega na:",
  "options": [
   "ukryciu stanu w widoku",
   "wyniesieniu stanu do rodzica (komponent bezstanowy)",
   "usunięciu stanu",
   "szyfrowaniu stanu"
  ],
  "correct": 1,
  "explain": "State hoisting: stan w górę, dziecko dostaje wartość + callback."
 },
 {
  "id": "qand3",
  "topic": "android",
  "q": "Jednokierunkowy przepływ danych (UDF) oznacza:",
  "options": [
   "stan w górę, zdarzenia w dół",
   "stan w dół, zdarzenia w górę",
   "brak stanu",
   "dwukierunkowe wiązanie wszędzie"
  ],
  "correct": 1,
  "explain": "UDF: stan płynie w dół, zdarzenia w górę do właściciela stanu."
 },
 {
  "id": "qpat1",
  "topic": "patterns",
  "q": "Wzorzec Singleton należy do grupy:",
  "options": [
   "strukturalnych",
   "konstrukcyjnych",
   "behawioralnych",
   "architektonicznych"
  ],
  "correct": 1,
  "explain": "Singleton to wzorzec konstrukcyjny (tworzenie obiektów)."
 },
 {
  "id": "qpat2",
  "topic": "patterns",
  "q": "Facade w odróżnieniu od Proxy:",
  "options": [
   "ma ten sam interfejs co obiekt",
   "udostępnia uproszczony interfejs do całego podsystemu",
   "kontroluje dostęp do jednego obiektu",
   "tworzy kopie obiektów"
  ],
  "correct": 1,
  "explain": "Facade upraszcza dostęp do wielu klas; Proxy zastępuje jeden obiekt."
 },
 {
  "id": "qpat3",
  "topic": "patterns",
  "q": "Litera S w SOLID oznacza:",
  "options": [
   "Security",
   "Single Responsibility Principle",
   "Singleton",
   "Separation"
  ],
  "correct": 1,
  "explain": "S = Single Responsibility — jedna odpowiedzialność klasy."
 },
 {
  "id": "qarch1",
  "topic": "arch",
  "q": "Magistrala systemowa dzieli się na:",
  "options": [
   "wejściową i wyjściową",
   "adresową, danych i sterującą",
   "wewnętrzną i zewnętrzną",
   "cyfrową i analogową"
  ],
  "correct": 1,
  "explain": "Trzy magistrale: adresowa, danych, sterująca."
 },
 {
  "id": "qarch2",
  "topic": "arch",
  "q": "Cechą maszyny von Neumanna jest:",
  "options": [
   "oddzielna pamięć danych i programu",
   "wspólna pamięć dla danych i programu",
   "brak procesora",
   "brak pamięci"
  ],
  "correct": 1,
  "explain": "Von Neumann: program przechowywany we wspólnej pamięci z danymi."
 },
 {
  "id": "qarch3",
  "topic": "arch",
  "q": "RAID 1 to:",
  "options": [
   "striping bez redundancji",
   "mirroring (kopia lustrzana)",
   "parzystość rozproszona",
   "podwójna parzystość"
  ],
  "correct": 1,
  "explain": "RAID 1 to mirroring — lustrzana kopia danych."
 },
 {
  "id": "qarch4",
  "topic": "arch",
  "q": "Wątki w obrębie jednego procesu:",
  "options": [
   "mają osobne przestrzenie adresowe",
   "współdzielą pamięć procesu",
   "nie mogą działać równolegle",
   "są cięższe niż procesy"
  ],
  "correct": 1,
  "explain": "Wątki współdzielą pamięć i zasoby procesu (wymagają synchronizacji)."
 },
 {
  "id": "qnb1",
  "topic": "netbasics",
  "q": "Model OSI ma liczbę warstw:",
  "options": [
   "4",
   "5",
   "7",
   "9"
  ],
  "correct": 2,
  "explain": "Model OSI ma 7 warstw (TCP/IP — 4)."
 },
 {
  "id": "qnb2",
  "topic": "netbasics",
  "q": "Pole TTL w pakiecie IP służy do:",
  "options": [
   "szyfrowania",
   "ograniczenia czasu życia/pętli pakietu",
   "adresowania MAC",
   "kompresji"
  ],
  "correct": 1,
  "explain": "TTL maleje na każdym routerze; przy 0 pakiet jest odrzucany."
 },
 {
  "id": "qnb3",
  "topic": "netbasics",
  "q": "Switch działa w warstwie, a router w warstwie:",
  "options": [
   "3 i 2",
   "2 (MAC) i 3 (IP)",
   "1 i 2",
   "4 i 3"
  ],
  "correct": 1,
  "explain": "Switch — warstwa 2 (MAC), router — warstwa 3 (IP)."
 },
 {
  "id": "qnb4",
  "topic": "netbasics",
  "q": "PAT (NAT overload) rozróżnia połączenia po:",
  "options": [
   "adresach MAC",
   "numerach portów",
   "numerach VLAN",
   "TTL"
  ],
  "correct": 1,
  "explain": "PAT mapuje wiele adresów na jeden publiczny, rozróżniając je portami."
 },
 {
  "id": "qnb5",
  "topic": "netbasics",
  "q": "Komórka ATM ma stały rozmiar:",
  "options": [
   "48 bajtów",
   "53 bajty",
   "64 bajty",
   "128 bajtów"
  ],
  "correct": 1,
  "explain": "ATM używa komórek 53 B (48 B danych + 5 B nagłówka)."
 },
 {
  "id": "qdsp1",
  "topic": "dsp",
  "q": "Twierdzenie o próbkowaniu wymaga, by fs było:",
  "options": [
   "równe fmax",
   "co najmniej 2·fmax",
   "mniejsze niż fmax",
   "równe zeru"
  ],
  "correct": 1,
  "explain": "Nyquist: fs >= 2·fmax, inaczej aliasing."
 },
 {
  "id": "qdsp2",
  "topic": "dsp",
  "q": "Kodowanie JPEG wykorzystuje przekształcenie:",
  "options": [
   "FFT",
   "DCT (dyskretna transformata kosinusowa)",
   "transformatę Laplace'a",
   "RLE jako jedyny krok"
  ],
  "correct": 1,
  "explain": "JPEG: bloki 8x8, DCT, kwantyzacja, kodowanie entropijne."
 },
 {
  "id": "qdsp3",
  "topic": "dsp",
  "q": "Kompresja bezstratna to np.:",
  "options": [
   "JPEG",
   "MP3",
   "PNG / FLAC",
   "MPEG"
  ],
  "correct": 2,
  "explain": "Bezstratne: PNG, FLAC, ZIP; stratne: JPEG, MP3, MPEG."
 },
 {
  "id": "qdsp4",
  "topic": "dsp",
  "q": "Wzrost mocy o 3 dB oznacza w przybliżeniu:",
  "options": [
   "spadek o połowę",
   "podwojenie mocy",
   "brak zmiany",
   "10-krotny wzrost"
  ],
  "correct": 1,
  "explain": "+3 dB to około podwojenie mocy (skala logarytmiczna)."
 },
 {
  "id": "qdsp5",
  "topic": "dsp",
  "q": "Odchylenie standardowe to:",
  "options": [
   "średnia wartości",
   "pierwiastek z wariancji (rozproszenie)",
   "wartość maksymalna",
   "mediana"
  ],
  "correct": 1,
  "explain": "Odchylenie standardowe = pierwiastek z wariancji."
 },
 {
  "id": "qelec1",
  "topic": "elec",
  "q": "W tranzystorze bipolarnym (BJT) prądem sterującym jest:",
  "options": [
   "prąd kolektora",
   "prąd bazy",
   "napięcie bramki",
   "prąd emitera ujemny"
  ],
  "correct": 1,
  "explain": "W BJT mały prąd bazy steruje dużym prądem kolektor-emiter."
 },
 {
  "id": "qelec2",
  "topic": "elec",
  "q": "Dioda przewodzi prąd:",
  "options": [
   "w obu kierunkach",
   "w jednym kierunku",
   "tylko zmienny",
   "tylko przy zerowym napięciu"
  ],
  "correct": 1,
  "explain": "Dioda (złącze p-n) przewodzi zasadniczo w jednym kierunku."
 },
 {
  "id": "qelec3",
  "topic": "elec",
  "q": "Slew rate wzmacniacza operacyjnego to:",
  "options": [
   "wzmocnienie napięciowe",
   "szybkość narastania sygnału wyjściowego",
   "impedancja wejściowa",
   "napięcie offsetu"
  ],
  "correct": 1,
  "explain": "Slew rate określa maksymalną szybkość zmian napięcia wyjściowego."
 },
 {
  "id": "qprog1",
  "topic": "prog",
  "q": "Programowanie strukturalne opiera się na strukturach:",
  "options": [
   "dziedziczenie, polimorfizm, hermetyzacja",
   "sekwencja, wybór, iteracja",
   "goto i skoki",
   "wyłącznie rekurencja"
  ],
  "correct": 1,
  "explain": "Strukturalne: sekwencja, wybór (warunek), iteracja (pętla)."
 },
 {
  "id": "qprog2",
  "topic": "prog",
  "q": "Przekazanie parametru przez wartość oznacza, że:",
  "options": [
   "zmiany w procedurze zmieniają oryginał",
   "procedura dostaje kopię, oryginał bez zmian",
   "parametr jest globalny",
   "parametr jest wskaźnikiem"
  ],
  "correct": 1,
  "explain": "Przez wartość: kopia argumentu, oryginał pozostaje niezmieniony."
 },
 {
  "id": "qprog3",
  "topic": "prog",
  "q": "Algorytm w odróżnieniu od kodu programu jest:",
  "options": [
   "zależny od języka",
   "niezależny od języka (metoda rozwiązania)",
   "wykonywalny przez CPU",
   "zawsze w C++"
  ],
  "correct": 1,
  "explain": "Algorytm to metoda niezależna od języka; kod to jej implementacja."
 }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { TOPICS, DECK, QUIZ }; }
