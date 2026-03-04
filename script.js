function upDate(previewPic){
    console.log("Mouse over triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    // Change text to alt of previewPic
    imageDiv.innerHTML = previewPic.alt;

    // Change background
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo(){
    console.log("Mouse left image");

    let imageDiv = document.getElementById("image");

    // Reset background
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
