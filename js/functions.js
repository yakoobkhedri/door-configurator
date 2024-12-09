let bildersOption = {};
function changeSize() {
  let size_www = parseInt(document.getElementById("www").value);
  let size_w = parseInt(document.getElementById("w").value);
  let size_FL = parseInt(document.getElementById("ww").value);
  let size_FR = parseInt(document.getElementById("wwww").value);
  var size_h = parseInt(document.getElementById("h").value);
  var size_FH = parseInt(document.getElementById("hhh").value);
  let size_ww = parseInt(document.getElementById("GUM").value);
  var size_hh = parseInt(document.getElementById("GoM").value);
  var size_hhh = parseInt(document.getElementById("isth").value);

  size_h = size_h / 18;
  size_FH = size_FH / 18;

  size_w = size_w / 15;
  size_www = size_www / 15;

  size_FL = size_FL / 15;
  size_FR = size_FR / 15;

  size_hh = size_hh / 20;
  size_ww = size_ww / 10;
  size_hhh = size_hhh / 2;
  size_www = size_www = -3;

  size_FL = 40;
  size_FR = 0;
  size_h = size_FH;
  size_FH = size_h + 23;
  //Wand

  GlasFront.style.width = size_w + "mm";
  GlasFront.style.height = size_h + "mm";

  GlasRight.style.height = GlasFront.style.height;

  GlasLeft.style.height = GlasFront.style.height;

  size_terst = size_w / 5;

  if (size_hhh > 400) {
    //size_hh = size_hh/20;
    size_hhh = size_hhh / 1.3;
  } else {
  }
}

//Glas_Color
function chengbild(
  event,
  linss,
  linsss,
  linssss,
  Color,
  schado,
  border,
  label
) {
  //alert(Color)
  console.log(event.target.src);
  $("#Glasartee").attr("src", event.target.src);

  document.getElementById("Glass").style.background =
    "linear-gradient(90deg, rgba(255,255,255,.13) 1%, transparent " +
    linss +
    "%) 0px 0,linear-gradient(90deg, rgba(255,255,255,.13) 1%, transparent " +
    linsss +
    "%) 20px 0,linear-gradient(90deg, rgba(255,255,255,.13) 1%, transparent " +
    linssss +
    "%) -20px 0," +
    "rgba(" +
    Color +
    ")";
  document.getElementById("Glass").style.backgroundSize = " 16px 48px";
  document.getElementById("Glass").style.boxShadow =
    " 0 8px 32px 0 rgba(" + schado + ")";
  document.getElementById("Glass").style.borderColor = "rgba(" + border + ")";

  document.getElementById("glasartLabel").innerText = label;
}

//Glas_design color
function chengDesignColor(event, name, color) {
  //alert(design)
  $("#GlasdesignColor").attr("src", event.target.src);
  document.getElementById("glasartDesignColorLabel").innerText = name;

  let svgs = Array.from(document.querySelectorAll("#design use"));

  svgs.forEach((svg) => {
    svg.querySelectorAll(".cls-1").forEach((item) => {
      // item.style.fill = color;
      console.log(svg);
    });
  });
}

//Metall_Color
function chengbilder(
  event,
  Colorr,
  label,
  Verriegelung_PZ_RAL1015_Hellelfenbein
) {
  $("#MetallFarbee").attr("src", event.target.src);
  //console.log(Verriegelung_PZ_RAL1015_Hellelfenbein.target.src)
  bildersOption = arguments;

  document.getElementById("metallfarbeLabel").innerText = label;
  document.getElementById("GlasFront").style.borderColor =
    "rgba(" + Colorr + ")";
  document.querySelectorAll(".lola").forEach((items) => {
    items.querySelectorAll("path").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
    items.querySelectorAll("polygon").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
    items.querySelectorAll("rect").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
  });
  document.querySelectorAll("#dastgire").forEach((items) => {
    items.querySelectorAll("path").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
    items.querySelectorAll("polygon").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
    items.querySelectorAll("rect").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
    items.querySelectorAll("circle").forEach((pathes) => {
      pathes.style.fill = "rgba(" + Colorr + ")";
    });
  });
}

