# Flying-mikasa-preloading-animation
This is a preloading animation made by me using HTML, CSS and JavaScript.

If you watch anime you could somewhat relate to what I made. She is Mikasa Ackerman from AOT flying across your screen with her omni-directional mobility gear, splitting your screen when your website loads.

## Usage
To use these preloader, simply download the zip file or copy the HTML and CSS and paste them into your project. If you want you could optimise the code further and modify it according to your requirements

## Working
I have used JavaScript in the following way to implement the animation.

```JavaScript
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
```

## Preview
https://user-images.githubusercontent.com/80671044/222396963-fd65e6de-6adc-481f-a830-9b65b24f665a.mp4
