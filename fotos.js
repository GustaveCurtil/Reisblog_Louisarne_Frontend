let kolommen = document.querySelectorAll(".kolom");
let fotos = document.querySelectorAll(".fotos > img")
let kolom1 = kolommen[0];
let kolom2 = kolommen[1];
let kolom3 = kolommen[2];
let kolom1hoogte = 0;
let kolom2hoogte = 0;
let kolom3hoogte = 0;
console.log(fotos)

// fotos.forEach(foto => {
    
// });

console.log(percentageToPixels(window, 2.5));

fotos.forEach(foto => {
    if (kolom1hoogte <= kolom2hoogte && kolom1hoogte <= kolom3hoogte) {
        kolom1.appendChild(foto);  
        kolom1hoogte += foto.clientHeight + percentageToPixels(window, 2.5);
    } else if (kolom2hoogte <= kolom3hoogte) {
        kolom2.appendChild(foto);  
        kolom2hoogte += foto.clientHeight + percentageToPixels(window, 2.5) ;
    } else {
        kolom3.appendChild(foto);
        kolom3hoogte += foto.clientHeight + percentageToPixels(window, 2.5) ;  
    }
});

function percentageToPixels(container, percent) {
    return (container.innerWidth * percent) / 100;
}