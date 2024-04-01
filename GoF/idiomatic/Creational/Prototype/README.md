# Synopsis

When I order something, I sometimes like to have a paper invoice.
But when the order is important, I do not want to lose the document.
Therefore, I want to be able to make photocopies.

뭔가를 주문할 때 종종 종이 송장을 받는 것을 좋아합니다. 그러나 주문이 중요할 때에는 문서를 잃고 싶지 않습니다. 그래서 사본을 만들 수 있었으면 좋겠습니다.

# Problem

Creating a new object with "new" is not the same thing as cloning an existing object.
The good point about JavaScript is that the language is prototype-based.
The built-in Object.create() method already performs some kind of cloning.
However, we cannot clone properly if we only use Object.create().
The parameter of this method (the original object) is used as the prototype of the new object.
This means the new object will not have own properties like the original object.
These properties would be available in the new object, but in its prototype.

"new"를 사용하여 새 객체를 생성하는 것은 기존 객체를 복제하는 것과 같지 않습니다. 자바스크립트의 장점은 언어가 프로토타입 기반임입니다. 내장된 Object.create() 메서드는 이미 어떤 형태의 복제를 수행합니다. 그러나 Object.create()만 사용하면 제대로 복제할 수 없습니다. 이 메서드의 매개변수(원본 객체)는 새 객체의 프로토타입으로 사용됩니다. 이는 새 객체가 원본 객체와 같은 속성을 가지지 않을 것을 의미합니다. 이러한 속성은 새 객체에서 사용할 수 있지만 그것의 프로토타입에 있을 것입니다.

# Solution

We need only two things in this situation:  
이 상황에서 우리는 두 가지만 필요합니다:

  * An object (literal) that we want to clone (e.g. invoice)
    우리가 복제하고자 하는 객체(리터럴) (예: 송장)
  * A custom cloning function that will take the object to clone as a parameter
    복제할 객체를 매개변수로 받는 사용자 정의 복제 함수

![Prototype (idiomatic)](Prototype.png)

N.B. Most of the time, it is not even useful to have an exact copy of an object in JavaScript. The important thing is often to be able to use the same properties on several objects, and for that purpose, a simple Object.create() is generally good enough.

참고: 대부분의 경우에는 JavaScript에서 객체의 정확한 복사본을 가지는 것이 실제로 유용하지 않습니다. 중요한 것은 종종 여러 객체에서 동일한 속성을 사용할 수 있는 것입니다. 이를 위해 간단한 Object.create()를 사용하는 것이 일반적으로 충분합니다.
