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
    Type[Type["educational"] = 0] = "educational";
    Type[Type["social"] = 1] = "social";
    Type[Type["cooking"] = 2] = "cooking";
    Type[Type["relaxation"] = 3] = "relaxation";
    Type[Type["recreational"] = 4] = "recreational";
})(Type || (Type = {}));
document.addEventListener('DOMContentLoaded', init, false);
function init() {
    var _a, _b, _c, _d, _e;
    fun(Type.social);
    (_a = document.getElementById(Type[Type.educational])) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        fun(Type.educational);
    });
    (_b = document.getElementById(Type[Type.social])) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        fun(Type.social);
    });
    (_c = document.getElementById(Type[Type.cooking])) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        fun(Type.cooking);
    });
    (_d = document.getElementById(Type[Type.relaxation])) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        fun(Type.relaxation);
    });
    (_e = document.getElementById(Type[Type.recreational])) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
        fun(Type.recreational);
    });
}
;
function getActivity(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL('http://www.boredapi.com/api/activity?type=' + Type[type]);
        const response = yield fetch(url.toString());
        return yield response.json();
    });
}
;
function fun(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const obj = yield getActivity(type);
        console.log(obj);
        let act = {
            title: obj["activity"],
            participants: obj["participants"],
            type: obj["type"]
        };
        console.log(act.participants);
        console.log(act.title);
        console.log(act.type);
        setupTitle(act);
    });
}
;
function setupTitle(activity) {
    document.getElementById("title").innerHTML = activity.title;
}
console.log("meow");
