function display(x)
{
    document.getElementById("screen").value += x
}

function solve()
{
    let equation = document.getElementById("screen").value
   let ans = eval(equation)
   document.getElementById("screen").value = ans
}

function clr()
{
    document.getElementById("screen").value = ''
}