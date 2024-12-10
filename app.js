sessionStorage.setItem("apiURL", "https://pay-me-api-production.up.railway.app/")
if(localStorage.getItem("token")) {
    sessionStorage.setItem("token", localStorage.getItem("token"))
    window.location.href = '/inicio/inicio.html';
}
else
    window.location.href = '/home_page/home_page.html';