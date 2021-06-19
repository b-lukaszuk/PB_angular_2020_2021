# Tetris

---

# Spis tresci

1. [Info](#info)
   + [Wymagania 1](#wymagania-1)
   + [Wymagania 2](#wymagania-2)
   + [Wymagania 3](#wymagania-3)
   + [Wymagania 4](#wymagania-4)
   + [Wymagania 5](#wymagania-5)
2. [Wymagania oryginalne](wymagania-oryginalne)
2. [Uruchomienie](#uruchomienie)
3. [Authors](#authors)
4. [License](#license)

---

# Info

Projekt zapoczatkowany jako praca domowa na zaliczenie semestru 1 z przedmiotu Angular od Podstaw na podyplomowce PB JS developer (2020/2021)

## Wymagania 1

[Powrot do spisu tresci](#spis-tresci)

### Convert showing/hiding to routing

1. Intro page (smart component, route)
+ handles navigation
+ composed from:
  - Intro text
  - Player form component (dumb component)
2. Game page (smart component, route)
+ handles navigation (going back, Location service)
+ composed from:
  - Personalized welcoming tex
  - Game info: status, points (dumb component)
  - tetris game code (library)
  - Controller (dumb component)

App should be broken now - no data being passed from Intro to Game page


## Wymagania 2

[Powrot do spisu tresci](#spis-tresci)

### Parameters

1 .Extend game route to accept parameter: 'colors'
2. Intro page
- Allow player to select color palette: normal, high contrast
- Pass selected color palette through route parameter
3. Game page
- Add support for 'high contrast' color palette (heres how)
- Read route 'colors' param
- Bind route param to game component ([] or [ngClass])

extra: allow color palette switching from game page (keep the url synced)

## Wymagania 3

### Store player data in a service

1. Create service for storing player data
2. Intro page - puts player data to store
3. Game page - reads player data from store

## Wymagania 4

### Reading and displaying highscores

1. Read current highscores (GET /scores) 
- reading as text/html - default
- reading as json - add accept: application/json header
2. Display highscores (component):
- List with entries (name - score pairs)
- show only top 10 entries
3. List sorting
- allow sorting by: score asc/desc

## Wymagania 5

### Intro page - transition to reactive form

1. Player name
- required
- min length 5 chars
2. Auth code input
- required
- min length 5 chars?
3. Color selection
- with initial value
- upon change make some element either colored or black&white

extra: store user input in local storage and fill the form for returning users
(dont store auth code)


# Wymagania oryginalne

## Overview

Two pages
- Intro page with intro text and player form
- Game page

## Intro page specification

- some quick introductory text
- form with two inputs
    - player name
    - player email
- start game button
- upon clicking 'start' we check name and email and notify player whats wrong
- if name and email are fine then store this data and move to the game page

## Game page specification

**basic version**
- there should be a button 'exit game' which will move player to intro page
- there should be nice, personalized welcome message (with player name)
- integrate [ngx-tetris](https://www.npmjs.com/package/ngx-tetris) library
- big indication of the game status (ready, started, paused...)
- we need points counting mechanism (each cleared line counts)
- display current amount of points
- display time spent wile playing

**extra points version should additionally have:**
- there should be a 'gameplay history' with all actions and each entry should have
    - timestamp
    - action name (player started the game, paused, line cleared...)
- gameplay history should be
    - filterable by event type (ie. show only 'line cleared' events)
    - sortable by timestamp (latest first or oldest first)

# Uruchomienie

[Powrot do spisu tresci](#spis-tresci)

```bash
cd tetris
ng serve -o
```

# Authors

[Powrot do spisu tresci](#spis-tresci)

- [Chrystian Ruminowicz](http://chrum.it) autor [ngx-tetris](https://www.npmjs.com/package/ngx-tetris)
- Bartlomiej Lukaszuk - autor 'obudowy'

# Licence

[Powrot do spisu tresci](#spis-tresci)

This project is licensed under the MIT license. See the [LICENSE](https://opensource.org/licenses/MIT) file for more info.
