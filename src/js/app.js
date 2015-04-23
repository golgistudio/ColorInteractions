(function(w){
    var $container = $('.offcanvas-bottom'),
        $cHeight = $('.o-content').outerHeight();

    var colorWidgetA;
    var colorWidgetB;

    $(document).ready(function() {
        $(document).foundation();

        buildCanvas();

        InitializeColorWidgetA();
        InitializeColorWidgetB();

        InitializeBackgroundSpectrum();

        InitializeTextWidget();

        // Recalculate after adding color pickers
        $cHeight = $('.o-content').outerHeight();

        // Background image event handler
        $("#imgInp").change(function(){
            readURL(this);
        });


    });


    function  InitializeColorWidgetA() {
        colorWidgetA = new ColorWidget();
        colorWidgetA.name = "colorA";
        colorWidgetA.hex = document.getElementById('hex_a');
        colorWidgetA.red = document.getElementById('rgb_r_a');
        colorWidgetA.green = document.getElementById('rgb_g_a');
        colorWidgetA.blue = document.getElementById('rgb_b_a');
        colorWidgetA.opacity = document.getElementById('opacity_a');
        colorWidgetA.colorSwatch = document.getElementById('colorPickerA');
        colorWidgetA.spectrum = $("#flatSpectrum_a");

        // Initialize spectrum
        InitializeColorSpectrum(colorWidgetA);

        // Set initial color
        colorWidgetA.hex.value = "#ffd238" ;
        colorWidgetA.opacity.value = "1.0";
        handleHexChange(colorWidgetA);

        // Set up event handlers
        colorEventHandlerA();
    }

    function  InitializeColorWidgetB() {
        colorWidgetB = new ColorWidget();
        colorWidgetB.name = "colorB";
        colorWidgetB.hex = document.getElementById('hex_b');
        colorWidgetB.red = document.getElementById('rgb_r_b');
        colorWidgetB.green = document.getElementById('rgb_g_b');
        colorWidgetB.blue = document.getElementById('rgb_b_b');
        colorWidgetB.opacity = document.getElementById('opacity_b');
        colorWidgetB.colorSwatch = document.getElementById('colorPickerB');
        colorWidgetB.spectrum = $("#flatSpectrum_b");

        // Initialize spectrum
        InitializeColorSpectrum(colorWidgetB);

        // Set initial color
        colorWidgetB.hex.value = "#819bff" ;
        colorWidgetB.opacity.value = "1.0";

        handleHexChange(colorWidgetB);

        // Set up event handlers
        colorEventHandlerB();
    }


    function InitializeColorSpectrum(colorWidget) {
        colorWidget.spectrum.spectrum({
            flat: true,
            showAlpha: true,
            allowAlpha: true,
            showPalette: true,
            showButtons: false,
            clickoutFiresChange: true
        });

    }

    function colorEventHandlerA() {

        colorWidgetA.hex.onchange = function () {
            handleHexChange(colorWidgetA);
        };

        colorWidgetA.red.onchange = function () {
            handleRGBAChange(colorWidgetA);
        };
        colorWidgetA.green.onchange = function () {
            handleRGBAChange(colorWidgetA);
        };
        colorWidgetA.blue.onchange = function () {
            handleRGBAChange(colorWidgetA);
        };
        colorWidgetA.opacity.onchange = function () {
            handleRGBAChange(colorWidgetA);
        };

        colorWidgetA.spectrum.on('move.spectrum', function (e, tinyColor) {
            spectrumUpdate(tinyColor, colorWidgetA);
        });
    }

    function colorEventHandlerB() {

        colorWidgetB.hex.onchange =  function() {
            handleHexChange(colorWidgetB);
        };

        colorWidgetB.red.onchange = function() {
            handleRGBAChange(colorWidgetB);
        };
        colorWidgetB.green.onchange =  function() {
            handleRGBAChange( colorWidgetB);
        };
        colorWidgetB.blue.onchange =  function() {
            handleRGBAChange(colorWidgetB);
        };
        colorWidgetB.opacity.onchange =  function() {
            handleRGBAChange(colorWidgetB);
        };

        colorWidgetB.spectrum.on('move.spectrum', function(e, tinyColor) {
            spectrumUpdate(tinyColor, colorWidgetB);
        });

    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var div0 = document.getElementById('containerBackground');
                div0.style.backgroundImage = "url(" + e.target.result + ")";
                div0.style.backgroundSize = "cover";
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    function InitializeBackgroundSpectrum() {
        var flatSpectrumElement =  $("#flatSpectrum");

        flatSpectrumElement.spectrum({
            flat: true,
            showInput: true,
            showPalette: true,
            showButtons: false,
            clickoutFiresChange: true
        });

        updateBackground("#DDDDDD");

        flatSpectrumElement.on('move.spectrum', function(e, tinyColor) {
            updateBackgroundNoSpectrum(tinyColor);
        });
    }

    function updateBackground(hexVal) {
        updateBackgroundNoSpectrum( hexVal);
        $("#flatSpectrum").spectrum("set", hexVal);
    }

    function updateBackgroundNoSpectrum(hexVal) {
        $("#containerBackground").css('background', hexVal);
        var backgroundColor = document.getElementById('colorPickerBackground');
        backgroundColor.style.backgroundColor = hexVal;
    }

    function InitializeTextWidget() {

        var textElement = $("#sampleText");
        var textValue = textElement.val();
        updatePanelText(textValue);

        textElement.on("change", function () {
            var textValue = $("#sampleText").val();
            updatePanelText(textValue);
        });
    }

    function updatePanelText(textValue) {
        $("#panel_3_inner").html(textValue);
        $("#panel_4_inner").html(textValue);
    }

    function buildCanvas() {
        $('<a href="#" id="trigger">More +</a>').appendTo($container);

        $('#trigger').bind('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $container.toggleClass('active');
            if($container.hasClass('active')) {

                $container.height($cHeight);
                $this.text('Hide -');
            } else {
                $container.height(50);
                $this.text('More +');
            }
        });

    }

    $(window).resize(function() { //On Window resizeBy(
        $cHeight = $('.o-content').outerHeight();
    });


})(this);