# Flash Message

Simple javascript which can used from anywhere in your application. once this function is triggered it will display the provided message on the screen.


## Install

`npm install --save flash-messages-ak`

and of course you need to require the package: 

```javascript
require('flash-messages-ak')
```

Or you can added directly from unpack cdn as follow: 

```javascript
<script src="" > <script>

```

## Usage

once you installed this package you can call the flashMsg() from anywhere in your app for example

```javascript
flashMsg("My Message", 1000 , "success" , "top" , "left")
```


## Arguments


The flashMsg function accept five arguments as follow: 

-  message 
  - type: `String`
  - default: `none`
  - description: here where you can specify the text content of the flash message

- timeout
 - type: `Number`
 - default: `2000`
 - description: through this argument you can specify how long this flash message will be displayed on the screen


 - level
  - type: `String`
  - default: `successs`
  - options: `success or danger`
  - description: this argument give you the ability to specify the background color of the flash message `success` light green `danger` light red.

- position
 - type: `String`
 - default: `bottom`
 - options: `bottom , top`
 - description: you can specify the position of the flash message either bottom or top of the screen
 

- alignment
 - type: `String`
 - default: `right`
 - options: `right , left`
 - description: you can specify the alignment of this flash message either left or right of the screen

