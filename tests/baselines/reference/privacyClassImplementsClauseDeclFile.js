//// [tests/cases/compiler/privacyClassImplementsClauseDeclFile.ts] ////

//// [privacyClassImplementsClauseDeclFile_externalModule.ts]
export module publicModule {
    export interface publicInterfaceInPublicModule {
    }

    interface privateInterfaceInPublicModule {
    }

    class privateClassImplementingPublicInterfaceInModule implements publicInterfaceInPublicModule {
    }
    class privateClassImplementingPrivateInterfaceInModule implements privateInterfaceInPublicModule {
    }
    export class publicClassImplementingPublicInterfaceInModule implements publicInterfaceInPublicModule {
    }
    export class publicClassImplementingPrivateInterfaceInModule implements privateInterfaceInPublicModule { // Should error
    }

    class privateClassImplementingFromPrivateModuleInterface implements privateModule.publicInterfaceInPrivateModule {
    }
    export class publicClassImplementingFromPrivateModuleInterface implements privateModule.publicInterfaceInPrivateModule { // Should error
    }

    export class publicClassImplementingPrivateAndPublicInterface implements privateInterfaceInPublicModule, publicInterfaceInPublicModule { // Should error
    }
}

module privateModule {
    export interface publicInterfaceInPrivateModule {

    }

    interface privateInterfaceInPrivateModule {
    }

    class privateClassImplementingPublicInterfaceInModule implements publicInterfaceInPrivateModule {
    }
    class privateClassImplementingPrivateInterfaceInModule implements privateInterfaceInPrivateModule {
    }
    export class publicClassImplementingPublicInterfaceInModule implements publicInterfaceInPrivateModule {
    }
    export class publicClassImplementingPrivateInterfaceInModule implements privateInterfaceInPrivateModule { 
    }

    class privateClassImplementingFromPrivateModuleInterface implements privateModule.publicInterfaceInPrivateModule {
    }
    export class publicClassImplementingFromPrivateModuleInterface implements privateModule.publicInterfaceInPrivateModule {
    }
}

export interface publicInterface {

}

interface privateInterface {
}

class privateClassImplementingPublicInterface implements publicInterface {
}
class privateClassImplementingPrivateInterfaceInModule implements privateInterface {
}
export class publicClassImplementingPublicInterface implements publicInterface {
}
export class publicClassImplementingPrivateInterface implements privateInterface { // Should error
}

class privateClassImplementingFromPrivateModuleInterface implements privateModule.publicInterfaceInPrivateModule {
}
export class publicClassImplementingFromPrivateModuleInterface implements privateModule.publicInterfaceInPrivateModule { // Should error
}

//// [privacyClassImplementsClauseDeclFile_GlobalFile.ts]
module publicModuleInGlobal {
    export interface publicInterfaceInPublicModule {
    }

    interface privateInterfaceInPublicModule {
    }

    class privateClassImplementingPublicInterfaceInModule implements publicInterfaceInPublicModule {
    }
    class privateClassImplementingPrivateInterfaceInModule implements privateInterfaceInPublicModule {
    }
    export class publicClassImplementingPublicInterfaceInModule implements publicInterfaceInPublicModule {
    }
    export class publicClassImplementingPrivateInterfaceInModule implements privateInterfaceInPublicModule { // Should error
    }
}
interface publicInterfaceInGlobal {
}
class publicClassImplementingPublicInterfaceInGlobal implements publicInterfaceInGlobal {
}


