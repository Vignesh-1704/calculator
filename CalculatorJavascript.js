let outputScreen = document.getElementById("output-screen");

function display(num)
{
    outputScreen.value += num;
}

function Clear()
{
    outputScreen.value = "";
}

function Calculate()
{
    try
    {
        outputScreen.value = eval(outputScreen.value);
    }
    catch
    {
        alert("Invalid");
    }
}

function Delete()
{
    outputScreen.value = outputScreen.value.slice(0,-1);
}
