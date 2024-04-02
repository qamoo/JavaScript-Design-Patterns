# Synopsis

I love my pets but, due to Alzheimer's disease, I often forget how to feed them. Any help would be appreciated. 

내 애완동물을 사랑하지만, 알츠하이머병으로 인해 종종 어떻게 먹이를 주어야 하는지 잊어버립니다. 도와주시면 감사하겠습니다.

# Problem

The more pets you have, the more difficult it will be to remember the menu for each animal. Complexity can grow quite fast, which is not ideal in terms of code (re)usability. We should keep it simple, stupid (KISS).

애완동물이 많을수록 각 동물마다의 메뉴를 기억하는 것이 더 어려워집니다. 복잡성은 매우 빠르게 증가할 수 있으며, 이는 코드의 (재)사용성 측면에서 이상적이지 않습니다. 우리는 간단하게 유지해야 합니다.

# Solution

Facade is often used to hide the underlying complexity of a system. To implement this design pattern, we can:

파사드는 종종 시스템의 근본적인 복잡성을 숨기는 데 사용됩니다. 이 디자인 패턴을 구현하기 위해 우리는 다음을 할 수 있습니다:

  * Create an object (literal) to represent each animal  
    각 동물을 나타내는 객체(리터럴)를 생성하세요.
  * Create a facade that has a reference to each animal  
    각 동물에 대한 참조를 가진 파사드를 생성하세요.  

Here the client will use the facade only, especially the main method that returns the favorite meal of each animal. No additional effort is required.

여기서 클라이언트는 주로 파사드를 사용할 것입니다, 특히 각 동물의 즐겨먹는 식사를 반환하는 주요 메서드를 사용할 것입니다. 추가적인 노력은 필요하지 않습니다.

![Facade (idiomatic)](Facade.png)
