# Synopsis

I am a fan of GNU/Linux distributions and I want to test the big names: Debian, RedHat, Slackware.  
저는 GNU/Linux 배포판의 팬이며, Debian, RedHat, Slackware와 같은 주요 배포판을 테스트하고 싶습니다.

# Problem

Debian, RedHat and Slackware are all Linux distributions.
We could create directly an object literal to represent each one, but this is not necessarily the best choice.
We are not sure to use each instance in our code and we do not want to use memory for nothing.
For the sake of clarity and performance, it may be nice to delegate the instantiation logic.    
Debian, RedHat 및 Slackware는 모두 Linux 배포판입니다.
우리는 각각을 나타내는 객체 리터럴을 직접 생성할 수 있지만, 이것이 반드시 최선의 선택은 아닙니다.
우리는 각 인스턴스를 코드에서 사용할지 확신하지 않으며, 아무것도 사용하지 않고 메모리를 사용하고 싶지 않습니다.
명확성과 성능을 위해 인스턴스화 논리를 위임하는 것이 좋을 수 있습니다.

# Solution

Factory makes it possible to do so. To implement this design pattern, we only need to create a function that will return objects.  
팩토리를 사용하면 이를 수행할 수 있습니다. 이 디자인 패턴을 구현하기 위해서는 객체를 반환할 함수를 생성하면 됩니다.

In JavaScript, a function or method that returns objects is generally considered as a factory. It is a well-known idiomatic alternative to the use of the "new" keyword along with constructor functions.  
자바스크립트에서 객체를 반환하는 함수나 메서드는 일반적으로 팩토리로 간주됩니다. 이것은 "new" 키워드를 생성자 함수와 함께 사용하는 것에 대한 잘 알려진 관용적 대안입니다.

![Factory (idiomatic)](Factory.png)
