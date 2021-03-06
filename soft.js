const linkText = document.querySelector('.link-text');
const linkImage = document.querySelector('.link-image');

function showImgContent(e) {
    x = e.clientX;
    y = e.clientY;
    linkImage.style.transform = `translate3d(${x-600}px, ${y}px, 0)`;
    linkText.style.setProperty('--x', (x) + 'px');
    linkText.style.setProperty('--y', (y) + 'px');
}

document.addEventListener('mousemove', showImgContent);
//header img fade on scroll
$(window).scroll(function() {
    $(".wrapper").css("opacity", 1 - $(window).scrollTop() / 600);
});



//typewriter
if (document.documentElement.clientWidth > 480) {

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    //show/hide form
    $("#button1").click(function() {
        $("#form1").show();
        $("#button1").hide();
    });

    $("#submit1").click(function() {
        $("#form1").hide();
        $("#button1").show();
    });
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}