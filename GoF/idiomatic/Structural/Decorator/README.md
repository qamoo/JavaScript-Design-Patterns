# Synopsis

I am hungry and I want to eat pizza. I take my car and go to the nearest pizzeria. After a couple of minutes looking at the menu, I do not find what I want. So I finally ask for a custom pizza that will be prepared on the fly. I am not quite sure of the ingredients I want, but let's try to make a tasty pizza!

저는 배가 고파서 피자를 먹고 싶습니다. 차를 타고 가장 가까운 피자 가게로 갑니다. 메뉴를 몇 분 동안 살펴보지만 원하는 것을 찾을 수 없습니다. 그래서 마침내 내가 원하는 대로 커스텀 피자를 주문합니다. 원하는 재료가 정확하게 뭔지는 확신하지 않지만 맛있는 피자를 만들어 보겠습니다!

# Problem

A custom pizza could be anything. Ingredients will be added one by one to produce something unique, depending on my choices.
Here a pizza is an object that is built at runtime, which means that we cannot have an exhaustive constructor with all possible ingredients as parameters. 

커스텀 피자는 어떤 것이든 될 수 있습니다. 재료는 내 선택에 따라 하나씩 추가되어 유일한 것을 만듭니다.
여기서 피자는 런타임에 구축되는 객체입니다. 즉, 모든 가능한 재료를 매개변수로 가진 다양한 생성자를 가질 수 없습니다.

# Solution

The idea is to "augment" a basic product (such as a Margherita) with some extras (bacon, peppers, ...) using the Decorator design pattern. To make this working, we need:

아이디어는 Margherita와 같은 기본 제품에 일부 추가 항목 (베이컨, 피망 등)을 추가하여 Decorator 디자인 패턴을 사용하여 제품을 "확장"하는 것입니다. 이를 작동시키려면 다음이 필요합니다:

  * An object literal to represent a basic pizza (Margherita)  
    기본 피자 (Margherita)를 나타내는 객체 리터럴
  * Two factory functions that take a (basic or already decorated) pizza as parameter and return a new decorated pizza (with bacon or peppers)  
    기본 피자 또는 이미 장식된 피자를 매개변수로 사용하고 베이컨이나 피망과 같은 새로운 장식된 피자를 반환하는 두 개의 팩토리 함수

![Decorator (idiomatic)](Decorator.png)

N.B. In JavaScript, there are many ways to add new functionalities to an object. This implementation of the Decorator pattern is only one solution among an infinity of possibilities. Moreover, this pattern should not be confused with function decorators which are a bit different and serve another purpose.

참고: JavaScript에서 객체에 새로운 기능을 추가하는 방법은 많습니다. 이 Decorator 패턴의 구현은 무한한 가능성 중 하나에 불과합니다. 또한 이 패턴은 조금 다르며 다른 목적을 위해 사용되는 함수 데코레이터와 혼동되어서는 안 됩니다.
