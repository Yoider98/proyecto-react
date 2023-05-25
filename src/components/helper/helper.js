import { isUndefined } from "util";
import Cookies from "universal-cookie" 
import axios from "axios";

const cookies = new Cookies();

export function calcularExtraccionSesion() {
    const now = new Date().getTime;
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession(){
    return isUndefined(cookies.get("_s")) ? false :cookies.get("_s");
}
function renovarSesion() {
    const sesion =getSession();
    if(!sesion) window.location.href="/login";
    cookies.set("_s",sesion, {
        path: "/",
        expires: calcularExtraccionSesion(),
    });
    return sesion;
}
export const request = {
    get: function(url){
        renovarSesion ();
        return axios.get(url);
    }
}