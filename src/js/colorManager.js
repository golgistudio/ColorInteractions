

function ColorWidget () {
    this.name = null;
    this.hex = null;
    this.red = null;
    this.green = null;
    this.blue = null;
    this.opacity = null;
    this.spectrum = null;
    this.colorSwatch = null;
    this.textPanel = null;
    this.panel1 = null;
    this.panel2 = null;
    this.panel3 = null;
}


function handleHexChange(colorWidgetItem) {
    var newTinyColor = tinycolor(colorWidgetItem.hex.value);
    newTinyColor._a = colorWidgetItem.opacity.value;
    updateColor(newTinyColor, colorWidgetItem);
}

function handleRGBAChange(colorWidgetItem) {
    var newTinyColor = tinycolor({r: colorWidgetItem.red.value,  g: colorWidgetItem.green.value, b: colorWidgetItem.blue.value, a: colorWidgetItem.opacity.value});
    updateColor(newTinyColor, colorWidgetItem);
}

function spectrumUpdate(tinyColor, colorWidgetItem ) {
    updateColorNoSpectrum(tinyColor, colorWidgetItem);

}
function updateColorNoSpectrum(tinyColor, colorWidgetItem) {
    updateColorPicker(tinyColor, colorWidgetItem);
    updatePanelsColor(tinyColor, colorWidgetItem);
    updateInputs(tinyColor, colorWidgetItem);
}

function updateColor(tinyColor, colorWidgetItem) {
    updateColorNoSpectrum(tinyColor, colorWidgetItem);
    updateSpectrum(tinyColor, colorWidgetItem);
}

// only set the values if they are different
function updateInputs(tinyColor, colorWidgetItem) {

    var hexVal =   tinyColor.toHexString(false);
    if (hexVal !== colorWidgetItem.hex.value) {
        colorWidgetItem.hex.value = hexVal;
    }

    var colorVal =  Math.round(tinyColor._r);
    if (colorVal !== colorWidgetItem.red.value ) {
        colorWidgetItem.red.value = colorVal;
    }

    var colorVal =  Math.round(tinyColor._g);
    if (colorVal !== colorWidgetItem.green.value ) {
        colorWidgetItem.green.value = colorVal;
    }

    var colorVal =  Math.round(tinyColor._b);
    if (colorVal !== colorWidgetItem.blue.value ) {
        colorWidgetItem.blue.value = colorVal;
    }

    var colorVal =  tinyColor._a;
    if (colorVal !== colorWidgetItem.opacity.value ) {
        colorWidgetItem.opacity.value = colorVal;
    }
}

function updateColorPicker(tinyColor, colorWidgetItem) {
    colorWidgetItem.colorSwatch.style.backgroundColor = "rgba(" + Math.round(tinyColor._r) + ", " + Math.round(tinyColor._g) + ", " + Math.round(tinyColor._b) + ", " + tinyColor._a + ")";
}

function updatePanelsColor(tinyColor, colorWidgetItem) {
    var rgbaVal = "rgba(" + Math.round(tinyColor._r) + ", " + Math.round(tinyColor._g) + ", " + Math.round(tinyColor._b) + ", " + tinyColor._a + ")";

    if (colorWidgetItem.name === "colorA") {
        $("#panel_1_inner").css('background-color', rgbaVal);
        $("#panel_2_outer").css('background-color', rgbaVal);
        $("#panel_3_inner").css('color', rgbaVal);
        $("#panel_4_outer").css('background-color', rgbaVal);
    } else {
        $("#panel_1_outer").css('background-color', rgbaVal);
        $("#panel_2_inner").css('background-color', rgbaVal);
        $("#panel_3_outer").css('background-color', rgbaVal);
        $("#panel_4_inner").css('color', rgbaVal);
    }
}

function updateSpectrum(tinyColor, colorWidgetItem) {
    colorWidgetItem.spectrum.spectrum("set", tinyColor);
}





