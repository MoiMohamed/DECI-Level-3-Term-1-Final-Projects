var chosen_theme = "default";

function validate_login()
{
    let name = document.forms["login-form"]["name"].value;
    let age = document.forms["login-form"]["age"].value;
    let favourite_theme = document.forms["login-form"]["fav-theme"].value;

    if(name.length < 3)
    {
        alert("Name should be at least 2 charachters");
        return false;
    }
    else if((age <= 0 || age > 120))
    {
        alert("Age should be positive and less than 120");
        return false;
    }
    else if(favourite_theme == "Favourite Theme")
    {
        alert("Please select Favourite Theme");
        return false;
    }
    else 
    {
        document.getElementsByClassName("login-box")[0].style.display = "none";
        document.getElementsByClassName("kidCalc-box")[0].style.display = "flex";
        document.getElementById("info-name").innerHTML = "Welcome " + name + "!";
        

        chosen_theme = favourite_theme;
        chooseTheme(favourite_theme);  
    }
}

var num1 = -1;
var num2 = -1;
var num3 = -1;

function number_pad(num)
{
    if(num1 == -1)
    {
        num1 = num;
        document.getElementById("inp-box-1").innerHTML = num;
        
    }
    else if(num2 == -1)
    {
        num2 = num;
        document.getElementById("inp-box-2").innerHTML = num;
    }
}


var oper1 = "";
var oper2 = "";

function choose_operation(val)
{

    var bgColor = "";
    var bgColorOnClicked = "";

    if(chosen_theme == "default")
    {
        bgColor = "#500AA9";
        bgColorOnClicked = "#261936";
    }
    else if (chosen_theme == "space")
    {
        bgColor = "#EBFFF7";
        bgColorOnClicked = "#878787";
    }
    else if (chosen_theme == "tom")
    {
        bgColor = "#A49393";
        bgColorOnClicked = "#595151";
    }
    else if(chosen_theme == "bears")
    {
        bgColor = "#E4B7A0";
        bgColorOnClicked = "#7E685D";
    }

    document.getElementById("plus").style.backgroundColor = bgColor;
    document.getElementById("minus").style.backgroundColor = bgColor;
    document.getElementById("equal").style.backgroundColor = bgColor;
    document.getElementById("less").style.backgroundColor = bgColor;
    document.getElementById("greater").style.backgroundColor = bgColor;
    
    if(val == ">" || val == "<")
    {
        oper1=val;
        oper2="";
        
        

        if(val == ">")
        {
            document.getElementById("greater").style.backgroundColor = bgColorOnClicked;
            
        }
        else if(val == "<")
        {
            document.getElementById("less").style.backgroundColor = bgColorOnClicked;
        }
    }
    else if(val == "=")
    {
        oper2 = "=";

        document.getElementById("equal").style.backgroundColor = bgColorOnClicked;

        if(oper1 == "+")
        {
            document.getElementById("plus").style.backgroundColor = bgColorOnClicked;
        }
        else if(oper1 == "-")
        {
            document.getElementById("minus").style.backgroundColor = bgColorOnClicked;
        }   
        else oper1 = "";
    }
    else if(val == "+" || val == "-")
    {
        if(oper2 == "=")
        {
            document.getElementById("equal").style.backgroundColor = bgColorOnClicked;
        }

        if(val == "+")
        {
            oper1 = "+";
            document.getElementById("plus").style.backgroundColor = bgColorOnClicked;
        }   
        else if(val == "-")
        {
            oper1 = "-";
            document.getElementById("minus").style.backgroundColor = bgColorOnClicked;
        }
    }

    
}

