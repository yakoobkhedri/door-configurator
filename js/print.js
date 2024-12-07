$(document).ready(function () {
    // updateWidthHeight()
    $('#printButton').click(function () {
        $('#leftPanel').hide()
        $('#printButton').hide()
        $('#saveToDashboard').hide()
        // if(window.innerWidth<1024){
        //     $('#features').css('marginTop','-300px')
        // }
        html2canvas(document.getElementById("noPrint"), {
            height:1400,
			width:1400,
            scale: 1
        }).then(function (canvas) {
            $('#printTop').html(canvas);
            console.log(canvas)

            if ($('#Namee').val()) {
                $('#printNamee').html($('#Namee').val())
            } else {
                $('#printNamee').parent().remove()
            }

            if ($('#w').val()) {
                $('#printW').html($('#w').val())
            } else {
                $('#printW').parent().remove()
            }

            if ($('#ww').val()) {
                $('#printWw').html($('#ww').val())
            } else {
                $('#printWw').parent().remove()
            }

            if ($('#www').val()) {
                $('#printWww').html($('#www').val())
            } else {
                $('#printWww').parent().remove()
            }

            if ($('#wwww').val()) {
                $('#printWwww').html($('#wwww').val())
            } else {
                $('#printWwww').parent().remove()
            }

            if ($('#wwwww').val()) {
                $('#printWwwww').html($('#wwwww').val())
            } else {
                $('#printWwwww').parent().remove()
            }

            if ($('#h').val()) {
                $('#printH').html($('#h').val())
            } else {
                $('#printH').parent().remove()
            }

			            if ($('#hhh').val()) {
                $('#printHhh').html($('#hhh').val())
            } else {
                $('#printHhh').parent().remove()
            }

            if ($('#dinRichtung').val()) {
                $('#printDinRichtung').html($('#dinRichtung').val())
            } else {
                $('#printDinRichtung').parent().remove()
            }

            if ($('#GoM').val()) {
                $('#printGoM').html($('#GoM').val())
            } else {
                $('#printGoM').parent().remove()
            }

            if ($('#isth').val()) {
                $('#printIsth').html($('#isth').val())
            } else {
                $('#printIsth').parent().remove()
            }
			

            // if ($('#lien1').is(':checked')) {
                // $('#printLineOne').html('yes')
            // } else {
                // $('#printLineOne').parent().remove()
            // }

            // if ($('#lien2').is(':checked')) {
                // $('#printLineTwo').html('yes')
            // } else {
                // $('#printLineTwo').parent().remove()
            // }

            // if ($('#lien4').is(':checked')) {
                // $('#printLineFour').html('yes')
            // } else {
                // $('#printLineFour').parent().remove()
            // }

            // if ($('#lien5').is(':checked')) {
                // $('#printLineFive').html('yes')
            // } else {
                // $('#printLineFive').parent().remove()
            // }

            $('#printSchlossGriffauswahl').html($('#schlossAuswahlLabel').html())
            $('#printFarbe').html($('#metallfarbeLabel').html())
            $('#printGlasart').html($('#glasartLabel').html())

            window.print()
            $('#leftPanel').show()
            $('#printButton').show()
            $('#saveToDashboard').show()
            // $('#features').css('marginTop','0')
        });
    })

    $('.height-input').change(function(){
        updateWidthHeight()
    })

    $('.width-input').change(function(){
        updateWidthHeight()
    })
})





