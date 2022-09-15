function to_dark_theme()
{  
    var body_theme = document.querySelector("body")
    body_theme.setAttribute("class", "text-bg-dark")
    var button = document.querySelector("#change")
    button.innerText = "toggle_on"
    button.setAttribute("onclick", "to_light_theme()")
}

function to_light_theme()
{  
    var body_theme = document.querySelector("body")
    body_theme.setAttribute("class", "text-bg-light")
    var button = document.querySelector("#change")
    button.innerText = "toggle_off"
    button.setAttribute("onclick", "to_dark_theme()")
}

function go_to_movie()
{
    var go_to_movie = confirm("Đến Phần Movie Ngay Bây Giờ ? Ấn OK để đi ngay bây giờ, ấn Cancle để ở lại phần Home.")
}