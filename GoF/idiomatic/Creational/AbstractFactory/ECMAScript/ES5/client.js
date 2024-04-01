'use strict';

var getOSFactory = require('./API/factories');

// ==============================
// CLIENT CODE 
// ==============================

// We can get concrete factories from the abstract factory  
// 우리는 추상 팩토리로부터 구체적인 팩토리를 얻을 수 있습니다.
var linuxFactory = getOSFactory('LINUX'),
    macFactory = getOSFactory('Mac'),
    windowsFactory = getOSFactory('windows');

// Then we can get real objects from these concrete factories  
// 그런 다음에 우리는 이러한 구체적인 팩토리로부터 실제 객체를 얻을 수 있습니다.
var debian = linuxFactory('DEBIAN'),
    osx = macFactory('osX'),
    xp = windowsFactory('xp');

console.log(debian.bootLinux()); // Debian is booting...
console.log(osx.bootMac()); // Mac OS X is booting...
console.log(xp.bootWindows()); // Windows XP is booting...
