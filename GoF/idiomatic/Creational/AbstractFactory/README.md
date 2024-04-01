# Synopsis

I am a sysadmin and I work for a company where each employee can choose its operating system. So I often need to install and run various operating systems based on GNU/Linux, Mac OS or Windows.  
저는 시스템 관리자로서 각 직원이 운영 체제를 선택할 수 있는 회사에서 일합니다. 그래서 저는 종종 GNU/Linux, Mac OS 또는 Windows 기반의 다양한 운영 체제를 설치하고 실행해야 합니다.

# Problem

There are several families of operating systems and there are many operating systems in each family.
If we try to handle all the instantiation logic in the client code, it will most likely be a mess.  
운영 체제에는 여러 가족이 있으며 각 가족에는 많은 운영 체제가 있습니다. 모든 인스턴스화 로직을 클라이언트 코드에서 처리하려고 하면 대부분의 경우 혼란스러울 것입니다.

As a system administrator, you only want to know how to get an instance of a specific OS in a given family. You do not need to know how Debian, Mac OS X or Windows XP have been programmed to make them available on some computers.  
시스템 관리자로서, 특정 가족의 특정 운영 체제 인스턴스를 가져오는 방법만 알고 싶습니다. Debian, Mac OS X 또는 Windows XP가 어떻게 프로그래밍되어 일부 컴퓨터에서 사용 가능하게 되었는지 알 필요가 없습니다.

# Solution

AbstractFactory is a great solution here. We could consider it as a superset of the Factory pattern, but there is significantly more work to do. Indeed, we need a factory function for each OS family and of course a factory of factories that will be the entry point of the associated module.  
여기서 AbstractFactory는 훌륭한 해결책입니다. 이것은 Factory 패턴의 슈퍼셋으로 간주할 수 있지만, 수행해야 할 작업이 상당히 많습니다. 실제로 각 운영 체제 패밀리에 대한 팩토리 함수가 필요하며, 물론 해당 모듈의 진입점이 될 팩토리의 팩토리도 필요합니다.

![Abstract Factory (idiomatic)](AbstractFactory.png)