/* function updateWidthHeight(){
                       $('#widthSum').html(Number($('#w').val())+Number($('#ww').val())+Number($('#www').val())+Number($('#wwww').val()))
                       $('#heightSum').html(Number($('#hhh').val()))
                   } */

function updateWidthHeight() {
  const widthSum = Number($("#w").val());
  $("#heightSum").html(Number($("#hhh").val()));
  if (widthSum === Number($("#wwwww").val())) {
    $("#widthSum").html(widthSum);
    $("#errorBox").hide();
    $("#errorBox").text();
  } else {
    $("#widthSum").html(widthSum);

    $("#errorBox").show();
    $("#errorBox").text(
      "Bei Änderung eines einzelnen Elementes, muss die Gesamtbreite, oder die Breite der anderen Elemente, so angepasst werden, dass die Summe aller Elemente der Gesamtbreite entspicht."
    );

    // Swal.fire({
    // title: 'Achtung!',
    // text: 'Bei Änderung eines einzelnen Elementes, muss die Gesamtbreite, oder die Breite der anderen Elemente, so angepasst werden, dass die Summe aller Elemente der Gesamtbreite entspicht.',
    // icon: 'error',
    // confirmButtonText: 'Ok'
    // })
  }
}

$("#ww").change(function () {
  aktuliezengalsmass();
});
$("#w").change(function () {
  aktuliezengalsmass();
});
$("#www").change(function () {
  aktuliezengalsmass();
});
$("#wwww").change(function () {
  aktuliezengalsmass();
});

function aktuliezengalsmass() {
  $("#widthGlaslinkss").html($("#ww").val());
  $("#widthtürlinkss").html($("#w").val());
  $("#widthtürrechtss").html($("#www").val());
  $("#widthGlasrechtss").html($("#wwww").val());
}

// $('#hhh').change(function(){
// aktuliezengalsmasss()
// })
// function aktuliezengalsmasss()
// {
// $("#heightSum").html($("#hhh").val());
// }

//gesamtbreit atomatic anpassung

$("#wwwwwB").change(function () {
  var wwwwwB = $("#wwwwwB").val();
  var wwwww = $("#wwwww").val();

  var ggggf = Number(wwwwwB) - 8;

  $("#wwwww").val(ggggf);

  //f alert(ggggf)

  gesamtbreit();
  // changeSize()
  aktuliezengalsmass();
});

function gesamtbreit() {
  // $("#w").val(900)
  // $("#www").val(900)
  var w = $("#w").val();
  var ww = $("#ww").val();
  var www = $("#www").val();
  var wwww = $("#wwww").val();
  var wwwww = $("#wwwww").val();

  /* 	 console.log(w)
                            console.log(www)
                            console.log(wwwww) */

  var türr = Number(w);
  var festteilll = Number(wwwww);
  var einzel = festteilll;

  $("#w").val(festteilll);
  $("#wwww").val(einzel);
}

$("#wwwww").change(function () {
  gesamtbreit();
  // changeSize()
  aktuliezengalsmass();
});

//gesamthöhe atomatic anpassung

$("#hhh").change(function () {
  //$("#h").val(2000)
  // changeSize()
});

$("#Whhh").change(function () {
  var Whhh = $("#Whhh").val();

  //$("#h").val(2000)

  var ggggff = Number(Whhh) - 4;
  //alert(ggggff)

  $("#hhh").val(ggggff);

  changeSize();
});

//show heidn Feld

$("#drpC").on("change", function (event) {
  //console.log(event.type + " event with:", $(this).val());

  const value = $(this).val();
  //alert(value)
  if (value === "Wandoffnung") {
    $("#wwwwwBB").show();
    $("#Whhhh").show();
    $("#wwwwwH").hide();
    $("#hhhF").hide();
  } else {
    $("#wwwwwBB").hide();
    $("#Whhhh").hide();
    $("#wwwwwH").show();
    $("#hhhF").show();
  }
});

$(window).on("resize", function () {
  checkScreen();
});

$(document).ready(function () {
  checkScreen();
});

