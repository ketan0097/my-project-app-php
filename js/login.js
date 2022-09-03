function log()
{
    var unm=document.getElementById("unm").value;
    var pwd=document.getElementById("pwd").value;
    if(unm=='RJ123' && pwd=='rj$$321')
    {
      alert('You are Logged In Successfully')
      window.location='TopsDashboard.html';
    }
    else 
    {
        
      alert('Your Username and password are Incorrect try again')
      window.location='index.html';

    }
}


// logout here

function lg()
{
    if(confirm('Are You sure to Logout ?'))
    {
        alert('You sre successfully logout')
        window.location='index.html';

    }

    else 
    {
        window.location='TopsDashboard.html';
    }
}