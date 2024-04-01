# Problem

Functions may have a high arity, which means that they can accept a lot of arguments. This is not optimal for at least two reasons:  
함수는 높은 애리(arity)를 가질 수 있습니다. 이는 많은 인수를 받을 수 있다는 것을 의미합니다. 적어도 두 가지 이유로 이는 최적이 아닙니다:

  1. Keeping a nice-looking indentation is hard if the list of parameters is really long
     매우 긴 매개변수 목록의 경우 보기 좋은 들여쓰기를 유지하는 것이 어렵습니다.
  3. It is difficult for the programmer to remember the order of many positional parameters  
     많은 위치 매개변수의 순서를 기억하는 것은 프로그래머에게 어려운 일입니다.  

# Solution

An object specifier (a.k.a. options object) is a simple object literal that is passed to a function instead of a long series of arguments. In other words, when a function has lots of formal parameters in its signature, it is generally a good idea to refactor it and give it only one parameter (that will be the object specifier). The good point with this pattern is that it allows named parameters instead of positional parameters, so that the order is not even a problem anymore.  
객체 지정자(또는 옵션 객체)는 긴 인수 목록 대신 함수에 전달되는 간단한 객체 리터럴입니다. 다시 말해, 함수의 시그니처에 많은 형식 매개변수가 있는 경우, 일반적으로 해당 함수를 리팩터링하여 하나의 매개변수만 전달하는 것이 좋습니다(이것이 객체 지정자가 될 것입니다). 이 패턴의 장점은 위치 매개변수 대신에 이름있는 매개변수를 사용할 수 있으므로 순서가 더 이상 문제가 되지 않는다는 것입니다.