function clear_inp()
{
    num1 = -1;
    num2 = -1;
    num3 = -1;
    oper1 = "";
    oper2 = "";
    document.getElementById("inp-box-1").innerHTML = " ";
    document.getElementById("inp-box-2").innerHTML = " ";
    document.getElementsByClassName("ans-box")[0].value = "";
    
    var bgColor = "";

    if(chosen_theme == "default")
    {
        bgColor = "#500AA9";
    }
    else if (chosen_theme == "space")
    {
        bgColor = "#EBFFF7";
    }
    else if (chosen_theme == "tom")
    {
        bgColor = "#A49393";
    }
    else if(chosen_theme == "bears")
    {
        bgColor = "#E4B7A0";
    }

    document.getElementById("plus").style.backgroundColor = bgColor;
    document.getElementById("minus").style.backgroundColor = bgColor;
    document.getElementById("equal").style.backgroundColor = bgColor;
    document.getElementById("less").style.backgroundColor = bgColor;
    document.getElementById("greater").style.backgroundColor = bgColor;
}

var score = 0;
function check()
{

    num3 = document.getElementsByClassName("ans-box")[0].value;
    
    if(num3 == "" && oper2 == "=")
        num3 = "N/A";

    if( num1 != -1 && num2 != -1 && num3 != "N/A")
    {
        
        if(oper1 == ">")
        {
            if(num1 > num2) 
            {
                document.getElementById("great-job").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("great-job").style.display = "none";
                }
                ,2000);
                
                score += 1;
                document.getElementById("info-score").innerHTML = "Solved Problems: " + score;
                clear_inp();
            }
            else 
            {
                document.getElementById("try").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("try").style.display = "none";
                }
                ,2000);
                clear_inp();
            }

        
        }
        else if(oper1 == "<")
        {
            if(num1 < num2)
            {
                document.getElementById("great-job").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("great-job").style.display = "none";
                }
                ,2000);

                score += 1;
                document.getElementById("info-score").innerHTML = "Solved Problems: " + score;
                clear_inp();
            }
            else 
            {
                document.getElementById("try").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("try").style.display = "none";
                }
                ,2000);
                clear_inp();
            }
        }
        else if(oper1 == "-" && oper2 == "=" )
        {
            if(num1 - num2 == num3)
            {
                document.getElementById("great-job").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("great-job").style.display = "none";
                }
                ,2000);

                score += 1;
                document.getElementById("info-score").innerHTML = "Solved Problems: " + score;
                clear_inp();
            }
            else 
            {
                document.getElementById("try").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("try").style.display = "none";
                }
                ,2000);
                clear_inp();
            }
        }
        else if(oper1 == "+" && oper2 == "=")
        {
            if(num1 + num2 == num3)
            {
                document.getElementById("great-job").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("great-job").style.display = "none";
                }
                ,2000);

                score += 1;
                document.getElementById("info-score").innerHTML = "Solved Problems: " + score;
                clear_inp();
            }
            else 
            {
                document.getElementById("try").style.display = "block";

                setTimeout(()=> {
                    document.getElementById("try").style.display = "none";
                }
                ,2000);
                clear_inp();
            }
        }
        else 
        {
            alert("Choose numbers / Operands");
        }
        
    }
    else 
    {
        alert("Choose numbers / Operands");
    }
    
    
}


function chooseTheme(theme)
{

    if(theme === "default")
    {
        document.getElementById("header-img1").src = "./static/images/default1.png";
        document.getElementById("header-img2").src = "./static/images/default2.png";
    }
    else if(theme === "space")
    {
        document.getElementById("header-img1").src = "./static/images/space1.png";
        document.getElementById("header-img2").src = "./static/images/space2.png";
    }
    else if(theme === "tom")
    {
        document.getElementById("header-img1").src = "./static/images/tom1.png";
        document.getElementById("header-img2").src = "./static/images/tom2.png";
    }
    else if(theme === "bears")
    {
        document.getElementById("header-img1").src = "./static/images/bears1.png";
        document.getElementById("header-img2").src = "./static/images/bears2.png";
    }

    chosen_theme = theme;
    theme = "./static/css/" + theme + ".css";
    document.getElementById("css-theme").setAttribute("href", theme);

    clear_inp();
}