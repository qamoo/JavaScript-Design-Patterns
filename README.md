# PatternifyJS - JavaScript Design Patterns

## About

PatternifyJS is a reference of the main design patterns in JavaScript. JS libraries are not covered, but the core scripting languages around JavaScript are there. Here is the list of all available languages:

PatternifyJS는 JavaScript의 주요 디자인 패턴을 참조하는 것입니다. JS 라이브러리는 포함되어 있지 않지만 JavaScript 주변의 주요 스크립팅 언어가 있습니다. 모든 사용 가능한 언어 목록은 다음과 같습니다:

* ECMAScript (Vanilla)
	* ES5
	* ES6
* CoffeeScript
* TypeScript

The Gang of Four (GoF) patterns are based on original synopses inspired from the real life and are available in two distinct flavors: "[classic](GoF/classic)" & "[idiomatic](GoF/idiomatic)".

Gang of Four (GoF) 패턴은 실생활에서 영감을 받은 원본 개요를 기반으로 하며 두 가지 다른 스타일로 제공됩니다:"[classic](GoF/classic)" & "[idiomatic](GoF/idiomatic)".

The classic style emulates the principles of traditional class-based object-oriented languages like Java. Therefore, this style makes heavy use of packages, abstraction, interfaces, classes, inheritance, composition, encapsulation and polymorphism. As a prototype-based language, JavaScript does not have all these functionalities natively (despite all the syntactic sugar introduced by ES6). But it is still possible to use and reproduce most of these concepts... For obvious reasons, constructor functions are the rule in the classic style and each design pattern of this category has its own UML class diagram.  
클래식 스타일은 Java와 같은 전통적인 클래스 기반 객체지향 언어의 원칙을 모방합니다. 따라서 이 스타일은 패키지, 추상화, 인터페이스, 클래스, 상속, 구성, 캡슐화 및 다형성을 적극적으로 활용합니다. 프로토타입 기반 언어인 JavaScript는 이러한 기능을 네이티브로 갖고 있지 않습니다(ES6에 의해 도입된 모든 문법적 설탕에도 불구하고). 그러나 이러한 개념 대부분을 사용하고 재현하는 것은 여전히 가능합니다... 명백한 이유로 클래식 스타일에서는 생성자 함수가 규칙이며, 이 카테고리의 각 디자인 패턴에는 고유의 UML 클래스 다이어그램이 있습니다.

The idiomatic style reveals the true nature of JavaScript. Constructor functions and classes are replaced by factory functions and object literals, there is no abstraction anymore, encapsulation is reduced to the minimum and flexibility raised to the maximum. With this style, the GoF patterns are a bit difficult to recognize because their overall structure is blurred. But here it is more reasonable to think about objects directly, not about classes. This is the reason why class diagrams have been replaced by UML object diagrams in the idiomatic style.

Apart from the GoF patterns, there are also miscellaneous (functional and more) patterns in JavaScript that make life easier. They can be of a great help!

## Gang of Four (GoF) patterns

* Creational
	* AbstractFactory ([classic](GoF/classic/Creational/AbstractFactory) | [idiomatic](GoF/idiomatic/Creational/AbstractFactory))
	* Builder ([classic](GoF/classic/Creational/Builder) | [idiomatic](GoF/idiomatic/Creational/Builder))
	* Factory ([classic](GoF/classic/Creational/Factory) | [idiomatic](GoF/idiomatic/Creational/Factory))
	* Prototype ([classic](GoF/classic/Creational/Prototype) | [idiomatic](GoF/idiomatic/Creational/Prototype))
	* Singleton ([classic](GoF/classic/Creational/Singleton) | [idiomatic](GoF/idiomatic/Creational/Singleton))

* Structural
	* Adapter ([classic](GoF/classic/Structural/Adapter) | [idiomatic](GoF/idiomatic/Structural/Adapter))
	* Bridge ([classic](GoF/classic/Structural/Bridge) | [idiomatic](GoF/idiomatic/Structural/Bridge))
	* Composite ([classic](GoF/classic/Structural/Composite) | [idiomatic](GoF/idiomatic/Structural/Composite))
	* Decorator ([classic](GoF/classic/Structural/Decorator) | [idiomatic](GoF/idiomatic/Structural/Decorator))
	* Facade ([classic](GoF/classic/Structural/Facade) | [idiomatic](GoF/idiomatic/Structural/Facade))
	* Flyweight ([classic](GoF/classic/Structural/Flyweight) | [idiomatic](GoF/idiomatic/Structural/Flyweight))
	* Proxy ([classic](GoF/classic/Structural/Proxy) | [idiomatic](GoF/idiomatic/Structural/Proxy))

* Behavioral
	* Chain of Responsibility ([classic](GoF/classic/Behavioral/ChainOfResponsibility) | [idiomatic](GoF/idiomatic/Behavioral/ChainOfResponsibility))
	* Command ([classic](GoF/classic/Behavioral/Command) | [idiomatic](GoF/idiomatic/Behavioral/Command))
	* Interpreter ([classic](GoF/classic/Behavioral/Interpreter) | [idiomatic](GoF/idiomatic/Behavioral/Interpreter))
	* Iterator ([classic](GoF/classic/Behavioral/Iterator) | [idiomatic](GoF/idiomatic/Behavioral/Iterator))
	* Mediator ([classic](GoF/classic/Behavioral/Mediator) | [idiomatic](GoF/idiomatic/Behavioral/Mediator))
	* Memento ([classic](GoF/classic/Behavioral/Memento) | [idiomatic](GoF/idiomatic/Behavioral/Memento))
	* Observer ([classic](GoF/classic/Behavioral/Observer) | [idiomatic](GoF/idiomatic/Behavioral/Observer))
	* State ([classic](GoF/classic/Behavioral/State) | [idiomatic](GoF/idiomatic/Behavioral/State))
	* Strategy ([classic](GoF/classic/Behavioral/Strategy) | [idiomatic](GoF/idiomatic/Behavioral/Strategy))
	* Template ([classic](GoF/classic/Behavioral/Template) | [idiomatic](GoF/idiomatic/Behavioral/Template))
	* Visitor ([classic](GoF/classic/Behavioral/Visitor) | [idiomatic](GoF/idiomatic/Behavioral/Visitor))

## Miscellaneous patterns

* [Currying](misc/Currying)
* [Method Chaining](misc/MethodChaining)
* [Module](misc/Module)
* [Object Specifier](misc/ObjectSpecifier)
* [Revealing Module](misc/RevealingModule)

## Inspiring resources

* *JavaScript: The Definitive Guide* by **David Flanagan**
* *JavaScript: The Good Parts* by **Douglas Crockford**
* *Learning JavaScript Design Patterns* by **Addy Osmani**
* *Exploring ES6* by **Axel Rauschmayer**
* *The Little Book on CoffeeScript* by **Alex MacCaw**
* *TypeScript Deep Dive* by **Basarat Ali Syed**
* *Design Patterns: Elements of Reusable Object-Oriented Software* by **Erich Gamma**, **Richard Helm**, **Ralph Johnson** and **John Vlissides**
