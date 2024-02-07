(function($) {
    var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);



//2
(function($) {
    var $dragMe = $(".dragme2"),
    $container = $(".sl-container2"),
    $viewAfter = $(".view-after2");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);



//3
(function($) {
    var $dragMe = $(".dragme3"),
    $container = $(".sl-container3"),
    $viewAfter = $(".view-after3");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);


//4
(function($) {
    var $dragMe = $(".dragme4"),
    $container = $(".sl-container4"),
    $viewAfter = $(".view-after4");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);



//5
(function($) {
    var $dragMe = $(".dragme5"),
    $container = $(".sl-container5"),
    $viewAfter = $(".view-after5");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);



//6

(function($) {
    var $dragMe = $(".dragme6"),
    $container = $(".sl-container6"),
    $viewAfter = $(".view-after6");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);

