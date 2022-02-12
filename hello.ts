interface Activity {
    title: string,
    participants: number,
    type: Type
}

enum Type {
    educational,
    social,
    cooking, 
    relaxation,
    recreational
}
document.addEventListener('DOMContentLoaded', init, false);

function init() {
    fun(Type.social);
    document.getElementById(Type[Type.educational])?.addEventListener("click", () => {
        fun(Type.educational)
    });
    document.getElementById(Type[Type.social])?.addEventListener("click", () => {
        fun(Type.social)
    });
    document.getElementById(Type[Type.cooking])?.addEventListener("click", () => {
        fun(Type.cooking)
    });
    document.getElementById(Type[Type.relaxation])?.addEventListener("click", () => {
        fun(Type.relaxation)
    });
    document.getElementById(Type[Type.recreational])?.addEventListener("click", () => {
        fun(Type.recreational)
    });
};

async function getActivity(type: Type): Promise<JSON> {
    const url = new URL('http://www.boredapi.com/api/activity?type='+Type[type]);
    const response = await fetch( url.toString() );
    return await response.json();
};

async function fun(type: Type) {
    const obj = await getActivity( type );
    console.log(obj)
    let act: Activity = {
        title: obj["activity"],
        participants: obj["participants"],
        type: obj["type"] as Type
    }
    console.log(act.participants);
    console.log(act.title);
    console.log(act.type);
    setupTitle(act);
};

function setupTitle(activity: Activity) {
    document.getElementById("title").innerHTML = activity.title;
}

console.log("meow");