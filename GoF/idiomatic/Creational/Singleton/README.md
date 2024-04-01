# Synopsis

As a person, I am unique. No one has exactly my DNA.  

나로서, 나는 독특합니다. 나와 똑같은 DNA를 가진 사람은 아무도 없습니다.

# Problem

In JavaScript, we can create several instances of everything using:  
자바스크립트에서는 "모든 것"의 여러 인스턴스를 생성할 수 있습니다.

  * An object literal: e.g. {}
    객체 리터럴: 예를 들면 {}
  * The static method "create" of "Object": e.g. Object.create(Object.prototype)
    "Object"의 정적 메서드 "create": 예를 들면 Object.create(Object.prototype)
  * The "new" operator on a constructor function: e.g. new Object()
    생성자 함수에 대한 "new" 연산자: 예를 들면 new Object()

Therefore, I cannot be sure that there will not be other instances of myself in the code!  
따라서 코드 내에 나와 동일한 다른 인스턴스가 없을 것을 확신할 수 없습니다!

# Solution

Singleton is the key!  
싱글톤이 해답입니다!

But due to the nature of JavaScript, an object literal is already a sort of Singleton. Each object literal is unique and is built from the prototype of Object. In a way, we could see an object literal as a an anonymous class whose instance is delivered immediately. However, we could also argue that an object literal is nothing more than an instance of Object, which is actually true. With this in mind, it is quite obvious that an object literal is not a pure Singleton, but if flexibility matters, it is quite reasonable to consider it as a Singleton.

그러나 JavaScript의 특성 때문에 객체 리터럴은 이미 일종의 싱글톤입니다. 각각의 객체 리터럴은 고유하며 Object의 프로토타입에서 만들어집니다. 어느 정도로는, 객체 리터럴은 즉시 전달되는 익명 클래스의 인스턴스로 볼 수 있습니다. 그러나 객체 리터럴은 사실 Object의 인스턴스에 불과하다는 것을 주장할 수도 있습니다. 이를 염두에 두면, 객체 리터럴이 순수한 싱글톤이 아닌 것은 분명하지만, 유연성이 중요한 경우에는 싱글톤으로 고려하는 것이 매우 합리적입니다.

![Singleton (idiomatic)](Singleton.png)
