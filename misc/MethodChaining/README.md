# Problem

In a program, we may have a lot of function calls on the same object. This often leads to repetition because it is necessary to write the reference again and again. 

프로그램에서 동일한 객체에 대해 많은 함수 호출이 발생할 수 있습니다. 이로 인해 동일한 참조를 반복적으로 작성해야 하므로 반복이 발생할 수 있습니다.

# Solution

Method Chaining allows us to make multiple calls on the same object without repeating ourselves. This pattern is very easy to use because the only thing to do is to return the current object ("this") in all methods that are supposed to be "chainable".

메소드 체이닝을 사용하면 동일한 객체에서 여러 호출을 반복하지 않고도 여러 호출을 수행할 수 있습니다. 이 패턴은 매우 쉽게 사용할 수 있으며, "체인 가능한" 메소드에서는 모두 현재 객체("this")를 반환하기만 하면 됩니다.
