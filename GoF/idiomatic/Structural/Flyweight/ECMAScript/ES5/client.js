'use strict';

var getLinuxDistro = require('./API/flyweight');

// ==============================
// CLIENT CODE 
// ==============================

// Creation of our objects through the factory
// 팩토리를 통한 객체 생성
var debian = getLinuxDistro("DEBIAN"),
    debianAgain = getLinuxDistro("debian");

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same object has been reused; 동일한 객체가 재사용되었습니다.)
