function rock()
{   
  document.getElementById("img").style.background= " url('https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover";
  let a= Math.floor(Math.random()*3)
  console.log(a)
  if(a==0)
  {
    document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover";
    document.getElementById("result").innerHTML = "you lose"
    document.getElementById("result").style.color= "red"
    
    
  }
  else if(a==1)
{
    document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=600')center/cover";
    document.getElementById("result").innerHTML = "you win"
    document.getElementById("result").style.color= "green"


      
}
else if(a==2)
{
  document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover";
  document.getElementById("result").innerHTML = "match draw"
  document.getElementById("result").style.color= "white"


}
  
}
function paper()
{
  document.getElementById("img").style.background= " url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover";
  let a= Math.floor(Math.random()*3)
  console.log(a)
  if(a==0)
  {
    document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover";
    document.getElementById("result").innerHTML = "match draw"
    document.getElementById("result").style.color= "white"


    

  }
  else if(a==1)
{
    document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=600')center/cover";
    document.getElementById("result").innerHTML = "you lose"
    document.getElementById("result").style.color= "red"



}
else if(a==2)
{
  document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover";
  document.getElementById("result").innerHTML = "you win"
  document.getElementById("result").style.color= "green"


    
}
}
function scissor()
{
  document.getElementById("img").style.background= " url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=600')center/cover";
  let a= Math.floor(Math.random()*3)
  console.log(a)
  if(a==0)
  {
    document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover";
    document.getElementById("result").innerHTML = "you win"
    document.getElementById("result").style.color= "green"



  }
  else if(a==1)
{
    document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=600')center/cover";
    document.getElementById("result").innerHTML = "match draw"
    document.getElementById("result").style.color= "white"


    
    
}
else if(a==2)
{
  document.getElementById("img2").style.background= " url('https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover";
  document.getElementById("result").innerHTML = "you lose"
  document.getElementById("result").style.color= "red"


    
}
}

