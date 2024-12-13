let bildersOption = {};
function changeSize() {
  let size_www = parseInt(document.getElementById("www").value);
  let size_w = parseInt(document.getElementById("wwwww").value);
  let size_FL = parseInt(document.getElementById("ww").value);
  let size_FR = parseInt(document.getElementById("wwww").value);
  // let size_FR2 = parseInt(document.getElementById("wwwww").value);
  var size_h = parseInt(document.getElementById("h").value);
  var size_FH = parseInt(document.getElementById("hhh").value);
  let size_ww = parseInt(document.getElementById("GUM").value);
  var size_hh = parseInt(document.getElementById("GoM").value);
  var size_hhh = parseInt(document.getElementById("isth").value);

  size_h = size_h / 18;
  size_FH = size_FH / 18;

  size_w = size_w / 19;
  size_www = size_www / 19;

  size_FL = size_FL / 19;
  size_FR = size_FR / 19;
  // size_FR2 = size_FR2 / 19;

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
    [
      {imgUrl:'img/GlassDesign/ER-71/ER71-FlaecheDarkGrey.png' ,colorTitle:'ER-71-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-71/ER71-FlaecheEtch.png' ,colorTitle:'ER-71-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-71/ER71-FlaecheExtraweiss.png' ,colorTitle:'ER-71-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-71/ER71-FlaecheFloatGrey.png' ,colorTitle:'ER-71-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-71/ER71-RilleMatt.png' ,colorTitle:'ER-71-RilleMatt' },
      {imgUrl:'img/GlassDesign/ER-71/ER71-Whiteline.png' ,colorTitle:'ER-71-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/ER-71-R/ER71-R-FlaecheDarkGrey.png' ,colorTitle:'ER-71-R-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-71-R/ER71-R-FlaecheEtch.png' ,colorTitle:'ER-71-R-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-71-R/ER71-R-FlaecheExtraweiss.png' ,colorTitle:'ER-71-R-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-71-R/ER71-R-FlaecheFloatGrey.png' ,colorTitle:'ER-71-R-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-71-R/ER71-R-RilleMatt.png' ,colorTitle:'ER-71-R-RilleMatt' },
      {imgUrl:'img/GlassDesign/ER-71-R/ER71-R-Whiteline.png' ,colorTitle:'ER-71-R-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/ER-71-2flg/ER71-2flg-FlaecheDarkGrey.png' ,colorTitle:'ER-71-2flg-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-71-2flg/ER71-2flg-FlaecheEtch.png' ,colorTitle:'ER-71-2flg-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-71-2flg/ER71-2flg-FlaecheExtraweiss.png' ,colorTitle:'ER-71-2flg-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-71-2flg/ER71-2flg-FlaecheFloatGrey.png' ,colorTitle:'ER-71-2flg-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-71-2flg/ER71-2flg-RilleMatt.png' ,colorTitle:'ER-71-2flg-RilleMatt' },
      {imgUrl:'img/GlassDesign/ER-71-2flg/ER71-2flg-Whiteline.png' ,colorTitle:'ER-71-2flg-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/ER-88/ER88-FlaecheDarkGrey.png' ,colorTitle:'ER-88-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-88/ER88-FlaecheEtch.png' ,colorTitle:'ER-88-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-88/ER88-FlaecheExtraweiss.png' ,colorTitle:'ER-88-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-88/ER88-FlaecheFloatGrey.png' ,colorTitle:'ER-88-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-88/ER88-RilleMatt.png' ,colorTitle:'ER-88-RilleMatt' },
      {imgUrl:'img/GlassDesign/ER-88/ER88-Whiteline.png' ,colorTitle:'ER-88-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/ER-88-R/ER88-R-FlaecheDarkGrey.png' ,colorTitle:'ER-88-R-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/ER-88-R/ER88-R-FlaecheEtch.png' ,colorTitle:'ER-88-R-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/ER-88-R/ER88-R-FlaecheExtraweiss.png' ,colorTitle:'ER-88-R-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/ER-88-R/ER88-R-FlaecheFloatGrey.png' ,colorTitle:'ER-88-R-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/ER-88-R/ER88-R-RilleMatt.png' ,colorTitle:'ER-88-R-RilleMatt' },
      {imgUrl:'img/GlassDesign/ER-88-R/ER88-R-Whiteline.png' ,colorTitle:'ER-88-R-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/Abila/Abila-DarkGrey.png' ,colorTitle:'Abila-DarkGrey' },
      {imgUrl:'img/GlassDesign/Abila/Abila-Etch.png' ,colorTitle:'Abila-Etch' },
      {imgUrl:'img/GlassDesign/Abila/Abila-Extraweiss.png' ,colorTitle:'Abila-Extraweiss' },
      {imgUrl:'img/GlassDesign/Abila/Abila-FlaecheDarkGrey.png' ,colorTitle:'Abila-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Abila/Abila-FlaecheEtch.png' ,colorTitle:'Abila-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Abila/Abila-FlaecheExtraweiss.png' ,colorTitle:'Abila-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Abila/Abila-FlaecheFloatGrey.png' ,colorTitle:'Abila-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Abila/Abila-FloatGrey.png' ,colorTitle:'Abila-FloatGrey' },
      {imgUrl:'img/GlassDesign/Abila/Abila-MotivMaMaufEtch.png' ,colorTitle:'Abila-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Abila/Abila-MotivMaMaufExtraweiss.png' ,colorTitle:'Abila-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Aida/Aida-DarkGrey.png' ,colorTitle:'Aida-DarkGrey' },
      {imgUrl:'img/GlassDesign/Aida/Aida-Etch.png' ,colorTitle:'Aida-Etch' },
      {imgUrl:'img/GlassDesign/Aida/Aida-Extraweiss.png' ,colorTitle:'Aida-Extraweiss' },
      {imgUrl:'img/GlassDesign/Aida/Aida-FlaecheDarkGrey.png' ,colorTitle:'Aida-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Aida/Aida-FlaecheEtch.png' ,colorTitle:'Aida-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Aida/Aida-FlaecheExtraweiss.png' ,colorTitle:'Aida-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Aida/Aida-FlaecheFloatGrey.png' ,colorTitle:'Aida-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Aida/Aida-FloatGrey.png' ,colorTitle:'Aida-FloatGrey' },
      {imgUrl:'img/GlassDesign/Aida/Aida-MotivMaMaufEtch.png' ,colorTitle:'Aida-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Aida/Aida-MotivMaMaufExtraweiss.png' ,colorTitle:'Aida-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Amara/Amara-DarkGrey.png' ,colorTitle:'Amara-DarkGrey' },
      {imgUrl:'img/GlassDesign/Amara/Amara-Etch.png' ,colorTitle:'Amara-Etch' },
      {imgUrl:'img/GlassDesign/Amara/Amara-Extraweiss.png' ,colorTitle:'Amara-Extraweiss' },
      {imgUrl:'img/GlassDesign/Amara/Amara-FlaecheDarkGrey.png' ,colorTitle:'Amara-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Amara/Amara-FlaecheEtch.png' ,colorTitle:'Amara-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Amara/Amara-FlaecheExtraweiss.png' ,colorTitle:'Amara-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Amara/Amara-FlaecheFloatGrey.png' ,colorTitle:'Amara-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Amara/Amara-FloatGrey.png' ,colorTitle:'Amara-FloatGrey' },
      {imgUrl:'img/GlassDesign/Amara/Amara-MotivMaMaufEtch.png' ,colorTitle:'Amara-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Amara/Amara-MotivMaMaufExtraweiss.png' ,colorTitle:'Amara-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Atessa/Atessa-DarkGrey.png' ,colorTitle:'Atessa-DarkGrey' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-Etch.png' ,colorTitle:'Atessa-Etch' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-Extraweiss.png' ,colorTitle:'Atessa-Extraweiss' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-FlaecheDarkGrey.png' ,colorTitle:'Atessa-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-FlaecheEtch.png' ,colorTitle:'Atessa-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-FlaecheExtraweiss.png' ,colorTitle:'Atessa-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-FlaecheFloatGrey.png' ,colorTitle:'Atessa-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-FloatGrey.png' ,colorTitle:'Atessa-FloatGrey' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-MotivMaMaufEtch.png' ,colorTitle:'Atessa-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Atessa/Atessa-MotivMaMaufExtraweiss.png' ,colorTitle:'Atessa-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-DarkGrey.png' ,colorTitle:'Bahia-R-DarkGrey' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-Etch.png' ,colorTitle:'Bahia-R-Etch' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-Extraweiss.png' ,colorTitle:'Bahia-R-Extraweiss' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-FlaecheDarkGrey.png' ,colorTitle:'Bahia-R-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-FlaecheEtch.png' ,colorTitle:'Bahia-R-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-FlaecheExtraweiss.png' ,colorTitle:'Bahia-R-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-FlaecheFloatGrey.png' ,colorTitle:'Bahia-R-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-FloatGrey.png' ,colorTitle:'Bahia-R-FloatGrey' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-MotivMaMaufEtch.png' ,colorTitle:'Bahia-R-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Bahia-R/Bahia-R-MotivMaMaufExtraweiss.png' ,colorTitle:'Bahia-R-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Bambu/Bambu-DarkGrey.png' ,colorTitle:'Bambu-DarkGrey' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-Etch.png' ,colorTitle:'Bambu-Etch' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-Extraweiss.png' ,colorTitle:'Bambu-Extraweiss' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-FlaecheDarkGrey.png' ,colorTitle:'Bambu-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-FlaecheEtch.png' ,colorTitle:'Bambu-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-FlaecheExtraweiss.png' ,colorTitle:'Bambu-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-FlaecheFloatGrey.png' ,colorTitle:'Bambu-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-FloatGrey.png' ,colorTitle:'Bambu-FloatGrey' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-MotivMaMaufEtch.png' ,colorTitle:'Bambu-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Bambu/Bambu-MotivMaMaufExtraweiss.png' ,colorTitle:'Bambu-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-DarkGrey.png' ,colorTitle:'Basic-01-DarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-Etch.png' ,colorTitle:'Basic-01-Etch' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-Extraweiss.png' ,colorTitle:'Basic-01-Extraweiss' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-FlaecheDarkGrey.png' ,colorTitle:'Basic-01-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-FlaecheEtch.png' ,colorTitle:'Basic-01-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-FlaecheExtraweiss.png' ,colorTitle:'Basic-01-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-FlaecheFloatGrey.png' ,colorTitle:'Basic-01-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-FloatGrey.png' ,colorTitle:'Basic-01-FloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-MotivMaMaufEtch.png' ,colorTitle:'Basic-01-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Basic-01/Basic-01-MotivMaMaufExtraweiss.png' ,colorTitle:'Basic-01-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-DarkGrey.png' ,colorTitle:'Basic-02-DarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-Etch.png' ,colorTitle:'Basic-02-Etch' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-Extraweiss.png' ,colorTitle:'Basic-02-Extraweiss' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-FlaecheDarkGrey.png' ,colorTitle:'Basic-02-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-FlaecheEtch.png' ,colorTitle:'Basic-02-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-FlaecheExtraweiss.png' ,colorTitle:'Basic-02-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-FlaecheFloatGrey.png' ,colorTitle:'Basic-02-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-FloatGrey.png' ,colorTitle:'Basic-02-FloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-MotivMaMaufEtch.png' ,colorTitle:'Basic-02-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Basic-02/Basic02-MotivMaMaufExtraweiss.png' ,colorTitle:'Basic-02-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-DarkGrey.png' ,colorTitle:'Basic-03-DarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-Etch.png' ,colorTitle:'Basic-03-Etch' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-Extraweiss.png' ,colorTitle:'Basic-03-Extraweiss' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-FlaecheDarkGrey.png' ,colorTitle:'Basic-03-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-FlaecheEtch.png' ,colorTitle:'Basic-03-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-FlaecheExtraweiss.png' ,colorTitle:'Basic-03-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-FlaecheFloatGrey.png' ,colorTitle:'Basic-03-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-FloatGrey.png' ,colorTitle:'Basic-03-FloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-MotivMaMaufEtch.png' ,colorTitle:'Basic-03-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Basic-03/Basic03-MotivMaMaufExtraweiss.png' ,colorTitle:'Basic-03-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-DarkGrey.png' ,colorTitle:'Basic-08-DarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-Etch.png' ,colorTitle:'Basic-08-Etch' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-Extraweiss.png' ,colorTitle:'Basic-08-Extraweiss' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-FlaecheDarkGrey.png' ,colorTitle:'Basic-08-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-FlaecheEtch.png' ,colorTitle:'Basic-08-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-FlaecheExtraweiss.png' ,colorTitle:'Basic-08-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-FlaecheFloatGrey.png' ,colorTitle:'Basic-08-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-FloatGrey.png' ,colorTitle:'Basic-08-FloatGrey' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-MotivMaMaufEtch.png' ,colorTitle:'Basic-08-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Basic-08/Basic08-MotivMaMaufExtraweiss.png' ,colorTitle:'Basic-08-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Fasi/Fasi-DarkGrey.png' ,colorTitle:'Fasi-DarkGrey' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-Etch.png' ,colorTitle:'Fasi-Etch' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-Extraweiss.png' ,colorTitle:'Fasi-Extraweiss' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-FlaecheDarkGrey.png' ,colorTitle:'Fasi-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-FlaecheEtch.png' ,colorTitle:'Fasi-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-FlaecheExtraweiss.png' ,colorTitle:'Fasi-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-FlaecheFloatGrey.png' ,colorTitle:'Fasi-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-FloatGrey.png' ,colorTitle:'Fasi-FloatGrey' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-MotivMaMaufEtch.png' ,colorTitle:'Fasi-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Fasi/Fasi-MotivMaMaufExtraweiss.png' ,colorTitle:'Fasi-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-DarkGrey.png' ,colorTitle:'Cafe-2-DarkGrey' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-Etch.png' ,colorTitle:'Cafe-2-Etch' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-Extraweiss.png' ,colorTitle:'Cafe-2-Extraweiss' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-FlaecheDarkGrey.png' ,colorTitle:'Cafe-2-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-FlaecheEtch.png' ,colorTitle:'Cafe-2-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-FlaecheExtraweiss.png' ,colorTitle:'Cafe-2-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-FlaecheFloatGrey.png' ,colorTitle:'Cafe-2-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-FloatGrey.png' ,colorTitle:'Cafe-2-FloatGrey' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-MotivMaMaufEtch.png' ,colorTitle:'Cafe-2-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Cafe-2/Cafe2-MotivMaMaufExtraweiss.png' ,colorTitle:'Cafe-2-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Carna/Carna-DarkGrey.png' ,colorTitle:'Carna-DarkGrey' },
      {imgUrl:'img/GlassDesign/Carna/Carna-Etch.png' ,colorTitle:'Carna-Etch' },
      {imgUrl:'img/GlassDesign/Carna/Carna-Extraweiss.png' ,colorTitle:'Carna-Extraweiss' },
      {imgUrl:'img/GlassDesign/Carna/Carna-FlaecheDarkGrey.png' ,colorTitle:'Carna-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Carna/Carna-FlaecheEtch.png' ,colorTitle:'Carna-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Carna/Carna-FlaecheExtraweiss.png' ,colorTitle:'Carna-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Carna/Carna-FlaecheFloatGrey.png' ,colorTitle:'Carna-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Carna/Carna-FloatGrey.png' ,colorTitle:'Carna-FloatGrey' },
      {imgUrl:'img/GlassDesign/Carna/Carna-MotivMaMaufEtch.png' ,colorTitle:'Carna-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Carna/Carna-MotivMaMaufExtraweiss.png' ,colorTitle:'Carna-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-DarkGrey.png' ,colorTitle:'Bergamo-DarkGrey' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-Etch.png' ,colorTitle:'Bergamo-Etch' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-Extraweiss.png' ,colorTitle:'Bergamo-Extraweiss' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-FlaecheDarkGrey.png' ,colorTitle:'Bergamo-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-FlaecheEtch.png' ,colorTitle:'Bergamo-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-FlaecheExtraweiss.png' ,colorTitle:'Bergamo-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-FlaecheFloatGrey.png' ,colorTitle:'Bergamo-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-FloatGrey.png' ,colorTitle:'Bergamo-FloatGrey' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-MotivMaMaufEtch.png' ,colorTitle:'Bergamo-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Bergamo/Bergamo-MotivMaMaufExtraweiss.png' ,colorTitle:'Bergamo-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Cinque/Cinque-DarkGrey.png' ,colorTitle:'Cinque-DarkGrey' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-Etch.png' ,colorTitle:'Cinque-Etch' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-Extraweiss.png' ,colorTitle:'Cinque-Extraweiss' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-FlaecheDarkGrey.png' ,colorTitle:'Cinque-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-FlaecheEtch.png' ,colorTitle:'Cinque-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-FlaecheExtraweiss.png' ,colorTitle:'Cinque-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-FlaecheFloatGrey.png' ,colorTitle:'Cinque-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-FloatGrey.png' ,colorTitle:'Cinque-FloatGrey' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-MotivMaMaufEtch.png' ,colorTitle:'Cinque-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Cinque/Cinque-MotivMaMaufExtraweiss.png' ,colorTitle:'Cinque-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Kabira/Kabira-DarkGrey.png' ,colorTitle:'Kabira-DarkGrey' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-Etch.png' ,colorTitle:'Kabira-Etch' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-Extraweiss.png' ,colorTitle:'Kabira-Extraweiss' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-FlaecheDarkGrey.png' ,colorTitle:'Kabira-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-FlaecheEtch.png' ,colorTitle:'Kabira-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-FlaecheExtraweiss.png' ,colorTitle:'Kabira-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-FlaecheFloatGrey.png' ,colorTitle:'Kabira-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-FloatGrey.png' ,colorTitle:'Kabira-FloatGrey' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-MotivMaMaufEtch.png' ,colorTitle:'Kabira-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Kabira/Kabira-MotivMaMaufExtraweiss.png' ,colorTitle:'Kabira-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Cristall/Cristall-DarkGrey.png' ,colorTitle:'Cristall-DarkGrey' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-Etch.png' ,colorTitle:'Cristall-Etch' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-Extraweiss.png' ,colorTitle:'Cristall-Extraweiss' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-FlaecheDarkGrey.png' ,colorTitle:'Cristall-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-FlaecheEtch.png' ,colorTitle:'Cristall-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-FlaecheExtraweiss.png' ,colorTitle:'Cristall-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-FlaecheFloatGrey.png' ,colorTitle:'Cristall-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-FloatGrey.png' ,colorTitle:'Cristall-FloatGrey' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-MotivMaMaufEtch.png' ,colorTitle:'Cristall-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Cristall/Cristall-MotivMaMaufExtraweiss.png' ,colorTitle:'Cristall-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-DarkGrey.png' ,colorTitle:'Bukarest-DarkGrey' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-Etch.png' ,colorTitle:'Bukarest-Etch' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-Extraweiss.png' ,colorTitle:'Bukarest-Extraweiss' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-FlaecheDarkGrey.png' ,colorTitle:'Bukarest-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-FlaecheEtch.png' ,colorTitle:'Bukarest-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-FlaecheExtraweiss.png' ,colorTitle:'Bukarest-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-FlaecheFloatGrey.png' ,colorTitle:'Bukarest-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-FloatGrey.png' ,colorTitle:'Bukarest-FloatGrey' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-MotivMaMaufEtch.png' ,colorTitle:'Bukarest-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Bukarest/Bukarest-MotivMaMaufExtraweiss.png' ,colorTitle:'Bukarest-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-DarkGrey.png' ,colorTitle:'Kiano4-DarkGrey' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-Etch.png' ,colorTitle:'Kiano4-Etch' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-Extraweiss.png' ,colorTitle:'Kiano4-Extraweiss' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-FlaecheDarkGrey.png' ,colorTitle:'Kiano4-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-FlaecheEtch.png' ,colorTitle:'Kiano4-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-FlaecheExtraweiss.png' ,colorTitle:'Kiano4-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-FlaecheFloatGrey.png' ,colorTitle:'Kiano4-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-FloatGrey.png' ,colorTitle:'Kiano4-FloatGrey' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-MotivMaMaufEtch.png' ,colorTitle:'Kiano4-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Kiano4/Kiano4-MotivMaMaufExtraweiss.png' ,colorTitle:'Kiano4-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-DarkGrey.png' ,colorTitle:'Hirsch3-DarkGrey' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-Etch.png' ,colorTitle:'Hirsch3-Etch' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-Extraweiss.png' ,colorTitle:'Hirsch3-Extraweiss' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-FlaecheDarkGrey.png' ,colorTitle:'Hirsch3-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-FlaecheEtch.png' ,colorTitle:'Hirsch3-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-FlaecheExtraweiss.png' ,colorTitle:'Hirsch3-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-FlaecheFloatGrey.png' ,colorTitle:'Hirsch3-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-FloatGrey.png' ,colorTitle:'Hirsch3-FloatGrey' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-MotivMaMaufEtch.png' ,colorTitle:'Hirsch3-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Hirsch-3/Hirsch3-MotivMaMaufExtraweiss.png' ,colorTitle:'Hirsch3-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-DarkGrey.png' ,colorTitle:'Flowers-R-DarkGrey' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-Etch.png' ,colorTitle:'Flowers-R-Etch' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-Extraweiss.png' ,colorTitle:'Flowers-R-Extraweiss' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-FlaecheDarkGrey.png' ,colorTitle:'Flowers-R-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-FlaecheEtch.png' ,colorTitle:'Flowers-R-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-FlaecheExtraweiss.png' ,colorTitle:'Flowers-R-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-FlaecheFloatGrey.png' ,colorTitle:'Flowers-R-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-FloatGrey.png' ,colorTitle:'Flowers-R-FloatGrey' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-MotivMaMaufEtch.png' ,colorTitle:'Flowers-R-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Flowers-R/Flowers-R-MotivMaMaufExtraweiss.png' ,colorTitle:'Flowers-R-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-DarkGrey.png' ,colorTitle:'Fasi-R-DarkGrey' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-Etch.png' ,colorTitle:'Fasi-R-Etch' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-Extraweiss.png' ,colorTitle:'Fasi-R-Extraweiss' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-FlaecheDarkGrey.png' ,colorTitle:'Fasi-R-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-FlaecheEtch.png' ,colorTitle:'Fasi-R-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-FlaecheExtraweiss.png' ,colorTitle:'Fasi-R-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-FlaecheFloatGrey.png' ,colorTitle:'Fasi-R-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-FloatGrey.png' ,colorTitle:'Fasi-R-FloatGrey' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-MotivMaMaufEtch.png' ,colorTitle:'Fasi-R-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Fasi-R/Fasi-R-MotivMaMaufExtraweiss.png' ,colorTitle:'Fasi-R-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-DarkGrey.png' ,colorTitle:'Flowers-5-DarkGrey' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-Etch.png' ,colorTitle:'Flowers-5-Etch' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-Extraweiss.png' ,colorTitle:'Flowers-5-Extraweiss' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-FlaecheDarkGrey.png' ,colorTitle:'Flowers-5-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-FlaecheEtch.png' ,colorTitle:'Flowers-5-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-FlaecheExtraweiss.png' ,colorTitle:'Flowers-5-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-FlaecheFloatGrey.png' ,colorTitle:'Flowers-5-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-FloatGrey.png' ,colorTitle:'Flowers-5-FloatGrey' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-MotivMaMaufEtch.png' ,colorTitle:'Flowers-5-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Flowers-5/Flowers-5-MotivMaMaufExtraweiss.png' ,colorTitle:'Flowers-5-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-DarkGrey.png' ,colorTitle:'Bonito-DarkGrey' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-Etch.png' ,colorTitle:'Bonito-Etch' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-Extraweiss.png' ,colorTitle:'Bonito-Extraweiss' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-FlaecheDarkGrey.png' ,colorTitle:'Bonito-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-FlaecheEtch.png' ,colorTitle:'Bonito-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-FlaecheExtraweiss.png' ,colorTitle:'Bonito-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-FlaecheFloatGrey.png' ,colorTitle:'Bonito-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-FloatGrey.png' ,colorTitle:'Bonito-FloatGrey' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-MotivMaMaufEtch.png' ,colorTitle:'Bonito-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Bonito-kunex/Bonito-MotivMaMaufExtraweiss.png' ,colorTitle:'Bonito-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-DarkGrey.png' ,colorTitle:'Cristall-R-DarkGrey' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-Etch.png' ,colorTitle:'Cristall-R-Etch' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-Extraweiss.png' ,colorTitle:'Cristall-R-Extraweiss' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-FlaecheDarkGrey.png' ,colorTitle:'Cristall-R-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-FlaecheEtch.png' ,colorTitle:'Cristall-R-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-FlaecheExtraweiss.png' ,colorTitle:'Cristall-R-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-FlaecheFloatGrey.png' ,colorTitle:'Cristall-R-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-FloatGrey.png' ,colorTitle:'Cristall-R-FloatGrey' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-MotivMaMaufEtch.png' ,colorTitle:'Cristall-R-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Cristall-R/Cristall-R-MotivMaMaufExtraweiss.png' ,colorTitle:'Cristall-R-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Alba/Alba-Motiv.png' ,colorTitle:'Alba-Motiv' },
    ],
    [
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-DarkGrey.png' ,colorTitle:'Kiano8-DarkGrey' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-Etch.png' ,colorTitle:'Kiano8-Etch' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-Extraweiss.png' ,colorTitle:'Kiano8-Extraweiss' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-FlaecheDarkGrey.png' ,colorTitle:'Kiano8-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-FlaecheEtch.png' ,colorTitle:'Kiano8-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-FlaecheExtraweiss.png' ,colorTitle:'Kiano8-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-FlaecheFloatGrey.png' ,colorTitle:'Kiano8-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-FloatGrey.png' ,colorTitle:'Kiano8-FloatGrey' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-MotivMaMaufEtch.png' ,colorTitle:'Kiano8-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Kiano-8/Kiano8-MotivMaMaufExtraweiss.png' ,colorTitle:'Kiano8-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-DarkGrey.png' ,colorTitle:'Vertigo-DarkGrey' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-Etch.png' ,colorTitle:'Vertigo-Etch' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-Extraweiss.png' ,colorTitle:'Vertigo-Extraweiss' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-FlaecheDarkGrey.png' ,colorTitle:'Vertigo-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-FlaecheEtch.png' ,colorTitle:'Vertigo-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-FlaecheExtraweiss.png' ,colorTitle:'Vertigo-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-FlaecheFloatGrey.png' ,colorTitle:'Vertigo-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-FloatGrey.png' ,colorTitle:'Vertigo-FloatGrey' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-MotivMaMaufEtch.png' ,colorTitle:'Vertigo-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Vertigo/Vertigo-MotivMaMaufExtraweiss.png' ,colorTitle:'Vertigo-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-DarkGrey.png' ,colorTitle:'Umlaufender-DarkGrey' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-Etch.png' ,colorTitle:'Umlaufender-Etch' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-Extraweiss.png' ,colorTitle:'Umlaufender-Extraweiss' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-FlaecheDarkGrey.png' ,colorTitle:'Umlaufender-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-FlaecheEtch.png' ,colorTitle:'Umlaufender-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-FlaecheExtraweiss.png' ,colorTitle:'Umlaufender-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-FlaecheFloatGrey.png' ,colorTitle:'Umlaufender-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-FloatGrey.png' ,colorTitle:'Umlaufender-FloatGrey' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-MotivMaMaufEtch.png' ,colorTitle:'Umlaufender-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Umlaufender/Umlaufender-MotivMaMaufExtraweiss.png' ,colorTitle:'Umlaufender-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-DarkGrey.png' ,colorTitle:'Ufficio-DarkGrey' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-Etch.png' ,colorTitle:'Ufficio-Etch' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-Extraweiss.png' ,colorTitle:'Ufficio-Extraweiss' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-FlaecheDarkGrey.png' ,colorTitle:'Ufficio-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-FlaecheEtch.png' ,colorTitle:'Ufficio-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-FlaecheExtraweiss.png' ,colorTitle:'Ufficio-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-FlaecheFloatGrey.png' ,colorTitle:'Ufficio-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-FloatGrey.png' ,colorTitle:'Ufficio-FloatGrey' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-MotivMaMaufEtch.png' ,colorTitle:'Ufficio-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Ufficio/Ufficio-MotivMaMaufExtraweiss.png' ,colorTitle:'Ufficio-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/travesano/travesanoDIN.png' ,colorTitle:'travesanoDIN' },
    ],
    [
      {imgUrl:'img/GlassDesign/Tiana/Tiana.png' ,colorTitle:'Tiana' },
    ],
    [
      {imgUrl:'img/GlassDesign/Thema/Thema-DarkGrey.png' ,colorTitle:'Thema-DarkGrey' },
      {imgUrl:'img/GlassDesign/Thema/Thema-Etch.png' ,colorTitle:'Thema-Etch' },
      {imgUrl:'img/GlassDesign/Thema/Thema-Extraweiss.png' ,colorTitle:'Thema-Extraweiss' },
      {imgUrl:'img/GlassDesign/Thema/Thema-FlaecheDarkGrey.png' ,colorTitle:'Thema-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Thema/Thema-FlaecheEtch.png' ,colorTitle:'Thema-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Thema/Thema-FlaecheExtraweiss.png' ,colorTitle:'Thema-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Thema/Thema-FlaecheFloatGrey.png' ,colorTitle:'Thema-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Thema/Thema-FloatGrey.png' ,colorTitle:'Thema-FloatGrey' },
      {imgUrl:'img/GlassDesign/Thema/Thema-MotivMaMaufEtch.png' ,colorTitle:'Thema-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Thema/Thema-MotivMaMaufExtraweiss.png' ,colorTitle:'Thema-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Termoli/Termoli-DarkGrey.png' ,colorTitle:'Termoli-DarkGrey' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-Etch.png' ,colorTitle:'Termoli-Etch' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-Extraweiss.png' ,colorTitle:'Termoli-Extraweiss' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-FlaecheDarkGrey.png' ,colorTitle:'Termoli-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-FlaecheEtch.png' ,colorTitle:'Termoli-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-FlaecheExtraweiss.png' ,colorTitle:'Termoli-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-FlaecheFloatGrey.png' ,colorTitle:'Termoli-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-FloatGrey.png' ,colorTitle:'Termoli-FloatGrey' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-MotivMaMaufEtch.png' ,colorTitle:'Termoli-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Termoli/Termoli-MotivMaMaufExtraweiss.png' ,colorTitle:'Termoli-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Stilo/Stilo-DarkGrey.png' ,colorTitle:'Stilo-DarkGrey' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-Etch.png' ,colorTitle:'Stilo-Etch' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-Extraweiss.png' ,colorTitle:'Stilo-Extraweiss' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-FlaecheDarkGrey.png' ,colorTitle:'Stilo-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-FlaecheEtch.png' ,colorTitle:'Stilo-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-FlaecheExtraweiss.png' ,colorTitle:'Stilo-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-FlaecheFloatGrey.png' ,colorTitle:'Stilo-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-FloatGrey.png' ,colorTitle:'Stilo-FloatGrey' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-MotivMaMaufEtch.png' ,colorTitle:'Stilo-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Stilo/Stilo-MotivMaMaufExtraweiss.png' ,colorTitle:'Stilo-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-DarkGrey.png' ,colorTitle:'Sinus-2-DarkGrey' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-Etch.png' ,colorTitle:'Sinus-2-Etch' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-Extraweiss.png' ,colorTitle:'Sinus-2-Extraweiss' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-FlaecheDarkGrey.png' ,colorTitle:'Sinus-2-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-FlaecheEtch.png' ,colorTitle:'Sinus-2-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-FlaecheExtraweiss.png' ,colorTitle:'Sinus-2-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-FlaecheFloatGrey.png' ,colorTitle:'Sinus-2-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-FloatGrey.png' ,colorTitle:'Sinus-2-FloatGrey' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-MotivMaMaufEtch.png' ,colorTitle:'Sinus-2-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Sinus-2/Sinus-2-MotivMaMaufExtraweiss.png' ,colorTitle:'Sinus-2-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Selina/Selina-DarkGrey.png' ,colorTitle:'Selina-DarkGrey' },
      {imgUrl:'img/GlassDesign/Selina/Selina-Etch.png' ,colorTitle:'Selina-Etch' },
      {imgUrl:'img/GlassDesign/Selina/Selina-Extraweiss.png' ,colorTitle:'Selina-Extraweiss' },
      {imgUrl:'img/GlassDesign/Selina/Selina-FlaecheDarkGrey.png' ,colorTitle:'Selina-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Selina/Selina-FlaecheEtch.png' ,colorTitle:'Selina-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Selina/Selina-FlaecheExtraweiss.png' ,colorTitle:'Selina-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Selina/Selina-FlaecheFloatGrey.png' ,colorTitle:'Selina-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Selina/Selina-FloatGrey.png' ,colorTitle:'Selina-FloatGrey' },
      {imgUrl:'img/GlassDesign/Selina/Selina-MotivMaMaufEtch.png' ,colorTitle:'Selina-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Selina/Selina-MotivMaMaufExtraweiss.png' ,colorTitle:'Selina-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Ry451/Ry451-DarkGrey.png' ,colorTitle:'Ry451-DarkGrey' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-Etch.png' ,colorTitle:'Ry451-Etch' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-Extraweiss.png' ,colorTitle:'Ry451-Extraweiss' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-FlaecheDarkGrey.png' ,colorTitle:'Ry451-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-FlaecheEtch.png' ,colorTitle:'Ry451-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-FlaecheExtraweiss.png' ,colorTitle:'Ry451-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-FlaecheFloatGrey.png' ,colorTitle:'Ry451-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-FloatGrey.png' ,colorTitle:'Ry451-FloatGrey' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-MotivMaMaufEtch.png' ,colorTitle:'Ry451-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Ry451/Ry451-MotivMaMaufExtraweiss.png' ,colorTitle:'Ry451-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Ry443/Ry443-DarkGrey.png' ,colorTitle:'Ry443-DarkGrey' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-Etch.png' ,colorTitle:'Ry443-Etch' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-Extraweiss.png' ,colorTitle:'Ry443-Extraweiss' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-FlaecheDarkGrey.png' ,colorTitle:'Ry443-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-FlaecheEtch.png' ,colorTitle:'Ry443-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-FlaecheExtraweiss.png' ,colorTitle:'Ry443-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-FlaecheFloatGrey.png' ,colorTitle:'Ry443-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-FloatGrey.png' ,colorTitle:'Ry443-FloatGrey' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-MotivMaMaufEtch.png' ,colorTitle:'Ry443-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Ry443/Ry443-MotivMaMaufExtraweiss.png' ,colorTitle:'Ry443-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Rayas2/Rayas2-whiteline.png' ,colorTitle:'Rayas2-whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/Rayas1/Rayas1.png' ,colorTitle:'Rayas1' },
    ],
    [
      {imgUrl:'img/GlassDesign/Quer/Quer.png' ,colorTitle:'Quer' },
    ],
    [
      {imgUrl:'img/GlassDesign/Quadratus/Quadratus-Motiv.png' ,colorTitle:'Quadratus-Motiv' },
    ],
    [
      {imgUrl:'img/GlassDesign/Phase/Phase.png' ,colorTitle:'Phase' },
    ],
    [
      {imgUrl:'img/GlassDesign/Onda/Onda-Ebene-1.png' ,colorTitle:'Onda-Ebene-1' },
    ],
    [
      {imgUrl:'img/GlassDesign/Pescara/Pescara-DarkGrey.png' ,colorTitle:'Pescara-DarkGrey' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-Etch.png' ,colorTitle:'Pescara-Etch' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-Extraweiss.png' ,colorTitle:'Pescara-Extraweiss' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-FlaecheDarkGrey.png' ,colorTitle:'Pescara-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-FlaecheEtch.png' ,colorTitle:'Pescara-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-FlaecheExtraweiss.png' ,colorTitle:'Pescara-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-FlaecheFloatGrey.png' ,colorTitle:'Pescara-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-FloatGrey.png' ,colorTitle:'Pescara-FloatGrey' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-MotivMaMaufEtch.png' ,colorTitle:'Pescara-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Pescara/Pescara-MotivMaMaufExtraweiss.png' ,colorTitle:'Pescara-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Pendo/Pendo-DarkGrey.png' ,colorTitle:'Pendo-DarkGrey' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-Etch.png' ,colorTitle:'Pendo-Etch' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-Extraweiss.png' ,colorTitle:'Pendo-Extraweiss' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-FlaecheDarkGrey.png' ,colorTitle:'Pendo-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-FlaecheEtch.png' ,colorTitle:'Pendo-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-FlaecheExtraweiss.png' ,colorTitle:'Pendo-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-FlaecheFloatGrey.png' ,colorTitle:'Pendo-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-FloatGrey.png' ,colorTitle:'Pendo-FloatGrey' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-MotivMaMaufEtch.png' ,colorTitle:'Pendo-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Pendo/Pendo-MotivMaMaufExtraweiss.png' ,colorTitle:'Pendo-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Ortello/Ortello.png' ,colorTitle:'Ortello' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-Blackline.png' ,colorTitle:'Ortello-Blackline' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-FlaecheDarkGrey.png' ,colorTitle:'Ortello-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-FlaecheEtch.png' ,colorTitle:'Ortello-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-FlaecheExtraweiss.png' ,colorTitle:'Ortello-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-FlaecheFloatGrey.png' ,colorTitle:'Ortello-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-MotivMaMaufEtch.png' ,colorTitle:'Ortello-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Ortello/Ortello-MotivMaMaufExtraweiss.png' ,colorTitle:'Ortello-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Nebel/Nebel-Blackline.png' ,colorTitle:'Nebel-Blackline' },
      {imgUrl:'img/GlassDesign/Nebel/Nebel-DarkGrey.png' ,colorTitle:'Nebel-DarkGrey' },
      {imgUrl:'img/GlassDesign/Nebel/Nebel-Etch.png' ,colorTitle:'Nebel-Etch' },
      {imgUrl:'img/GlassDesign/Nebel/Nebel-Extraweiss.png' ,colorTitle:'Nebel-Extraweiss' },
      {imgUrl:'img/GlassDesign/Nebel/Nebel-FloatGrey.png' ,colorTitle:'Nebel-FloatGrey' },
      {imgUrl:'img/GlassDesign/Nebel/Nebel-Whiteline.png' ,colorTitle:'Nebel-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/Morse/Morse-DarkGrey.png' ,colorTitle:'Morse-DarkGrey' },
      {imgUrl:'img/GlassDesign/Morse/Morse-Etch.png' ,colorTitle:'Morse-Etch' },
      {imgUrl:'img/GlassDesign/Morse/Morse-Extraweiss.png' ,colorTitle:'Morse-Extraweiss' },
      {imgUrl:'img/GlassDesign/Morse/Morse-FlaecheDarkGrey.png' ,colorTitle:'Morse-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Morse/Morse-FlaecheEtch.png' ,colorTitle:'Morse-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Morse/Morse-FlaecheExtraweiss.png' ,colorTitle:'Morse-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Morse/Morse-FlaecheFloatGrey.png' ,colorTitle:'Morse-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Morse/Morse-FloatGrey.png' ,colorTitle:'Morse-FloatGrey' },
      {imgUrl:'img/GlassDesign/Morse/Morse-MotivMaMaufEtch.png' ,colorTitle:'Morse-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Morse/Morse-MotivMaMaufExtraweiss.png' ,colorTitle:'Morse-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Micra/Micra-DarkGrey.png' ,colorTitle:'Micra-DarkGrey' },
      {imgUrl:'img/GlassDesign/Micra/Micra-Etch.png' ,colorTitle:'Micra-Etch' },
      {imgUrl:'img/GlassDesign/Micra/Micra-Extraweiss.png' ,colorTitle:'Micra-Extraweiss' },
      {imgUrl:'img/GlassDesign/Micra/Micra-FlaecheDarkGrey.png' ,colorTitle:'Micra-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Micra/Micra-FlaecheEtch.png' ,colorTitle:'Micra-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Micra/Micra-FlaecheExtraweiss.png' ,colorTitle:'Micra-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Micra/Micra-FlaecheFloatGrey.png' ,colorTitle:'Micra-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Micra/Micra-FloatGrey.png' ,colorTitle:'Micra-FloatGrey' },
      {imgUrl:'img/GlassDesign/Micra/Micra-MotivMaMaufEtch.png' ,colorTitle:'Micra-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Micra/Micra-MotivMaMaufExtraweiss.png' ,colorTitle:'Micra-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Lira/Lira-DarkGrey.png' ,colorTitle:'Lira-DarkGrey' },
      {imgUrl:'img/GlassDesign/Lira/Lira-Etch.png' ,colorTitle:'Lira-Etch' },
      {imgUrl:'img/GlassDesign/Lira/Lira-Extraweiss.png' ,colorTitle:'Lira-Extraweiss' },
      {imgUrl:'img/GlassDesign/Lira/Lira-FlaecheDarkGrey.png' ,colorTitle:'Lira-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Lira/Lira-FlaecheEtch.png' ,colorTitle:'Lira-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Lira/Lira-FlaecheExtraweiss.png' ,colorTitle:'Lira-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Lira/Lira-FlaecheFloatGrey.png' ,colorTitle:'Lira-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Lira/Lira-FloatGrey.png' ,colorTitle:'Lira-FloatGrey' },
      {imgUrl:'img/GlassDesign/Lira/Lira-MotivMaMaufEtch.png' ,colorTitle:'Lira-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Lira/Lira-MotivMaMaufExtraweiss.png' ,colorTitle:'Lira-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Linie1/Linie1-DarkGrey.png' ,colorTitle:'Linie1-DarkGrey' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-Etch.png' ,colorTitle:'Linie1-Etch' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-Extraweiss.png' ,colorTitle:'Linie1-Extraweiss' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-FlaecheDarkGrey.png' ,colorTitle:'Linie1-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-FlaecheEtch.png' ,colorTitle:'Linie1-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-FlaecheExtraweiss.png' ,colorTitle:'Linie1-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-FlaecheFloatGrey.png' ,colorTitle:'Linie1-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-FloatGrey.png' ,colorTitle:'Linie1-FloatGrey' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-MotivMaMaufEtch.png' ,colorTitle:'Linie1-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Linie1/Linie1-MotivMaMaufExtraweiss.png' ,colorTitle:'Linie1-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/lines/lines-DarkGrey.png' ,colorTitle:'lines-DarkGrey' },
      {imgUrl:'img/GlassDesign/lines/lines-Etch.png' ,colorTitle:'lines-Etch' },
      {imgUrl:'img/GlassDesign/lines/lines-Extraweiss.png' ,colorTitle:'lines-Extraweiss' },
      {imgUrl:'img/GlassDesign/lines/lines-FlaecheDarkGrey.png' ,colorTitle:'lines-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/lines/lines-FlaecheEtch.png' ,colorTitle:'lines-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/lines/lines-FlaecheExtraweiss.png' ,colorTitle:'lines-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/lines/lines-FlaecheFloatGrey.png' ,colorTitle:'lines-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/lines/lines-FloatGrey.png' ,colorTitle:'lines-FloatGrey' },
      {imgUrl:'img/GlassDesign/lines/lines-MotivMaMaufEtch.png' ,colorTitle:'lines-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/lines/lines-MotivMaMaufExtraweiss.png' ,colorTitle:'lines-MotivMaMaufExtraweiss' },
    ],
    [
      {imgUrl:'img/GlassDesign/Line-up/Line-up.png' ,colorTitle:'Line-up' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Blackline.png' ,colorTitle:'Line-up-Blackline' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-DarkGrey.png' ,colorTitle:'Line-up-DarkGrey' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Etch.png' ,colorTitle:'Line-up-Etch' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Extraweiss.png' ,colorTitle:'Line-up-Extraweiss' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-FlaecheDarkGrey.png' ,colorTitle:'Line-up-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-FlaecheEtch.png' ,colorTitle:'Line-up-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-FlaecheExtraweiss.png' ,colorTitle:'Line-up-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-FlaecheFloatGrey.png' ,colorTitle:'Line-up-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-FloatGrey.png' ,colorTitle:'Line-up-FloatGrey' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Graphit.png' ,colorTitle:'Line-up-Graphit' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Maron.png' ,colorTitle:'Line-up-Maron' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-MotivMaMaufEtch.png' ,colorTitle:'Line-up-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-MotivMaMaufExtraweiss.png' ,colorTitle:'Line-up-MotivMaMaufExtraweiss' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Schilf.png' ,colorTitle:'Line-up-Schilf' },
      {imgUrl:'img/GlassDesign/Line-up/Line-up-Whiteline.png' ,colorTitle:'Line-up-Whiteline' },
    ],
    [
      {imgUrl:'img/GlassDesign/Kuche/Kuche-DarkGrey.png' ,colorTitle:'Kuche-DarkGrey' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-Etch.png' ,colorTitle:'Kuche-Etch' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-Extraweiss.png' ,colorTitle:'Kuche-Extraweiss' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-FlaecheDarkGrey.png' ,colorTitle:'Kuche-FlaecheDarkGrey' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-FlaecheEtch.png' ,colorTitle:'Kuche-FlaecheEtch' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-FlaecheExtraweiss.png' ,colorTitle:'Kuche-FlaecheExtraweiss' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-FlaecheFloatGrey.png' ,colorTitle:'Kuche-FlaecheFloatGrey' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-FloatGrey.png' ,colorTitle:'Kuche-FloatGrey' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-MotivMaMaufEtch.png' ,colorTitle:'Kuche-MotivMaMaufEtch' },
      {imgUrl:'img/GlassDesign/Kuche/Kuche-MotivMaMaufExtraweiss.png' ,colorTitle:'Kuche-MotivMaMaufExtraweiss' },
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
    case "ER71":
      colors[17].forEach((item)=>{
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
    case "ER71R":
      colors[18].forEach((item)=>{
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
    case "ER712flg":
      colors[19].forEach((item)=>{
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
    case "ER88":
      colors[20].forEach((item)=>{
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
    case "ER88-R":
      colors[21].forEach((item)=>{
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
    case "Abila":
      colors[22].forEach((item)=>{
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
    case "Aida":
      colors[23].forEach((item)=>{
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
    case "Amara":
      colors[24].forEach((item)=>{
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
    case "Atessa":
      colors[25].forEach((item)=>{
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
    case "Bahia-R":
      colors[26].forEach((item)=>{
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
    case "Bambu":
      colors[27].forEach((item)=>{
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
    case "Basic-01":
      colors[28].forEach((item)=>{
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
    case "Basic-02":
      colors[29].forEach((item)=>{
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
    case "Basic-03":
      colors[30].forEach((item)=>{
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
    case "Basic-08":
      colors[31].forEach((item)=>{
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
    case "Fasi":
      colors[32].forEach((item)=>{
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
    case "Cafe-2":
      colors[33].forEach((item)=>{
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
    case "Carna":
      colors[34].forEach((item)=>{
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
    case "Bergamo":
      colors[35].forEach((item)=>{
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
    case "Cinque":
      colors[36].forEach((item)=>{
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
    case "Kabira":
      colors[37].forEach((item)=>{
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
    case "Cristall":
      colors[38].forEach((item)=>{
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
    case "Bukarest":
      colors[39].forEach((item)=>{
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
    case "Kiano4":
      colors[40].forEach((item)=>{
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
    case "Hirsch-3":
      colors[41].forEach((item)=>{
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
    case "Flowers-R":
      colors[42].forEach((item)=>{
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
    case "Fasi-R":
      colors[43].forEach((item)=>{
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
    case "Flowers-5":
      colors[44].forEach((item)=>{
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
    case "Bonito-kunex":
      colors[45].forEach((item)=>{
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
    case "Cristall-R":
      colors[46].forEach((item)=>{
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
    case "Alba":
      colors[47].forEach((item)=>{
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
    case "Kiano8":
      colors[48].forEach((item)=>{
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
    case "Vertigo":
      colors[49].forEach((item)=>{
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
    case "Umlaufender":
      colors[50].forEach((item)=>{
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
    case "Ufficio":
      colors[51].forEach((item)=>{
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
    case "Travesano":
      colors[52].forEach((item)=>{
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
    case "Tiana":
      colors[53].forEach((item)=>{
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
    case "Thema":
      colors[54].forEach((item)=>{
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
    case "Termoli":
      colors[55].forEach((item)=>{
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
    case "Stilo":
      colors[56].forEach((item)=>{
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
    case "Sinus-2":
      colors[57].forEach((item)=>{
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
    case "Selina":
      colors[58].forEach((item)=>{
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
    case "Ry451":
      colors[59].forEach((item)=>{
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
    case "Ry443":
      colors[60].forEach((item)=>{
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
    case "Rayas2":
      colors[61].forEach((item)=>{
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
    case "Rayas1":
      colors[62].forEach((item)=>{
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
    case "Quer":
      colors[63].forEach((item)=>{
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
    case "Quadratus":
      colors[64].forEach((item)=>{
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
    case "Phase":
      colors[65].forEach((item)=>{
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
    case "Onda":
      colors[66].forEach((item)=>{
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
    case "Pescara":
      colors[67].forEach((item)=>{
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
    case "Pendo":
      colors[68].forEach((item)=>{
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
    case "Ortello":
      colors[69].forEach((item)=>{
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
    case "Nebel":
      colors[70].forEach((item)=>{
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
    case "Morse":
      colors[71].forEach((item)=>{
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
    case "Micra":
      colors[72].forEach((item)=>{
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
    case "Lira":
      colors[73].forEach((item)=>{
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
    case "Linie1":
      colors[74].forEach((item)=>{
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
    case "lines":
      colors[75].forEach((item)=>{
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
    case "Line-up":
      colors[76].forEach((item)=>{
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
    case "Kuche":
      colors[77].forEach((item)=>{
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