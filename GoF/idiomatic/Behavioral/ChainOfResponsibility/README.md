# Synopsis

Imagine a long relay race with athletes from different sports. This race could involve several teams composed each time of a racewalker, a runner and a swimmer.

다양한 종목의 선수들이 참여하는 긴 릴레이 경기를 상상해보세요. 이 경기는 매번 걷기 선수, 달리기 선수 및 수영 선수로 구성된 여러 팀들이 참여할 수 있습니다.

# Problem

Each sport has its own rules and each athlete will participate differently. So we cannot just evaluate the role of each athlete in the same way, even though the objective is the same for everyone within a team: the gold medal. A swimmer and a runner are both athletes, but a swimmer swims whereas a runner runs... Here we could say that each team member handles a part of the initial request which is to win the race.

각 스포츠에는 각자의 규칙이 있고 각 선수는 서로 다르게 참여합니다. 따라서 우리는 모든 선수의 역할을 동일하게 평가할 수는 없습니다. 비록 팀 내의 모든 선수의 목표는 동일한 금메달을 획득하는 것이지만 각 선수가 참여하는 방식은 다릅니다. 수영 선수와 달리기 선수 모두 운동 선수지만, 수영 선수는 수영을 하고 달리기 선수는 달립니다. 여기서 각 팀원은 경기에서 승리하는 것이라는 초기 요청의 일부를 처리합니다.

Moreover, this is a relay race, not an individual one. Each athlete must know the next relay where another athlete will wait for the baton before to start.

게다가, 이는 개인 경기가 아닌 릴레이 경기입니다. 각 선수는 다음 릴레이를 알고 다른 선수가 주머니를 전달할 때 시작해야 합니다.

# Solution

Everytime a request should be handled by multiple (and complementary) processing units, the Chain of Responsibility pattern seems ideal. In this case, we can represent each athlete with a simple object literal. We will have:

각 요청이 여러 개의 보조 처리 단위에서 처리되어야 할 때마다, 책임 연쇄 패턴이 이상적으로 보입니다. 이 경우, 각 선수를 간단한 객체 리터럴로 표현할 수 있습니다. 우리는 다음과 같은 구성을 가질 것입니다:

  * An object literal representing a walker
    보행자를 나타내는 객체 리터럴
  * An object literal representing a runner
    달리기 선수를 나타내는 객체 리터럴
  * An object literal representing a swimmer
    수영 선수를 나타내는 객체 리터럴

Each of these objects should have at least their own method ("go") whose action will be specific to the associated sport. But each of these particular "go" methods will also transfer some work to the next relay, chosen by the client code.

이러한 각 객체는 적어도 자체 메서드("go")를 가져야 합니다. 이 메서드의 동작은 해당 스포츠와 관련이 있습니다. 그러나 이러한 특정 "go" 메서드 각각은 또한 클라이언트 코드에서 선택한 다음 릴레이에 일부 작업을 전달해야 합니다.

![Chain of Responsibility (idiomatic)](ChainOfResponsibility.png)

N.B. This design pattern should not be confused with simple method chaining in JavaScript.  
참고: 이 디자인 패턴은 JavaScript에서의 단순한 메서드 체이닝과 혼동되어서는 안 됩니다.
