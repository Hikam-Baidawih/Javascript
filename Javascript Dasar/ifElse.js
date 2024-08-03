var tes = 1;
var angkotBeroperasi = 6;
var jmlhAngkot = 10;

// for (tes; tes <= jmlhAngkot; tes++) {
    
//     if (tes <= angkotBeroperasi) {
        
//         console.log('Angkot No. ' + tes + ' beroperasi dengan baik');
//     } else {
//         console.log('Angkot No. ' + tes + ' tidak dapat beroperasi');
//     }
    
// }

for (tes; tes <= jmlhAngkot; tes++) {
    
    if (tes <= angkotBeroperasi && tes === 5 || tes === 8 || tes === 10) {
        console.log('Angkot No. ' + tes + ' sedang lembur');

    } else if ( tes <= angkotBeroperasi){
         console.log("Angkot No. " + tes + " beroperasi dengan baik");

    } else {
        console.log('Angkot No. ' + tes + ' tidak dapat beroperasi');
    }
    
}