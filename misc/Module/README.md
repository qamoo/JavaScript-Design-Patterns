# Problem

JavaScript is not very strict when it comes to encapsulation and each script tends to pollute the global namespace. This is because the language has been built with global variables in mind.  
JavaScript는 캡슐화에 대해 매우 엄격하지 않으며 각 스크립트는 전역 네임스페이스를 오염시키려고 합니다. 이는 언어가 전역 변수를 염두에 두고 구축되었기 때문입니다.

# Solution

The Module pattern is a great solution to encapsulate some code. The idea is to store in a variable the returned expression of an IIFE (Immediately-Invoked Function Expression), which can be for instance another function declared inside the module. Within the IIFE, the scope is private. We can then declare private variables and functions that will be invisible from the outside. Conceptually, a module is a bit like a class.  
모듈 패턴은 코드를 캡슐화하는 훌륭한 해결책입니다. 이 아이디어는 IIFE (즉시 호출 함수 표현식)의 반환 표현식을 변수에 저장하는 것입니다. 이 반환 표현식은 모듈 내에서 선언된 다른 함수일 수 있습니다. IIFE 내에서 스코프는 비공개입니다. 그러므로 모듈 내부에서 외부에서 보이지 않는 비공개 변수와 함수를 선언할 수 있습니다. 개념적으로 모듈은 클래스와 비슷합니다.

N.B. In practice, this pattern is not often used anymore. CommonJS, AMD, or built-in ES6 modules are much better solutions nowadays...  
참고: 실제로 이 패턴은 더 이상 자주 사용되지 않습니다. 현재는 CommonJS, AMD 또는 내장된 ES6 모듈이 훨씬 더 나은 해결책입니다...
