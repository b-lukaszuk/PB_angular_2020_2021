# Reminder

```bash
npm install -g @angular/cli # instalacja angulara (globalnie)
ng new my-dream-app # tworzenie nowego projektu, tu: my-dream-app
cd my-dream-app
ng serve # odpalanie projektu (live server)
```


# Task 1

## Nice guy at the gate (zrobiono na PS-ach)

You enter or leave the classroom and there is a guy that is asking about your name.
He either greets you politely or wishes you to have a nice day.

### Details: 

1. Create interface for collecting 'name' and 'family name' - inputs
2. Create interface for greeting and byebye'ing - buttons
3. Display alerts upon either greeting or byebye'ing

**Additionally**

+ Empty inputs on 'bye bye'

# Task 2

## People in the room (zrobiono na PS-ach)

Number of people that can be in the room is limited. We need some tool to help us with keeping track of who is coming and who is going...

### Details: 

1. Display max number of people that can be in the room
2. Display current number of people
3. Create interface for increasing and decreasing the current number
   + two buttons (+1 and -1)
4. Display a warning if 'current' is equal or bigger than allowed

**Additionally**

+ IF user hits +1 BUT there is no more space in the room display an alert
+ User colors: when there are 3 seats left orange, when no more seats then red
+ Don't allow negative numbers

# Task 3

## People in the room, v2

We want to keep track of how many people are in the room
BUT ADDITIONALLY know who is there.

### Details: 

1. In order to add a person to the list we need to change our interface
   + input field for name
   + button for adding provided name to the list
2. After adding a person to the list clear the input
3. Adjust logic that is checking 'current' vs 'max allowed'
4. Display the list of names
5. It should be possible to remove person from the list
6. It should be possible to completely clear the list

**Additionally**

+ Person on the list needs a name! Prevent adding empty rows.
+ Make the list numbered (each person has a number)

# Task 4

## People in the room v3 - who likes what

We need a new feature. In order to know a bit more about people in the room we want some additional info about each of them.

### Details: 

1. Upon adding a new person to the list collect info about preferred framework
   + Dropdown with options: angular, react, vue
2. Adjust logic of adding person to the list as now we have
   + name
   + favorite framework name
3. Adjust removing from list logic
4. Adjust list structure and logic to display persons preference

**Additionally**

* How about adding edit button next to each person on the list?
