# Synopsis

I need some cash, so I have to find an ATM (Automated Teller Machine).

돈이 필요해서 ATM(자동화된 입출금기)를 찾아야 합니다.

# Problem

Money withdrawal is under control. Everyone has a personal bank account which is only accessible with a specific credit card and a related code. 

돈을 인출하는 것은 통제되고 있습니다. 각각의 사람은 특정 신용카드와 관련 코드로만 접근 가능한 개인 은행 계좌를 가지고 있습니다.

For this reason, we cannot interact directly with the "real" object (our bank account). We must interact with another object that will be responsible for the communication with the real object.

이러한 이유로 우리는 "실제" 객체(우리의 은행 계좌)와 직접 상호 작용할 수 없습니다. 대신 실제 객체와 통신을 담당할 다른 객체와 상호 작용해야 합니다.


# Solution

We could consider an ATM as a Proxy whose aim is to verify access to a bank account. Implementing this is not really hard because we just need:

우리는 ATM을 은행 계좌 접근을 확인하는 목적의 프록시로 간주할 수 있습니다. 이를 구현하는 것은 그리 어렵지 않습니다. 필요한 것은 다음과 같습니다:

  * A simple object (literal) to represent the bank account
    은행 계좌를 나타내는 간단한 객체(리터럴)
  * A more complex object (literal) to represent the ATM that we use as a proxy
    프록시로 사용하는 ATM을 나타내는 좀 더 복잡한 객체(리터럴)

The bank account should be invisible from the outside of its module, contrary to the ATM that will have to handle cash withdrawal directly. The process is simple: we start with code verification, then the ATM delegates the operation to the real bank account if the code is correct. If it is not, an exception is thrown and the bank account cannot be reached. 

은행 계좌는 모듈 외부에서는 보이지 않아야 하지만, ATM은 현금 인출을 직접 처리해야 합니다. 프로세스는 간단합니다: 코드 검증부터 시작하여, ATM은 코드가 올바른 경우에만 실제 은행 계좌로 작업을 위임합니다. 그렇지 않은 경우 예외가 발생하고 은행 계좌에 접근할 수 없게 됩니다.

![Proxy (idiomatic)](Proxy.png)
