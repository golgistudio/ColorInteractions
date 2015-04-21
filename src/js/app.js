(function(w){
    var $container = $('.offcanvas-bottom'),
        $cHeight = $('.o-content').outerHeight();

    $(document).ready(function() {
        buildCanvas();

        InitializeColorSpectrums();

        $(flatSpsectrum).spectrum({
            flat: true,
            showInput: true,
            showPalette: true,
            showButtons: false,
            clickoutFiresChange: true
        });


        updateColorA("#ffd238");
        updateColorB("#819bff");
        updateBackground("#DDDDDD");

        colorAEventHandlers();
        colorBEventHandlers();

        var textValue = $(sampleText).val();
        updatePanelText(textValue);

        $(sampleText).on("change", function() {
            var textValue = $(sampleText).val();
            updatePanelText(textValue);
        }  ) ;


        // Recalculate after adding color pickers
        $cHeight = $('.o-content').outerHeight();

        $(flatSpsectrum).on('move.spectrum', function(e, tinyColor) {
            var hexVal = tinyColor.toHexString();
            updateBackground(hexVal);
        });

        $(flatSpsectrum_a).on('move.spectrum', function(e, tinyColor) {
            var hexVal = tinyColor.toHexString();
            updateColorA(hexVal);

        });

        $(flatSpsectrum_b).on('move.spectrum', function(e, tinyColor) {
            var hexVal = tinyColor.toHexString();
            updateColorB(hexVal);

        });

        $("#imgInp").change(function(){
            readURL(this);
        });


    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var div0 = document.getElementById('containerBackground');
                div0.style.backgroundImage = "url(" + e.target.result + ")";
                div0.style.backgroundSize = "cover";
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    function updateBackground(hexVal) {
        $(containerBackground).css('background', hexVal);
        var backgroundColor = document.getElementById('colorPickerBackground');
        backgroundColor.style.backgroundColor = hexVal;
        $(flatSpsectrum).spectrum("set", hexVal);
    }

    function updatePanelText(textValue) {
        $(panel_3_inner).html(textValue);
        $(panel_4_inner).html(textValue);

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
        console.log($cHeight);
    });


})(this);