# 🚗 Private Driver Tracker

# Specyfikacja Produktu v1.0

## 🎯 Cel projektu

Stworzenie aplikacji, która pomaga kierowcom platform (Uber / Bolt / FreeNow) zrozumieć, ile **naprawdę** zarabiają po odliczeniu wszystkich kosztów prowadzenia działalności.

Aplikacja nie ma być tylko projektem do portfolio.

Ma być narzędziem, którego będę używał podczas swojej pracy jako kierowca Uber.

Każda nowa funkcja będzie rozwijana na podstawie realnych doświadczeń z użytkowania aplikacji.

---

# 👤 Użytkownik

Docelowym użytkownikiem jest kierowca platform:

- Uber
- Bolt
- FreeNow

Aplikacja powinna działać zarówno dla osób jeżdżących tylko na jednej platformie, jak i kilku jednocześnie.

---

# ⭐ Główna zasada aplikacji

Aplikacja ma **oszczędzać czas użytkownika**, a nie dokładać mu pracy.

Dodanie jednej sesji powinno zajmować maksymalnie około **2 minut**.

Każde nowe pole formularza musi mieć realną wartość.

---

# 🏗 Model danych

## 1. Sesja

Dodawana po każdej zakończonej zmianie.

Pola:

- Data
- Platforma
- Godzina rozpoczęcia
- Godzina zakończenia
- Liczba kursów
- Zarobek brutto (Gross Earnings)
- Dystans
- Koszt paliwa / ładowania
- Congestion Charge
- Parking

Automatycznie wyliczane:

- Liczba przepracowanych godzin
- Zarobek na godzinę
- Koszty sesji
- Zysk netto z sesji

---

## 2. Koszty tygodniowe

Dodawane raz w tygodniu.

Przykłady:

- Wynajem auta
- Myjnia
- Mandaty

Powód:

Są to koszty, które zmieniają się z tygodnia na tydzień.

---

## 3. Koszty miesięczne

Dodawane raz w miesiącu.

Przykłady:

- Ubezpieczenie
- Telefon
- Serwis
- Opony

Powód:

Nie dotyczą jednej sesji ani jednego tygodnia.

---

## 4. Ustawienia (Future)

Użytkownik konfiguruje tylko raz.

Przykłady:

- Waluta
- Mile / Kilometry
- Rodzaj paliwa
- Stawka podatku (%)
- Podstawa naliczania podatku

---

# 💰 Model finansowy

## Sesja

Zarobek brutto

↓

Koszty sesji

↓

Zysk netto z sesji

---

## Tydzień

Suma zarobków brutto

↓

Koszty tygodniowe

↓

Zysk netto tygodnia

---

## Miesiąc

Suma zysków tygodniowych

↓

Koszty miesięczne

↓

Szacowany podatek

↓

Końcowy zysk

---

# 📊 Dashboard

Dashboard powinien odpowiadać na jedno pytanie:

> **Ile pieniędzy naprawdę zarobiłem?**

Wyświetlane dane:

- Zarobek brutto
- Koszty sesji
- Koszty tygodniowe
- Łączne koszty
- Zysk przed podatkiem
- Szacowany podatek (Future)
- Końcowy zysk netto (Future)
- Zarobek brutto na godzinę
- Zarobek netto na godzinę

---

# ❌ Funkcje, których NIE dodajemy

Świadomie rezygnujemy z:

- Notatek
- Komentarzy
- Opisów dnia
- Ocen dnia

Powód:

Nie zwiększają wartości aplikacji, a wydłużają czas dodawania sesji.

---

# ✅ Zasady projektowe

Każda nowa funkcja musi spełniać przynajmniej jeden warunek:

1. Dawać realną wartość użytkownikowi.

LUB

2. Uczyć ważnej technologii React / JavaScript.

Jeżeli nie spełnia żadnego z nich — nie dodajemy jej.

---

# 🚀 Roadmap MVP

## Etap 1 (Obecnie)

- CRUD
- LocalStorage
- Edycja sesji
- Statystyki
- Koszty sesji
- Zysk netto z sesji

---

## Etap 2

- Koszty tygodniowe
- Dashboard tygodniowy
- Filtrowanie
- Sortowanie

---

## Etap 3

- Responsywność
- Wykres
- README
- Dopracowanie UI

---

## Etap 4

- Projekt z API
- TypeScript
- Git Workflow
- Portfolio
- Aplikowanie o pracę

---

# 👨‍💻 Zasady pracy nad projektem

Przed napisaniem kodu zawsze odpowiadamy na pytania:

1. Jaki problem rozwiązujemy?
2. Jakie dane będą potrzebne?
3. Który komponent jest właścicielem state?
4. Jak będą przepływać dane?
5. Jakie funkcje będą potrzebne?
6. Dopiero wtedy piszemy kod.

Najpierw myślenie.

Potem React.

---

# 📝 Historia projektu

Projekt tworzony jest przez aktywnego kierowcę Uber.

Aplikacja będzie testowana podczas prawdziwej pracy.

Nowe funkcje będą powstawały na podstawie realnego użytkowania aplikacji, a nie pomysłów z tutoriali.