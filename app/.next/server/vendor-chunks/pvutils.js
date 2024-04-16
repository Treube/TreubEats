"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pvutils";
exports.ids = ["vendor-chunks/pvutils"];
exports.modules = {

/***/ "(rsc)/./node_modules/pvutils/build/utils.es.js":
/*!************************************************!*\
  !*** ./node_modules/pvutils/build/utils.es.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayBufferToString: () => (/* binding */ arrayBufferToString),\n/* harmony export */   bufferToHexCodes: () => (/* binding */ bufferToHexCodes),\n/* harmony export */   checkBufferParams: () => (/* binding */ checkBufferParams),\n/* harmony export */   clearProps: () => (/* binding */ clearProps),\n/* harmony export */   fromBase64: () => (/* binding */ fromBase64),\n/* harmony export */   getParametersValue: () => (/* binding */ getParametersValue),\n/* harmony export */   getUTCDate: () => (/* binding */ getUTCDate),\n/* harmony export */   isEqualBuffer: () => (/* binding */ isEqualBuffer),\n/* harmony export */   nearestPowerOf2: () => (/* binding */ nearestPowerOf2),\n/* harmony export */   padNumber: () => (/* binding */ padNumber),\n/* harmony export */   stringToArrayBuffer: () => (/* binding */ stringToArrayBuffer),\n/* harmony export */   toBase64: () => (/* binding */ toBase64),\n/* harmony export */   utilConcatBuf: () => (/* binding */ utilConcatBuf),\n/* harmony export */   utilConcatView: () => (/* binding */ utilConcatView),\n/* harmony export */   utilDecodeTC: () => (/* binding */ utilDecodeTC),\n/* harmony export */   utilEncodeTC: () => (/* binding */ utilEncodeTC),\n/* harmony export */   utilFromBase: () => (/* binding */ utilFromBase),\n/* harmony export */   utilToBase: () => (/* binding */ utilToBase)\n/* harmony export */ });\n/*!\n Copyright (c) Peculiar Ventures, LLC\n*/\n\nfunction getUTCDate(date) {\r\n    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));\r\n}\r\nfunction getParametersValue(parameters, name, defaultValue) {\r\n    var _a;\r\n    if ((parameters instanceof Object) === false) {\r\n        return defaultValue;\r\n    }\r\n    return (_a = parameters[name]) !== null && _a !== void 0 ? _a : defaultValue;\r\n}\r\nfunction bufferToHexCodes(inputBuffer, inputOffset = 0, inputLength = (inputBuffer.byteLength - inputOffset), insertSpace = false) {\r\n    let result = \"\";\r\n    for (const item of (new Uint8Array(inputBuffer, inputOffset, inputLength))) {\r\n        const str = item.toString(16).toUpperCase();\r\n        if (str.length === 1) {\r\n            result += \"0\";\r\n        }\r\n        result += str;\r\n        if (insertSpace) {\r\n            result += \" \";\r\n        }\r\n    }\r\n    return result.trim();\r\n}\r\nfunction checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {\r\n    if (!(inputBuffer instanceof ArrayBuffer)) {\r\n        baseBlock.error = \"Wrong parameter: inputBuffer must be \\\"ArrayBuffer\\\"\";\r\n        return false;\r\n    }\r\n    if (!inputBuffer.byteLength) {\r\n        baseBlock.error = \"Wrong parameter: inputBuffer has zero length\";\r\n        return false;\r\n    }\r\n    if (inputOffset < 0) {\r\n        baseBlock.error = \"Wrong parameter: inputOffset less than zero\";\r\n        return false;\r\n    }\r\n    if (inputLength < 0) {\r\n        baseBlock.error = \"Wrong parameter: inputLength less than zero\";\r\n        return false;\r\n    }\r\n    if ((inputBuffer.byteLength - inputOffset - inputLength) < 0) {\r\n        baseBlock.error = \"End of input reached before message was fully decoded (inconsistent offset and length values)\";\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\nfunction utilFromBase(inputBuffer, inputBase) {\r\n    let result = 0;\r\n    if (inputBuffer.length === 1) {\r\n        return inputBuffer[0];\r\n    }\r\n    for (let i = (inputBuffer.length - 1); i >= 0; i--) {\r\n        result += inputBuffer[(inputBuffer.length - 1) - i] * Math.pow(2, inputBase * i);\r\n    }\r\n    return result;\r\n}\r\nfunction utilToBase(value, base, reserved = (-1)) {\r\n    const internalReserved = reserved;\r\n    let internalValue = value;\r\n    let result = 0;\r\n    let biggest = Math.pow(2, base);\r\n    for (let i = 1; i < 8; i++) {\r\n        if (value < biggest) {\r\n            let retBuf;\r\n            if (internalReserved < 0) {\r\n                retBuf = new ArrayBuffer(i);\r\n                result = i;\r\n            }\r\n            else {\r\n                if (internalReserved < i) {\r\n                    return (new ArrayBuffer(0));\r\n                }\r\n                retBuf = new ArrayBuffer(internalReserved);\r\n                result = internalReserved;\r\n            }\r\n            const retView = new Uint8Array(retBuf);\r\n            for (let j = (i - 1); j >= 0; j--) {\r\n                const basis = Math.pow(2, j * base);\r\n                retView[result - j - 1] = Math.floor(internalValue / basis);\r\n                internalValue -= (retView[result - j - 1]) * basis;\r\n            }\r\n            return retBuf;\r\n        }\r\n        biggest *= Math.pow(2, base);\r\n    }\r\n    return new ArrayBuffer(0);\r\n}\r\nfunction utilConcatBuf(...buffers) {\r\n    let outputLength = 0;\r\n    let prevLength = 0;\r\n    for (const buffer of buffers) {\r\n        outputLength += buffer.byteLength;\r\n    }\r\n    const retBuf = new ArrayBuffer(outputLength);\r\n    const retView = new Uint8Array(retBuf);\r\n    for (const buffer of buffers) {\r\n        retView.set(new Uint8Array(buffer), prevLength);\r\n        prevLength += buffer.byteLength;\r\n    }\r\n    return retBuf;\r\n}\r\nfunction utilConcatView(...views) {\r\n    let outputLength = 0;\r\n    let prevLength = 0;\r\n    for (const view of views) {\r\n        outputLength += view.length;\r\n    }\r\n    const retBuf = new ArrayBuffer(outputLength);\r\n    const retView = new Uint8Array(retBuf);\r\n    for (const view of views) {\r\n        retView.set(view, prevLength);\r\n        prevLength += view.length;\r\n    }\r\n    return retView;\r\n}\r\nfunction utilDecodeTC() {\r\n    const buf = new Uint8Array(this.valueHex);\r\n    if (this.valueHex.byteLength >= 2) {\r\n        const condition1 = (buf[0] === 0xFF) && (buf[1] & 0x80);\r\n        const condition2 = (buf[0] === 0x00) && ((buf[1] & 0x80) === 0x00);\r\n        if (condition1 || condition2) {\r\n            this.warnings.push(\"Needlessly long format\");\r\n        }\r\n    }\r\n    const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);\r\n    const bigIntView = new Uint8Array(bigIntBuffer);\r\n    for (let i = 0; i < this.valueHex.byteLength; i++) {\r\n        bigIntView[i] = 0;\r\n    }\r\n    bigIntView[0] = (buf[0] & 0x80);\r\n    const bigInt = utilFromBase(bigIntView, 8);\r\n    const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);\r\n    const smallIntView = new Uint8Array(smallIntBuffer);\r\n    for (let j = 0; j < this.valueHex.byteLength; j++) {\r\n        smallIntView[j] = buf[j];\r\n    }\r\n    smallIntView[0] &= 0x7F;\r\n    const smallInt = utilFromBase(smallIntView, 8);\r\n    return (smallInt - bigInt);\r\n}\r\nfunction utilEncodeTC(value) {\r\n    const modValue = (value < 0) ? (value * (-1)) : value;\r\n    let bigInt = 128;\r\n    for (let i = 1; i < 8; i++) {\r\n        if (modValue <= bigInt) {\r\n            if (value < 0) {\r\n                const smallInt = bigInt - modValue;\r\n                const retBuf = utilToBase(smallInt, 8, i);\r\n                const retView = new Uint8Array(retBuf);\r\n                retView[0] |= 0x80;\r\n                return retBuf;\r\n            }\r\n            let retBuf = utilToBase(modValue, 8, i);\r\n            let retView = new Uint8Array(retBuf);\r\n            if (retView[0] & 0x80) {\r\n                const tempBuf = retBuf.slice(0);\r\n                const tempView = new Uint8Array(tempBuf);\r\n                retBuf = new ArrayBuffer(retBuf.byteLength + 1);\r\n                retView = new Uint8Array(retBuf);\r\n                for (let k = 0; k < tempBuf.byteLength; k++) {\r\n                    retView[k + 1] = tempView[k];\r\n                }\r\n                retView[0] = 0x00;\r\n            }\r\n            return retBuf;\r\n        }\r\n        bigInt *= Math.pow(2, 8);\r\n    }\r\n    return (new ArrayBuffer(0));\r\n}\r\nfunction isEqualBuffer(inputBuffer1, inputBuffer2) {\r\n    if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {\r\n        return false;\r\n    }\r\n    const view1 = new Uint8Array(inputBuffer1);\r\n    const view2 = new Uint8Array(inputBuffer2);\r\n    for (let i = 0; i < view1.length; i++) {\r\n        if (view1[i] !== view2[i]) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nfunction padNumber(inputNumber, fullLength) {\r\n    const str = inputNumber.toString(10);\r\n    if (fullLength < str.length) {\r\n        return \"\";\r\n    }\r\n    const dif = fullLength - str.length;\r\n    const padding = new Array(dif);\r\n    for (let i = 0; i < dif; i++) {\r\n        padding[i] = \"0\";\r\n    }\r\n    const paddingString = padding.join(\"\");\r\n    return paddingString.concat(str);\r\n}\r\nconst base64Template = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\r\nconst base64UrlTemplate = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=\";\r\nfunction toBase64(input, useUrlTemplate = false, skipPadding = false, skipLeadingZeros = false) {\r\n    let i = 0;\r\n    let flag1 = 0;\r\n    let flag2 = 0;\r\n    let output = \"\";\r\n    const template = (useUrlTemplate) ? base64UrlTemplate : base64Template;\r\n    if (skipLeadingZeros) {\r\n        let nonZeroPosition = 0;\r\n        for (let i = 0; i < input.length; i++) {\r\n            if (input.charCodeAt(i) !== 0) {\r\n                nonZeroPosition = i;\r\n                break;\r\n            }\r\n        }\r\n        input = input.slice(nonZeroPosition);\r\n    }\r\n    while (i < input.length) {\r\n        const chr1 = input.charCodeAt(i++);\r\n        if (i >= input.length) {\r\n            flag1 = 1;\r\n        }\r\n        const chr2 = input.charCodeAt(i++);\r\n        if (i >= input.length) {\r\n            flag2 = 1;\r\n        }\r\n        const chr3 = input.charCodeAt(i++);\r\n        const enc1 = chr1 >> 2;\r\n        const enc2 = ((chr1 & 0x03) << 4) | (chr2 >> 4);\r\n        let enc3 = ((chr2 & 0x0F) << 2) | (chr3 >> 6);\r\n        let enc4 = chr3 & 0x3F;\r\n        if (flag1 === 1) {\r\n            enc3 = enc4 = 64;\r\n        }\r\n        else {\r\n            if (flag2 === 1) {\r\n                enc4 = 64;\r\n            }\r\n        }\r\n        if (skipPadding) {\r\n            if (enc3 === 64) {\r\n                output += `${template.charAt(enc1)}${template.charAt(enc2)}`;\r\n            }\r\n            else {\r\n                if (enc4 === 64) {\r\n                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}`;\r\n                }\r\n                else {\r\n                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;\r\n        }\r\n    }\r\n    return output;\r\n}\r\nfunction fromBase64(input, useUrlTemplate = false, cutTailZeros = false) {\r\n    const template = (useUrlTemplate) ? base64UrlTemplate : base64Template;\r\n    function indexOf(toSearch) {\r\n        for (let i = 0; i < 64; i++) {\r\n            if (template.charAt(i) === toSearch)\r\n                return i;\r\n        }\r\n        return 64;\r\n    }\r\n    function test(incoming) {\r\n        return ((incoming === 64) ? 0x00 : incoming);\r\n    }\r\n    let i = 0;\r\n    let output = \"\";\r\n    while (i < input.length) {\r\n        const enc1 = indexOf(input.charAt(i++));\r\n        const enc2 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));\r\n        const enc3 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));\r\n        const enc4 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));\r\n        const chr1 = (test(enc1) << 2) | (test(enc2) >> 4);\r\n        const chr2 = ((test(enc2) & 0x0F) << 4) | (test(enc3) >> 2);\r\n        const chr3 = ((test(enc3) & 0x03) << 6) | test(enc4);\r\n        output += String.fromCharCode(chr1);\r\n        if (enc3 !== 64) {\r\n            output += String.fromCharCode(chr2);\r\n        }\r\n        if (enc4 !== 64) {\r\n            output += String.fromCharCode(chr3);\r\n        }\r\n    }\r\n    if (cutTailZeros) {\r\n        const outputLength = output.length;\r\n        let nonZeroStart = (-1);\r\n        for (let i = (outputLength - 1); i >= 0; i--) {\r\n            if (output.charCodeAt(i) !== 0) {\r\n                nonZeroStart = i;\r\n                break;\r\n            }\r\n        }\r\n        if (nonZeroStart !== (-1)) {\r\n            output = output.slice(0, nonZeroStart + 1);\r\n        }\r\n        else {\r\n            output = \"\";\r\n        }\r\n    }\r\n    return output;\r\n}\r\nfunction arrayBufferToString(buffer) {\r\n    let resultString = \"\";\r\n    const view = new Uint8Array(buffer);\r\n    for (const element of view) {\r\n        resultString += String.fromCharCode(element);\r\n    }\r\n    return resultString;\r\n}\r\nfunction stringToArrayBuffer(str) {\r\n    const stringLength = str.length;\r\n    const resultBuffer = new ArrayBuffer(stringLength);\r\n    const resultView = new Uint8Array(resultBuffer);\r\n    for (let i = 0; i < stringLength; i++) {\r\n        resultView[i] = str.charCodeAt(i);\r\n    }\r\n    return resultBuffer;\r\n}\r\nconst log2 = Math.log(2);\r\nfunction nearestPowerOf2(length) {\r\n    const base = (Math.log(length) / log2);\r\n    const floor = Math.floor(base);\r\n    const round = Math.round(base);\r\n    return ((floor === round) ? floor : round);\r\n}\r\nfunction clearProps(object, propsArray) {\r\n    for (const prop of propsArray) {\r\n        delete object[prop];\r\n    }\r\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcHZ1dGlscy9idWlsZC91dGlscy5lcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQixFQUFFLHNCQUFzQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCO0FBQ3ZHO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvcHZ1dGlscy9idWlsZC91dGlscy5lcy5qcz9kMDg5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuIENvcHlyaWdodCAoYykgUGVjdWxpYXIgVmVudHVyZXMsIExMQ1xuKi9cblxuZnVuY3Rpb24gZ2V0VVRDRGF0ZShkYXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcclxufVxyXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJzVmFsdWUocGFyYW1ldGVycywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoKHBhcmFtZXRlcnMgaW5zdGFuY2VvZiBPYmplY3QpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKF9hID0gcGFyYW1ldGVyc1tuYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGJ1ZmZlclRvSGV4Q29kZXMoaW5wdXRCdWZmZXIsIGlucHV0T2Zmc2V0ID0gMCwgaW5wdXRMZW5ndGggPSAoaW5wdXRCdWZmZXIuYnl0ZUxlbmd0aCAtIGlucHV0T2Zmc2V0KSwgaW5zZXJ0U3BhY2UgPSBmYWxzZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgKG5ldyBVaW50OEFycmF5KGlucHV0QnVmZmVyLCBpbnB1dE9mZnNldCwgaW5wdXRMZW5ndGgpKSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGl0ZW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gc3RyO1xyXG4gICAgICAgIGlmIChpbnNlcnRTcGFjZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdC50cmltKCk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tCdWZmZXJQYXJhbXMoYmFzZUJsb2NrLCBpbnB1dEJ1ZmZlciwgaW5wdXRPZmZzZXQsIGlucHV0TGVuZ3RoKSB7XHJcbiAgICBpZiAoIShpbnB1dEJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xyXG4gICAgICAgIGJhc2VCbG9jay5lcnJvciA9IFwiV3JvbmcgcGFyYW1ldGVyOiBpbnB1dEJ1ZmZlciBtdXN0IGJlIFxcXCJBcnJheUJ1ZmZlclxcXCJcIjtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlucHV0QnVmZmVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICBiYXNlQmxvY2suZXJyb3IgPSBcIldyb25nIHBhcmFtZXRlcjogaW5wdXRCdWZmZXIgaGFzIHplcm8gbGVuZ3RoXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0T2Zmc2V0IDwgMCkge1xyXG4gICAgICAgIGJhc2VCbG9jay5lcnJvciA9IFwiV3JvbmcgcGFyYW1ldGVyOiBpbnB1dE9mZnNldCBsZXNzIHRoYW4gemVyb1wiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChpbnB1dExlbmd0aCA8IDApIHtcclxuICAgICAgICBiYXNlQmxvY2suZXJyb3IgPSBcIldyb25nIHBhcmFtZXRlcjogaW5wdXRMZW5ndGggbGVzcyB0aGFuIHplcm9cIjtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoKGlucHV0QnVmZmVyLmJ5dGVMZW5ndGggLSBpbnB1dE9mZnNldCAtIGlucHV0TGVuZ3RoKSA8IDApIHtcclxuICAgICAgICBiYXNlQmxvY2suZXJyb3IgPSBcIkVuZCBvZiBpbnB1dCByZWFjaGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBmdWxseSBkZWNvZGVkIChpbmNvbnNpc3RlbnQgb2Zmc2V0IGFuZCBsZW5ndGggdmFsdWVzKVwiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIHV0aWxGcm9tQmFzZShpbnB1dEJ1ZmZlciwgaW5wdXRCYXNlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGlmIChpbnB1dEJ1ZmZlci5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXRCdWZmZXJbMF07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gKGlucHV0QnVmZmVyLmxlbmd0aCAtIDEpOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHJlc3VsdCArPSBpbnB1dEJ1ZmZlclsoaW5wdXRCdWZmZXIubGVuZ3RoIC0gMSkgLSBpXSAqIE1hdGgucG93KDIsIGlucHV0QmFzZSAqIGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiB1dGlsVG9CYXNlKHZhbHVlLCBiYXNlLCByZXNlcnZlZCA9ICgtMSkpIHtcclxuICAgIGNvbnN0IGludGVybmFsUmVzZXJ2ZWQgPSByZXNlcnZlZDtcclxuICAgIGxldCBpbnRlcm5hbFZhbHVlID0gdmFsdWU7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGxldCBiaWdnZXN0ID0gTWF0aC5wb3coMiwgYmFzZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IGJpZ2dlc3QpIHtcclxuICAgICAgICAgICAgbGV0IHJldEJ1ZjtcclxuICAgICAgICAgICAgaWYgKGludGVybmFsUmVzZXJ2ZWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXRCdWYgPSBuZXcgQXJyYXlCdWZmZXIoaSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsUmVzZXJ2ZWQgPCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgQXJyYXlCdWZmZXIoMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0QnVmID0gbmV3IEFycmF5QnVmZmVyKGludGVybmFsUmVzZXJ2ZWQpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaW50ZXJuYWxSZXNlcnZlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkocmV0QnVmKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IChpIC0gMSk7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNpcyA9IE1hdGgucG93KDIsIGogKiBiYXNlKTtcclxuICAgICAgICAgICAgICAgIHJldFZpZXdbcmVzdWx0IC0gaiAtIDFdID0gTWF0aC5mbG9vcihpbnRlcm5hbFZhbHVlIC8gYmFzaXMpO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxWYWx1ZSAtPSAocmV0Vmlld1tyZXN1bHQgLSBqIC0gMV0pICogYmFzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldEJ1ZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmlnZ2VzdCAqPSBNYXRoLnBvdygyLCBiYXNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XHJcbn1cclxuZnVuY3Rpb24gdXRpbENvbmNhdEJ1ZiguLi5idWZmZXJzKSB7XHJcbiAgICBsZXQgb3V0cHV0TGVuZ3RoID0gMDtcclxuICAgIGxldCBwcmV2TGVuZ3RoID0gMDtcclxuICAgIGZvciAoY29uc3QgYnVmZmVyIG9mIGJ1ZmZlcnMpIHtcclxuICAgICAgICBvdXRwdXRMZW5ndGggKz0gYnVmZmVyLmJ5dGVMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXRCdWYgPSBuZXcgQXJyYXlCdWZmZXIob3V0cHV0TGVuZ3RoKTtcclxuICAgIGNvbnN0IHJldFZpZXcgPSBuZXcgVWludDhBcnJheShyZXRCdWYpO1xyXG4gICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgIHJldFZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZmZlciksIHByZXZMZW5ndGgpO1xyXG4gICAgICAgIHByZXZMZW5ndGggKz0gYnVmZmVyLmJ5dGVMZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0QnVmO1xyXG59XHJcbmZ1bmN0aW9uIHV0aWxDb25jYXRWaWV3KC4uLnZpZXdzKSB7XHJcbiAgICBsZXQgb3V0cHV0TGVuZ3RoID0gMDtcclxuICAgIGxldCBwcmV2TGVuZ3RoID0gMDtcclxuICAgIGZvciAoY29uc3QgdmlldyBvZiB2aWV3cykge1xyXG4gICAgICAgIG91dHB1dExlbmd0aCArPSB2aWV3Lmxlbmd0aDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJldEJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihvdXRwdXRMZW5ndGgpO1xyXG4gICAgY29uc3QgcmV0VmlldyA9IG5ldyBVaW50OEFycmF5KHJldEJ1Zik7XHJcbiAgICBmb3IgKGNvbnN0IHZpZXcgb2Ygdmlld3MpIHtcclxuICAgICAgICByZXRWaWV3LnNldCh2aWV3LCBwcmV2TGVuZ3RoKTtcclxuICAgICAgICBwcmV2TGVuZ3RoICs9IHZpZXcubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldFZpZXc7XHJcbn1cclxuZnVuY3Rpb24gdXRpbERlY29kZVRDKCkge1xyXG4gICAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy52YWx1ZUhleCk7XHJcbiAgICBpZiAodGhpcy52YWx1ZUhleC5ieXRlTGVuZ3RoID49IDIpIHtcclxuICAgICAgICBjb25zdCBjb25kaXRpb24xID0gKGJ1ZlswXSA9PT0gMHhGRikgJiYgKGJ1ZlsxXSAmIDB4ODApO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjIgPSAoYnVmWzBdID09PSAweDAwKSAmJiAoKGJ1ZlsxXSAmIDB4ODApID09PSAweDAwKTtcclxuICAgICAgICBpZiAoY29uZGl0aW9uMSB8fCBjb25kaXRpb24yKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZ3MucHVzaChcIk5lZWRsZXNzbHkgbG9uZyBmb3JtYXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYmlnSW50QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMudmFsdWVIZXguYnl0ZUxlbmd0aCk7XHJcbiAgICBjb25zdCBiaWdJbnRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYmlnSW50QnVmZmVyKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZUhleC5ieXRlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBiaWdJbnRWaWV3W2ldID0gMDtcclxuICAgIH1cclxuICAgIGJpZ0ludFZpZXdbMF0gPSAoYnVmWzBdICYgMHg4MCk7XHJcbiAgICBjb25zdCBiaWdJbnQgPSB1dGlsRnJvbUJhc2UoYmlnSW50VmlldywgOCk7XHJcbiAgICBjb25zdCBzbWFsbEludEJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnZhbHVlSGV4LmJ5dGVMZW5ndGgpO1xyXG4gICAgY29uc3Qgc21hbGxJbnRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoc21hbGxJbnRCdWZmZXIpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnZhbHVlSGV4LmJ5dGVMZW5ndGg7IGorKykge1xyXG4gICAgICAgIHNtYWxsSW50Vmlld1tqXSA9IGJ1ZltqXTtcclxuICAgIH1cclxuICAgIHNtYWxsSW50Vmlld1swXSAmPSAweDdGO1xyXG4gICAgY29uc3Qgc21hbGxJbnQgPSB1dGlsRnJvbUJhc2Uoc21hbGxJbnRWaWV3LCA4KTtcclxuICAgIHJldHVybiAoc21hbGxJbnQgLSBiaWdJbnQpO1xyXG59XHJcbmZ1bmN0aW9uIHV0aWxFbmNvZGVUQyh2YWx1ZSkge1xyXG4gICAgY29uc3QgbW9kVmFsdWUgPSAodmFsdWUgPCAwKSA/ICh2YWx1ZSAqICgtMSkpIDogdmFsdWU7XHJcbiAgICBsZXQgYmlnSW50ID0gMTI4O1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICBpZiAobW9kVmFsdWUgPD0gYmlnSW50KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNtYWxsSW50ID0gYmlnSW50IC0gbW9kVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXRCdWYgPSB1dGlsVG9CYXNlKHNtYWxsSW50LCA4LCBpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldFZpZXcgPSBuZXcgVWludDhBcnJheShyZXRCdWYpO1xyXG4gICAgICAgICAgICAgICAgcmV0Vmlld1swXSB8PSAweDgwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldEJ1ZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmV0QnVmID0gdXRpbFRvQmFzZShtb2RWYWx1ZSwgOCwgaSk7XHJcbiAgICAgICAgICAgIGxldCByZXRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkocmV0QnVmKTtcclxuICAgICAgICAgICAgaWYgKHJldFZpZXdbMF0gJiAweDgwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wQnVmID0gcmV0QnVmLnNsaWNlKDApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFZpZXcgPSBuZXcgVWludDhBcnJheSh0ZW1wQnVmKTtcclxuICAgICAgICAgICAgICAgIHJldEJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihyZXRCdWYuYnl0ZUxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0VmlldyA9IG5ldyBVaW50OEFycmF5KHJldEJ1Zik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRlbXBCdWYuYnl0ZUxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0Vmlld1trICsgMV0gPSB0ZW1wVmlld1trXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldFZpZXdbMF0gPSAweDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXRCdWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJpZ0ludCAqPSBNYXRoLnBvdygyLCA4KTtcclxuICAgIH1cclxuICAgIHJldHVybiAobmV3IEFycmF5QnVmZmVyKDApKTtcclxufVxyXG5mdW5jdGlvbiBpc0VxdWFsQnVmZmVyKGlucHV0QnVmZmVyMSwgaW5wdXRCdWZmZXIyKSB7XHJcbiAgICBpZiAoaW5wdXRCdWZmZXIxLmJ5dGVMZW5ndGggIT09IGlucHV0QnVmZmVyMi5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmlldzEgPSBuZXcgVWludDhBcnJheShpbnB1dEJ1ZmZlcjEpO1xyXG4gICAgY29uc3QgdmlldzIgPSBuZXcgVWludDhBcnJheShpbnB1dEJ1ZmZlcjIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3MS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh2aWV3MVtpXSAhPT0gdmlldzJbaV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIHBhZE51bWJlcihpbnB1dE51bWJlciwgZnVsbExlbmd0aCkge1xyXG4gICAgY29uc3Qgc3RyID0gaW5wdXROdW1iZXIudG9TdHJpbmcoMTApO1xyXG4gICAgaWYgKGZ1bGxMZW5ndGggPCBzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaWYgPSBmdWxsTGVuZ3RoIC0gc3RyLmxlbmd0aDtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSBuZXcgQXJyYXkoZGlmKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmOyBpKyspIHtcclxuICAgICAgICBwYWRkaW5nW2ldID0gXCIwXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWRkaW5nU3RyaW5nID0gcGFkZGluZy5qb2luKFwiXCIpO1xyXG4gICAgcmV0dXJuIHBhZGRpbmdTdHJpbmcuY29uY2F0KHN0cik7XHJcbn1cclxuY29uc3QgYmFzZTY0VGVtcGxhdGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XHJcbmNvbnN0IGJhc2U2NFVybFRlbXBsYXRlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fPVwiO1xyXG5mdW5jdGlvbiB0b0Jhc2U2NChpbnB1dCwgdXNlVXJsVGVtcGxhdGUgPSBmYWxzZSwgc2tpcFBhZGRpbmcgPSBmYWxzZSwgc2tpcExlYWRpbmdaZXJvcyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgZmxhZzEgPSAwO1xyXG4gICAgbGV0IGZsYWcyID0gMDtcclxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSAodXNlVXJsVGVtcGxhdGUpID8gYmFzZTY0VXJsVGVtcGxhdGUgOiBiYXNlNjRUZW1wbGF0ZTtcclxuICAgIGlmIChza2lwTGVhZGluZ1plcm9zKSB7XHJcbiAgICAgICAgbGV0IG5vblplcm9Qb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChpKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9uWmVyb1Bvc2l0aW9uID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2Uobm9uWmVyb1Bvc2l0aW9uKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuICAgICAgICBpZiAoaSA+PSBpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmxhZzEgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgIGlmIChpID49IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmbGFnMiA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgY29uc3QgZW5jMSA9IGNocjEgPj4gMjtcclxuICAgICAgICBjb25zdCBlbmMyID0gKChjaHIxICYgMHgwMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcclxuICAgICAgICBsZXQgZW5jMyA9ICgoY2hyMiAmIDB4MEYpIDw8IDIpIHwgKGNocjMgPj4gNik7XHJcbiAgICAgICAgbGV0IGVuYzQgPSBjaHIzICYgMHgzRjtcclxuICAgICAgICBpZiAoZmxhZzEgPT09IDEpIHtcclxuICAgICAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmbGFnMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZW5jNCA9IDY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChza2lwUGFkZGluZykge1xyXG4gICAgICAgICAgICBpZiAoZW5jMyA9PT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMSl9JHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMil9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbmM0ID09PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMSl9JHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMil9JHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMyl9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBgJHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMSl9JHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMil9JHt0ZW1wbGF0ZS5jaGFyQXQoZW5jMyl9JHt0ZW1wbGF0ZS5jaGFyQXQoZW5jNCl9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0cHV0ICs9IGAke3RlbXBsYXRlLmNoYXJBdChlbmMxKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMyKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMzKX0ke3RlbXBsYXRlLmNoYXJBdChlbmM0KX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuZnVuY3Rpb24gZnJvbUJhc2U2NChpbnB1dCwgdXNlVXJsVGVtcGxhdGUgPSBmYWxzZSwgY3V0VGFpbFplcm9zID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gKHVzZVVybFRlbXBsYXRlKSA/IGJhc2U2NFVybFRlbXBsYXRlIDogYmFzZTY0VGVtcGxhdGU7XHJcbiAgICBmdW5jdGlvbiBpbmRleE9mKHRvU2VhcmNoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZS5jaGFyQXQoaSkgPT09IHRvU2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA2NDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRlc3QoaW5jb21pbmcpIHtcclxuICAgICAgICByZXR1cm4gKChpbmNvbWluZyA9PT0gNjQpID8gMHgwMCA6IGluY29taW5nKTtcclxuICAgIH1cclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBlbmMxID0gaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgY29uc3QgZW5jMiA9IChpID49IGlucHV0Lmxlbmd0aCkgPyAweDAwIDogaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgY29uc3QgZW5jMyA9IChpID49IGlucHV0Lmxlbmd0aCkgPyAweDAwIDogaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgY29uc3QgZW5jNCA9IChpID49IGlucHV0Lmxlbmd0aCkgPyAweDAwIDogaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgY29uc3QgY2hyMSA9ICh0ZXN0KGVuYzEpIDw8IDIpIHwgKHRlc3QoZW5jMikgPj4gNCk7XHJcbiAgICAgICAgY29uc3QgY2hyMiA9ICgodGVzdChlbmMyKSAmIDB4MEYpIDw8IDQpIHwgKHRlc3QoZW5jMykgPj4gMik7XHJcbiAgICAgICAgY29uc3QgY2hyMyA9ICgodGVzdChlbmMzKSAmIDB4MDMpIDw8IDYpIHwgdGVzdChlbmM0KTtcclxuICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcclxuICAgICAgICBpZiAoZW5jMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmM0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3V0VGFpbFplcm9zKSB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0TGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgbm9uWmVyb1N0YXJ0ID0gKC0xKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gKG91dHB1dExlbmd0aCAtIDEpOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAob3V0cHV0LmNoYXJDb2RlQXQoaSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5vblplcm9TdGFydCA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9uWmVyb1N0YXJ0ICE9PSAoLTEpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5zbGljZSgwLCBub25aZXJvU3RhcnQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5mdW5jdGlvbiBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikge1xyXG4gICAgbGV0IHJlc3VsdFN0cmluZyA9IFwiXCI7XHJcbiAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB2aWV3KSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlCdWZmZXIoc3RyKSB7XHJcbiAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzdHIubGVuZ3RoO1xyXG4gICAgY29uc3QgcmVzdWx0QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHN0cmluZ0xlbmd0aCk7XHJcbiAgICBjb25zdCByZXN1bHRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0QnVmZmVyKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXN1bHRWaWV3W2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0QnVmZmVyO1xyXG59XHJcbmNvbnN0IGxvZzIgPSBNYXRoLmxvZygyKTtcclxuZnVuY3Rpb24gbmVhcmVzdFBvd2VyT2YyKGxlbmd0aCkge1xyXG4gICAgY29uc3QgYmFzZSA9IChNYXRoLmxvZyhsZW5ndGgpIC8gbG9nMik7XHJcbiAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoYmFzZSk7XHJcbiAgICBjb25zdCByb3VuZCA9IE1hdGgucm91bmQoYmFzZSk7XHJcbiAgICByZXR1cm4gKChmbG9vciA9PT0gcm91bmQpID8gZmxvb3IgOiByb3VuZCk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJQcm9wcyhvYmplY3QsIHByb3BzQXJyYXkpIHtcclxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wc0FycmF5KSB7XHJcbiAgICAgICAgZGVsZXRlIG9iamVjdFtwcm9wXTtcclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBhcnJheUJ1ZmZlclRvU3RyaW5nLCBidWZmZXJUb0hleENvZGVzLCBjaGVja0J1ZmZlclBhcmFtcywgY2xlYXJQcm9wcywgZnJvbUJhc2U2NCwgZ2V0UGFyYW1ldGVyc1ZhbHVlLCBnZXRVVENEYXRlLCBpc0VxdWFsQnVmZmVyLCBuZWFyZXN0UG93ZXJPZjIsIHBhZE51bWJlciwgc3RyaW5nVG9BcnJheUJ1ZmZlciwgdG9CYXNlNjQsIHV0aWxDb25jYXRCdWYsIHV0aWxDb25jYXRWaWV3LCB1dGlsRGVjb2RlVEMsIHV0aWxFbmNvZGVUQywgdXRpbEZyb21CYXNlLCB1dGlsVG9CYXNlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/pvutils/build/utils.es.js\n");

/***/ })

};
;