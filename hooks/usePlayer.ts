import router from "next/router";

// custom hook to retrieve player name from local storage and if not there route to /login

const getFromStorage = (key: string) => {
    if(typeof window !== 'undefined'){
         window.localStorage.getItem(key)
    }
    else {
        return "";
    }
}

export const usePlayer = () => {

    const player = getFromStorage("player");
    if (!player) {
        router.push("/login");
    }
    return player;
    }