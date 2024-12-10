//Glas_design

function chengDesign(event, name) {
  $("#Glasdesign").attr("src", event.target.src);
  document.getElementById("glasartDesignLabel").innerText = name;
}

//Glas_design color

function chengDesignColor(event, name) {
  document.getElementById("glasartDesignLabel").innerText = name;
  
  const img = document.createElement('img');
  document.getElementById('designImg').innerHTML = `
   <img src=${event.target.src}>
  `
}

// dastgire design

document.getElementById("dastgire").innerHTML = `
        <svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.81 60.23">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .33px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <circle class="cls-1" cx="4.4" cy="9.88" r="4.24"/>
      <circle class="cls-1" cx="4.4" cy="52.54" r="4.24"/>
      <rect class="cls-1" x="1.81" y=".16" width="5.2" height="59.9" rx="2.6" ry="2.6"/>
    </g>
  </g>
</svg>
          `;

function chengDastgire(e,w,h, name) {
  document.getElementById("dastgireLabel").innerText = name;
  document.getElementById('dastgiredesign').style.width = w + 'px';
  document.getElementById('dastgiredesign').style.height = h + 'px';
  document.getElementById('dastgiredesign').src = e.querySelector('img').src;

  switch (name) {
    case "one":
      document.getElementById("dastgire").innerHTML = `
            <svg data-name="Layer 2"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.98 21.5">
                                        <defs>
                                            <style>
                                                .cls-1 {
                                                    stroke: #020202;
                                                    stroke-miterlimit: 10;
                                                    stroke-width: .16px;
                                                }
    
                                                .cls-1,
                                                .cls-2 {
                                                    fill: #292e37;
                                                }
                                            </style>
                                        </defs>
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <g id="Layer_1-2" data-name="Layer 1-2">
                                                <g>
                                                    <rect class="cls-1" x="9.98" y=".08" width="40.67" height="2.44" rx=".4"
                                                        ry=".4" />
                                                    <rect class="cls-1" x="3.75" y="1.3" width="49.88" height="20.13"
                                                        rx=".63" ry=".63" />
                                                    <rect class="cls-1" x=".08" y="7.67" width="3.59" height="7.39" />
                                                    <path class="cls-1"
                                                        d="M1.51,5.43H3.67v2.16H1.03v-1.67c0-.27,.22-.48,.48-.48h0Z" />
                                                    <path class="cls-1"
                                                        d="M1.03,15.13H3.67v2.16H1.51c-.27,0-.48-.22-.48-.48v-1.67h0Z" />
                                                    <g>
                                                        <circle cx="26.89" cy="10.87" r="4.33" />
                                                        <circle class="cls-2" cx="26.89" cy="10.87" r="4.16" />
                                                    </g>
                                                    <g>
                                                        <path class="cls-1"
                                                            d="M28.4,8.34h35.7c.44,0,.79,.36,.79,.79v3.24c0,.44-.36,.79-.79,.79H28.4v-4.83h0Z" />
                                            <rect class="cls-1" x="25.59" y="8.34" width="2.82" height="4.83" />
                                     </g>
                                </g>
                            </g>
                        </g>
                </svg>
          `;
      break;
    case "two":
      document.getElementById("dastgire").innerHTML = `
           <svg class="w-40" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.43 61.71">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .62px;
      }

      .cls-1, .cls-2, .cls-3, .cls-4 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .37px;
      }

      .cls-3 {
        stroke-width: .36px;
      }

      .cls-4 {
        stroke-width: .41px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <rect class="cls-2" x=".19" y="4.97" width="4.49" height="14.56"/>
        <path class="cls-1" d="M39.01,4.09V57.62c0,2.08-1.69,3.78-3.78,3.78H3.61V.31h31.63c2.08,0,3.78,1.69,3.78,3.78Z"/>
        <circle class="cls-4" cx="21.31" cy="18.87" r="6.41"/>
        <path class="cls-4" d="M22.89,46.86s0,.07,0,.1v4.13c0,.71-.57,1.29-1.29,1.29h-.66c-.71,0-1.29-.57-1.29-1.29v-4.13c0-.06,0-.13,.01-.19-.77-.53-1.27-1.42-1.27-2.43,0-1.63,1.32-2.95,2.95-2.95s2.95,1.32,2.95,2.95c0,1.06-.56,2-1.41,2.52h0Z"/>
        <rect class="cls-3" x="17.43" y="14.88" width="45.82" height="7.98" rx="2.15" ry="2.15"/>
      </g>
    </g>
  </g>
</svg>
            `;
      break;
    case "verona":
      document.getElementById("dastgire").innerHTML = `
                <svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.13 53.13">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .68px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <circle class="cls-1" cx="26.56" cy="26.56" r="26.23"/>
      <circle class="cls-1" cx="26.56" cy="26.56" r="11.4"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "palermo":
      document.getElementById("dastgire").innerHTML = `
       <svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.02 57.02">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .73px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .65px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <circle class="cls-1" cx="28.51" cy="28.51" r="28.15"/>
      <circle class="cls-2" cx="28.51" cy="28.51" r="25.22"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "turin":
      document.getElementById("dastgire").innerHTML = `
       <svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.83 57.83">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .74px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-1" d="M28.92,.37C13.15,.37,.37,13.15,.37,28.91s12.78,28.55,28.55,28.55,28.55-12.78,28.55-28.55S44.68,.37,28.92,.37Zm0,47.74c-10.6,0-19.2-8.59-19.2-19.2S18.31,9.72,28.92,9.72s19.2,8.59,19.2,19.19-8.59,19.2-19.2,19.2Z"/>
  </g>
</svg>
                `;
      break;
    case "genova":
      document.getElementById("dastgire").innerHTML = `
     <svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.24 62.24">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .79px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path class="cls-1" d="M31.12,.4C14.16,.4,.4,14.15,.4,31.12s13.76,30.73,30.73,30.73,30.72-13.75,30.72-30.73S48.09,.4,31.12,.4Zm0,51.39c-11.41,0-20.66-9.25-20.66-20.67S19.71,10.46,31.12,10.46s20.66,9.25,20.66,20.66-9.25,20.67-20.66,20.67Z"/>
      <path class="cls-1" d="M51.79,31.12c0,11.42-9.25,20.67-20.66,20.67S10.46,42.53,10.46,31.12,19.71,10.46,31.12,10.46s20.66,9.25,20.66,20.66Z"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "venedig":
      document.getElementById("dastgire").innerHTML = `
    <svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.28 59.28">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .78px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <rect class="cls-1" x=".39" y=".39" width="58.5" height="58.5"/>
      <rect class="cls-1" x="15.87" y="15.87" width="27.54" height="27.54"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "como":
      document.getElementById("dastgire").innerHTML = `
   <svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.88 49.88">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .66px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <rect class="cls-1" x=".33" y=".33" width="49.22" height="49.22"/>
      <rect class="cls-1" x="3.55" y="3.55" width="42.78" height="42.78"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "parma":
      document.getElementById("dastgire").innerHTML = `
 <svg class="w-22" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.54 56.31">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .49px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-1" d="M7.51,28.16c0,9.58,6.69,17.65,15.83,20.14V31.1h5.96v24.96C13.25,56.07,.24,43.57,.24,28.16S13.25,.24,29.3,.24V7.22c-12.04,0-21.79,9.37-21.79,20.93Z"/>
  </g>
</svg>
                `;
      break;
    case "griffi":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-32" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.14 56.81">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .76px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-1" d="M48.95,6.21C38.92-3.24,21.43-.96,9.89,11.3-1.64,23.56-2.86,41.15,7.18,50.6c10.04,9.45,27.53,7.17,39.06-5.08,11.54-12.26,12.75-29.86,2.71-39.31Zm-5,37.15c-10.42,11.08-26.23,13.13-35.3,4.6C-.42,39.42,.68,23.51,11.1,12.44,21.53,1.36,37.33-.7,46.41,7.84c9.08,8.54,7.98,24.44-2.45,35.52Z"/>
  </g>
</svg>
                `;
      break;
    case "porto":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.81 60.23">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .33px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <circle class="cls-1" cx="4.4" cy="9.88" r="4.24"/>
      <circle class="cls-1" cx="4.4" cy="52.54" r="4.24"/>
      <rect class="cls-1" x="1.81" y=".16" width="5.2" height="59.9" rx="2.6" ry="2.6"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "rondo":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.81 57.72">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .22px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .22px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <circle class="cls-2" cx="2.9" cy="9.47" r="2.79"/>
      <circle class="cls-2" cx="2.9" cy="48.94" r="2.79"/>
      <rect class="cls-1" x="1.66" y=".11" width="2.49" height="57.5" rx="1.25" ry="1.25"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "cubo":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.33 54.18">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .23px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .25px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <rect class="cls-1" x=".12" y=".12" width="6.09" height="7.09"/>
      <rect class="cls-1" x=".12" y="46.98" width="6.09" height="7.09"/>
      <rect class="cls-2" x=".83" y=".78" width="4.67" height="52.44"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "milaneckig":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.86 55.06">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .25px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .26px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <rect class="cls-1" x=".13" y="6.42" width="6.61" height="7.69"/>
      <rect class="cls-1" x=".13" y="43.42" width="6.61" height="7.69"/>
      <rect class="cls-2" x=".99" y=".13" width="4.88" height="54.8"/>
    </g>
  </g>
</svg>
                `;
      break;
    case "milan":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 53.58">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .25px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <rect class="cls-1" x=".13" y=".13" width="4.75" height="53.33"/>
  </g>
</svg>
                `;
      break;
    case "dorma":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-10 ms-2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.1 56.34">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .27px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <polygon class="cls-1" points="5.56 56.21 .56 56.21 .13 28.17 .56 .13 5.56 .13 5.97 28.17 5.56 56.21"/>
  </g>
</svg>
                `;
      break;
    case "piatto":
      document.getElementById("dastgire").innerHTML = `
<svg class="w-43" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.81 26.47">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .24px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <path class="cls-1" d="M62.7,3.34V23.13c-.24,.74-12.09,2.75-14.31,3.12,0,0,0,0,0,0-.18,.06-.37,.09-.57,.09H7.06s-.04,0-.05,0c-2.18-.06-3.81-3.22-3.81-3.22V3.34S5.61,.19,6.78,.14h.01c.1-.02,.2-.03,.3-.03H47.64c.13,0,.31,.01,.5,.03,.19,.02,.4,.04,.62,.09,3.64,.66,13.52,2.46,13.91,3.06,0,.01,.01,.02,.01,.04h0Z"/>
        <circle class="cls-1" cx="20.72" cy="13.23" r="3.74"/>
        <rect class="cls-1" x="18.47" y="10.75" width="39.78" height="4.98" rx="1.35" ry="1.35"/>
        <rect class="cls-1" x=".12" y="8.64" width="2.83" height="9.2"/>
      </g>
    </g>
  </g>
</svg>
              `;
      break;
    case "arcos":
      document.getElementById("dastgire").innerHTML = `
<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.49 18.54">
  <defs>
    <style>
      .cls-1 {
        stroke-miterlimit: 10;
        stroke-width: .14px;
      }

      .cls-1, .cls-2, .cls-3, .cls-4 {
        fill: #c1c1c1;
        stroke: #000;
      }

      .cls-2 {
        stroke-width: .19px;
      }

      .cls-2, .cls-3, .cls-4 {
        stroke-miterlimit: 10;
      }

      .cls-3 {
        stroke-width: .15px;
      }

      .cls-4 {
        stroke-width: .21px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <g>
          <rect class="cls-1" x=".35" y="6.75" width="2.48" height="6.84" transform="translate(-.16 .03) rotate(-.9)"/>
          <rect class="cls-1" x=".07" y="6.03" width="2.7" height=".59" transform="translate(-.1 .02) rotate(-.9)"/>
          <rect class="cls-1" x=".19" y="13.71" width="2.7" height=".59" transform="translate(-.22 .03) rotate(-.9)"/>
        </g>
        <path class="cls-2" d="M3.79,.84c5.23-.29,30.2-1.53,57.62,0,.55,.03,.99,.49,.99,1.04v15.52c0,.58-.48,1.05-1.06,1.04-6.48-.13-41.01-.75-57.13-.03-.59,.03-1.08-.43-1.09-1.02L2.81,1.9c-.01-.56,.42-1.03,.98-1.06Z"/>
        <circle class="cls-4" cx="17.74" cy="9.69" r="4.88"/>
        <path class="cls-3" d="M54.88,7.8v3.77c0,.82-.6,1.48-1.34,1.48H17.49c-.89,0-1.7-.4-2.29-1.04-.06-.07-.13-.14-.18-.22-.19-.24-.34-.51-.46-.79-.17-.4-.27-.84-.3-1.31,0-.19,.03-.37,.07-.54,.03-.14,.06-.28,.1-.41,.04-.14,.09-.28,.15-.41,.53-1.18,1.63-2,2.91-2H53.53c.74,0,1.34,.66,1.34,1.48h0Z"/>
      </g>
    </g>
  </g>
</svg>
            `;
      break;
    case "alpha":
      document.getElementById("dastgire").innerHTML = `
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.16 21.97">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .16px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <path class="cls-1" d="M4.97,.08H48.22c6.02,0,10.9,4.88,10.9,10.9h0c0,6.02-4.88,10.9-10.9,10.9H4.97c-.85,0-1.53-.69-1.53-1.53V1.62C3.44,.77,4.13,.08,4.97,.08Z"/>
        <g>
          <rect class="cls-1" x=".34" y="6.89" width="2.93" height="8.1"/>
          <rect class="cls-1" x=".08" y="6.03" width="3.19" height=".69"/>
          <rect class="cls-1" x=".08" y="15.13" width="3.19" height=".69"/>
        </g>
        <circle class="cls-1" cx="21.43" cy="11.07" r="3.7"/>
        <path class="cls-1" d="M65.08,9.09v3.96c0,.86-.69,1.55-1.55,1.55H21.95c-1.03,0-1.97-.42-2.64-1.09-.07-.07-.14-.15-.21-.23-.21-.25-.39-.53-.53-.83-.2-.42-.32-.88-.34-1.37,0-.19,.04-.39,.08-.57,.03-.15,.07-.29,.12-.43,.05-.15,.11-.29,.18-.43,.61-1.24,1.88-2.1,3.36-2.1H63.53c.86,0,1.55,.69,1.55,1.55h0Z"/>
      </g>
    </g>
  </g>
</svg>
            `;
      break;
    default:
      console.log("Unknown shape!");
  }
  chengbilder(
    bildersOption[0],
    bildersOption[1],
    bildersOption[2],
    bildersOption[3]
  );
}

// lola design

document.querySelectorAll(".lola").forEach((items) => {
  items.innerHTML = `
   <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.86 51.06">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .35px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .34px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <rect class="cls-1" x="51.81" y="9.56" width="9.87" height="31.94"/>
        <path class="cls-2" d="M51.09,8.64V42.42h10.59v1.87c0,3.64-2.95,6.6-6.6,6.6H11.1c-3.35,0-6.17-2.51-6.55-5.84L.21,7.52C-.24,3.61,2.82,.17,6.77,.17H55.08c3.64,0,6.6,2.95,6.6,6.6v1.87h-10.59Z"/>
      </g>
    </g>
  </g>
</svg>
`;
});

function chengLola(event, name) {
  $("#loladesign").attr("src", event.target.src);
  document.getElementById("lolaLabel").innerText = name;

  switch (name) {
    case "lola":
      document.querySelectorAll(".lola").forEach((items) => {
        items.innerHTML = `
             <svg data-name="Layer 1"
                                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.61 62.62">
                                          <defs>
                                              <style>
                                                  .cls-1 {
                                                      fill: #292e37;
                                                      stroke: #020202;
                                                      stroke-miterlimit: 10;
                                                      stroke-width: .39px;
                                                  }
                                              </style>
                                          </defs>
                                          <g id="Layer_1-2" data-name="Layer 1">
                                              <g id="Layer_1-2" data-name="Layer 1-2">
                                                  <g>
                                                      <path class="cls-1"
                                                          d="M50.49,12.96V49.66h11.92v7.55c0,2.88-2.33,5.21-5.21,5.21H.2V.2H57.21c2.88,0,5.21,2.33,5.21,5.21v7.56h-11.92Z" />
                                                      <rect class="cls-1" x="51.23" y="13.84" width="11.18" height="34.93" />
                                                  </g>
                                              </g>
                                          </g>
                                      </svg>
            `;
      });

      break;
    case "junior":
      document.querySelectorAll(".lola").forEach((items) => {
        items.innerHTML = `
              <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.35 60.36">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .38px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <polygon class="cls-1" points="48.67 12.49 48.67 47.86 60.16 47.86 60.16 60.17 .19 60.17 .19 .19 60.16 .19 60.16 12.49 48.67 12.49"/>
        <rect class="cls-1" x="49.38" y="13.34" width="10.78" height="33.67"/>
      </g>
    </g>
  </g>
</svg>
              `;
      });

      break;
    case "piatto":
      document.querySelectorAll(".lola").forEach((items) => {
        items.innerHTML = `
             <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.86 51.06">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .35px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .34px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <rect class="cls-1" x="51.81" y="9.56" width="9.87" height="31.94"/>
        <path class="cls-2" d="M51.09,8.64V42.42h10.59v1.87c0,3.64-2.95,6.6-6.6,6.6H11.1c-3.35,0-6.17-2.51-6.55-5.84L.21,7.52C-.24,3.61,2.82,.17,6.77,.17H55.08c3.64,0,6.6,2.95,6.6,6.6v1.87h-10.59Z"/>
      </g>
    </g>
  </g>
</svg>
                `;
      });

      break;
    case "arcos":
      document.querySelectorAll(".lola").forEach((items) => {
        items.innerHTML = `
               <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.93 59.51">
  <defs>
    <style>
      .cls-1 {
        stroke-width: .38px;
      }

      .cls-1, .cls-2 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: .49px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <path class="cls-2" d="M52.23,11.86V47.65h11.46v9.28c0,1.29-1.05,2.34-2.34,2.34l-18.55-1.91c-8.24-.85-16.54-.8-24.77,.14l-15.46,1.77c-1.29,0-2.34-1.05-2.34-2.34V5.1C.24,3.8,1.29,2.76,2.58,2.76L18.04,.99C26.27,.04,34.57,0,42.81,.85l18.55,1.91c1.29,0,2.34,1.05,2.34,2.34v6.77h-11.46Z"/>
        <rect class="cls-1" x="53.15" y="12.95" width="10.54" height="33.62"/>
      </g>
    </g>
  </g>
</svg>
                  `;
      });

      break;
    case "alpha":
      document.querySelectorAll(".lola").forEach((items) => {
        items.innerHTML = `
                 <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.6 59.6">
  <defs>
    <style>
      .cls-1 {
        fill: #c1c1c1;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: .38px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g id="Layer_1-2" data-name="Layer 1-2">
      <g>
        <path class="cls-1" d="M48.06,12.34V47.26h11.35v12.15H7.27c-3.91,0-7.08-3.17-7.08-7.08V7.27C.19,3.36,3.36,.19,7.27,.19H59.41V12.34h-11.35Z"/>
        <rect class="cls-1" x="48.76" y="13.18" width="10.65" height="33.25"/>
      </g>
    </g>
  </g>
</svg>
                    `;
      });

      break;
    default:
      console.log("Unknown shape!");
  }
  console.log(234);
  chengbilder(
    bildersOption[0],
    bildersOption[1],
    bildersOption[2],
    bildersOption[3]
  );
}

// change dastgire position

function changeSvgPosition() {
  var size_hh = parseInt(document.getElementById("GoM").value);
  let oldsize_hh = size_hh;
  size_hh = size_hh / 2;
  console.log(
    Number(GlasFront.style.height.replace("mm", "")) +
      Number(dastgire.style.height.replace("mm", ""))
  );
  if (
    size_hh - 503 < 0 ||
    size_hh - 503 >
      Number(GlasFront.style.height.replace("mm", "")) -
        25.4 * (Number(dastgire.scrollHeight) / 96) -
        2
  ) {
    document.getElementById("GoM").value = oldsize_hh;
    return;
  }
  dastgire.style.bottom = size_hh - 503 + "mm";
}

// change glass color

function chengGlassColor(event, name, color) {
  //alert(design)
  // $("#GlasColor").attr("src", event.target.src);
  document.getElementById('colorBox').style.backgroundColor = color;
  document.getElementById("glasartColorLabel").innerText = name;
  document.getElementById("GlassColor").style.backgroundColor = color;

}
