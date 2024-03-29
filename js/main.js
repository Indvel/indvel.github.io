var current = 0;

        $(function() {
            $('#cover').addClass('loaded');
            drawStars();

            if(window.innerWidth <= 640) {
                $('.profile').text('PROF');
                $('.develops').text('DEVS');
                $('.designs').text('DES');
                $('.certificates').text('CERTS');
            }

            $('.innerContent').load('./html/profile.html');
            setState();
            $('.innerContent').css('opacity', '100%');
        });

        $('.profile').click(function() {
            if(current != 0) {
                $('.innerContent').load('./html/profile.html');
                current = 0;
                setState();
            }
        });

        $('.develops').click(function() {
            if(current != 1) {
                $('.innerContent').load('./html/develops.html');
                current = 1;
                setState();
            }
        });

        $('.designs').click(function() {
            if(current != 2) {
                $('.innerContent').load('./html/designs.html');
                current = 2;
                setState();
            }
        });

        $('.certificates').click(function() {
            if(current != 3) {
                $('.innerContent').load('./html/certificates.html');
                current = 3;
                setState();
            }
        });

        function setState() {
            switch(current) {
                case 0:
                    $('.profile').css('border-bottom', '4px solid gold');
                    $('.develops').css('border-bottom', '4px solid lightgray');
                    $('.designs').css('border-bottom', '4px solid lightgray');
                    $('.certificates').css('border-bottom', '4px solid lightgray');
                    break;
                case 1:
                    $('.profile').css('border-bottom', '4px solid lightgray');
                    $('.develops').css('border-bottom', '4px solid gold');
                    $('.designs').css('border-bottom', '4px solid lightgray');
                    $('.certificates').css('border-bottom', '4px solid lightgray');
                    break;
                case 2:
                    $('.profile').css('border-bottom', '4px solid lightgray');
                    $('.develops').css('border-bottom', '4px solid lightgray');
                    $('.designs').css('border-bottom', '4px solid gold');
                    $('.certificates').css('border-bottom', '4px solid lightgray');
                    break;
                case 3:
                    $('.profile').css('border-bottom', '4px solid lightgray');
                    $('.develops').css('border-bottom', '4px solid lightgray');
                    $('.designs').css('border-bottom', '4px solid lightgray');
                    $('.certificates').css('border-bottom', '4px solid gold');
                    break;

            }
        }

        /*Night Stars background code by https://devjaewoo.tistory.com/8*/

        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        var MAX_PARTICLES = (WIDTH * HEIGHT) / 30000;
        var DRAW_INTERVAL = 60;
        var canvas = document.querySelector('.background');
        var context = canvas.getContext('2d');
        var gradient = null;
        var pixies = new Array();

        function setDimensions(e) {
            WIDTH = window.innerWidth;
            HEIGHT = window.innerHeight;
            MAX_PARTICLES = (WIDTH * HEIGHT) / 20000;
            canvas.width = WIDTH;
            canvas.height = HEIGHT;
            //console.log("Resize to " + WIDTH + "x" + HEIGHT);
        }

        setDimensions();
        window.addEventListener('resize', () => {
            setDimensions();
            drawStars();
        });

        function Circle() {

            this.settings = {ttl:8000, xmax:5, ymax:2, rmin:8, rmax:15, drt:1};

            this.reset = function() {
                this.x = WIDTH*Math.random();                                                   //X 위치 랜덤 (0 ~ WIDTH)
                this.y = HEIGHT*Math.random();                                                  //Y 위치 랜덤 (0 ~ HEIGHT)
                this.r = ((this.settings.rmax-1)*Math.random()) + 1;                            //반지름 크기 랜덤 (1 ~ rmax)
                this.dx = (Math.random()*this.settings.xmax) * (Math.random() < .5 ? -1 : 1);   //X 이동거리 랜덤 (-xmax ~ xmax)
                this.dy = (Math.random()*this.settings.ymax) * (Math.random() < .5 ? -1 : 1);   //Y 이동거리 랜덤 (-ymax ~ ymax)
                this.hl = (this.settings.ttl/DRAW_INTERVAL)*(this.r/this.settings.rmax);        //총 생존 시간 (반지름 크기에 비례)
                this.rt = 0;                                                                    //현재 생존 시간 (0 -> hl -> 0)
                this.settings.rt = Math.random()+1;                                             //노화 속도 (1 ~ 2)
                this.stop = Math.random()*.2+.4;                                                //음영 범위 (0.4 ~ 0.6)
            }

            this.fade = function() {
                this.rt += this.settings.rt;    //노화 진행

                if(this.rt >= this.hl) {
                    this.rt = this.hl;
                    this.settings.rt = this.settings.rt*-1;
                } else if(this.rt < 0) {
                    this.reset();               //수명이 다하면 새로운 위치에 생성
                }
            }

            this.draw = function() {
                var newo = (this.rt/this.hl); //밝기 (0 ~ 1) 
                context.beginPath();
                context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);  //(x, y) 좌표에 반지름 r 크기의 원 그림
                context.closePath();
                var cr = this.r*newo; //밝기에 따른 반지름
                gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr < this.settings.rmin) ? this.settings.rmin : cr); 
                gradient.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
                gradient.addColorStop(this.stop, 'rgba(190,191,196,'+(newo*.6)+')');
                gradient.addColorStop(1.0, 'rgba(233,233,233,0)');
                context.fillStyle = gradient;
                context.fill();
            }

            this.move = function() {
                this.x += (1 - this.rt/this.hl)*this.dx;
                this.y += (1 - this.rt/this.hl)*this.dy;
                if(this.x > WIDTH || this.x < 0) this.dx *= -1;
                if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
            }
        }

        function draw() {
    
            context.clearRect(0, 0, WIDTH, HEIGHT);

            for(var i=pixies.length; i<MAX_PARTICLES; i++) {
                pixies.push(new Circle());
                pixies[i].reset();
            }

            for(var i = 0; i < MAX_PARTICLES; i++) {
                pixies[i].fade();
                pixies[i].move();
                pixies[i].draw();
            }
        }

        setInterval(draw, DRAW_INTERVAL);

        /*Night Sky background by https://fumbling.tistory.com/entry/%EB%B0%A4%ED%95%98%EB%8A%98-%EA%B7%B8%EB%A6%AC%EA%B8%B0-Css-Jquery1*/
        function drawStars() {
            var ww = $(window).width();
            var wh = $(window).height();

            $('#upper').html('');
            $('#lower').html('');

            for(var i = 0; i < 1000; i++) {
                var toLeft = Math.round(Math.random() * ww);
                var toTop = Math.round((Math.random() * wh) / 2);

                $('<div/>')
                    .addClass('star-sm')
                    .attr('style', 'top: ' + toTop + 'px; left: ' + toLeft + 'px')
                    .appendTo('#upper');

                if(i % 5 == 0) {
                    $('<div/>')
                    .addClass('star-md')
                    .attr('style', 'top: ' + toTop + 'px; left: ' + toLeft + 'px')
                    .appendTo('#upper'); 
                } else if(i % 25 == 0) {
                    $('<div/>')
                    .addClass('star-lg')
                    .attr('style', 'top: ' + toTop + 'px; left: ' + toLeft + 'px')
                    .appendTo('#upper');
                }
            }

            for(var i = 0; i < 500; i++) {
                var toLeft = Math.round(Math.random() * ww);
                var toTop = Math.round((Math.random() * wh) / 2);

                $('<div/>')
                    .addClass('star-sm')
                    .attr('style', 'top: ' + toTop + 'px; left: ' + toLeft + 'px')
                    .appendTo('#lower');

                if(i % 5 == 0) {
                    $('<div/>')
                    .addClass('star-md')
                    .attr('style', 'top: ' + toTop + 'px; left: ' + toLeft + 'px')
                    .appendTo('#lower'); 
                } else if(i % 25 == 0) {
                    $('<div/>')
                    .addClass('star-lg')
                    .attr('style', 'top: ' + toTop + 'px; left: ' + toLeft + 'px')
                    .appendTo('#lower');
                }
            }
        }