interface Activity {
    title: string,
    participants: number,
    type: Type
}

enum Type {
    education,
    social,
    cooking, 
    relaxation,
    recreational
}

document.addEventListener('DOMContentLoaded', () => {
    getNewActivity(Type.social);
    for(let i = 0; i < 5; i++) {
        document.getElementById(Type[i])?.addEventListener("click", () => {
            getNewActivity(Type[Type[i]])
        });
    }
}, false);

async function fetchActivity(type: Type): Promise<JSON> {
    const url = new URL('http://www.boredapi.com/api/activity?type='+Type[type]);
    const response = await fetch( url.toString() );
    return await response.json();
};

async function getNewActivity(type: Type) {
    const obj = await fetchActivity(type);
    let act: Activity = {
        title: obj["activity"],
        participants: obj["participants"],
        type: obj["type"] as Type
    }
    setupTitle(act);
};

function setupTitle(activity: Activity) {
    document.getElementById("title").innerHTML = "\"" + activity.title + "\"";
}

console.log("meow");