/**
 * Created by laurie on 4/18/2015.
 */

var iHex_a = document.getElementById('hex_a');
var iR_a = document.getElementById('rgb_r_a');
var iG_a = document.getElementById('rgb_g_a');
var iB_a = document.getElementById('rgb_b_a');

var color_a = document.getElementById('colorPickerA');

var iHex_b = document.getElementById('hex_b');
var iR_b = document.getElementById('rgb_r_b');
var iG_b = document.getElementById('rgb_g_b');
var iB_b = document.getElementById('rgb_b_b');

var spectrumColor_A;
var spectrumColor_B;


var color_b = document.getElementById('colorPickerB');

// convert a hexidecimal color string to 0..255 R,G,B
hex2rgb = function(hex){

    var validHexString = hex.replace("#", "0x") ;
    hexval = parseInt(validHexString);
    var r = hexval >> 16;
    var g = hexval >> 8 & 0xFF;
    var b = hexval & 0xFF;
    return [r,g,b];
}

function InitializeColorSpectrums() {
    spectrumColor_A = $(flatSpsectrum_a).spectrum({
        flat: true,
        showAlpha: true,
        allowAlpha: true,
        showPalette: true,
        showButtons: false,
        clickoutFiresChange: true
    });

    spectrumColor_B = $(flatSpsectrum_b).spectrum({
        flat: true,
        showAlpha: true ,
        allowAlpha: true,
        showPalette: true,
        showButtons: false,
        clickoutFiresChange: true
    });
}

function updateInputs_A(hex) {

     var rgb = hex2rgb(hex);


     iHex_a.value = hex;

     iR_a.value = rgb[0];
     iG_a.value = rgb[1];
     iB_a.value = rgb[2];


    color_a.style.backgroundColor = hex;

}

function updateInputs_B(hex) {

    var rgb = hex2rgb(hex);

    iHex_b.value = hex;

    iR_b.value = rgb[0];
    iG_b.value = rgb[1];
    iB_b.value = rgb[2];

    color_b.style.backgroundColor = hex;
}

function updateSpectrum_A(hexColorVal) {
    var newTinyColor = tinycolor({r: iR_a.value,  g: iG_a.value, b: iB_a.value});
    spectrumColor_A.spectrum("set", hexColorVal);

}

function updateSpectrum_B(hexColorVal) {
    var newTinyColor = tinycolor({r: iR_b.value,  g: iG_b.value, b: iB_b.value});
    spectrumColor_B.spectrum("set", hexColorVal);

}

function updateColorA(hexColorVal) {
    updateColorPickerA(hexColorVal);
    updatePanelsColorA(hexColorVal);
    updateInputs_A(hexColorVal);
    updateSpectrum_A(hexColorVal);
}

function updateColorB(hexColorVal) {
    updateColorPickerB(hexColorVal);
    updatePanelsColorB(hexColorVal);
    updateInputs_B(hexColorVal);
    updateSpectrum_B(hexColorVal);
}

function colorAEventHandlers() {

    iHex_a.onchange = function() {
        var hexColorVal = iHex_a.value;
        updateColorA(hexColorVal);
    };

    iR_a.onchange = function() {
        var newTinyColor = tinycolor({r: iR_a.value,  g: iG_a.value, b: iB_a.value});
        var hexColorVal = newTinyColor.toHex8();
        updateColorA(hexColorVal);
    }
    iG_a.onchange = function() {
        var newTinyColor = tinycolor({r: iR_a.value,  g: iG_a.value, b: iB_a.value});
        var hexColorVal = newTinyColor.toHex8();
        updateColorA(hexColorVal);
    }
    iB_a.onchange = function() {


        var newTinyColor = tinycolor({r: iR_a.value,  g: iG_a.value, b: iB_a.value});
        var hexColorVal = newTinyColor.toHex8();
        updateColorA(hexColorVal);
    }
}

function colorBEventHandlers() {

    iHex_b.onchange = function() {
        var hexColorVal = iHex_b.value;
        updateColorB(hexColorVal);
    };

    iR_b.onchange = function() {
        var newTinyColor = tinycolor({r: iR_b.value,  g: iG_b.value, b: iB_b.value});
        var hexColorVal = newTinyColor.toHex8();
        updateColorB(hexColorVal);
    }
    iG_b.onchange = function() {
        var newTinyColor = tinycolor({r: iR_b.value,  g: iG_b.value, b: iB_b.value});
        var hexColorVal = newTinyColor.toHex8();
        updateColorB(hexColorVal);
    }
    iB_b.onchange = function() {
        var newTinyColor = tinycolor({r: iR_b.value,  g: iG_b.value, b: iB_b.value});
        var hexColorVal = newTinyColor.toHex8();
        updateColorB(hexColorVal);
    }


}

function updatePanelsColorB(hexColorVal) {
    $(panel_1_outer).css('background', hexColorVal);
    $(panel_2_inner).css('background', hexColorVal);
    $(panel_3_outer).css('background', hexColorVal);
    $(panel_4_inner).css('color', hexColorVal);

}

function updatePanelsColorA(hexColorVal) {
    $(panel_1_inner).css('background', hexColorVal);
    $(panel_2_outer).css('background', hexColorVal);
    $(panel_3_inner).css('color', hexColorVal);
    $(panel_4_outer).css('background', hexColorVal);
}

function updateColorPickerB(hex) {

    //cpDefault.setHex(hex);

}
function updateColorPickerA(hex) {

    //cpDefault.setHex(hex);

}