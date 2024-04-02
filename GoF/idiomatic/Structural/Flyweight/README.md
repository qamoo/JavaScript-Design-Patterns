# Synopsis

I am a fan of GNU/Linux distributions and I want to test the big names: Debian, RedHat, Slackware. However, I am too busy to test all versions available. The latest version of each distro would be just fine.

저는 GNU/Linux 배포판의 팬이며 Debian, RedHat, Slackware와 같은 대표적인 배포판을 테스트하고 싶습니다. 그러나 모든 가능한 버전을 테스트하기에는 너무 바쁩니다. 각 배포판의 최신 버전만 테스트해도 충분할 것입니다.

# Problem

Everytime we use an object literal, we create a new object in JavaScript. But if we know the instance we need will always be the same (e.g. a very specific version of Debian), this is not optimal to create multiple instances that represent the same thing. Each instantiation operation has a cost in terms of performance and memory which should be minimized as much as possible.

JavaScript에서 객체 리터럴을 사용할 때마다 새로운 객체가 생성됩니다. 그러나 특정 인스턴스가 항상 동일할 것으로 알고 있는 경우(예: 매우 특정한 버전의 Debian), 동일한 것을 나타내는 여러 인스턴스를 생성하는 것은 최적이 아닙니다. 각 인스턴스화 작업은 성능 및 메모리 측면에서 비용이 발생하므로 가능한 한 최소화해야 합니다.

# Solution

We can use Flyweight here, which is actually tied to Factory. A Factory handles flyweights when it reuses instances instead of constantly creating new ones. To do so, we generally use a Map or an object without prototype in the factory function. The first instance of a specific type created by the factory is always saved in this data structure and then reused in all subsequent calls.

![Flyweight (idiomatic)](Flyweight.png)
