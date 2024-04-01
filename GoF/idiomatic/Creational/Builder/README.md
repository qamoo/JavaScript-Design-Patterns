# Synopsis

I have to buy a new PC, but not a standardized one. On the manufacturer's website, I chose every single component before validating my order. Now I am looking forward to using this new computer!  
새 컴퓨터를 사야 하는데, 표준화된 것이 아닌 사용자 정의 컴퓨터를 구매하려고 합니다. 제조사 웹사이트에서 주문을 확인하기 전에 각 구성 요소를 선택했습니다. 이제 이 새로운 컴퓨터를 사용하는 것을 기대하고 있습니다!

# Problem

A PC contains a lot of components that are dynamically assembled by a third-party workforce which is employed by a manufacturer. Due to the flexibility of JavaScript, it would be possible to have only one object (the PC) and manipulate its properties directly. But this is not ideal if we want to keep the basic structure of the problem that comes from a real-life situation.  
PC는 제조업체가 고용한 제3자 직원들에 의해 동적으로 조립되는 많은 구성 요소를 포함하고 있습니다. JavaScript의 유연성 덕분에 하나의 객체(컴퓨터)만 있어도 직접적으로 해당 속성을 조작할 수 있습니다. 그러나 이것은 실제 상황에서 유래한 문제의 기본 구조를 유지하고 싶을 때 이상적이지 않습니다.

# Solution

The Builder pattern allows us to build our PC step by step with only three objects (literals):  
빌더 패턴을 사용하면 세 개의 객체(리터럴)만 사용하여 단계별로 PC를 구축할 수 있습니다.

  * The PC
  * The workforce (e.g. a geek)
  * The manufacturer

When the manufacturer will receive an order, it will ask its workforce to build the custom PC step by step through its "manufacture" method.  
제조업체가 주문을 받으면 해당 제조업체는 자신의 "제조" 메서드를 통해 직원에게 맞춤형 PC를 단계별로 구축하도록 요청할 것입니다.

![Builder (idiomatic)](Builder.png)

N.B. Since we do not use constructor functions in the idiomatic style, this version of the Builder pattern is not a solution to the telescoping constructor problem. But you might be interested in the "Object Specifier" pattern...  
참고: 우리가 관용적인 스타일에서 생성자 함수를 사용하지 않기 때문에, 이 버전의 빌더 패턴은 맞춤형 생성자 문제의 해결책이 아닙니다. 그러나 "객체 지정자" 패턴에 관심이 있을 수도 있습니다...
