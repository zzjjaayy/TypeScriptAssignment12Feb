var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Type;
(function (Type) {
    Type[Type["education"] = 0] = "education";
    Type[Type["social"] = 1] = "social";
    Type[Type["cooking"] = 2] = "cooking";
    Type[Type["relaxation"] = 3] = "relaxation";
    Type[Type["recreational"] = 4] = "recreational";
})(Type || (Type = {}));
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    getNewActivity(Type.social);
    for (let i = 0; i < 5; i++) {
        (_a = document.getElementById(Type[i])) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            getNewActivity(Type[Type[i]]);
        });
    }
}, false);
function fetchActivity(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL('http://www.boredapi.com/api/activity?type=' + Type[type]);
        const response = yield fetch(url.toString());
        return yield response.json();
    });
}
;
function getNewActivity(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const obj = yield fetchActivity(type);
        let act = {
            title: obj["activity"],
            participants: obj["participants"],
            type: obj["type"]
        };
        setupTitle(act);
    });
}
;
function setupTitle(activity) {
    document.getElementById("title").innerHTML = "\"" + activity.title + "\"";
}
console.log("meow");
