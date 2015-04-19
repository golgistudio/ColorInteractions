/**
 * Created by laurie on 4/18/2015.
 */

var iHex_a = document.getElementById('hex_a');
var iR_a = document.getElementById('rgb_r_a');
var iG_a = document.getElementById('rgb_g_a');
var iB_a = document.getElementById('rgb_b_a');
var iH_a = document.getElementById('hsv_h_a');
var iS_a = document.getElementById('hsv_s_a');
var iV_a = document.getElementById('hsv_v_a');

var rgbCSS_a = document.getElementById('rgb_css_a');
var hsvCSS_a = document.getElementById('hsv_css_a');

var color_a = document.getElementById('colorPickerA');

var iHex_b = document.getElementById('hex_b');
var iR_b = document.getElementById('rgb_r_b');
var iG_b = document.getElementById('rgb_g_b');
var iB_b = document.getElementById('rgb_b_b');
var iH_b = document.getElementById('hsv_h_b');
var iS_b = document.getElementById('hsv_s_b');
var iV_b = document.getElementById('hsv_v_b');

var rgbCSS_b = document.getElementById('rgb_css_b');
var hsvCSS_b = document.getElementById('hsv_css_b');

var color_b = document.getElementById('colorPickerB');


function updateInputs_A(hex) {

     var rgb = ColorPicker.hex2rgb(hex);
     var hsv = ColorPicker.hex2hsv(hex);

     iHex_a.value = hex;

     iR_a.value = rgb.r;
     iG_a.value = rgb.g;
     iB_a.value = rgb.b;

     iH_a.value = hsv.h.toFixed(2);
     iS_a.value = hsv.s.toFixed(2);
     iV_a.value = hsv.v.toFixed(2);

     rgbCSS_a.innerHTML = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
     hsvCSS_a.innerHTML = 'hsv(' + hsv.h.toFixed(2) + ', ' + hsv.s.toFixed(2) + ', ' + hsv.v.toFixed(2) + ')';

    color_a.style.backgroundColor = hex;

}

function updateInputs_B(hex) {

    var rgb = ColorPicker.hex2rgb(hex);
    var hsv = ColorPicker.hex2hsv(hex);

    iHex_b.value = hex;

    iR_b.value = rgb.r;
    iG_b.value = rgb.g;
    iB_b.value = rgb.b;

    iH_b.value = hsv.h.toFixed(2);
    iS_b.value = hsv.s.toFixed(2);
    iV_b.value = hsv.v.toFixed(2);

    rgbCSS_b.innerHTML = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
    hsvCSS_b.innerHTML = 'hsv(' + hsv.h.toFixed(2) + ', ' + hsv.s.toFixed(2) + ', ' + hsv.v.toFixed(2) + ')';

    color_b.style.backgroundColor = hex;

}

function colorAEventHandlers() {

    iHex_a.onchange = function() {
        var hexColorVal = iHex_a.value;
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    };

    iR_a.onchange = function() {
        var hexColorVal = ColorPicker.rgb2hex({ r: iR_a.value, g: iG_a.value, b: iB_a.value });
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    }
    iG_a.onchange = function() {
        var hexColorVal = ColorPicker.rgb2hex({ r: iR_a.value, g: iG_a.value, b: iB_a.value });
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    }
    iB_a.onchange = function() {
        var hexColorVal = ColorPicker.rgb2hex({ r: iR_a.value, g: iG_a.value, b: iB_a.value });
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    }

    iH_a.onchange = function() {
        var hexColorVal = ColorPicker.hsv2hex({ h: iH_a.value, s: iS_a.value, v: iV_a.value });
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    }
    iS_a.onchange = function() {
        var hexColorVal = ColorPicker.hsv2hex({ h: iH_a.value, s: iS_a.value, v: iV_a.value });
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    }
    iV_a.onchange = function() {
        var hexColorVal = ColorPicker.hsv2hex({ h: iH_a.value, s: iS_a.value, v: iV_a.value });
        updateColorPickerA(hexColorVal);
        updatePanelsColorA(hexColorVal);
        updateInputs_A(hexColorVal);
    }

}

function colorBEventHandlers() {


    iHex_b.onchange = function() {
        var hexColorVal = iHex_b.value;
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
    };

    iR_b.onchange = function() {
        var hexColorVal = ColorPicker.rgb2hex({ r: iR_b.value, g: iG_b.value, b: iB_b.value });
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
    }
    iG_b.onchange = function() {
        var hexColorVal = ColorPicker.rgb2hex({ r: iR_b.value, g: iG_b.value, b: iB_b.value });
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
    }
    iB_b.onchange = function() {
        var hexColorVal = ColorPicker.rgb2hex({ r: iR_b.value, g: iG_b.value, b: iB_b.value });
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
    }

    iH_b.onchange = function() {
        var hexColorVal = ColorPicker.hsv2hex({ h: iH_b.value, s: iS_b.value, v: iV_b.value });
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
    }
    iS_b.onchange = function() {
        var hexColorVal = ColorPicker.hsv2hex({ h: iH_b.value, s: iS_b.value, v: iV_b.value });
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
    }
    iV_b.onchange = function() {
        var hexColorVal = ColorPicker.hsv2hex({ h: iH_b.value, s: iS_b.value, v: iV_b.value });
        updateColorPickerB(hexColorVal);
        updatePanelsColorB(hexColorVal);
        updateInputs_B(hexColorVal);
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