function checkScreen() {
  setTimeout(function () {
    const highlightedItems = document.querySelectorAll("meta");

    highlightedItems.forEach((userItem) => {
      userItem.remove();
    });

    if (window.screen.width <= 991) {
      $("head").append('<meta name="viewport" content="width=1780"/>');
    } else if (window.screen.width >= 992) {
      $("head").append(
        '<meta name="viewport" content="width=device-width,initial-scale=1.0"/>'
      );
    }
    if (
      window.screen.width < window.screen.height &&
      window.innerWidth < window.innerHeight
    )
      $("#rotateImage").css("display", "block");
    else $("#rotateImage").css("display", "none");
  }, 100);
}

// document.getElementById("right").value = 900;
// document.getElementById("left").value = 1500;
document.getElementById("wwwww").value = 900;
document.getElementById("hhh").value = 1584;
// document.getElementById("right2").value = 900;
changeSize();


// upload design img

document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const img = document.getElementById('img');
    const fileNameElement = document.getElementById('fileName');
    // const restoreButton = document.getElementById('restoreButton');

    if (file) {
      fileNameElement.textContent = `${file.name}`;
        const reader = new FileReader();
        
        reader.onload = function (e) {
            // Set the new image
            img.src = e.target.result;
            img.style.display = 'block';
        };
        
        reader.readAsDataURL(file);
    } else {
      fileNameElement.textContent = 'No file selected';
        // If no file is selected, hide the image and restore button
        img.src = '';
        img.style.display = 'none';
        // restoreButton.style.display = 'none';
    }
});


// design color modal

