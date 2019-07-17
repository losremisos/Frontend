import axios from 'axios';

export const serverLink = 'http://localhost:4200/';

export function GET(path, auth) {
	if (auth) {
		return axios({
			method: "GET",
			url: serverLink + path,
			headers: {
				Authorization: localStorage.getItem("jwt")
			}
		});
	} else {
		return axios.get(serverLink + path)
	}
}

export function POST(path, auth, headers, data){
    if (auth) {
		return axios({
			method: "POST",
			url: serverLink + path,
            headers: {
                Authorization: localStorage.getItem("jwt")
            },
            data: data
		});
	} else {
		return axios.post(serverLink + path)
	}
}

export function RM_SESION() {
	localStorage.setItem("IsLogged", false);
	localStorage.setItem("jwt", "");
	localStorage.setItem("UsrID", "");
	localStorage.setItem("UsrName", "");
	localStorage.setItem("UsrLastName", "");
	localStorage.setItem("UsrProfile", false);
	localStorage.setItem("admin", false);
	return "Sesion eliminada";
}

export function ADD_SESION(token) {
  localStorage.setItem("jwt", token);
  localStorage.setItem("IsLogged", true);
  GET("/users/current", true).then( (res)=> {
    localStorage.setItem("UsrID", res.data.id);
    localStorage.setItem("UsrName", res.data.nombre);
	localStorage.setItem("UsrLastName", res.data.primerApellido);
	if(res.data.tipoUsuario === 0){
		localStorage.setItem("admin", false);
	}else{
		localStorage.setItem("admin", true);
	}
	});
	return "Sesion creada"
}