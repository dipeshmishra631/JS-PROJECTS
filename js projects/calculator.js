function display(x)
{
    document.getElementById("screen").value += x

}
function clr()
{
    document.getElementById("screen").value= ''
}
function solution()
{
    let value = document.getElementById("screen").value
    let answer= eval(value)
    document.getElementById("screen").value=answer
}
