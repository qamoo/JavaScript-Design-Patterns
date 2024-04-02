# Synopsis

I am hungry and I decide to call the nearest Tex-Mex restaurant to place an order. I hope I will receive my meal fast.

저는 배고파서 가장 가까운 텍스멕스 레스토랑에 전화하여 주문을 할 것으로 결정했습니다. 제가 식사를 빨리 받길 바랍니다.

# Problem

Placing an order is easy to do. As a customer, you only need to say what you want to eat and nothing else. However, for the restaurant, there is a true organization behind the scenes to effectively treat your order. The chef cooks for you, then the meal is packaged and finally the delivery man brings it to you as fast as possible. Plus, you are not the only one to be hungry... The restaurant is most likely in a situation where it has to handle many orders, especially when it is time for dinner.

주문하는 것은 쉽습니다. 고객으로서, 당신은 먹고 싶은 것만 말하면 됩니다. 그러나 레스토랑 측에서는 효과적으로 주문을 처리하기 위한 진정한 조직이 뒤에서 이루어집니다. 요리사가 요리를 준비하고, 식사가 포장되며, 마지막으로 배달원이 최대한 빨리 가져다 줍니다. 게다가, 당신이 배고픈 유일한 사람은 아닙니다... 특히 저녁 시간이 되면 레스토랑은 많은 주문을 처리해야 할 상황일 가능성이 높습니다.

In computer science terms, it seems obvious that the restaurant has to handle a queue of orders and that each customer is a unique entity. Since a customer normally pays his order to the delivery man, the payment should be the last step of the process. But this is not so intuitive if you try to find a good code organization for this. On the one hand, all orders are handled by the restaurant and everything required to prepare these orders is like encapsulated in each order. On the other hand, only customers can validate orders since their responsible for payment.

컴퓨터 과학적 용어로 이야기하면, 레스토랑은 주문 대기열을 처리해야 하며 각 고객은 고유한 개체입니다. 일반적으로 고객은 주문을 배달원에게 지불하므로 결제는 프로세스의 마지막 단계여야 합니다. 그러나 이를 위한 좋은 코드 조직을 찾으려고 할 때 이것은 그리 직관적이지 않습니다. 한편으로는 모든 주문이 레스토랑에서 처리되고 각 주문에는 준비에 필요한 모든 것이 캡슐화되어 있는 것처럼 보입니다. 다른 한편으로는 고객만 주문을 승인할 수 있으며 이는 결제에 책임이 있기 때문입니다.

# Solution

The Command pattern is a great help here. In this pattern terminology, we will say that:

여기서 커맨드 패턴은 큰 도움이 됩니다. 이 패턴 용어에서는 다음과 같이 말할 수 있습니다:
 
  * The restaurant is the "invoker" who creates and handles new orders internally.    
    레스토랑은 내부적으로 새로운 주문을 생성하고 처리하는 "invoker"입니다.
  * The order is the "command", in other words the request which comes from a client.  
    주문은 "command"로서, 즉 고객으로부터 온 요청입니다.
  * The customer is the "receiver" of the order.  
    고객은 주문의 "receiver"입니다.

To implement this pattern, we then need three object literals to represent each entity:

이 패턴을 구현하기 위해, 각 엔티티를 나타내는 세 개의 객체 리터럴이 필요합니다:
  
  * The customer has only one method ("pay").
    고객은 "pay" 메서드만을 가지고 있습니다.
  * The order has a reference to a given customer and makes him pay using its "deliver" method. 
    주문은 특정 고객에 대한 참조를 가지고 있으며 "deliver" 메서드를 사용하여 고객에게 지불하게 합니다.
  * The restaurant is a more complex object with a collection (array) of orders and an essential method ("prepareOrders") that start the delivery of each order.
    레스토랑은 주문의 컬렉션(배열)과 각 주문의 배송을 시작하는 필수 메서드("prepareOrders")를 가진 보다 복잡한 객체입니다.


![Command (idiomatic)](Command.png)
