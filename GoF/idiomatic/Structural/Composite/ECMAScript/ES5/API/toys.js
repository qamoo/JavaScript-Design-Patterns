'use strict';

// ==============================
// SIMPLE COMPONENT
// ==============================

// A ball does not contain anything
// 공은 아무 것도 포함하지 않습니다.
var createBall = function () { 
    return {
        description: function () {
            return "There's a ball!\n";
        }
    }
};

// ==============================
// COMPOSITE COMPONENT
// ==============================

// A toy box is a toy entity which contains toys, including smaller toy boxes
// 장난감 상자는 장난감을 포함하는 장난감 엔티티이며, 그 안에는 더 작은 장난감 상자를 포함하여 장난감이 들어 있습니다.
var createToyBox = function () {
    return {
        toys: [],
        description: function () {
            return "There's a toy box!\n";
        },
        add: function (toy) {
            this.toys.push(toy); 
        },
        inventory: function () {
            var inventory = "Let's open the toy box...\n";
            for (var i = 0; i < this.toys.length; i++) {
                inventory += this.toys[i].description();
                if (this.toys[i].hasOwnProperty("toys")) {
                    inventory += this.toys[i].inventory();
                }
            }
            return inventory;
        }
    }
};

module.exports = {
    ball: createBall,
    box: createToyBox
};
