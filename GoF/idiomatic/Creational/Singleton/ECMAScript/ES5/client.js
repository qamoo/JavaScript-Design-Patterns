'use strict';

var me = require('./API/me'),
    meAgain = require('./API/me');

// ==============================
// CLIENT CODE 
// ==============================

// It will display 'OK' since 'me' and 'meAgain' are references to the same object.
// Only one instance exists in the code. This is what we expect from a Singleton. :)
// 'me'와 'meAgain'이 동일한 객체를 참조하기 때문에 'OK'가 표시됩니다.
// 코드에는 하나의 인스턴스만 존재합니다. 이것이 싱글톤으로 기대하는 바입니다. :)

if (me === meAgain) {
    console.log("OK");
} else {
    console.log("KO");
}
