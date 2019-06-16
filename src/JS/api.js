import axios from 'axios';

export const serverLink = 'http://localhost:4200/';

export function GET(path, auth) {
	if (auth) {
		return axios({
			method: "GET",
			url: "http://localhost:4200/" + path,
			headers: {
				Authorization: localStorage.getItem("jwt")
			}
		});
	} else {
		return axios.get('http://localhost:4200/' + path)
	}
}

export function POST(path, auth, headers, data){
    if (auth) {
		return axios({
			method: "POST",
			url: "http://localhost:4200/" + path,
            headers: {
                Authorization: localStorage.getItem("jwt")
            },
            data: data
		});
	} else {
		return axios.post('http://localhost:4200/' + path)
	}
}

export function RM_SESION() {
	localStorage.setItem("IsLogged", false);
	localStorage.setItem("jwt", "");
	localStorage.setItem("UsrID", "");
	localStorage.setItem("UsrName", "");
	localStorage.setItem("UsrLastName", "");
	localStorage.setItem("UsrProfile", false);
	return "Sesion eliminada";
}

export function ADD_SESION(token) {
  localStorage.setItem("jwt", token);
  localStorage.setItem("IsLogged", true);
  GET("/users/463", true).then( (res)=> {
    localStorage.setItem("UsrID", res.data.id);
    localStorage.setItem("UsrName", res.data.nombre);
    localStorage.setItem("UsrLastName", res.data.primerApellido);
	});
	return "Sesion creada"
}