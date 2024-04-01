'use strict';

// ==============================
// PROTOTYPE
// ==============================

module.exports = function (invoice) {
    // Here we suppose invoice properties are always enumerable, writable and configurable.
    // If not, we should use Object.defineProperty() along with Object.getOwnPropertyDescriptor().
    // 여기서는 속성이 항상 enumerable, writable 및 configurable로 가정합니다.
    // 그렇지 않은 경우에는 Object.defineProperty()와 Object.getOwnPropertyDescriptor()를 함께 사용해야 합니다.
    var clone = Object.create(Object.getPrototypeOf(invoice));
    for (var prop in invoice) {
        if (invoice.hasOwnProperty(prop)) {
            clone[prop] = invoice[prop];
        }
    }
    return clone;
};