function openModal(event ,title) {
  document.getElementById('Glasdesign').src = event.target.src;
  let colors = [
    [
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Blackline.png' ,colorTitle:'cubus-1-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-DarkGrey.png' ,colorTitle:'cubus-1-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Etch.png' ,colorTitle:'cubus-1-Etch' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Extraweiss.png' ,colorTitle:'cubus-1-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-FlaecheDarkGrey.png' ,colorTitle:'cubus-1-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-FlaecheEtch.png' ,colorTitle:'cubus-1-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-FlaecheExtraweiss.png' ,colorTitle:'cubus-1-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-FlaecheFloatGrey.png' ,colorTitle:'cubus-1-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-FloatGrey.png' ,colorTitle:'cubus-1-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Graphit.png' ,colorTitle:'cubus-1-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Maron.png' ,colorTitle:'cubus-1-Maron' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-MotivMaMaufEtch.png' ,colorTitle:'cubus-1-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-1-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Quarz.png' ,colorTitle:'cubus-1-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Schilf.png' ,colorTitle:'cubus-1-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-1/cubus-1-Whiteline.png' ,colorTitle:'cubus-1-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Blackline.png' ,colorTitle:'cubus-2-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-DarkGrey.png' ,colorTitle:'cubus-2-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Etch.png' ,colorTitle:'cubus-2-Etch' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Extraweiss.png' ,colorTitle:'cubus-2-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-FlaecheDarkGrey.png' ,colorTitle:'cubus-2-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-FlaecheEtch.png' ,colorTitle:'cubus-2-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-FlaecheExtraweiss.png' ,colorTitle:'cubus-2-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-FlaecheFloatGrey.png' ,colorTitle:'cubus-2-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-FloatGrey.png' ,colorTitle:'cubus-2-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Graphit.png' ,colorTitle:'cubus-2-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Maron.png' ,colorTitle:'cubus-2-Maron' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-MotivMaMaufEtch.png' ,colorTitle:'cubus-2-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-2-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Quarz.png' ,colorTitle:'cubus-2-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Schilf.png' ,colorTitle:'cubus-2-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-2/cubus-2-Whiteline.png' ,colorTitle:'cubus-2-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Blackline.png' ,colorTitle:'cubus-3-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-DarkGrey.png' ,colorTitle:'cubus-3-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Etch.png' ,colorTitle:'cubus-3-Etch' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Extraweiss.png' ,colorTitle:'cubus-3-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-FlaecheDarkGrey.png' ,colorTitle:'cubus-3-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-FlaecheEtch.png' ,colorTitle:'cubus-3-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-FlaecheExtraweiss.png' ,colorTitle:'cubus-3-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-FlaecheFloatGrey.png' ,colorTitle:'cubus-3-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-FloatGrey.png' ,colorTitle:'cubus-3-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Graphit.png' ,colorTitle:'cubus-3-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Maron.png' ,colorTitle:'cubus-3-Maron' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-MotivMaMaufEtch.png' ,colorTitle:'cubus-3-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-3-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Quarz.png' ,colorTitle:'cubus-3-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Schilf.png' ,colorTitle:'cubus-3-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-3/cubus-3-Whiteline.png' ,colorTitle:'cubus-3-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Blackline.png' ,colorTitle:'cubus-4-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-DarkGrey.png' ,colorTitle:'cubus-4-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Etch.png' ,colorTitle:'cubus-4-Etch' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Extraweiss.png' ,colorTitle:'cubus-4-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-FlaecheDarkGrey.png' ,colorTitle:'cubus-4-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-FlaecheEtch.png' ,colorTitle:'cubus-4-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-FlaecheExtraweiss.png' ,colorTitle:'cubus-4-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-FlaecheFloatGrey.png' ,colorTitle:'cubus-4-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-FloatGrey.png' ,colorTitle:'cubus-4-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Graphit.png' ,colorTitle:'cubus-4-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Maron.png' ,colorTitle:'cubus-4-Maron' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-MotivMaMaufEtch.png' ,colorTitle:'cubus-4-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-4-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Quarz.png' ,colorTitle:'cubus-4-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Schilf.png' ,colorTitle:'cubus-4-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-4/cubus-4-Whiteline.png' ,colorTitle:'cubus-4-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Blackline.png' ,colorTitle:'cubus-5-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-DarkGrey.png' ,colorTitle:'cubus-5-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Etch.png' ,colorTitle:'cubus-5-Etch' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Extraweiss.png' ,colorTitle:'cubus-5-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-FlaecheDarkGrey.png' ,colorTitle:'cubus-5-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-FlaecheEtch.png' ,colorTitle:'cubus-5-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-FlaecheExtraweiss.png' ,colorTitle:'cubus-5-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-FlaecheFloatGrey.png' ,colorTitle:'cubus-5-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-FloatGrey.png' ,colorTitle:'cubus-5-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Graphit.png' ,colorTitle:'cubus-5-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Maron.png' ,colorTitle:'cubus-5-Maron' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-MotivMaMaufEtch.png' ,colorTitle:'cubus-5-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-5-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Quarz.png' ,colorTitle:'cubus-5-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Schilf.png' ,colorTitle:'cubus-5-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-5/cubus-5-Whiteline.png' ,colorTitle:'cubus-5-Whiteline' },
    ],
    [],
    [],
    [
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Blackline.png' ,colorTitle:'cubus-8-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-DarkGrey.png' ,colorTitle:'cubus-8-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Etch.png' ,colorTitle:'cubus-8-Etch' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Extraweiss.png' ,colorTitle:'cubus-8-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-FlaecheDarkGrey.png' ,colorTitle:'cubus-8-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-FlaecheEtch.png' ,colorTitle:'cubus-8-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-FlaecheExtraweiss.png' ,colorTitle:'cubus-8-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-FlaecheFloatGrey.png' ,colorTitle:'cubus-8-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-FloatGrey.png' ,colorTitle:'cubus-8-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Graphit.png' ,colorTitle:'cubus-8-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Maron.png' ,colorTitle:'cubus-8-Maron' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-MotivMaMaufEtch.png' ,colorTitle:'cubus-8-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-8-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Quarz.png' ,colorTitle:'cubus-8-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Schilf.png' ,colorTitle:'cubus-8-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-8/cubus-8-Whiteline.png' ,colorTitle:'cubus-8-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Blackline.png' ,colorTitle:'cubus-9-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-DarkGrey.png' ,colorTitle:'cubus-9-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Etch.png' ,colorTitle:'cubus-9-Etch' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Extraweiss.png' ,colorTitle:'cubus-9-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-FlaecheDarkGrey.png' ,colorTitle:'cubus-9-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-FlaecheEtch.png' ,colorTitle:'cubus-9-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-FlaecheExtraweiss.png' ,colorTitle:'cubus-9-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-FlaecheFloatGrey.png' ,colorTitle:'cubus-9-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-FloatGrey.png' ,colorTitle:'cubus-9-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Graphit.png' ,colorTitle:'cubus-9-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Maron.png' ,colorTitle:'cubus-9-Maron' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-MotivMaMaufEtch.png' ,colorTitle:'cubus-9-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-9-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Quarz.png' ,colorTitle:'cubus-9-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Schilf.png' ,colorTitle:'cubus-9-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-9/cubus-9-Whiteline.png' ,colorTitle:'cubus-9-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Blackline.png' ,colorTitle:'cubus-10-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-DarkGrey.png' ,colorTitle:'cubus-10-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Etch.png' ,colorTitle:'cubus-10-Etch' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Extraweiss.png' ,colorTitle:'cubus-10-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-FlaecheDarkGrey.png' ,colorTitle:'cubus-10-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-FlaecheEtch.png' ,colorTitle:'cubus-10-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-FlaecheExtraweiss.png' ,colorTitle:'cubus-10-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-FlaecheFloatGrey.png' ,colorTitle:'cubus-10-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-FloatGrey.png' ,colorTitle:'cubus-10-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Graphit.png' ,colorTitle:'cubus-10-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Maron.png' ,colorTitle:'cubus-10-Maron' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-MotivMaMaufEtch.png' ,colorTitle:'cubus-10-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-10-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Quarz.png' ,colorTitle:'cubus-10-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Schilf.png' ,colorTitle:'cubus-10-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-10/cubus-10-Whiteline.png' ,colorTitle:'cubus-10-Whiteline' },
    ],
    [],
    [
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Blackline.png' ,colorTitle:'cubus-12-Blackline' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-DarkGrey.png' ,colorTitle:'cubus-12-DarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Etch.png' ,colorTitle:'cubus-12-Etch' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Extraweiss.png' ,colorTitle:'cubus-12-Extraweiss' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-FlaecheDarkGrey.png' ,colorTitle:'cubus-12-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-FlaecheEtch.png' ,colorTitle:'cubus-12-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-FlaecheExtraweiss.png' ,colorTitle:'cubus-12-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-FlaecheFloatGrey.png' ,colorTitle:'cubus-12-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-FloatGrey.png' ,colorTitle:'cubus-12-FloatGrey' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Graphit.png' ,colorTitle:'cubus-12-Graphit' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Maron.png' ,colorTitle:'cubus-12-Maron' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-MotivMaMaufEtch.png' ,colorTitle:'cubus-12-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-MotivMaMaufExtraweiss.png' ,colorTitle:'cubus-12-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Quarz.png' ,colorTitle:'cubus-12-Quarz' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Schilf.png' ,colorTitle:'cubus-12-Schilf' },
      {imgUrl:'img/GlassDesign/cubus-12/cubus-12-Whiteline.png' ,colorTitle:'cubus-12-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/Cuts/cutes-Blackline.png' ,colorTitle:'cutes-Blackline' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-DarkGrey.png' ,colorTitle:'cutes-DarkGrey' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Etch.png' ,colorTitle:'cutes-Etch' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Extraweiss.png' ,colorTitle:'cutes-Extraweiss' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-FloatGrey.png' ,colorTitle:'cutes-FloatGrey' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Graphit.png' ,colorTitle:'cutes-Graphit' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Maron.png' ,colorTitle:'cutes-Maron' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Quarz.png' ,colorTitle:'cutes-Quarz' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Schilf.png' ,colorTitle:'cutes-Schilf' },
      {imgUrl:'img/GlassDesign/Cuts/cutes-Whiteline.png' ,colorTitle:'cutes-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/Curves/curves-DarkGrey.png' ,colorTitle:'curves-DarkGrey' },
      {imgUrl:'img/GlassDesign/Curves/curves-Etch.png' ,colorTitle:'curves-Etch' },
      {imgUrl:'img/GlassDesign/Curves/curves-Extraweiss.png' ,colorTitle:'curves-Extraweiss' },
      {imgUrl:'img/GlassDesign/Curves/curves-FlaecheDarkGrey.png' ,colorTitle:'curves-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Curves/curves-FlaecheEtch.png' ,colorTitle:'curves-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Curves/curves-FlaecheExtraweiss.png' ,colorTitle:'curves-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Curves/curves-FlaecheFloatGrey.png' ,colorTitle:'curves-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Curves/curves-FloatGrey.png' ,colorTitle:'curves-FloatGrey' },
      {imgUrl:'img/GlassDesign/Curves/curves-MotivMaMaufEtch.png' ,colorTitle:'curves-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Curves/curves-MotivMaMaufExtraweiss.png' ,colorTitle:'curves-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-DarkGrey.png' ,colorTitle:'curves-2-DarkGrey' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-Etch.png' ,colorTitle:'curves-2-Etch' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-Extraweiss.png' ,colorTitle:'curves-2-Extraweiss' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-FlaecheDarkGrey.png' ,colorTitle:'curves-2-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-FlaecheEtch.png' ,colorTitle:'curves-2-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-FlaecheExtraweiss.png' ,colorTitle:'curves-2-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-FlaecheFloatGrey.png' ,colorTitle:'curves-2-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-FloatGrey.png' ,colorTitle:'curves-2-FloatGrey' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-MotivMaMaufEtch.png' ,colorTitle:'curves-2-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Curves-2/curves-2-MotivMaMaufExtraweiss.png' ,colorTitle:'curves-2-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/ER-13/ER13-Extraweiss.png' ,colorTitle:'ER-13-Extraweiss' },
      {imgUrl:'img/GlassDesign/ER-13/ER13-FlaecheDarkGrey.png' ,colorTitle:'ER-13-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-13/ER13-FlaecheEtch.png' ,colorTitle:'ER-13-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-13/ER13-FlaecheExtraweiss.png' ,colorTitle:'ER-13-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-13/ER13-FlaecheFloatGrey.png' ,colorTitle:'ER-13-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-13/ER13-Whiteline.png' ,colorTitle:'ER-13-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/ER-14/ER14-DarkGrey.png' ,colorTitle:'ER-14-DarkGrey' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-Etch.png' ,colorTitle:'ER-14-Etch' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-Extraweiss.png' ,colorTitle:'ER-14-Extraweiss' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-FlaecheDarkGrey.png' ,colorTitle:'ER-14-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-FlaecheEtch.png' ,colorTitle:'ER-14-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-FlaecheExtraweiss.png' ,colorTitle:'ER-14-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-FlaecheFloatGrey.png' ,colorTitle:'ER-14-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-FloatGrey.png' ,colorTitle:'ER-14-FloatGrey' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-Grau.png' ,colorTitle:'ER-14-Grau' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-MotivMaMaufEtch.png' ,colorTitle:'ER-14-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-MotivMaMaufExtraweiss.png' ,colorTitle:'ER-14-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-14/ER14-RilleMatt.png' ,colorTitle:'ER-14-RilleMatt' },
    ],
  ]
  document.getElementById('colors').innerHTML ='';
  switch (title) {
    case "cubus-1":
      colors[0].forEach((item)=>{
       document.getElementById('colors').innerHTML +=
       `
        <div onclick="chengDesignColor(event , '${item.colorTitle}')">
            <img id="colorimg" src="${item.imgUrl}" width="101" height="138"
            alt="img" />
            <br><br><label for="ESG_klar">${item.colorTitle}</label>
        </div>
        `
     })
    break;
    case "cubus-2":
      colors[1].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-3":
      colors[2].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-4":
      colors[3].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-5":
      colors[4].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-8":
      colors[7].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-9":
      colors[8].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-10":
      colors[9].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cubus-12":
      colors[11].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "cuts":
      colors[12].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "curves":
      colors[13].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "curves-2":
      colors[14].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "ER13":
      colors[15].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    case "ER14":
      colors[16].forEach((item)=>{
        document.getElementById('colors').innerHTML +=
        `
         <div onclick="chengDesignColor(event , '${item.colorTitle}')">
             <img id="colorimg" src=${item.imgUrl} width="101" height="138"
             alt="img" />
             <br><br><label for="ESG_klar">${item.colorTitle}</label>
         </div>
         `
      })
    break;
    default:
      console.log("Unknown shape!");
  }

  // Select modal elements
  const modalTitle = document.getElementById('globalModalLabel');
  const globalModalBody = document.getElementById('globalModalBody');

  // Update modal content
  modalTitle.textContent = title;
  document.getElementById('glasartDesignLabel').textContent = title;
  // Show the modal
  const globalModal = new bootstrap.Modal(document.getElementById('globalModal'));
  globalModal.show();
}