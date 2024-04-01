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

In JavaScript, a function or method that returns objects is generally considered as a factory. It is a well-known idiomatic alternative to the use of the "new" keyword along with constructor functions.

![Factory (idiomatic)](Factory.png)
