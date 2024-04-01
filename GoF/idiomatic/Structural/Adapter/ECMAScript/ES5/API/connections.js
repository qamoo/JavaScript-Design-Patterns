'use strict';

// ==============================
// CONNECTIONS
// ==============================

// VGA has its own interface which handles images only through an analog signal
// VGA는 아날로그 신호를 통해 이미지만 처리하는 고유한 인터페이스를 갖고 있습니다.
var vga = {
    name: "VGA",
    data: "images",
    signal: "analog",
    handleAnalogSignal: function () {
        return "Interface: " + this.name + "\nData: " + this.data + "\nSignal: " + this.signal;
    }
};

// But your computer uses HDMI as output and your projector uses VGA as input...
// Here you need an adapter if you want to display images.
// 그러나 컴퓨터는 출력으로 HDMI를 사용하고 프로젝터는 입력으로 VGA를 사용합니다...
// 여기서 이미지를 표시하려면 어댑터가 필요합니다.
module.exports = {
    vga: vga,
    handleDigitalSignal: function () {
        return this.vga.handleAnalogSignal();
    }
};
