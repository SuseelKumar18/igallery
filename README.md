# Ex.08 Design of Interactive Image Gallery
## Date: 26.12.2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :

gallery.html
```py
<html>
    <head>
        <title>IMAGE GALARY</title>
        <link rel="stylesheet" href="gallery.css">
    </head>
    <body>
        <div class="image">
            <img src="3.avif" id="image1">
            <img src="2.avif" id="image2">
            <img src="1.avif" id="image3">
            <img src="4.avif" id="image4">
            <img src="5.webp" id="image5">
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 align="center">&copy;image gallaryDesigned by:</h1>
        <h2 align="center">G.ELAUMALAI(25016790)</h2>
        <script src="gallery.js"></script>
    </body>
</html>
```
gallery.css
```
*{
    margin:0;
    border:0;
}
body{
    background:linear-gradient(135deg,#000cff,#2a5298,#00c6ff)
}
.image{

    display:grid;
    grid-template-columns:repeat(5,2fr);
}
img{
    position:relative;
    top:200px;
    width: 170px;
    left: 30px;
    height: 200px;
    border:solid 10px rgba(58,135,171,0.83);
    transition:transform 0.3s ease;
    cursor:pointer;   
}
h1,h2{
    position:relative;
    top:400px;
    left:20px;
    font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;
    font-size:35px;
    color:azure;
}

```
gallery.js
```
const img1=document.getElementById("image1");
img1.addEventListener("mouseover",()=>
{
    img1.style.transform="scale(2)"
});
img1.addEventListener("mouseout",()=>
{
    img1.style.transform="scale(1)"
});
const img3=document.getElementById("image3");
img3.addEventListener("mouseover",()=>
{
    img3.style.transform="scale(2)"
});
img3.addEventListener("mouseout",()=>
{
    img3.style.transform="scale(1)"
});
const img4=document.getElementById("image4");
img4.addEventListener("mouseover",()=>
{
    img4.style.transform="scale(2)"
});
img4.addEventListener("mouseout",()=>
{
    img4.style.transform="scale(1)"
});
const img5=document.getElementById("image5");
img5.addEventListener("mouseover",()=>
{
    img5.style.transform="scale(2)"
});
img5.addEventListener("mouseout",()=>
{
    img5.style.transform="scale(1)"
});
const img2=document.getElementById("image2");
img2.addEventListener("mouseover",()=>
{
    img2.style.transform="scale(2)"

});
img2.addEventListener("mouseout",()=>
{
    img2.style.transform="scale(1)"
});
```

## OUTPUT:

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
