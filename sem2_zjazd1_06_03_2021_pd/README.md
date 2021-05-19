# Tetris

---

# Spis tresci

1. [Info](#info)
2. [Uruchomienie](#uruchomienie)
2.1. [17-02-2021](#17-02-2021)
2.2. [10-01-2021](#10-01-2021)
3. [Authors](#authors)
4. [License](#license)

---

# Info

Projekt zapoczatkowan jako praca domowa na zaliczenie semestru 1 z przedmiotu Angular od Podstaw na podyplomowce PB JS developer (2020/2021)

## 17-02-2021

Ponizej kopiuj-wklej z [githuba](https://github.com/chrum/ng-2020/blob/master/README.md)
Chrystiana:

"""

### Project

#### Overview
Two pages
- Intro page with intro text and player form
- Game page

#### Intro page specification

- some quick introductory text
- form with two inputs
    - player name
    - player email
- start game button
- upon clicking 'start' we check name and email and notify player whats wrong
- if name and email are fine then store this data and move to the game page

#### Game page specification
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

"""

## 10-01-2021

> Game page<br>
> there should be a button 'exit game' which will move player to intro page<br>
> there should be nice, personalized welcome message (with player name)<br>
> integrate [ngx-tetris] (https://www.npmjs.com/package/ngx-tetris)<br>
> big indication of the game status (ready, started, paused...)<br>
> we need points counting mechanism (each cleared line counts)<br>
> display current amount of points<br>
> display time spent wile playing<br>
> there should be 'gameplay history' with all actions and each entry should have<br>
> timestamp<br>
> action name (player started the game, paused, line cleared...)<br>
> gameplay history should be<br>
> filterable by event type (ie. show only 'line cleared' events)<br>
> sortable by timestamp (latest first or oldest first)<br>

# Uruchomienie

```bash
ng serve -o
```

# Authors

- [Chrystian Ruminowicz](http://chrum.it) autor [ngx-tetris](https://www.npmjs.com/package/ngx-tetris)
- Bartlomiej Lukaszuk - autor 'obudowy'

# Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
