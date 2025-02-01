function changebg() {
    let r=Math.trunc(Math.random()*256);
    let g=Math.trunc(Math.random()*256);
    let b=Math.trunc(Math.random()*256);

    let body=document.querySelector('body');
    bodybg.style.cssText = `backgroundColor: rgb(${r},${g},${b})`;
    
}