//// [privacyClassImplementsClauseDeclFile_externalModule.js]
"use strict";
exports.__esModule = true;
var publicModule;
(function (publicModule) {
    var privateClassImplementingPublicInterfaceInModule = /** @class */ (function () {
        function privateClassImplementingPublicInterfaceInModule() {
        }
        return privateClassImplementingPublicInterfaceInModule;
    }());
    var privateClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
        function privateClassImplementingPrivateInterfaceInModule() {
        }
        return privateClassImplementingPrivateInterfaceInModule;
    }());
    var publicClassImplementingPublicInterfaceInModule = /** @class */ (function () {
        function publicClassImplementingPublicInterfaceInModule() {
        }
        return publicClassImplementingPublicInterfaceInModule;
    }());
    publicModule.publicClassImplementingPublicInterfaceInModule = publicClassImplementingPublicInterfaceInModule;
    var publicClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
        function publicClassImplementingPrivateInterfaceInModule() {
        }
        return publicClassImplementingPrivateInterfaceInModule;
    }());
    publicModule.publicClassImplementingPrivateInterfaceInModule = publicClassImplementingPrivateInterfaceInModule;
    var privateClassImplementingFromPrivateModuleInterface = /** @class */ (function () {
        function privateClassImplementingFromPrivateModuleInterface() {
        }
        return privateClassImplementingFromPrivateModuleInterface;
    }());
    var publicClassImplementingFromPrivateModuleInterface = /** @class */ (function () {
        function publicClassImplementingFromPrivateModuleInterface() {
        }
        return publicClassImplementingFromPrivateModuleInterface;
    }());
    publicModule.publicClassImplementingFromPrivateModuleInterface = publicClassImplementingFromPrivateModuleInterface;
    var publicClassImplementingPrivateAndPublicInterface = /** @class */ (function () {
        function publicClassImplementingPrivateAndPublicInterface() {
        }
        return publicClassImplementingPrivateAndPublicInterface;
    }());
    publicModule.publicClassImplementingPrivateAndPublicInterface = publicClassImplementingPrivateAndPublicInterface;
})(publicModule = exports.publicModule || (exports.publicModule = {}));
var privateModule;
(function (privateModule) {
    var privateClassImplementingPublicInterfaceInModule = /** @class */ (function () {
        function privateClassImplementingPublicInterfaceInModule() {
        }
        return privateClassImplementingPublicInterfaceInModule;
    }());
    var privateClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
        function privateClassImplementingPrivateInterfaceInModule() {
        }
        return privateClassImplementingPrivateInterfaceInModule;
    }());
    var publicClassImplementingPublicInterfaceInModule = /** @class */ (function () {
        function publicClassImplementingPublicInterfaceInModule() {
        }
        return publicClassImplementingPublicInterfaceInModule;
    }());
    privateModule.publicClassImplementingPublicInterfaceInModule = publicClassImplementingPublicInterfaceInModule;
    var publicClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
        function publicClassImplementingPrivateInterfaceInModule() {
        }
        return publicClassImplementingPrivateInterfaceInModule;
    }());
    privateModule.publicClassImplementingPrivateInterfaceInModule = publicClassImplementingPrivateInterfaceInModule;
    var privateClassImplementingFromPrivateModuleInterface = /** @class */ (function () {
        function privateClassImplementingFromPrivateModuleInterface() {
        }
        return privateClassImplementingFromPrivateModuleInterface;
    }());
    var publicClassImplementingFromPrivateModuleInterface = /** @class */ (function () {
        function publicClassImplementingFromPrivateModuleInterface() {
        }
        return publicClassImplementingFromPrivateModuleInterface;
    }());
    privateModule.publicClassImplementingFromPrivateModuleInterface = publicClassImplementingFromPrivateModuleInterface;
})(privateModule || (privateModule = {}));
var privateClassImplementingPublicInterface = /** @class */ (function () {
    function privateClassImplementingPublicInterface() {
    }
    return privateClassImplementingPublicInterface;
}());
var privateClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
    function privateClassImplementingPrivateInterfaceInModule() {
    }
    return privateClassImplementingPrivateInterfaceInModule;
}());
var publicClassImplementingPublicInterface = /** @class */ (function () {
    function publicClassImplementingPublicInterface() {
    }
    return publicClassImplementingPublicInterface;
}());
exports.publicClassImplementingPublicInterface = publicClassImplementingPublicInterface;
var publicClassImplementingPrivateInterface = /** @class */ (function () {
    function publicClassImplementingPrivateInterface() {
    }
    return publicClassImplementingPrivateInterface;
}());
exports.publicClassImplementingPrivateInterface = publicClassImplementingPrivateInterface;
var privateClassImplementingFromPrivateModuleInterface = /** @class */ (function () {
    function privateClassImplementingFromPrivateModuleInterface() {
    }
    return privateClassImplementingFromPrivateModuleInterface;
}());
var publicClassImplementingFromPrivateModuleInterface = /** @class */ (function () {
    function publicClassImplementingFromPrivateModuleInterface() {
    }
    return publicClassImplementingFromPrivateModuleInterface;
}());
exports.publicClassImplementingFromPrivateModuleInterface = publicClassImplementingFromPrivateModuleInterface;
//// [privacyClassImplementsClauseDeclFile_GlobalFile.js]
var publicModuleInGlobal;
(function (publicModuleInGlobal) {
    var privateClassImplementingPublicInterfaceInModule = /** @class */ (function () {
        function privateClassImplementingPublicInterfaceInModule() {
        }
        return privateClassImplementingPublicInterfaceInModule;
    }());
    var privateClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
        function privateClassImplementingPrivateInterfaceInModule() {
        }
        return privateClassImplementingPrivateInterfaceInModule;
    }());
    var publicClassImplementingPublicInterfaceInModule = /** @class */ (function () {
        function publicClassImplementingPublicInterfaceInModule() {
        }
        return publicClassImplementingPublicInterfaceInModule;
    }());
    publicModuleInGlobal.publicClassImplementingPublicInterfaceInModule = publicClassImplementingPublicInterfaceInModule;
    var publicClassImplementingPrivateInterfaceInModule = /** @class */ (function () {
        function publicClassImplementingPrivateInterfaceInModule() {
        }
        return publicClassImplementingPrivateInterfaceInModule;
    }());
    publicModuleInGlobal.publicClassImplementingPrivateInterfaceInModule = publicClassImplementingPrivateInterfaceInModule;
})(publicModuleInGlobal || (publicModuleInGlobal = {}));
var publicClassImplementingPublicInterfaceInGlobal = /** @class */ (function () {
    function publicClassImplementingPublicInterfaceInGlobal() {
    }
    return publicClassImplementingPublicInterfaceInGlobal;
}());
