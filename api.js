const getfitch= async ()=>{
    const response= await fetch('https://api.unsplash.com/photos/?client_id=sH_IkvyqWfTfFAnwb-FxnGQU4oEVSp9y3kDWhR_rzps');
    const data = await response.json();
    data.map((item)=>{
        let element=document.createElement('img');
        element.src=`${item.urls.raw + "&w=200&dpr=3"}`;
        let txt=document.createElement('p');
        txt.innerHTML=` user name is ${item.user.username}<br> name is ${item.user.name}<br> 
        user bio : ${item.user.bio} <br> total likes : ${item.user.total_likes}`;
        let div=document.querySelector('.box-img');
        
        div.appendChild(element);
        div.appendChild(txt);
        

    });
    
};
getfitch();



