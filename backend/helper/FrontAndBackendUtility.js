"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrontAndBackendUtility {
    static getUniqueByDotNotationReturnObject(value, dotNotationString, notFoundValue) {
        let filteredMap = FrontAndBackendUtility.getValuesByDotNotation(value, dotNotationString, notFoundValue);
        for (let i = 0; i < filteredMap.length; i++) {
            if (filteredMap.indexOf(filteredMap[i]) !== i) {
                value.splice(i, 1);
                filteredMap.splice(i, 1);
                i--;
            }
        }
        return value;
    }
    static purlPatternToStrings(purlPattern) {
        let purlSplitter = purlPattern.split('{{');
        let returnVal = [];
        for (let i = 0; i < purlSplitter.length; i++) {
            returnVal.push(purlSplitter[i].replace('}}', ''));
        }
        return returnVal;
    }
    static getValueByDotNotation(value, dotNotationString, notFoundValue) {
        let splitters = dotNotationString.split(".");
        splitters.forEach((splitter) => {
            if (splitter.length === 1 && !isNaN(parseInt(splitter, 10))) {
                if (value !== undefined && value !== null && value[parseInt(splitter, 10)] !== undefined) {
                    value = value[splitter];
                }
                else {
                    value = notFoundValue;
                }
            }
            else {
                if (value !== undefined && value !== null && value.hasOwnProperty(splitter)) {
                    value = value[splitter];
                }
                else {
                    value = notFoundValue;
                }
            }
        });
        return value;
    }
    static getValuesByDotNotation(values, dotNotationString, notFoundValue) {
        values = values.slice(0);
        for (let i = 0; i < values.length; i++) {
            values[i] = this.getValueByDotNotation(values[i], dotNotationString, notFoundValue);
        }
        return values;
    }
    static isDateAsString(val) {
        if (val !== null && val !== undefined && val !== false && val !== true) {
            if (val.split('-').length == 3) {
                if (val.substr(val.length - 1, 1) == 'Z' && val.indexOf('T') > -1 && !isNaN(parseInt(val.substr(0, 4)))) {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }
    static getArrayOfRandomStringifiedNumbers(lengthOfArray) {
        let length = FrontAndBackendUtility.lengthToMaximumNumber(lengthOfArray);
        let returnArray = [];
        for (let i = 0; i < length; i++) {
            let requiredZeros = lengthOfArray - i.toString().length;
            returnArray.push(FrontAndBackendUtility.returnAmountOfZeros(requiredZeros) + i);
        }
        return returnArray;
    }
    static returnAmountOfZeros(length) {
        let returnString = '';
        for (let i = 0; i < length; i++) {
            returnString += '0';
        }
        return returnString;
    }
    static ucfirst(string) {
        if (string && string.length) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
    static generateStringifiedNumberOfLength(length) {
        let returnStr = '';
        for (let i = 0; i < length; i++) {
            returnStr += Math.floor(Math.random() * 10).toString();
        }
        return returnStr;
    }
    static getRandomBasedOnArrayLength(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }
    static lengthToMaximumNumber(length) {
        let number = 0;
        for (let i = 0; i < length; i++) {
            if (i == 0) {
                number = 10;
            }
            else {
                number = number * 10;
            }
        }
        return number;
    }
}
FrontAndBackendUtility.danngerousMimeTypes = [
    'application/x-msdownload',
    'application/x-msdos-program',
    'application/x-msdos-windows',
    'application/x-download',
    'application/bat',
    'application/x-bat',
    'application/com',
    'application/x-com',
    'application/exe',
    'application/x-exe',
    'application/x-winexe',
    'application/x-winhlp',
    'application/x-winhelp',
    'application/x-javascript',
    'application/hta',
    'application/x-ms-shortcut',
    'application/octet-stream',
    'vms/exe'
];
exports.FrontAndBackendUtility = FrontAndBackendUtility;
//# sourceMappingURL=FrontAndBackendUtility.js.map