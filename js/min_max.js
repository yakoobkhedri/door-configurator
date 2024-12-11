

// Breite Wandöffnung
$(document).ready(function(){
    $('#wwwwwB').on('change',function(){
        var width = $('#wwwwwB').val();
        if(width>=300 && width <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 600mm\nMaximalbreite: 2400mm')
        }
    });
});

// Höhe Wandöffnung
$(document).ready(function(){
    $('#Whhh').on('change',function(){
        var width = $('#Whhh').val();
        if(width>=1200 && width <=3000){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 1200mm\nMaximalhöhe: 3000mm')
        }
    });
});

// Höhe Zargenaußenmaß
$(document).ready(function(){
    $('#hhh').on('change',function(){
        var height = $('#hhh').val();
        if(height>=1200 && height <=3000){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 1200mm\nMaximalhöhe: 3000mm')
        }
    });
});


// Breite Zargenaußenmaß
$(document).ready(function(){
    $('#wwwww').on('change',function(){
        var width = $('#wwwww').val();
        if(width>=300 && width <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 600mm\nMaximalbreite: 2400mm')
        }
    });
});










// Tür Links
$(document).ready(function(){
	
    $('#w').on('change',function(){
        var width = $('#w').val();
        if(width>=500 && width <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 500mm\nMaximalbreite: 1200mm')
        }
    });
});



// Tür Recht
$(document).ready(function(){
    $('#www').on('change',function(){
        var width = $('#www').val();
        if(width>=500 && width <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 500mm\nMaximalbreite: 1200mm')
        }
    });
});


// Festteil Links
$(document).ready(function(){
    $('#ww').on('change',function(){
        var width = $('#ww').val();
        if(width>=300 && width <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 300mm\nMaximalbreite: 1200mm')
        }
    });
});


// Festteil Recht
$(document).ready(function(){
    $('#wwww').on('change',function(){
        var width = $('#wwww').val();
        if(width>=300 && width <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 300mm\nMaximalbreite: 1200mm')
        }
    });
});



// Tür Höhe
$(document).ready(function(){
    $('#h').on('change',function(){
        var height = $('#h').val();
        if(height>=1200 && height <=3000){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 1200mm\nMaximalhöhe: 3000mm')
        }
    });
});






// Länge Griffstange
$(document).ready(function(){
	
    $('#isth').on('change',function(){
        var height = $('#isth').val();
        if(height>=250 && height <=1200){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 250mm\nMaximalhöhe: 1200mm')
        }
    });
});
// Griffsitz UKG (sollte von der länge der Griffstange abhängig sein)
$(document).ready(function(){
    $('#GoM').on('change',function(){
        var height = $('#GoM').val();
			changeSize()
       
    });
});




	
						//scheisse
$(document).ready(function(){
$('#drpC').val('Zargenaußenmaß')
	$('#black').trigger('click')
	$('#GP').trigger('click')
	$('#dinRichtung').val('links')
	$('#isth').val('500')

    $('#GUM').on('change',function(){
        var height = $('#GUM').val();
        if(height>=500 && height <=1350){
            //ok
			changeSize()
        }else{
            alert('Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 500mm\nMaximalhöhe: 1350mm')
        }
    });
});
	