# Synopsis

I have some amazing photos on my computer that I would like to display using my old projector. But my PC uses HDMI and my projector uses VGA.

내 컴퓨터에는 HDMI를 사용하고 프로젝터에는 VGA를 사용하는데, 컴퓨터에 저장된 멋진 사진을 옛날 프로젝터로 보여주고 싶어요.

# Problem

HDMI and VGA are not compatible interfaces. HDMI can handle images and sound through a digital signal whereas VGA can only handle images through an analog signal.

HDMI와 VGA는 호환되지 않는 인터페이스입니다. HDMI는 디지털 신호를 통해 이미지와 소리를 처리할 수 있지만, VGA는 아날로그 신호를 통해 이미지만 처리할 수 있습니다.

# Solution

Adapter is a well-known solution in this kind of situation. Here we need very few things:  
이러한 상황에서 어댑터는 잘 알려진 해결책입니다. 여기서는 매우 적은 것이 필요합니다:

  * An object (literal) that represents the VGA connection  
    VGA 연결을 나타내는 객체(리터럴)
  * An object (literal) that represents the HDMI to VGA adapter
    HDMI에서 VGA로의 어댑터를 나타내는 객체(리터럴)

The latter must have a reference to the first one and must be the entry point of the module. Then the main method of the adapter will delegate some work to the main method of the VGA connection.

후자는 전자에 대한 참조를 가져야 하며 모듈의 진입점이어야 합니다. 그런 다음 어댑터의 주 메서드는 VGA 연결의 주 메서드로 일부 작업을 위임해야 합니다.

![Adapter (idiomatic)](Adapter.png)
