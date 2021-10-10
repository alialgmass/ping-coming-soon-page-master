let button=document.querySelector(".Notify"),
inp=document.querySelector(".input"),
erorr=document.querySelector(".erorr");
let place="your email address";

button.addEventListener("click",()=>{
   let value=inp.value;

   let n=0;
   let valid=false;
   for (const element of value) {
     
         
      
  
     
      if(element=='@' && n==0){
         n+=1;
         
      }
     else if(n==1 && element=='@'){
        valid=false;
     }
      else if(element==='.'&& n==1){
         n+=1;
         valid=true;
      }

   };
  if(inp.value===""){
     erorr.innerHTML="Whoops! It looks like you forgot to add your email";
  }
  else if (valid) {
   erorr.innerHTML="";
  } 
  else{
     erorr.innerHTML="Please provide a valid email address";
  }
})
inp.onfocus=function(){
   inp.placeholder="";
}
inp.onblur=function(){
   inp.placeholder=place;
}