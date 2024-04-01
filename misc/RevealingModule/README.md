# Problem

JavaScript is not very strict when it comes to encapsulation and each script tends to pollute the global namespace. This is because the language has been built with global variables in mind.

JavaScript는 캡슐화에 대해 엄격하지 않으며 각 스크립트는 전역 네임스페이스를 오염시키는 경향이 있습니다. 이는 언어가 전역 변수를 염두에 두고 만들어졌기 때문입니다.

# Solution

The Revealing Module pattern is a great solution to encapsulate some code. The idea is to store in a variable the returned expression of an IIFE (Immediately-Invoked Function Expression), which is generally an object literal that exposes all public members of the module. Within the IIFE, the scope is private. We can then declare private variables and functions that will be invisible from the outside. Conceptually, a module is a bit like a class. 

Revealing Module 패턴은 일부 코드를 캡슐화하는 훌륭한 해결책입니다. 이 아이디어는 IIFE(즉시 호출되는 함수 표현식)의 반환 표현식을 변수에 저장하는 것입니다. 이 반환 표현식은 일반적으로 모듈의 모든 공개 멤버를 노출하는 객체 리터럴입니다. IIFE 내에서 범위는 비공개입니다. 따라서 외부에서는 보이지 않는 비공개 변수와 함수를 선언할 수 있습니다. 개념적으로 모듈은 클래스와 약간 비슷합니다.

N.B. In practice, this pattern is not often used anymore. CommonJS, AMD, or built-in ES6 modules are much better solutions nowadays... However, the legacy of this pattern is still visible in ES5 code, especially in CommonJS modules where module.exports exposes public members using an object literal.

참고: 실제로 이 패턴은 더 이상 자주 사용되지 않습니다. 현재는 CommonJS, AMD 또는 내장 ES6 모듈이 훨씬 더 좋은 해결책입니다. 그러나 이 패턴의 유산은 여전히 ES5 코드에서 볼 수 있으며, 특히 module.exports를 사용하여 객체 리터럴을 이용해 공개 멤버를 노출하는 CommonJS 모듈에서는 이 패턴의 영향을 여전히 확인할 수 있습니다.

```javascript
// CommonJS (Revealing) Module exports
module.exports = {
    firstName: firstName,
    lastName: lastName,
    sayHello: sayHello,
    getSecretNickname: getSecretNickname
};
```
