# Problem

Functions may have a high arity, which means that they can accept a lot of arguments. This is not optimal for at least two reasons:

함수는 높은 아리티(arity)를 가질 수 있습니다. 이는 많은 인수를 받을 수 있다는 것을 의미합니다. 적어도 두 가지 이유로 이는 최적이 아닙니다:

  1. Keeping a nice-looking indentation is hard if the list of parameters is really long  
     매우 긴 매개변수 목록의 경우 보기 좋은 들여쓰기를 유지하는 것이 어렵습니다.
  2. It is difficult for the programmer to remember the order of many positional parameters  
     많은 위치 매개변수의 순서를 기억하는 것은 프로그래머에게 어려운 일입니다.

# Solution

We can use currying to reduce the arity of a function. The aim of this pattern is to transform a function with many parameters into multiple functions with only one parameter.
Since JavaScript is an extremely flexible language, the only thing to do is to create a sort of "return chain" where each function returns another function (with only one parameter) until the number of parameters is exhausted.  
커링을 사용하여 함수의 아리티(arity)를 줄일 수 있습니다. 이 패턴의 목표는 많은 매개변수를 가진 함수를 하나의 매개변수만 가진 여러 함수로 변환하는 것입니다. JavaScript는 매우 유연한 언어이기 때문에, 각 함수가 다음 함수(하나의 매개변수만 있는 함수)를 반환하는 일종의 "반환 체인"을 생성하면 됩니다. 이를 통해 매개변수의 개수가 소진될 때까지 함수를 연속적으로 호출할 수 있습니다.

