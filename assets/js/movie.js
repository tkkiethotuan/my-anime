function to_dark_theme()
{  
    var body_theme = document.querySelector("body")
    body_theme.setAttribute("class", "text-bg-dark")
    var button = document.querySelector("#change")
    button.innerText = "Light Theme"
    button.setAttribute("onclick", "to_light_theme()")
}

function to_light_theme()
{  
    var body_theme = document.querySelector("body")
    body_theme.setAttribute("class", "text-bg-light")
    var button = document.querySelector("#change")
    button.innerText = "Dark Theme"
    button.setAttribute("onclick", "to_dark_theme()")
}