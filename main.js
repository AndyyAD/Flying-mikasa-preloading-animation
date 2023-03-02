window.addEventListener("load", (e) => {
    document.getElementById('Rope').classList.add('rope-throw');
    setTimeout(()=>{
        document.getElementById('rope-wrap').classList.add('move-mikasa')
    },2000) 
    setTimeout(()=>{
        document.getElementById('c1').classList.add('curtain1');
        document.getElementById('c2').classList.add('curtain2');
    },4000)
    setTimeout(()=>{
        document.getElementById('animate').classList.add('hide');
    },5500)
});