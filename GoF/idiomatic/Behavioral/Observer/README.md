# Synopsis

In the savanna, there are predators like lions or crocodiles and there are preys like gazelles. So lions and crocodiles often attack gazelles.

사바나에는 사자나 악어와 같은 포식자가 있고, 가젤과 같은 피식자가 있습니다. 그래서 사자와 악어는 종종 가젤을 공격합니다.

# Problem

Lions and crocodiles do not attack at any moment. A lion will generally attack if a gazelle is a bit too far from the herd. A crocodile will generally attack if a gazelle is a bit too close to water, especially for drinking.

사자와 악어는 언제든지 공격하지 않습니다. 일반적으로 사자는 가젤이 무리에서 조금 멀리 떨어져 있을 때 공격합니다. 악어는 일반적으로 가젤이 물에 너무 가까이 있을 때, 특히 마실 때 공격합니다.

In programming terms, predators execute some action when a specific event occurs on the preys side. This implies the implementation of an event-handling mechanism in the code, which may be unclear if it is not properly done.

프로그래밍 용어로 이야기하면, 포식자는 피식자 측에서 특정 이벤트가 발생할 때 어떤 동작을 실행합니다. 이는 코드에서 이벤트 처리 메커니즘을 구현하는 것을 의미하며, 제대로 구현되지 않으면 코드가 명확하지 않을 수 있습니다.

# Solution

The Observer design pattern helps a lot when we have to implement an event-driven system like this. Here this pattern is composed of:

옵서버 디자인 패턴은 이와 같은 이벤트 기반 시스템을 구현할 때 많은 도움이 됩니다. 여기서 이 패턴은 다음과 같이 구성됩니다:

  * Object literals to represent different kinds of observers  
    다양한 종류의 관찰자를 나타내기 위한 객체 리터럴
  * An object literal to represent the observable entity  
    관찰 가능한 엔티티를 나타내기 위한 객체 리터럴

The observable object (gazelle) maintains a list (array) of predators. Then, depending on its actions (determined by the client code), its "notifyPredators" method may be called. This method would iterate through the array of predators and make them attack.

관찰 가능한 객체(가젤)는 포식자들의 목록(배열)을 유지합니다. 그런 다음, 클라이언트 코드에서 결정한 행동에 따라 "notifyPredators" 메서드가 호출될 수 있습니다. 이 메서드는 포식자들의 배열을 반복하고 그들을 공격하도록 할 것입니다.

![Observer (idiomatic)](Observer.png)
