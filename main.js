var b = +prompt('Введите ваш возраст.')

if(b === 0 || b === 1 || b === 2 || b === 3 || b === 4 || b === 5 || b === 6 || b === 7 || b === 8 || b === 9 || b === 10 || b === 11 || b === 12 || b === 13 || b === 14 || b === 15 || b === 16 || b === 17 || b === 18 ) {
   alert('Вы еще молоды. Вам нужно учиться.');
}else if(b === 19 || b === 20 || b === 21 || b === 22 || b === 23 || b === 24 || b === 25 || b === 26 || b === 27 || b === 28 || b === 29 || b === 30 || b === 31 || b === 32 || b === 33 || b === 34 || b === 35 || b === 36 || b === 37 || b === 38 || b === 39 || b === 40 || b === 41 || b === 42 || b === 43 || b === 44 || b === 45 || b === 46 || b === 47 || b === 48 || b === 49 || b === 50 ) {
   alert('Вам нужно работать.');
}else if(b === 51 || b === 52 || b === 53 || b === 54 || b === 55 || b === 56 || b === 57 || b === 58 || b === 59 ) {
   alert('Вам скоро на пенсию.');
}else if(b === 60 || b === 61 || b === 62 || b === 63 || b === 64 || b === 65 || b === 66 || b === 67 || b === 68 || b === 69 || b === 70 || b === 71 || b === 72 || b === 73 || b === 74 || b === 75 || b === 76 || b === 77 || b === 78 || b === 79 ||  b === 80 || b === 81 || b === 82 || b === 83 || b === 84 || b === 85 || b === 86 || b === 87 || b === 88 || b === 89 || b === 90 || b === 91 || b === 92 || b === 93 || b === 94 || b === 95 || b === 96 || b === 97 || b === 98 || b === 99 || b === 100 || b === 101 || b === 102 || b === 103 || b === 104 || b === 105 || b === 106 || b === 107 || b === 108 || b === 109 || b === 110 || b === 111 || b === 112 || b === 113 || b === 114 || b === 115 || b === 116 || b === 117 || b === 118 || b === 119 || b === 120 || b === 121 || b === 122 || b === 123 || b === 124 || b === 125 || b === 126 || b === 127 || b === 128 || b === 129 || b === 130 || b === 131 || b === 132 || b === 133 || b === 134 || b === 135 || b === 136 || b === 137 || b === 138 || b === 139 || b === 140 || b === 141 || b === 142 || b === 143 || b === 144 || b === 145 || b === 146 || b === 147 || b === 148 || b === 149 || b === 150 ) {
   alert('Вы пенсионер.');
}else {
   alert("Что-то пошло не так.");
}

var num = +prompt('Введите ваше время.');

switch(num) {
   case 1:
      alert('Час ночи');
      break;
   case 2: 
      alert('2 часа ночи');
      break;
   case 3:
      alert('3 часа ночи');
      break;
   case 4:
      alert('4 часа ночи');
      break;
   case 5:
      alert('5 часов утра');
      break;
   case 6:
      alert('6 часов утра');
      break;
   case 7:
      alert('7 часов утра');
      break;
   case 8:
      alert('8 часов утра');
      break;
   case 9:
      alert('9 часов утра');
      break;
   case 10:
      alert('10 часов утра');
      break;
   case 11:
      alert('11 часов утра');
      break;
   case 12:
      alert('12 часов дня');
      break;
   case 13:
      alert('Час дня');
      break;
   case 14:
      alert('2 часа дня');
      break;
   case 15:
      alert('3 часа дня');
      break;
   case 16:
      alert('4 часа дня');
      break;
   case 17:
      alert('5 часов вечера');
      break;
   case 18:
      alert('6 часов вечера');
      break;
   case 19:
      alert('7 часов вечера');
      break;
   case 20:
      alert('8 часов вечера');
      break;
   case 21:
      alert('9 часов ночи');
      break;
   case 22:
      alert('10 часов ночи');
      break;
   case 23:
      alert('11 часов ночи');
      break;
   case 24:
      alert('12 часов ночи');
      break;
   default:
      alert('Что-то пошло не так.');
      break;
}

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третее число');

if(a > b && b < c && c > a && !isNaN(a) && !isNaN(b) && !isNaN(c) ) {
   alert('Cреднее число - ' + a)
}else if(a < b && b > c && a > c && !isNaN(a) && !isNaN(b) && !isNaN(c) ) {
   alert('Cреднее число - ' + a)
}else if(a > b && b > c && !isNaN(a) && !isNaN(b) && !isNaN(c) ) {
   alert('Cреднее число - ' + b)
}else if(a < b && b < c && !isNaN(a) && !isNaN(b) && !isNaN(c) ) {
   alert('Cреднее число - ' + b)
}else if(a > b && b < c && a > c && !isNaN(a) && !isNaN(b) && !isNaN(c) ) {
   alert('Cреднее число - ' + c)
}else if(a < b && b > c && c > a && !isNaN(a) && !isNaN(b) && !isNaN(c) ) {
   alert('Cреднее число - ' + c)
}else {
   alert("Что-то пошло не так.");
}