let root =document.getElementById("root");

function p1(){
    return new Promise((res,rej)=>{

        let condition=true;
    if(condition==true){
        setTimeout(()=>{
            let data={data:"Hey!"}
            res(data);
        },10000)
    }
    else{
        rej("failure")
    }
    })


}
let btn=document.getElementById("btn");
btn.addEventListener("click",Clickme);



function Clickme(){
    let loader=document.createElement("p");
    let i=9;
    let id=setInterval(() => {
     loader.innerText=i;
i--;
    },1000);
    // loader.innerText="loader";
    root.append(loader);
    p1().then((res)=>{
    // loader.remove();
    loader.innerText=res.data;
    clearInterval(id);
    console.log(res)
    })
}
