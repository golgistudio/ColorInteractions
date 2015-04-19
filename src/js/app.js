(function(w){
    var $container = $('.offcanvas-bottom'),
        $cHeight = $('.o-content').outerHeight();

    $(document).ready(function() {
        buildCanvas();
        updatePanelsColorB("#819bff") ;
        updatePanelsColorA("#ffd238") ;
        updateInputs_B("#819bff");
        updateInputs_A("#ffd238");
        colorAEventHandlers();
        colorBEventHandlers();
        var textValue = $(sampleText).val();
        updatePanelText(textValue);

        $(sampleText).on("change", function() {
            var textValue = $(sampleText).val();
            updatePanelText(textValue);
        }  ) ;


    });

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