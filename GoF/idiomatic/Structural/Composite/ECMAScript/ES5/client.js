'use strict';

var toys = require('./API/toys');

// ==============================
// CLIENT CODE 
// ==============================

// Here we organize our toys in an optimal way
// 여기서 우리는 장난감을 최적의 방식으로 조직합니다.
var ball1 = toys.ball(),
    ball2 = toys.ball(),
    ball3 = toys.ball(),
    bigToyBox = toys.box(),
    smallToyBox = toys.box();

smallToyBox.add(ball1);
bigToyBox.add(ball2);
bigToyBox.add(ball3);
bigToyBox.add(smallToyBox);

// Now we open our big toy box...
// 이제 우리는 큰 장난감 상자를 엽니다...
console.log(bigToyBox.inventory());
