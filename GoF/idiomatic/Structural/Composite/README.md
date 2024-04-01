# Synopsis

My little brother's room is generally a big mess, but recently my mother bought him some funny toy boxes of different sizes (like a 3D puzzle) so he can put his toys in it.

내 작은 동생의 방은 일반적으로 큰 난장이인데, 최근에 어머니가 그에게 재미있는 다양한 크기의 장난감 상자(3D 퍼즐처럼)를 샀어요. 그래서 그가 장난감을 넣을 수 있게 되었어요.

# Problem

Here a toy box is, to some extent, a toy in itself that can contain other toys. These toys can be simple ones like, for instance, balls. But they can be complex ones too, like smaller toy boxes which also may contain other balls and/or even smaller toy boxes, etc. This situation is not easy to describe through code...

여기서 장난감 상자는 어느 정도로 스스로 장난감이며, 다른 장난감을 포함할 수 있는 것으로 생각됩니다. 이 장난감은 간단한 것으로는 공 등이 있을 수 있습니다. 그러나 더 복잡한 경우에는 더 작은 장난감 상자도 있을 수 있으며, 이 안에는 또 다른 공이나 심지어 더 작은 장난감 상자가 들어 있을 수도 있습니다. 이러한 상황을 코드로 설명하는 것은 쉽지 않습니다...

# Solution

A good idea is to consider a group of toys like a simple toy. So a toy box full of toys is just a toy after all!

한 가지 좋은 아이디어는 장난감들의 그룹을 하나의 단순한 장난감으로 간주하는 것입니다. 따라서 장난감들로 가득 찬 장난감 상자는 결국에는 그냥 하나의 장난감이 됩니다!

The Composite design pattern is useful in this kind of situation. To implement this one, we only need two factory functions. The first one will be responsible for the creation of simple toys (balls), whereas the second one will be responsible for the creation of composite toys (toy boxes). In the object returned by the more complex factory function, we should have at least a collection of toys (an array is fine) and a method that makes it possible to iterate through it. But since the collection can also contain another toy box (that contain itself a collection of toys), this method must be able to iterate deeper.

복합 디자인 패턴은 이러한 종류의 상황에서 유용합니다. 이를 구현하기 위해서는 두 개의 팩토리 함수만 필요합니다. 첫 번째 함수는 간단한 장난감(공)을 생성하는 역할을 담당하고, 두 번째 함수는 복합 장난감(장난감 상자)을 생성하는 역할을 담당합니다. 더 복잡한 팩토리 함수가 반환하는 객체에는 최소한 장난감의 모음(배열로 구현 가능)과 이를 반복할 수 있는 메서드가 있어야 합니다. 그러나 이 모음에는 다른 장난감 상자(그 자체에 장난감의 모음을 포함하는)가 포함될 수도 있으므로 이 메서드는 더 깊은 곳까지 반복할 수 있어야 합니다.

![Composite (idiomatic)](Composite.png)
