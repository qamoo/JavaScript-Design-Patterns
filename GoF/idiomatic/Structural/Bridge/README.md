# Synopsis

I do not know what to eat for dinner. In my kitchen, I think I have pasta and rice with some sauces, especially pesto and carbonara.

저녁으로 무엇을 먹을지 모르겠어요. 제 부엌에는 파스타와 밥, 특히 페스토와 카르보나라 소스가 있을 것 같습니다.

# Problem

Even in this very simple situation, they are already four recipes that could be great. I can eat pasta with pesto, pasta with carbonara, risotto with pesto, or risotto with carbonara.

이 매우 간단한 상황에서도 좋은 네 가지 레시피가 이미 있습니다. 페스토 파스타, 카르보나라 파스타, 페스토 리조또, 또는 카르보나라 리조또를 먹을 수 있겠네요.

To represent that with code, we might be tempted to create an object (literal) for each possible recipe (pastaWithPesto, pastaWithCarbonara, risottoWithPesto, risottoWithCarbonara). But imagine that, a couple of minutes later, you also find potatoes and a tomato sauce in the kitcken. Do you really want to create new objects such as potatoesWithCarbonara, pastaWithTomato and so on?

이를 코드로 나타내기 위해 가능한 각 레시피에 대한 객체(리터럴)를 만들어야 할지도 모릅니다(pastaWithPesto, pastaWithCarbonara, risottoWithPesto, risottoWithCarbonara). 그러나 몇 분 후에 부엌에서 감자와 토마토 소스도 발견한다고 상상해 보세요. 정말로 감자카르보나라, 토마토소스 파스타 등과 같은 새로운 객체를 계속해서 만들고 싶을까요?

# Solution

The best solution is to use a "Bridge" between a simple recipe and a sauce. This means that we will be able to select the sauce independently. To do so, we may have:

최선의 해결책은 간단한 레시피와 소스 사이에 "브릿지"를 사용하는 것입니다. 이는 우리가 소스를 독립적으로 선택할 수 있게 해줍니다. 이를 위해 우리는 다음과 같은 방법을 사용할 수 있습니다:

  * Factory methods to create different kinds of recipes with given sauces (a sauce is a parameter)  
    주어진 소스와 함께 다양한 종류의 레시피를 생성하기 위한 팩토리 메서드들  
  * Object (literals) to describe available sauces  
    사용 가능한 소스를 설명하는 객체(리터럴)

In the client code, the instance of sauce passed to the recipe function will give us the final meal.

클라이언트 코드에서 레시피 함수에 전달된 소스 인스턴스는 최종 음식을 결정할 것입니다.

![Bridge (idiomatic)](Bridge.png)
