

var iHex_a = document.getElementById('hex_a');
var iR_a = document.getElementById('rgb_r_a');
var iG_a = document.getElementById('rgb_g_a');
var iB_a = document.getElementById('rgb_b_a');
var iO_a = document.getElementById('opacity_a');

var color_a = document.getElementById('colorPickerA');

var iHex_b = document.getElementById('hex_b');
var iR_b = document.getElementById('rgb_r_b');
var iG_b = document.getElementById('rgb_g_b');
var iB_b = document.getElementById('rgb_b_b');
var iO_b = document.getElementById('opacity_b');

var spectrumColor_A;
var spectrumColor_B;

var color_b = document.getElementById('colorPickerB');

function InitializeColorSpectrums() {
    spectrumColor_A = $("#flatSpectrum_a").spectrum({
        flat: true,
        showAlpha: true,
        allowAlpha: true,
        showPalette: true,
        showButtons: false,
        clickoutFiresChange: true
    });

    spectrumColor_B = $("#flatSpectrum_b").spectrum({
        flat: true,
        showAlpha: true ,
        allowAlpha: true,
        showPalette: true,
        showButtons: false,
        clickoutFiresChange: true
    });
}

function colorAEventHandlers() {

    iHex_a.onchange = function() {
        handleHexChangeA(iHex_a.value, iO_a.value);
    };

    iR_a.onchange = function() {
        handleRGBAChangeA(Math.round(iR_a.value), Math.round(iG_a.value), Math.round(iB_a.value), iO_a.value);
    };
    iG_a.onchange = function() {
        handleRGBAChangeA(Math.round(iR_a.value), Math.round(iG_a.value), Math.round(iB_a.value), iO_a.value);
    };
    iB_a.onchange = function() {
        handleRGBAChangeA(Math.round(iR_a.value), Math.round(iG_a.value), Math.round(iB_a.value), iO_a.value);
    };
    iO_a.onchange = function() {
        handleRGBAChangeA(Math.round(iR_a.value), Math.round( iG_a.value), Math.round(iB_a.value), iO_a.value);
    };

    $("#flatSpectrum_a").on('move.spectrum', function(e, tinyColor) {
        spectrumAUpdate(tinyColor);
    });

}

function colorBEventHandlers() {

    iHex_b.onchange = function() {
        handleHexChangeB(iHex_b.value, iO_b.value);
    };

    iR_b.onchange = function() {
        handleRGBAChangeB(Math.round(iR_b.value), Math.round(iG_b.value), Math.round(iB_b.value), iO_b.value);
    };
    iG_b.onchange = function() {
        handleRGBAChangeB(Math.round(iR_b.value), Math.round(iG_b.value), Math.round(iB_b.value), iO_b.value);
    };
    iB_b.onchange = function() {
        handleRGBAChangeB(Math.round(iR_b.value), Math.round(iG_b.value), Math.round(iB_b.value), iO_b.value);
    };
    iO_b.onchange = function() {
        handleRGBAChangeB(Math.round(iR_b.value), Math.round(iG_b.value), Math.round(iB_b.value), iO_b.value);
    };

    $("#flatSpectrum_b").on('move.spectrum', function(e, tinyColor) {
        spectrumBUpdate(tinyColor);
    });
}


// Color Control A
function handleHexChangeA(hexValue, opacityValue) {
    var newTinyColor = tinycolor(hexValue);
    newTinyColor._a = opacityValue;
    updateColorA(newTinyColor);
}

function handleRGBAChangeA(red, green, blue, opacity) {
    var newTinyColor = tinycolor({r: red,  g: green, b: blue, a: opacity});
    updateColorA(newTinyColor);
}

function updateColorPickerA(tinyColor) {
    color_a.style.backgroundColor = tinyColor.toHexString(false);
    var rgbaVal = "rgba("  + Math.round(tinyColor._r) + ", " + Math.round(tinyColor._g) + ", " + Math.round(tinyColor._b) + ", "  + tinyColor._a + ")";
    $("#colorPickerA").css('background-color', rgbaVal);
}

function updatePanelsColorA(tinyColor) {
    var rgbaVal = "rgba(" + Math.round(tinyColor._r) + ", " + Math.round(tinyColor._g) + ", " + Math.round(tinyColor._b) + ", " + tinyColor._a + ")";
    $("#panel_1_inner").css('background-color', rgbaVal);
    $("#panel_2_outer").css('background-color', rgbaVal);
    $("#panel_3_inner").css('color', rgbaVal);
    $("#panel_4_outer").css('background-color', rgbaVal);
}

function updateSpectrum_A(tinyColor) {
    spectrumColor_A.spectrum("set", tinyColor);
}

function spectrumAUpdate(tinyColor ) {
    updateColorANoSpectrum(tinyColor);

}
function updateColorANoSpectrum(tinyColor) {
    updateColorPickerA(tinyColor);
    updatePanelsColorA(tinyColor);
    updateInputs_A(tinyColor);
}

function updateColorA(tinyColor) {
    updateColorANoSpectrum(tinyColor);
    updateSpectrum_A(tinyColor);
}

// Color Control B
function handleHexChangeB(hexValue, opacityValue) {
    var newTinyColor = tinycolor(hexValue);
    newTinyColor._B = opacityValue;
    updateColorB(newTinyColor);
}

function handleRGBAChangeB(red, green, blue, opacity) {
    var newTinyColor = tinycolor({r: red,  g: green, b: blue, a: opacity});
    updateColorB(newTinyColor);
}

function updateColorPickerB(tinyColor) {
    color_b.style.backgroundColor = tinyColor.toHexString(false);
    var rgbaVal = "rgba("  + Math.round(tinyColor._r) + ", " + Math.round(tinyColor._g) + ", " + Math.round(tinyColor._b) + ", "  + tinyColor._a + ")";
    $("#colorPickerB").css('background-color', rgbaVal);
}

function updatePanelsColorB(tinyColor) {
    var rgbaVal = "rgba("  + Math.round(tinyColor._r) + ", " + Math.round(tinyColor._g) + ", " + Math.round(tinyColor._b) + ", "  + tinyColor._a + ")";
    $("#panel_1_outer").css('background-color', rgbaVal);
    $("#panel_2_inner").css('background-color', rgbaVal);
    $("#panel_3_outer").css('background-color', rgbaVal);
    $("#panel_4_inner").css('color', rgbaVal);
}

function updateInputs_A(tinyColor) {
    iHex_a.value = tinyColor.toHexString(false);

    iR_a.value = Math.round(tinyColor._r);
    iG_a.value = Math.round(tinyColor._g);
    iB_a.value = Math.round(tinyColor._b);

    iO_a.value = tinyColor._a;
}

function updateInputs_B(tinyColor) {
    iHex_b.value = tinyColor.toHexString(false);

    iR_b.value = Math.round(tinyColor._r);
    iG_b.value = Math.round(tinyColor._g);
    iB_b.value = Math.round(tinyColor._b);
    iO_b.value = tinyColor._a;
}

function updateSpectrum_B(tinyColor) {
    spectrumColor_B.spectrum("set", tinyColor);

}

function updateColorB(tinyColor) {
    updateColorBNoSpectrum(tinyColor);
    updateSpectrum_B(tinyColor);
}

function spectrumBUpdate(tinyColor ) {
    updateColorBNoSpectrum(tinyColor);
}

function updateColorBNoSpectrum(tinyColor) {
    updateColorPickerB(tinyColor);
    updatePanelsColorB(tinyColor);
    updateInputs_B(tinyColor);
}


