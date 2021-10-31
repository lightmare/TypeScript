//// [enumKeysQuotedAsObjectPropertiesInDeclarationEmit.ts]
export enum MouseButton {
	LEFT_BUTTON = 1,
	RIGHT_BUTTON = 2,
	MIDDLE_BUTTON = 4,
	XBUTTON1_BUTTON = 5,
	XBUTTON2_BUTTON = 6,
	NO_BUTTON = 0,
}

export const DOMMouseButton = {
	'-1': MouseButton.NO_BUTTON,
	"0": MouseButton.LEFT_BUTTON,
	"1": MouseButton.MIDDLE_BUTTON,
	"2": MouseButton.RIGHT_BUTTON,
	"3": MouseButton.XBUTTON1_BUTTON,
	"4": MouseButton.XBUTTON2_BUTTON,
};

//// [enumKeysQuotedAsObjectPropertiesInDeclarationEmit.js]
"use strict";
exports.__esModule = true;
exports.DOMMouseButton = exports.MouseButton = void 0;
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton[1] = "LEFT_BUTTON"] = 1;
    MouseButton[MouseButton[2] = "RIGHT_BUTTON"] = 2;
    MouseButton[MouseButton[4] = "MIDDLE_BUTTON"] = 4;
    MouseButton[MouseButton[5] = "XBUTTON1_BUTTON"] = 5;
    MouseButton[MouseButton[6] = "XBUTTON2_BUTTON"] = 6;
    MouseButton[MouseButton[0] = "NO_BUTTON"] = 0;
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
exports.DOMMouseButton = {
    '-1': MouseButton.NO_BUTTON,
    "0": MouseButton.LEFT_BUTTON,
    "1": MouseButton.MIDDLE_BUTTON,
    "2": MouseButton.RIGHT_BUTTON,
    "3": MouseButton.XBUTTON1_BUTTON,
    "4": MouseButton.XBUTTON2_BUTTON
};


//// [enumKeysQuotedAsObjectPropertiesInDeclarationEmit.d.ts]
export declare enum MouseButton {
    LEFT_BUTTON = 1,
    RIGHT_BUTTON = 2,
    MIDDLE_BUTTON = 4,
    XBUTTON1_BUTTON = 5,
    XBUTTON2_BUTTON = 6,
    NO_BUTTON = 0
}
export declare const DOMMouseButton: {
    '-1': MouseButton;
    "0": MouseButton;
    "1": MouseButton;
    "2": MouseButton;
    "3": MouseButton;
    "4": MouseButton;
};
