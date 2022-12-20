// basic canvas elements
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
// audios for GD-neel 
var s7_1 = new Audio('css/slide7_1.mp3');
var s7_4 = new Audio('css/slide7_4.mp3');
var s7_6 = new Audio('css/slide7_6.mp3');
var s7q2 = new Audio('css/slide7_Q2.mp3');
var s7q3 = new Audio('css/slide7_Q3.mp3');
var s7q4 = new Audio('css/slide7_Q4.mp3');
var s7q5 = new Audio('css/slide7_Q5.mp3');
var s8q1 = new Audio('css/slide8_Q1.mp3');
var s8q2 = new Audio('css/slide8_Q2.mp3');
var s8q3 = new Audio('css/slide8_Q3.mp3');
var s8q4 = new Audio('css/slide8_Q4.mp3');
var s8q5 = new Audio('css/slide8_Q10.mp3');
var s9q1 = new Audio('css/slide9_Q1.mp3');
var s9q2 = new Audio('css/slide9_Q2.mp3');
var s9q3 = new Audio('css/slide9_Q3.mp3');
var s9q4 = new Audio('css/slide9_Q4.mp3');
var s9q5 = new Audio('css/slide9_Q5.mp3');
var s10_1_t = new Audio('css/slide10_1_theory.mp3');
var s10_2_t = new Audio('css/slide10_2_theory.mp3');
var s10_3_t = new Audio('css/slide10_3_theory.mp3');
var s10_4_t = new Audio('css/slide10_4_theory.mp3');
var s10q1 = new Audio('css/slide10_Q1.mp3');
var s10q2 = new Audio('css/slide10_Q2.mp3');
var s10q3 = new Audio('css/slide10_Q3.mp3');
var s10q4 = new Audio('css/slide10_Q4.mp3');
var s33_1_t = new Audio('css/slide33_q1_theory.mp3');
var s33_2_t = new Audio('css/slide33_q2_theory.mp3'); //CHANGE THE TIME DURATION
var s33_3_t = new Audio('css/slide33_q3_theory.mp3');
var s33_4_t = new Audio('css/slide33_q4_theory.mp3');
var s33q1 = new Audio('css/slide33_q1.mp3');
var s33q2 = new Audio('css/slide33_q2.mp3');
var s33q3 = new Audio('css/slide33_q2.mp3');
var s33q4 = new Audio('css/slide33_q4.mp3');
var s11_t = new Audio('css/slide11_theory.mp3');
var s11q1 = new Audio('css/slide11_q1.mp3');
var s11q2 = new Audio('css/slide11_q2.mp3');
var s11q3 = new Audio('css/slide11_q3.mp3');
var bavg_c = new Audio('css/bavg_comment.mp3'); //change the time duration
var avg_c = new Audio('css/avg_comment.mp3'); //CHANGE THE TIME DURATION 
var good_c = new Audio('css/good_comment.mp3'); //change the time duration 
var vgood_c = new Audio('css/vgood_comment.mp3'); //CHANGE THE DURATION TIME 
var exc_c = new Audio('css/excellent_comment.mp3'); //CHANGE THE TIME DURATION 
//audios for PI-shubham
//basic
var wlcm = new Audio('css/slide14_1.mp3');
var r_ans = new Audio('css/right_option.mp3');
var w_ans = new Audio('css/wrong_option.mp3');
var excellent = new Audio('css/excellent.mp3');
var good = new Audio('css/good.mp3');
var satisfactory = new Audio('css/satisfactory.mp3');
var s19Bavg = new Audio('css/ressult_below_average_PI.mp3');
var s19avg = new Audio('css/result_average_PI.mp3');
var s19good = new Audio('css/result_good_PI.mp3');
var s19Vgood = new Audio('css/result_very_good_pi.mp3');
var s19exe = new Audio('css/result_excellent_PI.mp3');
//lvl1
var s14q1 = new Audio('css/slide14_q1.mp3');
var s14q2 = new Audio('css/slide14_q2.mp3');
var s14q4 = new Audio('css/slide14_q4.mp3');
var s14_sq1 = new Audio('css/slide14_sq1.mp3');
var s14_sq2 = new Audio('css/slide14_sq2.mp3');
var s14_sq3 = new Audio('css/slide14_sq3.mp3');
var s35q1 = new Audio('css/slide35_q1.mp3');
var s35q2 = new Audio('css/slide35_q2.mp3');
var s15q6 = new Audio("css/slide15_q6.mp3");
var s15q7 = new Audio("css/slide15_q7.mp3");
var s15q8 = new Audio("css/slide15_q8.mp3");
var s15q9 = new Audio("css/slide15_q9.mp3");
var s15q10 = new Audio("css/slide15_q10.mp3");
//lvl2
var s16q3 = new Audio('css/slide16_q3.mp3');
var s16q4 = new Audio('css/slide16_q4.mp3');
var s16q5 = new Audio('css/slide16_q5.mp3');
var s39q4 = new Audio('css/slide39_q4.mp3');
var s39q5 = new Audio('css/slide39_q5.mp3');
//lvl3
var s17th11 = new Audio('css/slide17_case_study1.mp3');
var s17th12 = new Audio('css/slide17_case_study1_th2.mp3');
var s17th13 = new Audio('css/slide17_case_study1_th3.mp3');
var s17q1 = new Audio('css/slide17_q1.mp3');
var s17q2 = new Audio('css/slide17_q2.mp3');
var s17q3 = new Audio('css/slide17_q3.mp3');
var s17q4 = new Audio('css/slide17_q4.mp3');
var s42th21 = new Audio('css/slide42_case2.mp3');
var s42th22 = new Audio('css/slide42_case2_th2.mp3');
var s42q1 = new Audio('css/slide42_q1.mp3');
var s42q2 = new Audio('css/slide42_q2.mp3');
var s42q3 = new Audio('css/slide42_q3.mp3');
var s42q4 = new Audio('css/slide42_q4.mp3');
var s42q5 = new Audio('css/slide42_q5.mp3');
//lvl4
var s18th = new Audio("css/slide18th.mp3");
var s18q1 = new Audio("css/slide18q1.mp3");
var s18q2 = new Audio("css/slide18q2.mp3");
var s18q3 = new Audio("css/slide18q3.mp3");
// declaring variables for PS - Keyur
var s21q1 = new Audio('css/slide21_q1.mp3');
var s21q2 = new Audio('css/slide21_q2.mp3');
var s21q3 = new Audio('css/slide21_q3.mp3');
var s21q4 = new Audio('css/slide21_q4.mp3');
var s21q5 = new Audio('css/slide21_q5.mp3');
var s21sq1 = new Audio('css/slide21_sq1.mp3');
var s21sq2 = new Audio('css/slide21_sq2.mp3');
var s21sq3 = new Audio('css/slide21_sq3.mp3');
var s22q6 = new Audio('css/slide22_q6.mp3');
var s22q7 = new Audio('css/slide22_q7.mp3');
var s22q8 = new Audio('css/slide22_q8.mp3');
var s22q9 = new Audio('css/slide22_q9.mp3');
var s22q10 = new Audio('css/slide22_q10.mp3');
var s23q1 = new Audio('css/slide23_q1.mp3');
var s23q2 = new Audio('css/slide23_q2.mp3');
var s23q3 = new Audio('css/slide23_q3.mp3');
var s23q4 = new Audio('css/slide23_q4.mp3');
var s24c1 = new Audio('css/slide24_ravi_was.mp3');
var s24exc1 = new Audio('css/slide24_excerpt_1.mp3');
var s24exc2 = new Audio('css/slide24_excerpt_2.mp3');
var s24qu1 = new Audio('css/slide24_one_suggestion.mp3');
var s24qu2 = new Audio('css/slide24_he_started.mp3');
var s24qu3 = new Audio('css/slide24_q3.mp3');
var s24q1 = new Audio('css/slide24_q1.mp3');
var s24q2 = new Audio('css/slide24_q2.mp3');
var s24q4 = new Audio('css/slide24_q4.mp3');
var s25tc1 = new Audio('css/slide25_let_us.mp3');
var s25q1 = new Audio('css/slide25_q1.mp3');
var s25q2 = new Audio('css/slide25_q2.mp3');
var s25q3 = new Audio('css/slide25_q3.mp3');
var s49q1 = new Audio('css/slide49_q1.mp3');
var s49q2 = new Audio('css/slide49_q2.mp3');
var s49q3 = new Audio('css/slide49_q3.mp3');
var s49q4 = new Audio('css/slide49_q4.mp3');
var s49q5 = new Audio('css/slide49_q5.mp3');
var s49c2 = new Audio('css/slide49_c2.mp3');
var s49qu1 = new Audio('css/slide49_c2quo1.mp3');
var s49qu2 = new Audio('css/slide49_c2quo2.mp3');
var s49qu3 = new Audio('css/slide49_c2quo3.mp3');
//GD, PI - Neel, Shubham
document.getElementById("pi1").style.display = "none";
document.getElementById("gd1").style.display = "none";
//document.getElementById("pi1").style.display="none";
document.getElementById("s2").style.display = "none";
document.getElementById("host1").style.display = "none";
//lvl3
document.getElementById("lady").style.display = "none";
document.getElementById("lvl3").style.display = "none";
//lvl4
document.getElementById("lvl4_1").style.display = "none";
document.getElementById("lvl4_2").style.display = "none";
document.getElementById("lvl4_3").style.display = "none";
document.getElementById("lvl4_4").style.display = "none";
let choose = true;
document.getElementById('PI_self').style.display = "none";
document.getElementById('GD_self').style.display = "none";
// PS - Keyur
var showForm = false;
var squrecontainerfp = [];
function feedbackform() {
    if (showForm) {
        var form = document.getElementById("form-box");
        form.style.display = "block";
        form.focus();
    }
    else {
        var form = document.getElementById("form-box");
        form.style.display = "none";
    }
}
feedbackform();
var PSshowForm = false;
function PSfeedbackform() {
    if (PSshowForm) {
        var form = document.getElementById("form-box1");
        form.style.display = "block";
        form.focus();
    }
    else {
        var form = document.getElementById("form-box1");
        form.style.display = "none";
    }
}
PSfeedbackform();
function Quality() {
    // get current size of the canvas
    let rect = canvas.getBoundingClientRect();
    // increase the actual size of our canvas
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    // ensure all drawing operations are scaled
    context.scale(devicePixelRatio, devicePixelRatio);
    // scale everything down using CSS
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
}
Quality();
function drawMain() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    choose = true;
    let banner = new Geometry.Img(context);
    banner.draw('images/banner.png', 165, 20, 470, 330);
    let gd = new Geometry.Img(context);
    gd.draw('images/gd.jpg', 170, 436, 120, 144);
    let pi = new Geometry.Img(context);
    pi.draw('images/pi.jpg', 340, 436, 120, 144);
    let ps = new Geometry.Img(context);
    pi.draw('images/ps.jpg', 510, 436, 120, 144);
    let gdr = new Geometry.Rectangle(context, new Geometry.Point(170, 436), 120, 144);
    gdr.draw();
    squrecontainerfp.push(gdr);
    let pir = new Geometry.Rectangle(context, new Geometry.Point(340, 436), 120, 144);
    pir.draw();
    squrecontainerfp.push(pir);
    let psr = new Geometry.Rectangle(context, new Geometry.Point(510, 436), 120, 144);
    psr.draw();
    squrecontainerfp.push(psr);
}
drawMain();
canvas.addEventListener("click", rectclickps, false);
var ract = canvas.getBoundingClientRect();
function rectclickps(e) {
    let x = e.clientX - ract.x;
    let y = e.clientY - ract.y;
    let p1 = new Geometry.Point(x, y);
    if (choose) {
        for (let i = 0; i < squrecontainerfp.length; i++) {
            if (squrecontainerfp[0].isInside(p1)) {
                context.clearRect(0, 0, 800, 600);
                choose = false;
                squrecontainerfp = [];
                GD();
                break;
            }
            else if (squrecontainerfp[1].isInside(p1)) {
                context.clearRect(0, 0, 800, 600);
                squrecontainerfp = [];
                choose = false;
                PI();
                break;
            }
            else if (squrecontainerfp[2].isInside(p1)) {
                context.clearRect(0, 0, 800, 600);
                choose = false;
                squrecontainerfp = [];
                PS();
                break;
            }
        }
    }
}
function PS() {
    var EllipseClickEvent = true;
    var btnClickEvent = false;
    var TotalScore = 0;
    function drawVinod() {
        let i1 = new Geometry.Img(context);
        i1.draw('images/host1.png', 645, 328, 96, 230);
    }
    function drawRavi() {
        let imgRavi = new Geometry.Img(context);
        imgRavi.draw('images/host2.png', 645, 328, 96, 230);
    }
    function drawAud() {
        let i2 = new Geometry.Img(context);
        i2.draw('images/audience.png', 230, 292, 230, 209);
    }
    function drawSQ1() {
        let r1 = new Geometry.RecteRound(context, new Geometry.Point(682, 45), 183, 83, 26);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 245), new Geometry.Point(702, 320), new Geometry.Point(660, 245));
        r1.draw();
        t4.draw();
    }
    function drawSim2() {
        var imgravi = new Image();
        imgravi.src = "images/host2.png";
        context.clearRect(0, 0, canvas.width, canvas.height);
        imgravi.onload = function () {
            context.drawImage(imgravi, 650, 328, 95, 230);
        };
        context.drawImage(imgravi, 650, 328, 95, 230);
        let r1 = new Geometry.RecteRound(context, new Geometry.Point(682, 45), 183, 83, 26);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 245), new Geometry.Point(702, 320), new Geometry.Point(660, 245));
        r1.draw();
        t4.draw();
    }
    function clearScreen() {
        context.clearRect(0, 0, 800, 600);
    }
    function rightAns() {
        ellipscontainer = [];
        Level2ellipscontainer = [];
        btnct = [];
        q15container = [];
        clearScreen();
        setTimeout(drawVinod, 1000 * 0.1);
        let ans = setTimeout(function () {
            drawSQ1();
            let s = "Good one!\nYou're right, the\ncorrect answer\nis displayed on\nthe screen.";
            formatQue(s, 710, 115);
            EllipseClickEvent = false;
        }, 1000 * 0.5);
        setTimeout(clearScreen, 1000 * 4.9);
    }
    function wrongAns() {
        ellipscontainer = [];
        Level2ellipscontainer = [];
        btnct = [];
        q15container = [];
        clearScreen();
        setTimeout(drawVinod, 1000 * 0.1);
        let ans = setTimeout(function () {
            drawSQ1();
            let s = "Oops... the\ncorrect answer\nis displayed on\nthe screen.";
            formatQue(s, 710, 124);
            EllipseClickEvent = false;
        }, 1000 * 0.5);
        setTimeout(clearScreen, 1000 * 4.9);
    }
    function rightAnsImg() {
        squrecontainer = [];
        squrecontainer2 = [];
        clearScreen();
        setTimeout(drawRavi, 1000 * 0.1);
        let ans = setTimeout(function () {
            drawSQ1();
            let s = "Good one!\nYou're right, the\ncorrect answer\nis displayed on\nthe screen.";
            formatQue(s, 710, 115);
            EllipseClickEvent = false;
        }, 1000 * 0.5);
        setTimeout(clearScreen, 1000 * 4.9);
    }
    function wrongAnsImg() {
        squrecontainer = [];
        squrecontainer2 = [];
        clearScreen();
        setTimeout(drawRavi, 1000 * 0.1);
        let ans = setTimeout(function () {
            drawSQ1();
            let s = "Oops... the\ncorrect answer\nis displayed on\nthe screen.";
            formatQue(s, 710, 124);
            EllipseClickEvent = false;
        }, 1000 * 0.5);
        setTimeout(clearScreen, 1000 * 4.9);
    }
    function formatOpt(text, startx, starty) {
        let txt = text;
        let x = startx;
        let y = starty;
        let lineheight = 15;
        let lines = txt.split('\n');
        context.font = "14px sans-serif, Helvetica, Arial";
        context.fillStyle = "#000000";
        context.textAlign = "center";
        for (var i = 0; i < lines.length; i++)
            context.fillText(lines[i], x, y + (i * lineheight));
    }
    function formatQue(text, startx, starty) {
        let txt = text;
        let x = startx;
        let y = starty;
        let lineheight = 19;
        let lines = txt.split('\n');
        context.font = "bold 13px sans-serif, Helvetica, Arial";
        context.fillStyle = "#000000";
        context.textAlign = "center";
        for (var i = 0; i < lines.length; i++)
            context.fillText(lines[i], x, y + (i * lineheight));
    }
    function drawSB1() {
        let e1 = new Geometry.Ellipse(context, new Geometry.Point(515, 267), 100, 85);
        let t1 = new Geometry.Triangle(context, new Geometry.Point(420, 282), new Geometry.Point(355, 317), new Geometry.Point(430, 302));
        e1.draw();
        t1.draw();
        ellipscontainer.push(new Geometry.ClosePathProperty(e1));
    }
    function drawSB2() {
        let e2 = new Geometry.Ellipse(context, new Geometry.Point(320, 167), 115, 85);
        let t2 = new Geometry.Triangle(context, new Geometry.Point(290, 242), new Geometry.Point(295, 322), new Geometry.Point(320, 242));
        e2.draw();
        t2.draw();
        ellipscontainer.push(new Geometry.ClosePathProperty(e2));
    }
    function drawSB3() {
        let e3 = new Geometry.Ellipse(context, new Geometry.Point(120, 267), 110, 75);
        let t3 = new Geometry.Triangle(context, new Geometry.Point(200, 302), new Geometry.Point(260, 322), new Geometry.Point(210, 272));
        e3.draw();
        t3.draw();
        ellipscontainer.push(new Geometry.ClosePathProperty(e3));
    }
    function drawSB4() {
        let e4 = new Geometry.Ellipse(context, new Geometry.Point(120, 437), 110, 80);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(180, 397), new Geometry.Point(235, 347), new Geometry.Point(170, 372));
        e4.draw();
        t4.draw();
        ellipscontainer.push(new Geometry.ClosePathProperty(e4));
    }
    function q21DrawImg() {
        let img = new Geometry.Img(context);
        img.draw('images/q18i1.png', 130, 197, 310, 200);
    }
    function drawGirl() {
        let i1 = new Geometry.Img(context);
        i1.draw('images/c2i2.png', 184, 320, 84, 200);
    }
    function Thankyou() {
        context.font = "bold 20px sans-serif, Helvetica, Arial";
        context.fillStyle = "black";
        context.fillText("Please fill the below feedback form!", 401, 307);
    }
    function q24DrawSB1() {
        let r1 = new Geometry.RecteRound(context, new Geometry.Point(372, 45), 172, 390, 26);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 240), new Geometry.Point(702, 320), new Geometry.Point(660, 240));
        r1.draw();
        t4.draw();
    }
    function q24DrawImg() {
        let img = new Geometry.Img(context);
        img.draw('images/C2i1.png', 103, 100, 415, 300);
    }
    var Level2ellipscontainer = [];
    /*Level 2 Ellips Click Event */
    canvas.addEventListener("click", Level2ellipseclick, false);
    function Level2ellipseclick(e) {
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y;
        let p1 = new Geometry.Point(x, y);
        for (let i = 0; i < Level2ellipscontainer.length; i++) {
            if (EllipseClickEvent == true) {
                if (Level2ellipscontainer[i].isInside(p1)) {
                    clearScreen();
                    if (TotalQuestion <= 17) {
                        clearScreen();
                        if (TotalQuestion == 14) {
                            EllipseClickEvent = false;
                            if (Level2ellipscontainer[2].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q14op3 = setTimeout(function () {
                                let q11i3 = new Geometry.Img(context);
                                q11i3.draw('images/q11op3.png', 310, 230, 130, 130);
                                l2DrawSB3();
                                let s = "I will prepare properly\nthree days in advance\nwith an outline to\nrecall the main points";
                                formatOpt(s, 451, 488);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (TotalQuestion == 15) {
                            EllipseClickEvent = false;
                            if (Level2ellipscontainer[3].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q15op4 = setTimeout(function () {
                                let q12i4 = new Geometry.Img(context);
                                q12i4.draw('images/q12op4.png', 440, 230, 130, 130);
                                l2DrawSB4();
                                let s = "It's lack of arousing\nand sustaining the\ninterest of the\naudience";
                                formatOpt(s, 451, 82);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (TotalQuestion == 17) {
                            EllipseClickEvent = false;
                            if (Level2ellipscontainer[3].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q17op4 = setTimeout(function () {
                                let e4 = new Geometry.Ellipse(context, new Geometry.Point(451, 200), 112, 75);
                                e4.draw();
                                let s = "Overview of\nthe main points\nI will make..hmm..\nshall be my way";
                                formatOpt(s, 451, 182);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        setTimeout(Questions, 1000 * 5);
                    }
                    break;
                }
            }
        }
    }
    function l2DrawSB1() {
        Level2ellipscontainer = [];
        let e1 = new Geometry.Ellipse(context, new Geometry.Point(169, 506), 112, 75);
        let t1 = new Geometry.Triangle(context, new Geometry.Point(145, 445), new Geometry.Point(120, 390), new Geometry.Point(170, 445));
        e1.draw();
        t1.draw();
        Level2ellipscontainer.push(new Geometry.ClosePathProperty(e1));
    }
    function l2DrawSB2() {
        let e2 = new Geometry.Ellipse(context, new Geometry.Point(169, 100), 112, 75);
        let t2 = new Geometry.Triangle(context, new Geometry.Point(190, 165), new Geometry.Point(240, 215), new Geometry.Point(215, 165));
        e2.draw();
        t2.draw();
        Level2ellipscontainer.push(new Geometry.ClosePathProperty(e2));
    }
    function l2DrawSB3() {
        let e3 = new Geometry.Ellipse(context, new Geometry.Point(451, 506), 112, 75);
        let t3 = new Geometry.Triangle(context, new Geometry.Point(405, 445), new Geometry.Point(380, 390), new Geometry.Point(430, 445));
        e3.draw();
        t3.draw();
        Level2ellipscontainer.push(new Geometry.ClosePathProperty(e3));
    }
    function l2DrawSB4() {
        let e4 = new Geometry.Ellipse(context, new Geometry.Point(451, 100), 112, 75);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(450, 165), new Geometry.Point(500, 215), new Geometry.Point(475, 165));
        e4.draw();
        t4.draw();
        Level2ellipscontainer.push(new Geometry.ClosePathProperty(e4));
    }
    canvas.addEventListener("click", q15eclick, false);
    var q15container = [];
    function q15eclick(e) {
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y;
        let p1 = new Geometry.Point(x, y);
        for (let i = 0; i < q15container.length; i++) {
            if (EllipseClickEvent == true) {
                if (q15container[i].isInside(p1)) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    if (q15container[i].isInside(p1)) {
                        context.clearRect(0, 0, 800, 600);
                        if (TotalQuestion <= 28) {
                            context.clearRect(0, 0, 800, 600);
                            if (TotalQuestion == 18) {
                                if (q15container[2].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c1q1op3 = setTimeout(function () {
                                    q15DrawImg();
                                    q15DrawSB3();
                                    let s = "No, I am\nvery confident\nto maintain eye\ncontact right at\nthe beginning";
                                    formatOpt(s, 382, 474);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 19) {
                                if (q15container[0].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c1q2op1 = setTimeout(function () {
                                    q15DrawImg();
                                    q15DrawSB1();
                                    let s = "I think it\nis Excerpt 1";
                                    formatOpt(s, 82, 497);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 20) {
                                if (q15container[2].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c1q4op2 = setTimeout(function () {
                                    q15DrawImg();
                                    q15DrawSB3();
                                    let s = "No, as his\nparalanguag\nwas not good";
                                    formatOpt(s, 382, 490);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 21) {
                                if (q15container[3].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let q18op4 = setTimeout(function () {
                                    q21DrawImg();
                                    q15DrawSB4();
                                    let s = "I agree to\nall of you,\nmy friends";
                                    formatOpt(s, 532, 490);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 22) {
                                if (q15container[1].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let q19op2 = setTimeout(function () {
                                    q21DrawImg();
                                    q15DrawSB2();
                                    let s = "We should\nmemorize key\nphrases";
                                    formatOpt(s, 232, 490);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 23) {
                                if (q15container[1].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let q22op2 = setTimeout(function () {
                                    q21DrawImg();
                                    q15DrawSB2();
                                    let s = "Visualize myself\nas if I am getting\na standing\napplause after the\npresentation";
                                    formatOpt(s, 232, 474);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 24) {
                                if (q15container[3].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c2q1op4 = setTimeout(function () {
                                    q24DrawImg();
                                    q15DrawSB4();
                                    let s = "I would not\nanswer her\nimmediately";
                                    formatOpt(s, 532, 490);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 25) {
                                if (q15container[3].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c2q2op4 = setTimeout(function () {
                                    q24DrawImg();
                                    q15DrawSB4();
                                    let s = "I will say that it\nwill be covered later\nto avoid her at that\npoint of time";
                                    formatOpt(s, 532, 482);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 26) {
                                if (q15container[3].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c2q3op4 = setTimeout(function () {
                                    q24DrawImg();
                                    q15DrawSB4();
                                    let s = "She should answer\nthe question and say\nthat she will show\nthe slide later ";
                                    formatOpt(s, 532, 484);
                                    EllipseClickEvent = true;
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 27) {
                                if (q15container[2].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c2q4op3 = setTimeout(function () {
                                    q24DrawImg();
                                    q15DrawSB3();
                                    let s = "Sameeksha\nshould conclude\nthe talk";
                                    formatOpt(s, 382, 490);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                            else if (TotalQuestion == 28) {
                                if (q15container[2].isInside(p1) || q15container[1].isInside(p1)) {
                                    CorrectAnswer += 1;
                                    rightAns();
                                }
                                else {
                                    wrongAns();
                                }
                                let c2q5op3 = setTimeout(function () {
                                    q24DrawImg();
                                    q15DrawSB3();
                                    let s1 = "No as she\ncould have told\nthat she will clarify\nthe doubts later\nat the end of\nthe session";
                                    formatOpt(s1, 382, 467);
                                    q15DrawSB2();
                                    let s2 = "No as she did\nnot get a chance\nto complete her\nspeech with all\nthe points";
                                    formatOpt(s2, 232, 474);
                                }, 1000 * 1);
                                setTimeout(clearScreen, 1000 * 4.9);
                            }
                        }
                        setTimeout(Questions, 1000 * 5);
                        break;
                    }
                }
            }
        }
    }
    function q15DrawSB1() {
        let e1 = new Geometry.Ellipse(context, new Geometry.Point(82, 500), 70, 70);
        let t1 = new Geometry.Triangle(context, new Geometry.Point(90, 435), new Geometry.Point(160, 400), new Geometry.Point(115, 440));
        e1.draw();
        t1.draw();
        q15container.push(new Geometry.ClosePathProperty(e1));
    }
    function q15DrawSB2() {
        let e2 = new Geometry.Ellipse(context, new Geometry.Point(232, 500), 70, 70);
        let t2 = new Geometry.Triangle(context, new Geometry.Point(220, 435), new Geometry.Point(240, 400), new Geometry.Point(240, 435));
        e2.draw();
        t2.draw();
        q15container.push(new Geometry.ClosePathProperty(e2));
    }
    function q15DrawSB3() {
        let e3 = new Geometry.Ellipse(context, new Geometry.Point(382, 500), 70, 70);
        let t3 = new Geometry.Triangle(context, new Geometry.Point(350, 440), new Geometry.Point(320, 400), new Geometry.Point(370, 435));
        e3.draw();
        t3.draw();
        q15container.push(new Geometry.ClosePathProperty(e3));
    }
    function q15DrawSB4() {
        let e4 = new Geometry.Ellipse(context, new Geometry.Point(532, 500), 70, 70);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(480, 460), new Geometry.Point(410, 405), new Geometry.Point(500, 445));
        e4.draw();
        t4.draw();
        q15container.push(new Geometry.ClosePathProperty(e4));
    }
    function q18DrawSB1() {
        let r1 = new Geometry.RecteRound(context, new Geometry.Point(500, 45), 172, 232, 26);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 240), new Geometry.Point(702, 320), new Geometry.Point(660, 240));
        r1.draw();
        t4.draw();
    }
    function q15DrawImg() {
        let i2 = new Geometry.Img(context);
        i2.draw('images/q15i2.png', 150, 200, 320, 200);
    }
    function q18DrawImg1() {
        let i1 = new Geometry.Img(context);
        i1.draw('images/q15i1.png', 134, 320, 181, 200);
    }
    function CSLabel(startx) {
        let lbl = new Geometry.Button(context, new Geometry.Point(-22, 119), 50, 160, 25);
        lbl.draw();
        context.font = "bold 18px Helvetica, Arial, sans-serif";
        context.fillStyle = "white";
        context.fillText("Case Study", startx, 150);
    }
    var CorrectAnswer = 0;
    var TotalQuestion = 0;
    var score;
    function GetResult(correct) {
        score = correct * 3;
        TotalScore += score;
    }
    function GetResult1(correct) {
        score = correct * 4;
        TotalScore += score;
    }
    function GetResult2(correct) {
        score = correct * 5;
        TotalScore += score;
    }
    function GetResult3(correct) {
        score = correct * 6;
        TotalScore += score;
    }
    canvas.addEventListener("click", ellipseclick, false);
    let ract = canvas.getBoundingClientRect();
    var ellipscontainer = [];
    var nextQ = 1;
    var QuestionArray = [1];
    var QuestionNum;
    function ellipseclick(e) {
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y;
        let p1 = new Geometry.Point(x, y);
        for (let i = 0; i < ellipscontainer.length; i++) {
            if (EllipseClickEvent == true) {
                if (ellipscontainer[i].isInside(p1)) {
                    if (TotalQuestion <= 5) {
                        clearScreen();
                        if (nextQ == 1) {
                            if (ellipscontainer[1].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q10op2 = setTimeout(function () {
                                drawAud();
                                drawSB2();
                                let s = "I think Public speaking\nis only speech\nmaking and elocutions\nincludes poetry recitation,\nprose reading,\ndramatic monologue\nalong with speech";
                                formatOpt(s, 322, 127);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 2) {
                            if (ellipscontainer[1].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q2op2 = setTimeout(function () {
                                drawAud();
                                drawSB2();
                                let s = "The Purpose,\nAudience,\nInformation,\nDelivery Style,\nVocal qualities\nof the presenter\nis very important";
                                formatOpt(s, 322, 127);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 3) {
                            if (ellipscontainer[2].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q3op3 = setTimeout(function () {
                                drawAud();
                                drawSB3();
                                let s = "My main purpose\nis to inform,\npersuade & entertain";
                                formatOpt(s, 120, 256);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 4) {
                            if (ellipscontainer[0].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q4op4 = setTimeout(function () {
                                drawAud();
                                drawSB1();
                                let s = "It is\nPhonation,\nArticulation,\nPronunciation";
                                formatOpt(s, 516, 247);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 5) {
                            if (ellipscontainer[1].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q5op2 = setTimeout(function () {
                                drawAud();
                                drawSB2();
                                let s = "When we give\nKnowledge of both\nsources and the types\nof supporting material\n that speech makers\ntypically use";
                                formatOpt(s, 322, 133);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 6) {
                            if (ellipscontainer[1].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q6op2 = setTimeout(function () {
                                drawAud();
                                drawSB2();
                                let s = "I will determine\nwhat I want to\naccomplish during\na presentation";
                                formatOpt(s, 322, 145);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 7) {
                            if (ellipscontainer[3].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q7op4 = setTimeout(function () {
                                drawAud();
                                drawSB4();
                                let s = "Breathing, listening\nto our own voice and\nstressing in between are\nall an indispensable\npart of any speech";
                                formatOpt(s, 123, 412);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        else if (nextQ == 8) {
                            if (ellipscontainer[3].isInside(p1)) {
                                CorrectAnswer += 1;
                                rightAns();
                            }
                            else {
                                wrongAns();
                            }
                            let q8op4 = setTimeout(function () {
                                drawAud();
                                drawSB4();
                                let s = "By\nputting\nproper\nGestures";
                                formatOpt(s, 123, 419);
                            }, 1000 * 1);
                            setTimeout(clearScreen, 1000 * 4.9);
                        }
                        var k = 0;
                        while (k < QuestionArray.length) {
                            QuestionNum = Math.floor(Math.random() * 8 + 1);
                            for (k = 0; k < QuestionArray.length; k++) {
                                if (QuestionArray[k] == QuestionNum) {
                                    break;
                                }
                            }
                        }
                        QuestionArray.push(QuestionNum);
                        nextQ = QuestionNum;
                        setTimeout(Questions, 1000 * 5);
                        break;
                    }
                }
            }
        }
    }
    var btnct = [];
    function Buttonl2(btnsp, txtsp, txt) {
        canvas.addEventListener("click", btnclick, false);
        function btnclick(e) {
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y;
            let p1 = new Geometry.Point(x, y);
            for (let i = 0; i < btnct.length; i++) {
                if (btnct[i].isInside(p1)) {
                    clearScreen();
                    if (btnct[2].isInside(p1)) {
                        CorrectAnswer += 1;
                        rightAns();
                    }
                    else {
                        wrongAns();
                    }
                    EllipseClickEvent = false;
                    let q8op4 = setTimeout(function () {
                        Buttonl2(new Geometry.Point(347, 185), new Geometry.Point(386, 205), "b)  1,2,3");
                        let q13i1 = new Geometry.Img(context);
                        q13i1.draw('images/q13op1.png', 50, 230, 130, 130);
                        l2DrawSB1();
                        let s1 = "1.\nI will give a\nStartling statement";
                        formatOpt(s1, 169, 492);
                        let q13i2 = new Geometry.Img(context);
                        q13i2.draw('images/q13op2.png', 180, 230, 130, 130);
                        l2DrawSB2();
                        let s3 = "2.\nI will create a\nstrong opener and\nclose by Narration\nor anecdote";
                        formatOpt(s3, 169, 74);
                        let q13i3 = new Geometry.Img(context);
                        q13i3.draw('images/q13op3.png', 310, 230, 130, 130);
                        l2DrawSB3();
                        let s = "3.\nQuestion or quotation\nwill solve the purpose\nI think so";
                        formatOpt(s, 451, 488);
                        btnct = [];
                        Level2ellipscontainer = [];
                    }, 1000 * 1);
                    setTimeout(clearScreen, 1000 * 4.9);
                    setTimeout(Questions, 1000 * 5);
                    break;
                }
            }
        }
        let btn1 = new Geometry.Button(context, new Geometry.Point(btnsp.x, btnsp.y), 32, 80, 8);
        btn1.draw();
        btnct.push(btn1);
        context.font = "bold 13px Arial, sans-serif";
        context.fillStyle = "white";
        -context.fillText(txt, txtsp.x, txtsp.y);
    }
    function Questions() {
        ellipscontainer = [];
        if (TotalQuestion == 5) {
            ellipscontainer = [];
            GetResult(CorrectAnswer);
            endScreen(CorrectAnswer);
            console.log("Correct Answers = " + CorrectAnswer);
            CorrectAnswer = 0;
        }
        else if (TotalQuestion == 13) {
            squrecontainer = [];
            ellipscontainer = [];
            GetResult(CorrectAnswer);
            endScreen(CorrectAnswer);
            console.log("Correct Answers = " + CorrectAnswer);
            CorrectAnswer = 0;
        }
        else if (TotalQuestion == 17) {
            Level2ellipscontainer = [];
            GetResult1(CorrectAnswer);
            endScreen(CorrectAnswer);
            console.log("Correct Answers = " + CorrectAnswer);
            CorrectAnswer = 0;
        }
        else if (TotalQuestion == 20) {
            q15container = [];
            btnct = [];
            GetResult2(CorrectAnswer);
            endScreen(CorrectAnswer);
            console.log("Correct Answers = " + CorrectAnswer);
            CorrectAnswer = 0;
        }
        else if (TotalQuestion == 23) {
            q15container = [];
            btnct = [];
            GetResult3(CorrectAnswer);
            endScreen(CorrectAnswer);
            console.log("Correct Answers = " + CorrectAnswer);
            CorrectAnswer = 0;
        }
        else if (TotalQuestion == 28) {
            q15container = [];
            btnct = [];
            GetResult(CorrectAnswer);
            endScreen(TotalScore);
            console.log("Correct Answers = " + CorrectAnswer);
            CorrectAnswer = 0;
        }
        else if (nextQ == 1) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q1 = setTimeout(function () {
                drawSQ1();
                s21q1.play();
                let s = "Hello! I am your host\nVidhya. I will guide\nyou through this\ninteractive session\non Public Speaking.\nSo, What is the\ndifference between\npublic speaking\nand elocution?";
                formatQue(s, 710, 79);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 13.5);
            let q1op1 = setTimeout(function () {
                drawSB1();
                let s = "Elocution is\nspeaking the\noriginal content\nas against\npublic speaking";
                formatOpt(s, 516, 239);
            }, 1000 * 14);
            let q10op2 = setTimeout(function () {
                drawSB2();
                let s = "I think Public speaking\nis only speech\nmaking and elocutions\nincludes poetry recitation,\nprose reading,\ndramatic monologue\nalong with speech";
                formatOpt(s, 322, 127);
            }, 1000 * 14.5);
            let q10op3 = setTimeout(function () {
                drawSB3();
                let s = "Well..ha..ha..\nPoetry recitation is\nelocution whereas\npublic speaking is\nspeech presentation";
                formatOpt(s, 120, 240);
            }, 1000 * 15);
            let q10op4 = setTimeout(function () {
                drawSB4();
                let s = "I believe Public\nspeaking is prose\nreading, monologue\nrendering whereas\nelocution is dramatic\npresentation of\na speech";
                formatOpt(s, 123, 397);
            }, 1000 * 15.5);
            let q1ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 15.6);
            TotalQuestion += 1;
        }
        else if (nextQ == 2) {
            setTimeout(drawVinod, 1000 * 2);
            let q2 = setTimeout(function () {
                drawSQ1();
                s21q2.play();
                let s = "What are the\nkey elements in\nthe content of\na presentation?";
                formatQue(s, 710, 124);
                EllipseClickEvent = false;
            }, 1000 * 2.5);
            setTimeout(drawAud, 1000 * 5.5);
            let q2op1 = setTimeout(function () {
                drawSB1();
                let s = "Purpose,\nInformation,\ngestures,\nPosture,\nDressing\nis important";
                formatOpt(s, 516, 234);
            }, 1000 * 10);
            let q2op2 = setTimeout(function () {
                drawSB2();
                let s = "The Purpose,\nAudience,\nInformation,\nDelivery Style,\nVocal qualities\nof the presenter\nis very important";
                formatOpt(s, 322, 127);
            }, 1000 * 10.5);
            let q2op3 = setTimeout(function () {
                drawSB3();
                let s = "Language,\nAccent, Style,\nPronunciation,\nInformation are\nof prime importance";
                formatOpt(s, 120, 240);
            }, 1000 * 11);
            let q2op4 = setTimeout(function () {
                drawSB4();
                let s = "I feel the factors\nlike Audience,\nDelivery,\nVocal qualities,\nPosture, pronunciation\nare important";
                formatOpt(s, 123, 404);
            }, 1000 * 11.5);
            let q2ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 11.6);
            TotalQuestion += 1;
        }
        else if (nextQ == 3) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q3 = setTimeout(function () {
                drawSQ1();
                s21q3.play();
                let s = "What do you\nthink are the\nthree general\npurposes for\ngiving\nspeeches?";
                formatQue(s, 710, 105);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 5.5);
            let q3op1 = setTimeout(function () {
                drawSB1();
                let s = "I want to\ninform,\nmake people\nlaugh\n& have fun";
                formatOpt(s, 516, 239);
            }, 1000 * 6);
            let q3op2 = setTimeout(function () {
                drawSB2();
                let s = "I give speeches\nto persuade,\nact & adjust\nmy speaking\nstyle";
                formatOpt(s, 322, 142);
            }, 1000 * 6.5);
            let q3op3 = setTimeout(function () {
                drawSB3();
                let s = "My main purpose\nis to inform,\npersuade & entertain";
                formatOpt(s, 120, 256);
            }, 1000 * 7);
            let q3ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 7.1);
            TotalQuestion += 1;
        }
        else if (nextQ == 4) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q4 = setTimeout(function () {
                drawSQ1();
                s21q4.play();
                let s = "What are three\nimportant\naspects of\nour Vocal\nqualities?";
                formatQue(s, 710, 115);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 6.5);
            let q4op1 = setTimeout(function () {
                drawSB1();
                let s = "It is\nPhonation,\nArticulation,\nPronunciation";
                formatOpt(s, 516, 247);
            }, 1000 * 7);
            let q4op2 = setTimeout(function () {
                drawSB2();
                let s = "Pronunciation,\nStyle of Speaking,\nLoudness\nare very crucial";
                formatOpt(s, 322, 145);
            }, 1000 * 7.5);
            let q4op3 = setTimeout(function () {
                drawSB3();
                let s = "Pitch,\nLoudness,\nRate are\ndefinitely of\nprime importance";
                formatOpt(s, 120, 240);
            }, 1000 * 8);
            let q4op4 = setTimeout(function () {
                drawSB4();
                let s = "Phonation,\nAccent,\nLanguage\nare three\nimportant aspects";
                formatOpt(s, 123, 412);
            }, 1000 * 8.5);
            let q4ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 8.6);
            TotalQuestion += 1;
        }
        else if (nextQ == 5) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q5 = setTimeout(function () {
                drawSQ1();
                s21q5.play();
                let s = "What does a\nsuccessful\nspeech\nrequire?";
                formatQue(s, 710, 124);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 3.5);
            let q5op1 = setTimeout(function () {
                drawSB1();
                let s = "I will Talk about\na subject with which\n I have had some\npersonal experience\nthat I can share\n in my speech";
                formatOpt(s, 516, 234);
            }, 1000 * 4);
            let q5op2 = setTimeout(function () {
                drawSB2();
                let s = "When we give\nKnowledge of both\nsources and the types\nof supporting material\n that speech makers\ntypically use";
                formatOpt(s, 322, 133);
            }, 1000 * 4.5);
            let q5op3 = setTimeout(function () {
                drawSB3();
                let s = "Rather when\nwe tell about\nSkills and hobbies\nin which we are\nan expert";
                formatOpt(s, 120, 240);
            }, 1000 * 5);
            let q5ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 5.1);
            TotalQuestion += 1;
        }
        else if (nextQ == 6) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q6 = setTimeout(function () {
                drawSQ1();
                s21sq1.play();
                let sq1 = "How should\nwe Identify\nthe key\nmessage?";
                formatQue(sq1, 710, 124);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 5.5);
            let q6op1 = setTimeout(function () {
                drawSB1();
                let s = "The key\nmessage\n will be my\nintroduction";
                formatOpt(s, 516, 247);
            }, 1000 * 6);
            let q6op2 = setTimeout(function () {
                drawSB2();
                let s = "I will determine\nwhat I want to\naccomplish during\na presentation";
                formatOpt(s, 322, 145);
            }, 1000 * 6.5);
            let q6op3 = setTimeout(function () {
                drawSB3();
                let s = "I will determine\nthe summary of\nthe presentation";
                formatOpt(s, 120, 256);
            }, 1000 * 7);
            let q6op4 = setTimeout(function () {
                drawSB4();
                let s = "The conclusion\nand the body\nwill say\nmy message";
                formatOpt(s, 123, 419);
            }, 1000 * 7.5);
            let q6ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 7.6);
            TotalQuestion += 1;
        }
        else if (nextQ == 7) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q7 = setTimeout(function () {
                drawSQ1();
                s21sq2.play();
                let s = "Which strategy\ndo you think\ncan improve\nthe rate of\nyour speech?";
                formatQue(s, 710, 115);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 5.5);
            let q7op1 = setTimeout(function () {
                drawSB1();
                let s = "I will\nbreathe\nproperly\nand relax";
                formatOpt(s, 516, 247);
            }, 1000 * 6);
            let q7op2 = setTimeout(function () {
                drawSB2();
                let s = "I will Listen to my\nown voice to avoid\nnasal twangs and speak\nfrom the diaphragm\n(taking in and letting\nout air through\nthe larynx)";
                formatOpt(s, 322, 127);
            }, 1000 * 6.5);
            let q7op3 = setTimeout(function () {
                drawSB3();
                let s = "I will develop\nflexilbility in my\nword stress";
                formatOpt(s, 120, 256);
            }, 1000 * 7);
            let q7op4 = setTimeout(function () {
                drawSB4();
                let s = "Breathing, listening\nto our own voice and\nstressing in between are\nall an indispensable\npart of any speech";
                formatOpt(s, 123, 412);
            }, 1000 * 7.5);
            let q7ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 7.6);
            TotalQuestion += 1;
        }
        else if (nextQ == 8) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q8 = setTimeout(function () {
                drawSQ1();
                s21sq3.play();
                let s = "How will you\nemphasize the\nimportant points\nin a speech?";
                formatQue(s, 710, 124);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawAud, 1000 * 4.5);
            let q8op1 = setTimeout(function () {
                drawSB1();
                let s = "I will\nincrease\nmy Volume";
                formatOpt(s, 516, 256);
            }, 1000 * 5);
            let q8op2 = setTimeout(function () {
                drawSB2();
                let s = "Statistics\ncan definitely\nsupport my\nspeech";
                formatOpt(s, 322, 145);
            }, 1000 * 5.5);
            let q8op3 = setTimeout(function () {
                drawSB3();
                let s = "Using\nQuotations\nshall help";
                formatOpt(s, 120, 256);
            }, 1000 * 6);
            let q8op4 = setTimeout(function () {
                drawSB4();
                let s = "By\nputting\nproper\nGestures";
                formatOpt(s, 123, 419);
            }, 1000 * 6.5);
            let q7ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 6.6);
            TotalQuestion += 1;
        }
        else if (nextQ == 9) {
            let q9 = setTimeout(function () {
                drawSim2();
                s22q6.play();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
            }, 1000 * 0.1);
            let q9op = setTimeout(function () {
                q6Ani();
                if (clicked) {
                    nextQ += 1;
                }
            }, 1000 * 10.11);
        }
        else if (nextQ == 10) {
            squrecontainer = [];
            let q10 = setTimeout(function () {
                drawSim2();
                s22q7.play();
                let q7 = "While putting\nan idea to an\naudience,\nwhich body\nposture is\ncorrect?";
                formatQue(q7, 710, 106);
            }, 1000 * 0.1);
            let q10op = setTimeout(function () {
                let q7op1 = new Geometry.Img(context);
                q7op1.draw('images/q7op1.png', 67, 225, 105, 150);
                let q7op2 = new Geometry.Img(context);
                q7op2.draw('images/q7op2.png', 239, 225, 134, 150);
                let q7op3 = new Geometry.Img(context);
                q7op3.draw('images/q7op3.png', 440, 225, 114, 150);
                drawRect(3, new Geometry.Point(67, 225), 150, 105, 134, 114);
            }, 1000 * 6.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 11) {
            squrecontainer = [];
            let q11 = setTimeout(function () {
                drawSim2();
                s22q8.play();
                let q8 = "Which posture\nwill boost your\nconfidence\ninstantly?";
                formatQue(q8, 710, 124);
            }, 1000 * 0.1);
            let q11op = setTimeout(function () {
                let q8op1 = new Geometry.Img(context);
                q8op1.draw('images/q8op1.png', 50, 200, 134, 200);
                let q8op2 = new Geometry.Img(context);
                q8op2.draw('images/q8op2.png', 234, 200, 102, 200);
                let q8op3 = new Geometry.Img(context);
                q8op3.draw('images/q8op3.png', 386, 200, 187, 200);
                drawRect(3, new Geometry.Point(50, 200), 200, 134, 102, 187);
            }, 1000 * 5.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 12) {
            squrecontainer = [];
            let q12 = setTimeout(function () {
                drawSim2();
                s22q9.play();
                let q9 = "Click on the\nappropriate\nfacial\nexpression";
                formatQue(q9, 710, 124);
            }, 1000 * 0.1);
            let q12op = setTimeout(function () {
                let q9op1 = new Geometry.Img(context);
                q9op1.draw('images/q9op1.png', 50, 200, 115, 200);
                let q9op2 = new Geometry.Img(context);
                q9op2.draw('images/q9op2.png', 215, 200, 170, 200);
                let q9op3 = new Geometry.Img(context);
                q9op3.draw('images/q9op3.png', 435, 200, 145, 200);
                drawRect(3, new Geometry.Point(50, 200), 200, 115, 170, 145);
            }, 1000 * 4.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 13) {
            squrecontainer = [];
            let q13 = setTimeout(function () {
                drawSim2();
                s22q10.play();
                let q10 = "Identify the HIGH\npower pose\nbody language\npreferred before\npublic speech?";
                formatQue(q10, 710, 114);
            }, 1000 * 0.1);
            let q13op = setTimeout(function () {
                let q10op1 = new Geometry.Img(context);
                q10op1.draw('images/q10op1.png', 100, 150, 420, 116);
                let q10op2 = new Geometry.Img(context);
                q10op2.draw('images/q10op2.png', 100, 323, 420, 127);
                horImg = false;
                drawRect(2, new Geometry.Point(100, 150), 116, 420, 323, 127);
            }, 1000 * 7.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 14) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q14 = setTimeout(function () {
                drawSQ1();
                s23q1.play();
                let s = "You are a BE student\npreparing a project\nand you have been\nasked to address\nyour juniors. What\noptions would you\nchoose first?";
                formatQue(s, 710, 97);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let q14op1 = setTimeout(function () {
                let q11i1 = new Geometry.Img(context);
                q11i1.draw('images/q11op1.png', 50, 230, 130, 130);
                l2DrawSB1();
                let s = "I am very confident,\nso I will head straightway\nto the podium and start\nspeaking without any\nprior preparation.";
                formatOpt(s, 169, 481);
            }, 1000 * 13);
            let q14op2 = setTimeout(function () {
                let q11i2 = new Geometry.Img(context);
                q11i2.draw('images/q11op2.png', 180, 230, 130, 130);
                l2DrawSB2();
                let s = "I will prepare\nfew days in advance\nand memorize the\nwhole speech";
                formatOpt(s, 169, 82);
            }, 1000 * 13.5);
            let q14op3 = setTimeout(function () {
                let q11i3 = new Geometry.Img(context);
                q11i3.draw('images/q11op3.png', 310, 230, 130, 130);
                l2DrawSB3();
                let s = "I will prepare properly\nthree days in advance\nwith an outline to\nrecall the main points";
                formatOpt(s, 451, 488);
            }, 1000 * 14);
            let q14op4 = setTimeout(function () {
                let q11i4 = new Geometry.Img(context);
                q11i4.draw('images/q11op4.png', 440, 230, 130, 130);
                l2DrawSB4();
                let s = "I will prepare\na structure, 15\nminutes before\nthe presentation";
                formatOpt(s, 451, 82);
            }, 1000 * 14.5);
            let q14ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 14.6);
            nextQ += 1;
        }
        else if (nextQ == 15) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q15 = setTimeout(function () {
                drawSQ1();
                s23q2.play();
                let s = "In the professional\nworld, a number\nof speeches are\ndelivered everyday.\nHowever, most of\nthe speeches are\nforgotten. Why?";
                formatQue(s, 710, 97);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let q15op1 = setTimeout(function () {
                let q15i1 = new Geometry.Img(context);
                q15i1.draw('images/q12op1.png', 50, 230, 130, 130);
                l2DrawSB1();
                let s = "As I feel there is\nLack of Information";
                formatOpt(s, 169, 502);
            }, 1000 * 11);
            let q15op2 = setTimeout(function () {
                let q15i2 = new Geometry.Img(context);
                q15i2.draw('images/q12op2.png', 180, 230, 130, 130);
                l2DrawSB2();
                let s = "Due to lack\nof Ideas";
                formatOpt(s, 169, 96);
            }, 1000 * 11.5);
            let q15op3 = setTimeout(function () {
                let q15i3 = new Geometry.Img(context);
                q15i3.draw('images/q12op3.png', 310, 230, 130, 130);
                l2DrawSB3();
                let s = "I believe there\nis Lack of Data";
                formatOpt(s, 451, 502);
            }, 1000 * 12);
            let q15op4 = setTimeout(function () {
                let q12i4 = new Geometry.Img(context);
                q12i4.draw('images/q12op4.png', 440, 230, 130, 130);
                l2DrawSB4();
                let s = "It's lack of arousing\nand sustaining the\ninterest of the\naudience";
                formatOpt(s, 451, 82);
            }, 1000 * 12.5);
            let q15ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 12.6);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 16) {
            setTimeout(drawVinod, 1000 * 0.1);
            let q16 = setTimeout(function () {
                drawSQ1();
                s23q3.play();
                let s = "How can you\ncreate a\nstrong opener\nand close?";
                formatQue(s, 710, 124);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let q16op1 = setTimeout(function () {
                let q13i1 = new Geometry.Img(context);
                q13i1.draw('images/q13op1.png', 50, 230, 130, 130);
                l2DrawSB1();
                let s = "1.\nI will give a\nStartling statement";
                formatOpt(s, 169, 492);
            }, 1000 * 5);
            let q16op2 = setTimeout(function () {
                let q13i2 = new Geometry.Img(context);
                q13i2.draw('images/q13op2.png', 180, 230, 130, 130);
                l2DrawSB2();
                let s = "2.\nI will create a\nstrong opener and\nclose by Narration\nor anecdote";
                formatOpt(s, 169, 74);
            }, 1000 * 5.5);
            let q16op3 = setTimeout(function () {
                let q13i3 = new Geometry.Img(context);
                q13i3.draw('images/q13op3.png', 310, 230, 130, 130);
                l2DrawSB3();
                let s = "3.\nQuestion or quotation\nwill solve the purpose\nI think so";
                formatOpt(s, 451, 488);
            }, 1000 * 6);
            let q16op4 = setTimeout(function () {
                let q13i4 = new Geometry.Img(context);
                q13i4.draw('images/q13op4.png', 440, 230, 130, 130);
                l2DrawSB4();
                let s = "4.\nHumour directed\nagainst the audience\nshall be strong\nin this case";
                formatOpt(s, 451, 74);
            }, 1000 * 6.5);
            let q16ClickEnable = setTimeout(function () {
                Buttonl2(new Geometry.Point(65, 185), new Geometry.Point(104, 205), "a)  1,3,4");
                Buttonl2(new Geometry.Point(193, 389), new Geometry.Point(232, 409), "c)  2,3,4");
                Buttonl2(new Geometry.Point(347, 185), new Geometry.Point(386, 205), "b)  1,2,3");
                Buttonl2(new Geometry.Point(475, 389), new Geometry.Point(514, 409), "d)  1,2,4");
            }, 1000 * 7);
            TotalQuestion += 1;
            nextQ += 1;
        }
        else if (nextQ == 17) {
            btnct = [];
            setTimeout(drawVinod, 1000 * 0.1);
            Level2ellipscontainer = [];
            let q17 = setTimeout(function () {
                drawSQ1();
                s23q4.play();
                let s = "Immediately after\nan opener, what\nwill be your way\nto start off the\npresentation?";
                formatQue(s, 710, 114);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let q17op1 = setTimeout(function () {
                let e1 = new Geometry.Ellipse(context, new Geometry.Point(169, 406), 112, 75);
                e1.draw();
                Level2ellipscontainer.push(new Geometry.ClosePathProperty(e1));
                let s = "I will Start with\nthe introduction";
                formatOpt(s, 169, 402);
            }, 1000 * 7);
            let q17op2 = setTimeout(function () {
                let e2 = new Geometry.Ellipse(context, new Geometry.Point(169, 200), 112, 75);
                e2.draw();
                Level2ellipscontainer.push(new Geometry.ClosePathProperty(e2));
                let s = "I will start by a\ndetailed analysis of\nthe main points";
                formatOpt(s, 169, 188);
            }, 1000 * 7.5);
            let q17op3 = setTimeout(function () {
                let e3 = new Geometry.Ellipse(context, new Geometry.Point(451, 406), 112, 75);
                e3.draw();
                Level2ellipscontainer.push(new Geometry.ClosePathProperty(e3));
                let s = "Justification of\nselecting the topic\nis the first point in\na presentation";
                formatOpt(s, 451, 388);
            }, 1000 * 8);
            let q17op4 = setTimeout(function () {
                let e4 = new Geometry.Ellipse(context, new Geometry.Point(451, 200), 112, 75);
                e4.draw();
                Level2ellipscontainer.push(new Geometry.ClosePathProperty(e4));
                let s = "Overview of\nthe main points\nI will make..hmm..\nshall be my way";
                formatOpt(s, 451, 182);
            }, 1000 * 8.5);
            let q17ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 8.6);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 18) {
            q15container = [];
            let label = setTimeout(function () {
                CSLabel(60);
            }, 1000 * 0.1);
            setTimeout(q18DrawImg1, 1000 * 0.8);
            setTimeout(drawVinod, 1000 * 2);
            let c1 = setTimeout(function () {
                q18DrawSB1();
                s24c1.play();
                let s = "Ravi was preparing for his final year\npresentation and was very confident\nabout his presentation. Before the\npresentation, he had a chat with this\n friends regarding the venue and the\nbig crowd gathered at the hall. They\ngave a lot of myriad suggestions.";
                formatQue(s, 603, 91);
                EllipseClickEvent = false;
            }, 1000 * 2.4);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 24.4);
            setTimeout(q15DrawImg, 1000 * 24.5);
            let c1qu1 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(64, 45), 80, 110, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(165, 145), new Geometry.Point(175, 200), new Geometry.Point(140, 145));
                r1.draw();
                t4.draw();
                s24qu1.play();
                let s = "One suggestion was\nnot to look at such\na big audience as\nit may scare Ravi.";
                formatOpt(s, 106, 80);
            }, 1000 * 24.9);
            setTimeout(drawVinod, 1000 * 32.4);
            let c1q1 = setTimeout(function () {
                drawSQ1();
                s24q1.play();
                let s = "Would you\nadopt\nthe same\nstrategy?";
                formatQue(s, 710, 124);
            }, 1000 * 32.8);
            let c1q1op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "Yes,\ndefinitely\nas it would\nmaintain my\nconfidence";
                formatOpt(s, 82, 474);
            }, 1000 * 36.3);
            let c1q1op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "Yes, as\nmaking eye\ncontact right at\nthe beginning\nwould make\nme nervous";
                formatOpt(s, 232, 467);
            }, 1000 * 36.8);
            let c1q1op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "No, I am\nvery confident\nto maintain eye\ncontact right at\nthe beginning";
                formatOpt(s, 382, 474);
            }, 1000 * 37.3);
            let c1q1op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "No, I have\nmemorized the\nspeech and eye\ncontact does not\nmatter much";
                formatOpt(s, 532, 474);
            }, 1000 * 37.8);
            let c1q1ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 37.9);
            nextQ += 1;
        }
        else if (nextQ == 19) {
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let c1qu2 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(682, 45), 187, 87, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 245), new Geometry.Point(702, 320), new Geometry.Point(660, 245));
                r1.draw();
                t4.draw();
                s24qu2.play();
                let s = "He started off\nslowly but quickly\ngained momentum.\nHe gave a very\ngood introduction,\nmaintained a good\nbody language, used\nappropriate language.\nThere are two excerpts\nof his speeches:";
                formatQue(s, 713, 70);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let c1i2 = setTimeout(function () {
                let i2 = new Geometry.Img(context);
                i2.draw('images/q15i3.png', 140, 360, 355, 200);
            }, 1000 * 15.5);
            let c1exc1 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(72, 45), 261, 208, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(266, 325), new Geometry.Point(290, 400), new Geometry.Point(241, 325));
                r1.draw();
                t4.draw();
                s24exc1.play();
                let s1 = ": Excerpt 1 :";
                formatQue(s1, 160, 75);
                let s2 = "There is no denial of the fact that\n(speaker Pauses slightly) Physical\nactivities play an important role in our\nlife. It affects our overall health and more\nso (emphatic pause) boosts our energy.\n(With a little raised  voice, the speaker\n speaks to bring in a climactic effect).\nOn the other hand, look at tirade of\nmaladies everyone at present is facing.\nIs it not (stress the word NOT) high time\nthat we realise that money is not the sole\npossession. What is important for us?\n(low tone). Yes (emphatic and rising tone\nto secure attention), the need of the\nhour is to realise that health is wealt...";
                formatOpt(s2, 160, 100);
            }, 1000 * 16);
            let c1exc2 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(374, 45), 261, 208, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(386, 325), new Geometry.Point(337, 400), new Geometry.Point(361, 325));
                r1.draw();
                t4.draw();
                s24exc2.play();
                let s1 = ": Excerpt 2 :";
                formatQue(s1, 465, 75);
                let s2 = "There is no denial of the fact that Physical\n activities play an important role in our life.\nIt affects our overall health and more so\nboosts our energy. On the other hand,\nlook at tirade of maladies everyone at\npresent is facing.We have to find solutions\nto our stressed life. Planning and time\nmanagement is the way to cope with\nstress. There are many ways to destress\nourselves like motivational videos, music\nand of course yoga. I urge everyone\npresent here to adopt the practices\nmentioned here. Now I would like to\ndeliberate on two aspects of our health:\nPhysical health and Mental health...";
                formatOpt(s2, 465, 100);
            }, 1000 * 52.5);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 104.5);
            setTimeout(drawVinod, 1000 * 104.6);
            let c1q2 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(682, 45), 187, 87, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 245), new Geometry.Point(702, 320), new Geometry.Point(660, 245));
                r1.draw();
                t4.draw();
                s24q2.play();
                let s = "The first excerpt talks\nabout speech without\ngiving any solutions\nfor people as against\nthe second one where\nthe speaker has thrown\nlight on solutions.\nWhich speech excerpt\nshould Ravi pick up\nfor his speech?";
                formatQue(s, 713, 70);
            }, 1000 * 105);
            setTimeout(q15DrawImg, 1000 * 122);
            let c1q2op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "I think it\nis Excerpt 1";
                formatOpt(s, 82, 497);
            }, 1000 * 122.5);
            let c1q2op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "Excerpt 2\nis what I think\nis correct";
                formatOpt(s, 232, 490);
            }, 1000 * 123);
            let c1q2op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "Both are correct";
                formatOpt(s, 382, 505);
            }, 1000 * 123.5);
            let c1q2op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "None of\nthem fits\nthe logic";
                formatOpt(s, 532, 490);
            }, 1000 * 124);
            let c1q2ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 124.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 20) {
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let c1qu3 = setTimeout(function () {
                q18DrawSB1();
                s24qu3.play();
                let s = "Ravi had memorised his speech due to\nwhich nothing could stop him till the\nend. He could see himself very confident\nas his delivery was continuous and fast.\nHe was satisfied by his speech as he\nfelt public speaking is all about\nspeaking without any pauses.";
                formatQue(s, 603, 91);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(q18DrawImg1, 1000 * 0.6);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 23.5);
            setTimeout(drawVinod, 1000 * 23.6);
            let c1q4 = setTimeout(function () {
                drawSQ1();
                s24q4.play();
                let s = "Do you think\nthis is a\nwinning\npresentation?";
                formatQue(s, 713, 124);
            }, 1000 * 24);
            setTimeout(q15DrawImg, 1000 * 28);
            let c1q4op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "Yes, he\nmemorized the\nspeech and\nlanguage was\ntoo good";
                formatOpt(s, 82, 474);
            }, 1000 * 28.5);
            let c1q4op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "No, as he was\noverconfident";
                formatOpt(s, 232, 497);
            }, 1000 * 29);
            let c1q4op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "No, as his\nparalanguag\nwas not good";
                formatOpt(s, 382, 490);
            }, 1000 * 29.5);
            let c1q4op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "Yes, as\nultimately\nhe delivered\nwithout any\nbreaks";
                formatOpt(s, 532, 474);
            }, 1000 * 30);
            let c1q3ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 30.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 21) {
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let q18o1 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(531, 45), 172, 232, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 240), new Geometry.Point(702, 320), new Geometry.Point(660, 240));
                r1.draw();
                t4.draw();
                s25tc1.play();
                let s = "Preparation is the key to successful\npresentation. One should follow the rules\nof public speaking wherein maintaining\neye contact is very important. At the\nsame time, the body language and\nparalanguage is extremely important.\nParalanguage is about giving proper\npauses, stress and voice modulation.";
                formatQue(s, 634, 84);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(q21DrawImg, 1000 * 28);
            let q18 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(64, 45), 80, 110, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(165, 145), new Geometry.Point(195, 190), new Geometry.Point(140, 145));
                r1.draw();
                t4.draw();
                s25q1.play();
                let s = "What strategies can\nbe employed to\ntransform fear before\nyour presentation?";
                formatOpt(s, 106, 80);
            }, 1000 * 28.5);
            let q18op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "We should\nconsciously cont-\nract and then relax\nour muscles, starting\nwith your feet, calves\nand going up to our\nshoulders, arms\nand hands";
                formatOpt(s, 82, 452);
            }, 1000 * 35);
            let q18op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "We should take\nseveral deep\nbreaths from our\ndiaphragm";
                formatOpt(s, 232, 482);
            }, 1000 * 35.5);
            let q18op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "Well, best is\nto be prepared\n& Check out the\narrangements";
                formatOpt(s, 382, 482);
            }, 1000 * 36);
            let q18op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "I agree to\nall of you,\nmy friends";
                formatOpt(s, 532, 490);
            }, 1000 * 36.5);
            let lmq1ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 36.6);
            nextQ += 1;
        }
        else if (nextQ == 22) {
            q15container = [];
            setTimeout(q21DrawImg, 1000 * 0.1);
            let q19 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(64, 45), 80, 110, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(165, 145), new Geometry.Point(195, 190), new Geometry.Point(140, 145));
                r1.draw();
                t4.draw();
                s25q2.play();
                let s = "Which of the following\nis NOT a guideline for\neffective impromptu\nspeaking?";
                formatOpt(s, 106, 80);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let q19op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "When we\nconsider our\naudience";
                formatOpt(s, 82, 490);
            }, 1000 * 7);
            let q19op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "We should\nmemorize key\nphrases";
                formatOpt(s, 232, 490);
            }, 1000 * 7.5);
            let q19op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "Also we\nshould draw\nupon personal\nknowledge";
                formatOpt(s, 382, 482);
            }, 1000 * 8);
            let q19op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "I think\nwe should\nultimately\nbe brief";
                formatOpt(s, 532, 482);
            }, 1000 * 8.5);
            let lmq2ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 8.6);
            TotalQuestion += 1;
            nextQ += 1;
        }
        else if (nextQ == 23) {
            q15container = [];
            setTimeout(q21DrawImg, 1000 * 0.1);
            let q22 = setTimeout(function () {
                let r1 = new Geometry.RecteRound(context, new Geometry.Point(64, 45), 80, 110, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(165, 145), new Geometry.Point(195, 190), new Geometry.Point(140, 145));
                r1.draw();
                t4.draw();
                s25q3.play();
                let s = "How should you\nvisualize yourself\nbefore giving a\npresentation?";
                formatOpt(s, 106, 80);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            let q22op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "Visualize myself\nas how I would\nfeel at the time\nof presentation";
                formatOpt(s, 82, 482);
            }, 1000 * 6);
            let q22op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "Visualize myself\nas if I am getting\na standing\napplause after the\npresentation";
                formatOpt(s, 232, 474);
            }, 1000 * 6.5);
            let q22op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "I will not\nvisualise\nanything";
                formatOpt(s, 382, 490);
            }, 1000 * 7);
            let q22op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "I will think\nonly about\nour emotions";
                formatOpt(s, 532, 490);
            }, 1000 * 7.5);
            let lmq2ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 7.6);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 24) {
            q15container = [];
            let label = setTimeout(function () {
                CSLabel(60);
            }, 1000 * 0.1);
            setTimeout(drawGirl, 1000 * 0.8);
            setTimeout(drawVinod, 1000 * 2);
            let c2 = setTimeout(function () {
                q24DrawSB1();
                s49c2.play();
                let s = "Sameeksha is a second year student pursuing engineering. She\ngives importance to both academics and extra curricular activities.\nShe participated in  a competition of public speaking where she will\nbe judged by her college teachers and peers too. On the day of her\npresentation, she interacted with everyone being a sociable girl.\nShe starts off her presentationof her project on a very enthusiastic\nnote. As she finished her introduction, one of her friends suddenly\nstood up to ask her query. Since she knew her, it did not look good\nto avoid her. She answered her query very nicely.";
                formatQue(s, 553, 72);
                EllipseClickEvent = false;
            }, 1000 * 2.4);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 47.4);
            setTimeout(drawVinod, 1000 * 47.5);
            let c2q1 = setTimeout(function () {
                drawSQ1();
                s49q1.play();
                let s = "If you were in\nher place what\nwould you do?";
                formatQue(s, 711, 134);
                EllipseClickEvent = false;
            }, 1000 * 47.9);
            setTimeout(q24DrawImg, 1000 * 50.9);
            let c2q1op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "I would quickly\nanswer her query\nas she is my\nfriend";
                formatOpt(s, 82, 482);
            }, 1000 * 51.4);
            let c2q1op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "I would thank her\nfor her query first\nand then politely\nanswer her";
                formatOpt(s, 232, 482);
            }, 1000 * 51.9);
            let c2q1op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "I would also\nask others if they\nhave any doubt as\nthere is no point in\nmoving ahead if\nthey do not\nunderstand";
                formatOpt(s, 382, 460);
            }, 1000 * 52.4);
            let c2q1op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "I would not\nanswer her\nimmediately";
                formatOpt(s, 532, 490);
            }, 1000 * 52.9);
            let c2q1ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 53);
            nextQ += 1;
        }
        else if (nextQ == 25) {
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let c2qu1 = setTimeout(function () {
                q18DrawSB1();
                s49qu1.play();
                let s = "Sameeksha answers her very well.\nShe was too happy too. Watching\nthis positive reply, one more\nmember stood up to clarify the\nsame point as she probably did\nnot understand it completely.";
                formatQue(s, 603, 101);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawGirl, 1000 * 0.6);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 16.5);
            setTimeout(drawVinod, 1000 * 16.6);
            let c2q2 = setTimeout(function () {
                drawSQ1();
                s49q2.play();
                let s = "What would\nyou do if in\nthis case?";
                formatQue(s, 710, 134);
            }, 1000 * 17);
            setTimeout(q24DrawImg, 1000 * 20);
            let c2q2op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "I will definitely\nclarify as this was\nthe continuation of\nthe previous point";
                formatOpt(s, 82, 482);
            }, 1000 * 20.5);
            let c2q2op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "I will show\nher the slides\nto clarify the\npoint";
                formatOpt(s, 232, 482);
            }, 1000 * 21);
            let c2q2op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "This time I will\nexplain and take\nhelp of slide too\nfor better clarity";
                formatOpt(s, 382, 482);
            }, 1000 * 21.5);
            let c2q2op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "I will say that it\nwill be covered later\nto avoid her at that\npoint of time";
                formatOpt(s, 532, 482);
            }, 1000 * 22);
            let c2q2ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 22.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 26) {
            PSshowForm = false;
            PSfeedbackform();
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let c2qu2 = setTimeout(function () {
                q18DrawSB1();
                s49qu2.play();
                let s = "So Sameeksha starts showing the\nslides with full gusto. Then her\nsupervisor suddenly told her that\nshe has missed one important\nslide. She tries but found an error\nin going back to that missed slide";
                formatQue(s, 603, 101);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(drawGirl, 1000 * 0.6);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 17.5);
            setTimeout(drawVinod, 1000 * 17.6);
            let c2q3 = setTimeout(function () {
                drawSQ1();
                s49q3.play();
                let s = "What do you think\nSameeksha should\ndo in this case?";
                formatQue(s, 711, 134);
                EllipseClickEvent = false;
            }, 1000 * 18);
            setTimeout(q24DrawImg, 1000 * 22);
            let c2q3op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "Sameeksha\nshould by any\nmeans listen to\nher teacher and\ntry to find the\nerror on that\nslide";
                formatOpt(s, 82, 463);
            }, 1000 * 22.5);
            let c2q3op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "Sameeksha\nshould by any\nmeans listen to\nher teacher and\ntry explaining\nagain the\nslides";
                formatOpt(s, 232, 463);
            }, 1000 * 23);
            let c2q3op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "She should\nnot answer the\nquestion as her\npresent slide will\nconnect to that\nmissed slide";
                formatOpt(s, 382, 467);
            }, 1000 * 23.5);
            let c2q3op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "She should answer\nthe question and say\nthat she will show\nthe slide later ";
                formatOpt(s, 532, 484);
                EllipseClickEvent = true;
            }, 1000 * 24);
            let c2q3ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 24.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 27) {
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let c2qu3 = setTimeout(function () {
                q18DrawSB1();
                s49qu3.play();
                let s = "As her supervisor was the overall\nreview expert of her presentation,\nshe was happy that she could\ndeliver the presentation properly\nsolving queries.";
                formatQue(s, 603, 109);
            }, 1000 * 0.5);
            setTimeout(drawGirl, 1000 * 0.6);
            let clear = setTimeout(function () {
                context.clearRect(0, 0, 800, 600);
            }, 1000 * 13.5);
            setTimeout(drawVinod, 1000 * 13.6);
            let c2q4 = setTimeout(function () {
                drawSQ1();
                s49q4.play();
                let s = "What do you think\nSameekha should\ndo after resolving\nall issues?";
                formatQue(s, 710, 124);
                EllipseClickEvent = false;
            }, 1000 * 14);
            setTimeout(q24DrawImg, 1000 * 18);
            let c2q4op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "She should talk\non the remaining\npoints explicitly";
                formatOpt(s, 82, 490);
            }, 1000 * 18.5);
            let c2q4op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "I feel\nSameeksha\nshould not\ntalk at all";
                formatOpt(s, 232, 482);
            }, 1000 * 19);
            let c2q4op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "Sameeksha\nshould conclude\nthe talk";
                formatOpt(s, 382, 490);
            }, 1000 * 19.5);
            let c2q4op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "Well, I feel\nshe should check\nif any other query\nis there";
                formatOpt(s, 532, 482);
                EllipseClickEvent = true;
            }, 1000 * 20);
            let c2q4ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 20.1);
            nextQ += 1;
            TotalQuestion += 1;
        }
        else if (nextQ == 28) {
            q15container = [];
            setTimeout(drawVinod, 1000 * 0.1);
            let c2q5 = setTimeout(function () {
                drawSQ1();
                s49q5.play();
                let s = "As she was speaking\nagain, she was asked\nto conclude. Do you\nthink Sameeksha\nhas done justice to\nher presentation? ";
                formatQue(s, 710, 105);
                EllipseClickEvent = false;
            }, 1000 * 0.5);
            setTimeout(q24DrawImg, 1000 * 9.5);
            let c2q5op1 = setTimeout(function () {
                q15DrawSB1();
                let s = "Yes as\nshe resolved\nthe doubts";
                formatOpt(s, 82, 490);
            }, 1000 * 10);
            let c2q5op2 = setTimeout(function () {
                q15DrawSB2();
                let s = "No as she did\nnot get a chance\nto complete her\nspeech with all\nthe points";
                formatOpt(s, 232, 474);
            }, 1000 * 10.5);
            let c2q5op3 = setTimeout(function () {
                q15DrawSB3();
                let s = "No as she\ncould have told\nthat she will clarify\nthe doubts later\nat the end of\nthe session";
                formatOpt(s, 382, 467);
            }, 1000 * 11);
            let c2q5op4 = setTimeout(function () {
                q15DrawSB4();
                let s = "None of\nthe above";
                formatOpt(s, 532, 496);
                EllipseClickEvent = true;
            }, 1000 * 11.5);
            let c2q5ClickEnable = setTimeout(function () {
                EllipseClickEvent = true;
            }, 1000 * 11.6);
            nextQ = 21;
            TotalQuestion += 1;
        }
        else {
            console.log("Completed");
        }
    }
    Questions();
    var Randomcase;
    function endScreen(marks) {
        let er1 = new Geometry.RecteRound(context, new Geometry.Point(318, 40), 90, 260, 26);
        let et1 = new Geometry.Triangle(context, new Geometry.Point(303, 150), new Geometry.Point(293, 190), new Geometry.Point(338, 150));
        er1.draw();
        et1.draw();
        let exc = new Geometry.Img(context);
        if (CorrectAnswer == 5 || score == 16 || score == 15 || score == 18) {
            //EllipseClickEvent = false;
            exc.draw("images/excellent.png", 199, 195, 135, 250);
            let et = "Excellent! You have got excellent\npresentation skill set. You need to ensure\nthe same is further enhanced to develop\na cutting edge to beat the competition";
            formatQue(et, 435, 74);
        }
        else if (CorrectAnswer >= 3 && CorrectAnswer < 5 || score == 12 || score == 10) {
            //EllipseClickEvent = false;
            let good = new Geometry.Img(context);
            exc.draw("images/good.png", 199, 195, 85, 250);
            let gt = "Good! Your Current Presentation skill set appears\nto be in place. You can recapitulate the theories\nand Improve upon the application aspects\nto be ahead of the competition";
            formatQue(gt, 435, 74);
        }
        else {
            //EllipseClickEvent = false;
            let sat = new Geometry.Img(context);
            exc.draw("images/satisfactory.png", 199, 195, 125, 250);
            let st = "Satisfactory! Your Current Presentation\nskill set is below par. You will first have\nto brush up the theories and reappear\nin the test for further analysis";
            formatQue(st, 435, 74);
        }
        var btncontainer = [];
        let btn = new Geometry.Button(context, new Geometry.Point(340, 512), 50, 120, 10);
        btn.draw();
        btncontainer.push(btn);
        context.font = "bold 18px Helvetica, Arial, sans-serif";
        context.fillStyle = "white";
        context.fillText("NEXT", 399, 543);
        btnClickEvent = true;
        canvas.addEventListener("click", buttonclick, false);
        canvas.addEventListener("mousemove", buttonhover, false);
        function buttonclick(e) {
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y;
            let p1 = new Geometry.Point(x, y);
            for (let i = 0; i < btncontainer.length; i++) {
                if (btncontainer[i].isInside(p1)) {
                    if (btnClickEvent) {
                        if (nextQ <= 9) {
                            btnClickEvent = false;
                            canvas.style.cursor = 'default';
                            btncontainer = [];
                            nextQ = 9;
                            TotalQuestion += 1;
                            Questions();
                        }
                        else if (nextQ == 14) {
                            btnClickEvent = false;
                            canvas.style.cursor = 'default';
                            squrecontainer = [];
                            context.clearRect(0, 0, 800, 600);
                            TotalQuestion += 1;
                            Questions();
                            btncontainer = [];
                        }
                        else if (nextQ == 18) {
                            btnClickEvent = false;
                            canvas.style.cursor = 'default';
                            btnct = [];
                            context.clearRect(0, 0, 800, 600);
                            Randomcase = Math.floor((Math.random() * 2) + 1);
                            if (Randomcase == 1) {
                                nextQ = 18;
                                TotalQuestion += 1;
                            }
                            else {
                                nextQ = 24;
                                TotalQuestion = 24;
                            }
                            Questions();
                            btncontainer = [];
                        }
                        else if (nextQ == 21) {
                            btnClickEvent = false;
                            canvas.style.cursor = 'default';
                            btnct = [];
                            context.clearRect(0, 0, 800, 600);
                            TotalQuestion = 21;
                            Questions();
                            btncontainer = [];
                        }
                        else if (nextQ == 24) {
                            btnClickEvent = false;
                            canvas.style.cursor = 'default';
                            btnct = [];
                            context.clearRect(0, 0, 800, 600);
                            PSshowForm = true;
                            PSfeedbackform();
                            FinalScreen(TotalScore);
                            btncontainer = [];
                            q15container = [];
                        }
                        break;
                    }
                }
            }
        }
        function buttonhover(e) {
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y;
            let p1 = new Geometry.Point(x, y);
            for (let i = 0; i < btncontainer.length; i++) {
                if (btnClickEvent) {
                    if (btncontainer[i].isInside(p1)) {
                        canvas.style.cursor = 'pointer';
                    }
                    else {
                        canvas.style.cursor = 'default';
                    }
                }
            }
        }
    }
    canvas.addEventListener("click", rectclick, false);
    var squrecontainer = [];
    function rectclick(e) {
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y;
        let p1 = new Geometry.Point(x, y);
        for (let i = 0; i < squrecontainer.length; i++) {
            if (squrecontainer[i].isInside(p1)) {
                clearScreen();
                if (TotalQuestion == 10) {
                    clearScreen();
                    if (squrecontainer[1].isInside(p1)) {
                        CorrectAnswer += 1;
                        rightAnsImg();
                    }
                    else {
                        wrongAnsImg();
                    }
                    let c2q3op4 = setTimeout(function () {
                        let q7op2 = new Geometry.Img(context);
                        q7op2.draw('images/q7op2.png', 239, 225, 134, 150);
                    }, 1000 * 1);
                    setTimeout(clearScreen, 1000 * 4.9);
                }
                else if (TotalQuestion == 11) {
                    clearScreen();
                    if (squrecontainer[1].isInside(p1)) {
                        CorrectAnswer += 1;
                        rightAnsImg();
                    }
                    else {
                        wrongAnsImg();
                    }
                    let c2q3op4 = setTimeout(function () {
                        let q8op2 = new Geometry.Img(context);
                        q8op2.draw('images/q8op2.png', 234, 200, 102, 200);
                    }, 1000 * 1);
                    setTimeout(clearScreen, 1000 * 4.9);
                }
                else if (TotalQuestion == 12) {
                    clearScreen();
                    if (squrecontainer[1].isInside(p1)) {
                        CorrectAnswer += 1;
                        rightAnsImg();
                    }
                    else {
                        wrongAnsImg();
                    }
                    let c2q3op4 = setTimeout(function () {
                        let q9op2 = new Geometry.Img(context);
                        q9op2.draw('images/q9op2.png', 215, 200, 170, 200);
                    }, 1000 * 1);
                    setTimeout(clearScreen, 1000 * 4.9);
                }
                else if (TotalQuestion == 13) {
                    clearScreen();
                    if (squrecontainer[0].isInside(p1)) {
                        CorrectAnswer += 1;
                        rightAnsImg();
                    }
                    else {
                        wrongAnsImg();
                    }
                    let c2q3op4 = setTimeout(function () {
                        let q10op1 = new Geometry.Img(context);
                        q10op1.draw('images/q10op1.png', 100, 150, 420, 116);
                    }, 1000 * 1);
                    setTimeout(clearScreen, 1000 * 4.9);
                }
                setTimeout(Questions, 1000 * 5);
                break;
            }
        }
    }
    function FinalScreen(marks) {
        let er1 = new Geometry.RecteRound(context, new Geometry.Point(318, 40), 100, 260, 26);
        let et1 = new Geometry.Triangle(context, new Geometry.Point(303, 150), new Geometry.Point(293, 190), new Geometry.Point(338, 150));
        er1.draw();
        et1.draw();
        let bAvg = new Geometry.Img(context);
        var percentage;
        percentage = TotalScore * 100 / 79;
        if (percentage <= 50) {
            bAvg.draw("images/satisfactory.png", 199, 195, 125, 250);
            let et = "Your Public Speaking skills are in very bad shape.\nYou need to work more on your physical aspects\nlike making eye contact with the audience and\ntoning your confidence. You need to do various\nsessions of dress rehearsal before a known\naudience to get over your nervousness.";
            formatQue(et, 435, 60);
        }
        else if (percentage >= 51 && percentage <= 60) {
            let avg = new Geometry.Img(context);
            avg.draw("images/average.png", 199, 195, 87, 250);
            let gt = "You need to be thorough with the topic\nwhich you are presenting.\nMemorizing is not preferable.\nIt is important to understand the speech.";
            formatQue(gt, 435, 80);
        }
        else if (percentage >= 61 && percentage <= 75) {
            let good = new Geometry.Img(context);
            good.draw("images/good.png", 199, 195, 85, 250);
            let st = "You need to revisit the theories from\nthe application perspective to see how you\ncan further improve upon your shortcomings\nat the same time do some mock presentations\nto ensure the correct application of the same.";
            formatQue(st, 435, 70);
        }
        else if (percentage >= 76 && percentage <= 90) {
            let vgood = new Geometry.Img(context);
            vgood.draw("images/vgood.png", 199, 195, 86, 250);
            let st = "You are on right track. You need to fine tune\nyour soft skills for futher upliftmentand\nbuilding upon your confidence.";
            formatQue(st, 435, 88);
        }
        else if (percentage >= 91 && percentage <= 100) {
            let exc = new Geometry.Img(context);
            exc.draw("images/excellent.png", 199, 195, 135, 250);
            let st = "Congratulations! You have excelled in the test.\nKeep it up. You are sure to succeed";
            formatQue(st, 435, 98);
        }
        var btncontainer = [];
        let btn = new Geometry.Button(context, new Geometry.Point(340, 512), 50, 120, 10);
        btn.draw();
        btncontainer.push(btn);
        context.font = "bold 18px Helvetica, Arial, sans-serif";
        context.fillStyle = "white";
        context.fillText("Finish", 399, 543);
        btnClickEvent = true;
        canvas.addEventListener("click", buttonclick, false);
        canvas.addEventListener("mousemove", buttonhover, false);
        function buttonclick(e) {
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y;
            let p1 = new Geometry.Point(x, y);
            for (let i = 0; i < btncontainer.length; i++) {
                if (btnClickEvent) {
                    if (btncontainer[i].isInside(p1)) {
                        btncontainer = [];
                        context.clearRect(0, 0, 800, 600);
                        showForm = true;
                        feedbackform();
                        Thankyou();
                    }
                }
                break;
            }
        }
        function buttonhover(e) {
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y;
            let p1 = new Geometry.Point(x, y);
            for (let i = 0; i < btncontainer.length; i++) {
                if (btnClickEvent) {
                    if (btncontainer[i].isInside(p1)) {
                        canvas.style.cursor = 'pointer';
                    }
                    else {
                        canvas.style.cursor = 'default';
                    }
                }
            }
        }
    }
    var horImg = true;
    function drawRect(totalImg, startp, h, wi1, wi2, wi3) {
        squrecontainer = [];
        let r1 = new Geometry.Rectangle(context, new Geometry.Point(startp.x, startp.y), wi1, h);
        r1.draw();
        squrecontainer.push(r1);
        if (horImg) {
            var r2 = new Geometry.Rectangle(context, new Geometry.Point(startp.x * 2 + wi1, startp.y), wi2, h);
        }
        else {
            var r2 = new Geometry.Rectangle(context, new Geometry.Point(startp.x, wi2), wi1, wi3);
        }
        r2.draw();
        squrecontainer.push(r2);
        if (totalImg == 3) {
            let r3 = new Geometry.Rectangle(context, new Geometry.Point(startp.x * 3 + wi1 + wi2, startp.y), wi3, h);
            r3.draw();
            squrecontainer.push(r3);
        }
    }
    var img1 = new Image();
    img1.src = "images/q1p1.png";
    var img2 = new Image();
    img2.src = "images/q1p2.png";
    var img3 = new Image();
    img3.src = "images/q1p3.png";
    var img4 = new Image();
    img4.src = "images/q1p4.png";
    var clicked = false;
    function q6Ani() {
        var x = 0;
        var y = 175;
        img1.src = "images/q1p1.png";
        img2.src = "images/q1p2.png";
        img3.src = "images/q1p3.png";
        img4.src = "images/q1p4.png";
        img1.onload = animate;
        img2.onload = animate;
        img3.onload = animate;
        img4.onload = animate;
        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            x += 0.2;
            if (clicked) {
                clearScreen();
                let queDelay = setTimeout(function () {
                    nextQ = 10;
                    Questions();
                }, 1000 * 4.91);
            }
            else if (x < 95) {
                drawSim2();
                q6Btn();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
                context.drawImage(img4, x, y, 32, 200);
                requestAnimationFrame(animate);
            }
            else if (x >= 95 && x < 200) {
                drawSim2();
                q6Btn();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
                context.drawImage(img1, x, y, 42, 200);
                requestAnimationFrame(animate);
            }
            else if (x >= 200 && x < 305) {
                drawSim2();
                q6Btn();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
                context.drawImage(img2, x, y, 38, 200);
                requestAnimationFrame(animate);
            }
            else if (x >= 305 && x < 410) {
                drawSim2();
                q6Btn();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
                context.drawImage(img3, x, y, 41, 200);
                requestAnimationFrame(animate);
            }
            else if (x >= 410 && x < 515) {
                drawSim2();
                q6Btn();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
                context.drawImage(img4, x, y, 32, 200);
                requestAnimationFrame(animate);
            }
            else {
                x = 0;
                drawSim2();
                q6Btn();
                let q6 = "Hello! I am Raveena.\nLet us see how\nprepared you are\nfor public speaking!\nSo, Identify the\nappropriate posture\nfor presentation.";
                formatQue(q6, 710, 96);
                context.drawImage(img4, x, y, 32, 200);
                requestAnimationFrame(animate);
            }
        }
    }
    var squrecontainer2 = [];
    function q6Btn() {
        canvas.addEventListener("click", rectclick2, false);
        function rectclick2(e) {
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y;
            let p1 = new Geometry.Point(x, y);
            if (TotalQuestion > 6) {
                squrecontainer2 = [];
            }
            for (let i = 0; i < squrecontainer2.length; i++) {
                if (squrecontainer2[i].isInside(p1)) {
                    clearScreen();
                    if (TotalQuestion == 6) {
                        squrecontainer = [];
                        if (squrecontainer2[3].isInside(p1)) {
                            CorrectAnswer = 1;
                            rightAnsImg();
                        }
                        else {
                            wrongAnsImg();
                        }
                        let q9b4 = setTimeout(function () {
                            context.drawImage(img4, 455, 175, 32, 200);
                            let b4 = new Geometry.Rectangle(context, new Geometry.Point(422, 380), 100, 50);
                            let b4t = "Head\nForward";
                            b4.setColor("#80b1fa");
                            b4.draw();
                            formatOpt(b4t, 472, 403);
                        }, 1000 * 1);
                        setTimeout(clearScreen, 1000 * 4.90);
                    }
                    clicked = true;
                    break;
                }
            }
        }
        squrecontainer2 = [];
        let b1 = new Geometry.Rectangle(context, new Geometry.Point(107, 380), 100, 50);
        let b1t = "Sway Back";
        b1.setColor("#80b1fa");
        b1.draw();
        formatOpt(b1t, 157, 410);
        squrecontainer2.push(b1);
        let b2 = new Geometry.Rectangle(context, new Geometry.Point(212, 380), 100, 50);
        let b2t = "Prone\n(Duck Stance)";
        b2.setColor("#80b1fa");
        b2.draw();
        formatOpt(b2t, 262, 403);
        squrecontainer2.push(b2);
        let b3 = new Geometry.Rectangle(context, new Geometry.Point(317, 380), 100, 50);
        let b3t = "Rounded\nShoulders";
        b3.setColor("#80b1fa");
        b3.draw();
        formatOpt(b3t, 367, 403);
        squrecontainer2.push(b3);
        let b4 = new Geometry.Rectangle(context, new Geometry.Point(422, 380), 100, 50);
        let b4t = "Head\nForward";
        b4.setColor("#80b1fa");
        b4.draw();
        formatOpt(b4t, 472, 403);
        squrecontainer2.push(b4);
    }
}
//GD
function GD() {
    let nxt = false;
    let retrn = false;
    let rect = canvas.getBoundingClientRect();
    let q = new Geometry_gd.Img_Q_gd(context);
    let draw1 = new Geometry_gd.Bubble_gd(context);
    let draw2 = new Geometry_gd.Bubble_gd_level5(context);
    let flag_level = 0;
    let count = 1;
    let count_1 = 0;
    let count_level = 1;
    let level1_score = 0;
    let level2_score = 0;
    let level3_score = 0;
    let level4_score = 0;
    let level5_score = 0;
    let lvl1 = false;
    let lvl2 = false;
    let lvl3 = false;
    let lvl4 = false;
    let lvl5 = false;
    let self_anl = false;
    let score = 0;
    let normal = true;
    let b1 = new Geometry_gd.Button(context, new Geometry_gd.Point_gd(600, 500), 80, 150, 20);
    let b2 = new Geometry_gd.Button(context, new Geometry_gd.Point_gd(600, 500), 80, 150, 20);
    let str = new Geometry_gd.Data_gd(0);
    let i = -200;
    function start() {
        let i1 = new Geometry_gd.Img_gd(context);
        i1.draw('images/Host_for_GD.png', 650, 250, 150, 350);
        let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(600, 50), 150, 150, 26);
        er1.draw("Hello, I am your hostess Alica.", "I will take you through this  ", "session on group discussion ", "by jointly accessing a GD.", "Can we call upon the ", "partcipants please.", " ", " ");
        er1.drawline();
        s7_1.play();
        count = 0;
        setTimeout(function () {
            context.clearRect(0, 0, 800, 600);
            anim();
        }, 14000);
        function draw_lady() {
            let i2 = new Geometry_gd.Img_gd(context);
            i2.draw('images/proceeding_for_gd.jpg', i, 250, 300, 350);
        }
        function anim() {
            draw_lady();
            i++;
            if (i < 250)
                window.requestAnimationFrame(anim); //for calling function anim again and again
        }
    }
    start();
    setTimeout(level1, 23000);
    function level1() {
        lvl1 = true;
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", mouseclick, false);
        //let draw1=new Geometry_gd.Bubble_gd(context);
        count = 1;
        first();
        function first() {
            draw1.draw(1);
        }
        let flag = true;
        function mouseclick(e) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            if (lvl1) {
                for (let i = 1; i < draw1.bubblecontainer.length && flag; i++) {
                    if (draw1.bubblecontainer[i].isinside(x, y) && count < 5) {
                        count++;
                        //console.warn("You selected "+ i.toString());
                        if (i == draw1.str.ans) {
                            score++;
                            console.warn("you choose correct answer : ");
                            console.warn("Score : " + score);
                            right_ans();
                        }
                        else {
                            console.warn("Select proper ans : ");
                            wrong_ans();
                            display_rightAns1();
                        }
                        console.warn("count" + count);
                        setTimeout(function () { draw1.draw(count); }, 3000);
                        break;
                    }
                    if (count == 5) {
                        if (draw1.bubblecontainer[i].isinside(x, y)) {
                            flag = false;
                            if (i == draw1.str.ans) {
                                score++;
                                console.warn("you choose correct answer : ");
                                console.warn("Score : " + score);
                                right_ans();
                            }
                            else {
                                console.warn("Select proper ans : ");
                                wrong_ans();
                                display_rightAns1();
                            }
                            level1_score = score;
                            console.warn("level1_score : " + level1_score);
                            setTimeout(check_score, 3000);
                            break;
                        }
                    }
                }
                if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && flag_level == 1 && nxt) {
                    excellent.pause();
                    good.pause();
                    satisfactory.pause();
                    console.warn("Clicked submit buttonhahah");
                    normal = true;
                    nxt = false;
                    lvl1 = false;
                    lvl2 = true;
                    level2();
                }
            }
        }
        flag_level++;
    }
    function level2() {
        canvas.addEventListener("click", mouseclick, false);
        count_level = 1;
        score = 0;
        function img_questions() {
            q.draw_q(count_level);
            count_level++;
        }
        img_questions();
        let flag = false;
        function mouseclick(e) {
            if (lvl2) {
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                flag = false;
                for (let i = 0; i < q.img_container.length; i++) {
                    if (q.img_container[i].isInside(new Geometry_gd.Point_gd(x, y))) {
                        if (i == q.ans[0]) {
                            console.warn("you choose correct answer : ");
                            flag = true;
                        }
                        else if (q.ans[1] != undefined) {
                            if (i == q.ans[1])
                                console.warn("you choose correct answer : ");
                            flag = true;
                        }
                        if (q.ans[2] != undefined) {
                            if (i == q.ans[2])
                                console.warn("you choose correct answer : ");
                            flag = true;
                        }
                        if (flag) {
                            if (count_level <= 6)
                                right_ans();
                            score++;
                        }
                        else {
                            wrong_ans();
                            //for displaying right ans!!
                            context.beginPath();
                            context.moveTo(60, 300);
                            context.lineTo(230, 300);
                            context.lineTo(230, 240);
                            context.lineTo(60, 240);
                            context.fillStyle = "grey";
                            context.fill();
                            context.font = "21px Arial";
                            context.fillStyle = "black";
                            context.fillText("Right Answer", 80, 280);
                            let i1 = new Geometry_gd.Img_gd(context);
                            if (count_level == 2)
                                i1.draw("images/q6-4.jpg", 60, 340, 150, 150);
                            else if (count_level == 3)
                                i1.draw("images/q7-3.jpg", 60, 340, 150, 150);
                            else if (count_level == 4)
                                i1.draw("images/q8-1.jpg", 60, 340, 150, 150);
                            else if (count_level == 5)
                                i1.draw("images/q-9-1.jpg", 60, 340, 200, 200);
                            else if (count_level == 6)
                                i1.draw("images/q-10-3.png", 40, 340, 100, 100);
                        }
                        if (count_level <= 5) {
                            console.warn("count_level = " + count_level);
                            setTimeout(img_questions, 3000);
                        }
                        else {
                            level2_score = score;
                            console.warn("level2_score : " + level2_score);
                            setTimeout(check_score, 3000);
                            console.warn("flag_level + ", flag_level);
                            break;
                        }
                    }
                }
            }
            if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && flag_level == 2 && nxt) {
                console.warn("Clicked submit button");
                excellent.pause();
                good.pause();
                satisfactory.pause();
                // console.warn("Normal : "+ normal);
                //  normal = true ;
                nxt = false;
                lvl2 = false;
                lvl3 = true;
                // console.warn("Normal : "+ normal);
                context.clearRect(0, 0, canvas.width, canvas.height);
                level3();
            }
        }
        flag_level++;
    }
    function level3() {
        q.img_container.length = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", mouseclick, false);
        //let draw1=new Geometry_gd.Bubble_gd(context);
        normal = false;
        count = 6;
        score = 0;
        first();
        function first() {
            draw1.draw(6);
        }
        let flag = true;
        function mouseclick(e) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            if (lvl3) {
                for (let i = 1; i < draw1.bubblecontainer.length && flag; i++) {
                    if (draw1.bubblecontainer[i].isinside(x, y) && count < 10) {
                        count++;
                        //console.warn("You selected "+ i.toString());
                        if (i == draw1.str.ans) {
                            score++;
                            console.warn("you choose correct answer : ");
                            console.warn("Score : " + score);
                            right_ans();
                        }
                        else {
                            console.warn("Select proper ans : ");
                            wrong_ans();
                            display_rightAns1();
                        }
                        setTimeout(function () { draw1.draw(count); }, 3000);
                        break;
                    }
                    if (count == 10) {
                        if (draw1.bubblecontainer[i].isinside(x, y)) {
                            flag = false;
                            if (i == draw1.str.ans) {
                                score++;
                                console.warn("you choose correct answer : ");
                                console.warn("Score : " + score);
                                right_ans();
                            }
                            else {
                                console.warn("Select proper ans : ");
                                wrong_ans();
                                display_rightAns1();
                            }
                            level3_score = score;
                            console.warn("level3_score : " + level3_score);
                            setTimeout(check_score, 3000);
                            //console.warn("Score= "+score.toString());
                            break;
                        }
                    }
                }
                if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && flag_level == 3 && nxt) {
                    console.warn("Clicked submit button");
                    excellent.pause();
                    good.pause();
                    satisfactory.pause();
                    // normal = true;
                    lvl3 = false;
                    lvl4 = true;
                    nxt = false;
                    level4();
                }
            }
        }
        flag_level++;
    }
    //level4();
    function random(min, max) {
        return Math.round((Math.random() * (max - min) + min));
    }
    function level4() {
        let theory_num;
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.warn("You are in level4 .... ");
        canvas.addEventListener("click", mouseclick, false);
        // let draw1=new Geometry_gd.Bubble_gd(context);
        let flag_theory = 0;
        normal = false;
        count = 11;
        count_1 = 21;
        score = 0;
        //theory_num=random(1,2);
        theory_num = 2;
        if (theory_num == 1)
            theory();
        else
            theory_1();
        var duration;
        function theory() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            let i4 = new Geometry_gd.Img_gd(context);
            i4.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er5 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 300, 26);
            if (flag_theory == 0) {
                s10_1_t.play();
                duration = 22000;
                console.warn("duration: " + duration);
                er5.draw("You are sitting in a group discussion involving 10", "students of your age-group and similar educational", "background. The topic in discussion is on which is", "neither to your liking nor do you have much knowledge ", "about the same.", "What will you do after you realize that you don’t", "know much about the topic?", "");
                er5.drawline();
                setTimeout(first, duration);
            }
            if (flag_theory == 1) {
                s10_2_t.play();
                duration = 12000;
                console.warn("duration: " + duration);
                er5.draw("", "Now after sometime, you gather some courage", "to speak. ", "But other participants start shouting and ", "overpowered you.", "Again you felt very frustrated.", "", "");
                er5.drawline();
            }
            if (flag_theory == 2) {
                s10_3_t.play();
                duration = 22000;
                console.warn("duration: " + duration);
                er5.draw("Out of 10 members, there are only 2 members", "who have a fair deal of knowledge on the topic and ", "are voicing their opinions without caring for the ", "fellow members.", "In the midst of the discussion you get into a nasty ", "argument over a difference which is not of much ", "relevance to the topic in discussion. ", "");
                er5.drawline();
            }
            if (flag_theory == 3) {
                s10_4_t.play();
                duration = 16000;
                console.warn("duration: " + duration);
                er5.draw("", "You felt very bad about the situation getting out of ", "hand and eventually the group was asked by ", "the moderator to conclude on the proceedings.", "You felt happy too that the moderator did not ", "point out your name.", "", "");
                er5.drawline();
            }
        }
        function first() {
            draw1.draw(11);
        }
        function theory_1() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            let i4 = new Geometry_gd.Img_gd(context);
            i4.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er5 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 300, 26);
            if (flag_theory == 0) {
                s33_1_t.play();
                duration = 16000;
                console.warn("duration: " + duration);
                er5.draw("", "", "You are one of the participant in a Group Discussion.", "The group received a very good topic: Gender equality :", "does it exists? This was a very debatable topic ", "and interesting one to discuss. ", "", "");
                er5.drawline();
                setTimeout(first_1, duration);
            }
            if (flag_theory == 1) {
                s33_2_t.play();
                duration = 13000;
                console.warn("duration: " + duration);
                er5.draw("", "Suppose you are in place of Rajesh and  you", "start speaking,", "you feel you should really argue to prove your point ", "as the other participants are very involved in the", " discussion", "", "");
                er5.drawline();
            }
            if (flag_theory == 2) {
                s33_3_t.play();
                duration = 10000;
                console.warn("duration: " + duration);
                er5.draw("", "", "Now, once you are in the middle of discussion ", "and you feel that your stance of gender equality ", "was not convincing.", "", "", "");
                er5.drawline();
            }
            if (flag_theory == 3) {
                s33_4_t.play();
                duration = 10000;
                er5.draw("", "", "You feel that you are not at all in any argumentative ", "mode.", "So you start to conclude on your own by agreeing", " to the topic.", "", "");
                er5.drawline();
            }
        }
        function first_1() {
            draw1.draw(21);
        }
        let flag = true;
        function mouseclick(e) {
            if (lvl4) {
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                for (let i = 1; i < draw1.bubblecontainer.length && flag; i++) {
                    if (theory_num == 1) {
                        if (draw1.bubblecontainer[i].isinside(x, y) && count < 14) {
                            count++;
                            if (i == draw1.str.ans) {
                                score++;
                                right_ans();
                                console.warn("you choose correct answer haha : ");
                                console.warn("Score : " + score);
                            }
                            else {
                                wrong_ans();
                                display_rightAns1();
                                console.warn("Select proper ans hahah : ");
                            }
                            //context.clearRect(0,0,canvas.width,canvas.height);
                            flag_theory++;
                            setTimeout(theory, 6 * 1000);
                            //console.warn("---duration: "+duration);
                            setTimeout(function () {
                                setTimeout(function () { draw1.draw(count); }, duration);
                            }, 6 * 1000);
                            break;
                        }
                        if (count == 14) {
                            if (draw1.bubblecontainer[i].isinside(x, y)) {
                                flag = false;
                                if (i == draw1.str.ans) {
                                    right_ans();
                                    score++;
                                    console.warn("you choose correct answer : ");
                                    console.warn("Score : " + score);
                                }
                                else {
                                    wrong_ans();
                                    console.warn("Select proper ans : ");
                                    display_rightAns1();
                                }
                                level4_score = score;
                                console.warn("level4_score : " + level4_score);
                                setTimeout(check_score, 1000);
                                //console.warn("Score= "+score.toString());
                                break;
                            }
                        }
                    }
                    else {
                        if (draw1.bubblecontainer[i].isinside(x, y) && count_1 < 24) {
                            count_1++;
                            if (i == draw1.str.ans) {
                                right_ans();
                                score++;
                                console.warn("you choose correct answer : ");
                                console.warn("Score : " + score);
                            }
                            else {
                                wrong_ans();
                                console.warn("Select proper ans : ");
                                display_rightAns1();
                            }
                            // context.clearRect(0,0,canvas.width,canvas.height);
                            flag_theory++;
                            setTimeout(theory_1, 6000);
                            setTimeout(function () {
                                setTimeout(function () { draw1.draw(count_1); }, duration);
                                ;
                            }, 6 * 1000);
                            break;
                        }
                        if (count_1 == 24) {
                            if (draw1.bubblecontainer[i].isinside(x, y)) {
                                flag = false;
                                if (i == draw1.str.ans) {
                                    right_ans();
                                    score++;
                                    console.warn("you choose correct answer : ");
                                    console.warn("Score : " + score);
                                }
                                else {
                                    wrong_ans();
                                    console.warn("Select proper ans : ");
                                    display_rightAns1();
                                }
                                level4_score = score;
                                console.warn("level4_score : " + level4_score);
                                setTimeout(check_score, 1000);
                                //console.warn("Score= "+score.toString());
                                break;
                            }
                        }
                    }
                }
                if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && nxt) {
                    console.warn("Clicked submit button$$$");
                    excellent.pause();
                    good.pause();
                    satisfactory.pause();
                    normal = true;
                    nxt = false;
                    lvl4 = false;
                    lvl5 = true;
                    level5();
                }
            }
        }
        flag_level++;
    }
    function level5() {
        console.warn("You are in level 5 ... ");
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", mouseclick, false);
        //let draw2=new Geometry_gd.Bubble_gd_level5(context);
        normal = false;
        count = 15;
        score = 0;
        theory();
        function theory() {
            let i4 = new Geometry_gd.Img_gd(context);
            i4.draw('images/Host_for_GD.png', 20, 250, 150, 350);
            let er5 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(60, 20), 150, 400, 26);
            er5.draw(" In a Group Discussion, the participants come with a mindset that they", "need to come out successful in this stage. So, they tend to believe", " that one has to argue and show his/her power of speaking. ", "But, the most important thing is that in GD , it is a win-win situation ", "for everyone. Being a discussion, one should categorically avoid ", "making it a debate. So arguments with logic should be made along ", "with discussion over the argument considering all the perspectives  ", "into consideration. Neither one should be quiet for that leads to rejection.");
            er5.drawline2();
            s11_t.play();
            setTimeout(question, 42200);
        }
        function question() {
            context.clearRect(0, 0, 800, 600);
            draw2.draw(15);
        }
        let flag = true;
        let Result = false;
        function mouseclick(e) {
            if (lvl5) {
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                for (let i = 0; i < draw2.bubblecontainer.length && flag; i++) {
                    if (draw2.bubblecontainer[i].isinside(x, y) && count < 17) {
                        count++;
                        //console.warn("You selected "+ i.toString());
                        if (i == draw2.str.ans) {
                            score++;
                            console.warn("you choose correct answer : ");
                            console.warn("Score : " + score);
                            right_ans();
                        }
                        else {
                            console.warn("Select proper ans : ");
                            console.warn("i" + i);
                            wrong_ans();
                            display_rightAns2();
                        }
                        setTimeout(function () { draw2.draw(count); }, 3000);
                        break;
                    }
                    if (count == 17) {
                        if (draw2.bubblecontainer[i].isinside(x, y)) {
                            flag = false;
                            if (i == draw2.str.ans) {
                                score++;
                                console.warn("you choose correct answer : ");
                                console.warn("Score : " + score);
                                right_ans();
                            }
                            else {
                                console.warn("Select proper ans : ");
                                wrong_ans();
                                display_rightAns2();
                            }
                            level5_score = score;
                            console.warn("level5_score : " + level5_score);
                            //flag_level = 5 ;
                            setTimeout(check_score, 3000);
                            //b2.write_result();
                            //console.warn("Score= "+score.toString());
                            break;
                        }
                    }
                }
                if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && nxt) {
                    console.warn("Clicked submit button");
                    excellent.pause();
                    good.pause();
                    satisfactory.pause();
                    normal = true;
                    nxt = false;
                    count = 0;
                    // flag_level++;
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    document.getElementById('GD_self').style.display = "block";
                    setTimeout(function () {
                        Result = true;
                        flag_level++;
                        b1.draw();
                        b1.write_result();
                    }, 10000);
                }
                if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && Result) {
                    console.warn("Clicked submit button");
                    excellent.pause();
                    good.pause();
                    satisfactory.pause();
                    normal = true;
                    count = 0;
                    flag_level++;
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    nxt = true;
                    lvl5 = false;
                    Result = false;
                    result();
                }
            }
        }
        flag_level++;
        //flag_level=5;
    }
    function right_ans() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = new Geometry_gd.Img_gd(context);
        i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
        let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 100), 100, 150, 26);
        er1.draw("", "", "You choose correct option !!!!", "", "", "", "", "");
        er1.drawline3();
    }
    function wrong_ans() {
        let draw1 = new Geometry_gd.Bubble_gd(context);
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = new Geometry_gd.Img_gd(context);
        i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
        let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 100), 100, 150, 26);
        er1.draw("", "", "You choose wrong option !!!!", "", "", "", "", "");
        er1.drawline3();
        ;
    }
    function result() {
        context.clearRect(0, 0, 800, 600);
        canvas.addEventListener("click", mouseclick, false);
        console.warn("You are in result part  ... ");
        level1_score = level1_score * 3;
        level2_score = level2_score * 3;
        level3_score = level3_score * 4;
        level4_score = level4_score * 5;
        level5_score = level5_score * 6;
        console.warn("level1_score = " + level1_score);
        console.warn("level2_score = " + level2_score);
        console.warn("level3_score = " + level3_score);
        console.warn("level4_score = " + level4_score);
        console.warn("level5_score = " + level5_score);
        let total_score;
        total_score = level1_score + level2_score + level3_score + level4_score + level5_score;
        console.warn("Total_score " + total_score);
        //total_score = 44 ;
        let avg = 0;
        avg = ((total_score * 100) / 88);
        console.warn("Average : " + avg);
        //avg= 100 ;
        // 0  - 50  
        if (avg >= 0 && avg <= 50) {
            let i1 = new Geometry_gd.Img_gd(context);
            i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
            let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(270, 40), 150, 270, 26);
            er1.draw("Tone your confidence level and look for ", "opportune moments to enter into the discussion.", "The moment the noise level is low, ", " get into the discussion. Remember that other", " members who are not actively participating will", " also be waiting for the same moments. ", "That is the reason why you have to be very attentive,", "of course, without looking and sounding desperate.");
            er1.drawline();
            bavg_c.play();
        }
        //51-60
        else if (avg >= 51 && avg <= 60) {
            let i1 = new Geometry_gd.Img_gd(context);
            i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
            let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(270, 40), 150, 270, 26);
            er1.draw("There may be cases where you may not be ", "knowing anything about the topic, you  need to", "listen carefully to the point introduced by", " the other members who are  into GD and note ", "the points being discussed. ", "Subsequently, you  need to apply your common ", "sense to elaborate upon them and,", ", finding a suitable moment, get into the GD.");
            er1.drawline();
            avg_c.play();
        }
        //61 - 75 
        else if (avg >= 61 && avg <= 75) {
            let i1 = new Geometry_gd.Img_gd(context);
            i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
            let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(270, 40), 150, 270, 26);
            er1.draw("", "Additional Skills like Art of Questioning", "other members on points made by them needs to", "be developed.", "This will not only lend clarity", "to the topic and the discussion but also put", "the other members on the backfoot to ensure", "nothing irrelevant is spoken  ");
            er1.drawline();
            good_c.play();
        }
        // 76-90
        else if (avg >= 76 && avg <= 90) {
            let i1 = new Geometry_gd.Img_gd(context);
            i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
            let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(270, 40), 150, 270, 26);
            er1.draw("", "", "Your Group discussion skills are very much", "on the right track and at par with the competion.", "However, you need to fine tune your skills futher ", " to have a cutting edge over the competion", "", "");
            er1.drawline();
            vgood_c.play();
        }
        else if (avg >= 90 && avg <= 100) {
            let i1 = new Geometry_gd.Img_gd(context);
            i1.draw('images/Host_for_GD.png', 310, 250, 150, 350);
            let er1 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(270, 40), 150, 270, 26);
            er1.draw("", "", "You are on track as far as your group discussion", "skills are concerned.", "Maintain it by applying your skills whenever you ", "get the chance and you are sure to succeed in life.", "", "");
            er1.drawline();
            exc_c.play();
        }
        b1.draw();
        b1.write_return();
        normal = true;
        retrn = true;
        function mouseclick(e) {
            if (b1.isInside(new Geometry_gd.Point_gd(e.clientX - rect.left, e.clientY - rect.top)) && nxt && retrn) {
                console.warn("Clicked submit button cliked");
                normal = false;
                nxt = false;
                retrn = false;
                context.clearRect(0, 0, canvas.width, canvas.height);
                drawMain();
            }
        }
    }
    function check_score() {
        nxt = true;
        if (score == 5) {
            normal = false;
            console.warn("Score + " + score);
            context.clearRect(0, 0, canvas.width, canvas.height);
            b1.draw();
            b1.write_submit();
            let i5 = new Geometry_gd.Img_gd(context);
            i5.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er2 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 150, 26);
            er2.draw("Excellent:", "You have got excellent", "presentation skill set  ", "You need to ensure the same is", "further enhanced to ", "develop a cutting edge to", "beat the competition ", "");
            er2.drawline();
            excellent.play();
        }
        else if (flag_level == 4 && score == 4) {
            normal = false;
            console.warn("Score + " + score);
            context.clearRect(0, 0, canvas.width, canvas.height);
            b1.draw();
            b1.write_submit();
            let i5 = new Geometry_gd.Img_gd(context);
            i5.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er2 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 150, 26);
            er2.draw("Excellent:", "You have got excellent", "presentation skill set  ", "You need to ensure the same is", "further enhanced to ", "develop a cutting edge to", "beat the competition ");
            er2.drawline();
            excellent.play();
        }
        else if (flag_level == 5 && score == 3) {
            normal = false;
            console.warn("Score + " + score);
            context.clearRect(0, 0, canvas.width, canvas.height);
            b1.draw();
            b1.write_result();
            let i5 = new Geometry_gd.Img_gd(context);
            i5.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er2 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 150, 26);
            er2.draw("Excellent:", "You have got excellent", "presentation skill set  ", "You need to ensure the same is", "further enhanced to ", "develop a cutting edge to", "beat the competition ");
            er2.drawline();
            excellent.play();
        }
        else if (score >= 3 && score < 5) {
            normal = false;
            console.warn("Score + " + score);
            context.clearRect(0, 0, canvas.width, canvas.height);
            b1.draw();
            b1.write_submit();
            let i5 = new Geometry_gd.Img_gd(context);
            i5.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er3 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 150, 26);
            er3.draw("Good:", "Your Current Presentation", "skill set appears to be in ", "place. You can recapitulate the", "theories and Improve upon the", "application aspects to be", "ahead of the competition", "");
            er3.drawline();
            good.play();
        }
        if (score >= 0 && score < 3) {
            normal = false;
            console.warn("Score + " + score);
            context.clearRect(0, 0, canvas.width, canvas.height);
            b1.draw();
            b1.write_submit();
            let i5 = new Geometry_gd.Img_gd(context);
            i5.draw('images/Host_for_GD.png', 350, 250, 150, 350);
            let er4 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(300, 50), 150, 150, 26);
            er4.draw(" Satisfactory:", " Your Current Presentation skill", "set is below par. You will", "first have to brush up the", "theories and reappear in the", "test for further analysis", "", "");
            er4.drawline();
            satisfactory.play();
        }
    }
    function display_rightAns1() {
        context.beginPath();
        context.moveTo(60, 300);
        context.lineTo(230, 300);
        context.lineTo(230, 240);
        context.lineTo(60, 240);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 280);
        let right_ans1 = new Geometry_gd.Ellipse_gd(context, new Geometry_gd.Point_gd(150, 400), 115, 85);
        let index = draw1.str.ans;
        console.log("index: " + index);
        right_ans1.draw(draw1.str.data[index + 1][0], draw1.str.data[index + 1][1], draw1.str.data[index + 1][2], draw1.str.data[index + 1][3], draw1.str.data[index + 1][4], draw1.str.data[index + 1][5], draw1.str.data[index + 1][6], draw1.str.data[index + 1][7]);
    }
    function display_rightAns2() {
        context.beginPath();
        context.moveTo(60, 300);
        context.lineTo(230, 300);
        context.lineTo(230, 240);
        context.lineTo(60, 240);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 280);
        let right_ans1 = new Geometry_gd.Ellipse_gd(context, new Geometry_gd.Point_gd(150, 400), 115, 85);
        let index = draw2.str.ans;
        console.log("index: " + index);
        right_ans1.draw(draw2.str.data[index + 2][0], draw2.str.data[index + 2][1], draw2.str.data[index + 2][2], draw2.str.data[index + 2][3], draw2.str.data[index + 2][4], draw2.str.data[index + 2][5], draw2.str.data[index + 2][6], draw2.str.data[index + 2][7]);
    }
}
function PI() {
    canvas.width = 800;
    canvas.height = 600;
    first_shubham();
    canvas.addEventListener("click", mouseclick, false);
    canvas.addEventListener("mousedown", mousedown, false);
    canvas.addEventListener("mousemove", mousemove, false);
    canvas.addEventListener("mouseup", mouseup, false);
    var rect = canvas.getBoundingClientRect();
    let num;
    num = 1;
    let draw1 = new Geometry_shubham.Bubble(context);
    let draw2;
    draw2 = new Geometry_shubham.Box(context, num);
    let draw3 = new Geometry_shubham.Bubble2(context);
    let draw4 = new Geometry_shubham.Bubble3(context);
    let case_choice;
    let final_score = [];
    let part_count = 1;
    let count = 1;
    let score = 0;
    let flag = true;
    let normal = true;
    let simple = false;
    let img = false;
    let lvl2 = false;
    let lvl3 = false;
    let lvl3_1 = false;
    let lvl4 = false;
    let lvl4_img = false;
    let Result = false;
    let rtn = false;
    //simple ques data
    let b = new Geometry_shubham.Button(context, new Geometry_shubham.Point(300, 500), 70, 140, 20);
    //buttons for lvl3
    let b3_1 = new Geometry_shubham.Button(context, new Geometry_shubham.Point(150, 500), 40, 100, 10);
    let b3_2 = new Geometry_shubham.Button(context, new Geometry_shubham.Point(300, 500), 40, 100, 10);
    let users_ans = [];
    let score2 = 0;
    //img questions data
    let q_s = new Geometry_shubham.Img_Q(context);
    let q1 = [];
    first_shubham();
    function first_shubham() {
        host_welcome();
        wlcm.play();
        setTimeout(first_question, 10 * 1000);
    }
    var enabledrag = false;
    var pt1;
    var pt2;
    var index1;
    var index2;
    function host_welcome() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i2 = document.getElementById("host1");
        context.drawImage(i2, 250, 280, 420, 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(320, 60), 120, 160, 20);
        r1.draw();
        context.font = "17px Arial";
        context.fillStyle = "black";
        context.fillText("Hello! I am your host Ravina.", 282, 100);
        context.fillText("I will guide you through this", 282, 120);
        context.fillText("interactive session on ", 282, 140);
        context.fillText("Personal Interview", 282, 160);
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(420, 200);
        context.lineTo(480, 280);
        context.lineTo(480, 200);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
    }
    function host_Ans(right) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i2 = document.getElementById("host1");
        context.drawImage(i2, 250, 320, canvas.width - 380, canvas.height - 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(300, 80), 80, 230, 20);
        r1.draw();
        context.font = "17px Arial";
        context.fillStyle = "black";
        if (right) {
            r_ans.play();
            context.fillText("You have selected the Right option.", 270, 125);
        }
        else {
            w_ans.play();
            context.fillText("You have selected the wrong option.", 270, 125);
        }
        context.fillText("Lets proceed to the next question.", 270, 145);
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(420, 180);
        context.lineTo(480, 310);
        context.lineTo(480, 180);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
    }
    //next functions are for displaying right ans when usere selects wrong one!!
    function display_rightAns1() {
        context.beginPath();
        context.moveTo(60, 300);
        context.lineTo(230, 300);
        context.lineTo(230, 240);
        context.lineTo(60, 240);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 280);
        let right_ans1 = new Geometry_shubham.Ellipse(context, new Geometry_shubham.Point(150, 400), 85, 80);
        let index = draw1.str.ans;
        right_ans1.draw(draw1.str.data[index + 1][0], draw1.str.data[index + 1][1], draw1.str.data[index + 1][2], draw1.str.data[index + 1][3], draw1.str.data[index + 1][4], draw1.str.data[index + 1][5]);
    }
    function display_rightAns1_simple() {
        context.beginPath();
        context.moveTo(60, 165);
        context.lineTo(230, 165);
        context.lineTo(230, 105);
        context.lineTo(60, 105);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 145);
        context.font = "16px Arial";
        context.fillStyle = "black";
        if (num == 1) {
            context.fillText("1->", 35, 220);
            context.fillText(draw2.d2.data2[draw2.d2.ans[0] + 2][0], 60, 220);
            context.fillText(draw2.d2.data2[draw2.d2.ans[0] + 2][1], 60, 240);
            context.fillText(draw2.d2.data2[draw2.d2.ans[0] + 2][2], 60, 260);
            context.fillText("2->", 35, 300);
            context.fillText(draw2.d2.data2[draw2.d2.ans[1] + 2][0], 60, 300);
            context.fillText("3->", 35, 340);
            context.fillText(draw2.d2.data2[draw2.d2.ans[2] + 2][0], 60, 340);
            context.fillText(draw2.d2.data2[draw2.d2.ans[2] + 2][1], 60, 360);
            context.fillText("4->", 35, 400);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][0], 60, 400);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][1], 60, 420);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][2], 60, 440);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][3], 60, 460);
        }
        else if (num == 2) {
            context.fillText("1->", 35, 220);
            context.fillText(draw2.d2.data2[draw2.d2.ans[0] + 2][0], 60, 220);
            context.fillText(draw2.d2.data2[draw2.d2.ans[0] + 2][1], 60, 240);
            context.fillText("2->", 35, 280);
            context.fillText(draw2.d2.data2[draw2.d2.ans[1] + 2][0], 60, 280);
            context.fillText(draw2.d2.data2[draw2.d2.ans[1] + 2][1], 60, 300);
            context.fillText("3->", 35, 340);
            context.fillText(draw2.d2.data2[draw2.d2.ans[2] + 2][0], 60, 340);
            context.fillText(draw2.d2.data2[draw2.d2.ans[2] + 2][1], 60, 360);
            context.fillText(draw2.d2.data2[draw2.d2.ans[2] + 2][2], 60, 380);
            context.fillText("4->", 35, 420);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][0], 60, 420);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][1], 60, 440);
        }
        else if (num == 3) {
            context.fillText("1->", 35, 220);
            context.fillText(draw2.d2.data2[draw2.d2.ans[0] + 2][0], 60, 220);
            context.fillText("2->", 35, 260);
            context.fillText(draw2.d2.data2[draw2.d2.ans[1] + 2][0], 60, 260);
            context.fillText("3->", 35, 300);
            context.fillText(draw2.d2.data2[draw2.d2.ans[2] + 2][0], 60, 300);
            context.fillText("4->", 35, 340);
            context.fillText(draw2.d2.data2[draw2.d2.ans[3] + 2][0], 60, 340);
        }
    }
    function display_rightAns1_2() {
        context.beginPath();
        context.moveTo(60, 300);
        context.lineTo(230, 300);
        context.lineTo(230, 240);
        context.lineTo(60, 240);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 280);
        let i1 = new Geometry_shubham.Img(context);
        if (count == 2)
            i1.draw("images/pic1_2.png", 60, 340, 150, 150);
        else if (count == 3)
            i1.draw("images/pic2_2.jpg", 60, 340, 150, 150);
        else if (count == 4)
            i1.draw("images/pic3_2.jpg", 60, 340, 150, 150);
        else if (count == 5)
            i1.draw("images/pic4_1.png", 60, 340, 200, 200);
        else if (count == 6) {
            i1.draw("images/pic5_2.jpg", 40, 340, 100, 100);
            i1.draw("images/pic5_3.jpg", 160, 340, 100, 100);
            i1.draw("images/pic5_6.png", 70, 460, 100, 100);
        }
    }
    function display_rightAns2() {
        context.beginPath();
        context.moveTo(60, 300);
        context.lineTo(230, 300);
        context.lineTo(230, 240);
        context.lineTo(60, 240);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 280);
        let right_ans1 = new Geometry_shubham.Ellipse(context, new Geometry_shubham.Point(150, 400), 85, 80);
        let index = draw3.str.ans;
        right_ans1.draw(draw3.str.data[index + 1][0], draw3.str.data[index + 1][1], draw3.str.data[index + 1][2], draw3.str.data[index + 1][3], draw3.str.data[index + 1][4], draw3.str.data[index + 1][5]);
    }
    function display_rightAns3() {
        context.beginPath();
        context.moveTo(60, 300);
        context.lineTo(230, 300);
        context.lineTo(230, 240);
        context.lineTo(60, 240);
        context.fillStyle = "grey";
        context.fill();
        context.font = "21px Arial";
        context.fillStyle = "black";
        context.fillText("Right Answer", 80, 280);
        let right_ans1 = new Geometry_shubham.Ellipse(context, new Geometry_shubham.Point(150, 400), 85, 80);
        let index = draw4.str.ans[0];
        right_ans1.draw(draw4.str.data[index + 1][0], draw4.str.data[index + 1][1], draw4.str.data[index + 1][2], draw4.str.data[index + 1][3], draw4.str.data[index + 1][4], draw4.str.data[index + 1][5]);
    }
    function host_score() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i2 = document.getElementById("host1");
        context.drawImage(i2, 250, 320, canvas.width - 380, canvas.height - 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(270, 80), 100, 310, 20);
        r1.draw();
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(420, 200);
        context.lineTo(480, 310);
        context.lineTo(480, 200);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
        //text
        context.font = "16px Arial";
        context.fillStyle = "black";
        console.warn("score= " + score);
        if (lvl3) {
            let per = (100 * score) / 4;
            final_score.push(per);
            if (score == 4) {
                excellent.play();
                context.fillText("Excellent:You have got excellent presentation ", 235, 125);
                context.fillText("skill set. You need to ensure the same is further", 235, 145);
                context.fillText("enhanced to develop a cutting edge to beat ", 235, 165);
                context.fillText("the competition.", 235, 185);
            }
            //score>3
            else if (score == 3) {
                good.play();
                context.fillText("Good: Your Current Presentation skill set appears", 235, 125);
                context.fillText("to be in place. You can recapitulate the theories ", 235, 145);
                context.fillText("Improve upon the application aspects to be ahead ", 235, 165);
                context.fillText("of the competition.", 235, 185);
            }
            else {
                satisfactory.play();
                context.fillText("Satisfactory:Your Current Presentation skill set", 235, 125);
                context.fillText("is below par. You will first have to brush up the", 235, 145);
                context.fillText("theories and reappear in the test for ", 235, 165);
                context.fillText("further analysis", 235, 185);
            }
        }
        else if (lvl4_img) {
            let per = (score * 100) / 3;
            final_score.push(per);
            lvl4_img = false;
            if (score == 3) {
                excellent.play();
                context.fillText("Excellent:You have got excellent presentation ", 235, 125);
                context.fillText("skill set. You need to ensure the same is further", 235, 145);
                context.fillText("enhanced to develop a cutting edge to beat ", 235, 165);
                context.fillText(" the competition.", 235, 185);
            }
            //score>3
            else if (score == 2) {
                good.play();
                context.fillText("Good: Your Current Presentation skill set appears", 235, 125);
                context.fillText("to be in place. You can recapitulate the theories ", 235, 145);
                context.fillText("Improve upon the application aspects to be ahead ", 235, 165);
                context.fillText("of the competition.", 235, 185);
            }
            else {
                satisfactory.play();
                context.fillText("Satisfactory:Your Current Presentation skill set", 235, 125);
                context.fillText("is below par. You will first have to brush up the", 235, 145);
                context.fillText(" theories and reappear in the test for ", 235, 165);
                context.fillText("further analysis", 235, 185);
            }
            q1.length = 0;
        }
        else {
            let per = (score * 100) / 5;
            final_score.push(per);
            if (score == 5) {
                excellent.play();
                context.fillText("Excellent:You have got excellent presentation ", 235, 125);
                context.fillText("skill set. You need to ensure the same is further", 235, 145);
                context.fillText("enhanced to develop a cutting edge to beat ", 235, 165);
                context.fillText(" the competition.", 235, 185);
            }
            //score>3
            else if (score >= 3) {
                good.play();
                context.fillText("Good: Your Current Presentation skill set appears", 235, 125);
                context.fillText("to be in place. You can recapitulate the theories ", 235, 145);
                context.fillText("Improve upon the application aspects to be ahead ", 235, 165);
                context.fillText("of the competition.", 235, 185);
            }
            else {
                satisfactory.play();
                context.fillText("Satisfactory:Your Current Presentation skill set", 235, 125);
                context.fillText("is below par. You will first have to brush up the", 235, 145);
                context.fillText("theories and reappear in the test for ", 235, 165);
                context.fillText("further analysis", 235, 185);
            }
        }
        rtn = false;
        normal = false;
        simple = false;
        img = false;
        lvl2 = false;
        lvl3 = false;
        lvl3_1 = false;
        lvl4 = false;
        Result = false;
        if (part_count == 4)
            setTimeout(function () { part_count++; b.draw(); b.write_learn_more(); }, 13 * 1000);
        else if (part_count == 5) {
            setTimeout(function () { document.getElementById('PI_self').style.display = "block"; }, 13 * 1000);
            setTimeout(function () { Result = true; b.draw(); b.write_result(); }, 23 * 1000);
        }
        else
            setTimeout(function () { part_count++; b.draw(); b.write_next(); }, 13 * 1000);
    }
    function next_part() {
        switch (part_count) {
            case 2:
                count = 1;
                score = 0;
                img = true;
                img_questions();
                break;
            case 3:
                context.clearRect(0, 0, canvas.width, canvas.height);
                count = 11;
                score = 0;
                lvl2 = true;
                lvl2_questions();
                break;
            case 4:
                context.clearRect(0, 0, canvas.width, canvas.height);
                count = 1;
                score = 0;
                lvl3 = true;
                lvl3_1 = true;
                lvl3_start();
                break;
            case 5:
                context.clearRect(0, 0, canvas.width, canvas.height);
                count = 1;
                score = 0;
                lvl4 = true;
                lvl4_start();
                break;
            case 6:
                context.clearRect(0, 0, canvas.width, canvas.height);
                result();
                break;
        }
    }
    function first_question() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = document.getElementById("pi1");
        context.drawImage(i1, 100, 200, 600, 400);
        draw1.draw(1);
    }
    function mouseclick(e) {
        if (normal) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            for (let i = 1; i < draw1.bubblecontainer.length; i++) {
                if (draw1.bubblecontainer[i].isinside(x, y)) {
                    count++;
                    if (draw1.str.ans == i) {
                        score++;
                        console.warn("Right answer:)");
                        host_Ans(true);
                        if (count <= 5) {
                            setTimeout(next_temp, 6 * 1000);
                        }
                        else
                            setTimeout(host_score, 5 * 1000);
                    }
                    else {
                        host_Ans(false);
                        display_rightAns1();
                        if (count <= 5) {
                            if (num < 4) {
                                simple = true;
                                console.warn("wrong answer!!");
                                setTimeout(simple_q, 8 * 1000);
                            }
                            else
                                setTimeout(next_temp, 8 * 1000);
                        }
                        else
                            setTimeout(host_score, 6 * 1000);
                        break;
                    }
                    function next_temp() {
                        setTimeout(function () { draw1.draw(count); }, 500);
                    }
                    break;
                }
            }
        }
        if (img) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            flag = false;
            for (let i = 0; i < q_s.img_container.length; i++) {
                if (q_s.img_container[i].isInside(new Geometry_shubham.Point(x, y))) {
                    console.warn("Selected num" + i);
                    if (i == q_s.ans[0])
                        flag = true;
                    else if (q_s.ans[1] != undefined) {
                        if (i == q_s.ans[1])
                            flag = true;
                    }
                    else if (q_s.ans[2] != undefined) {
                        if (i == q_s.ans[2])
                            flag = true;
                    }
                    if (flag) {
                        host_Ans(true);
                        score++;
                    }
                    else {
                        host_Ans(false);
                        display_rightAns1_2();
                    }
                    if (count <= 5)
                        setTimeout(img_questions, 6 * 1000);
                    else
                        setTimeout(host_score, 5 * 1000);
                    break;
                }
            }
        }
        if (simple) {
            if (b.isInside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top)))
                check_answer();
        }
        if (lvl2) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            for (let i = 1; i < draw3.bubblecontainer.length; i++) {
                if (draw3.bubblecontainer[i].isinside(x, y)) {
                    if (draw3.str.ans == i) {
                        host_Ans(true);
                        score++;
                    }
                    else {
                        console.warn("in false");
                        host_Ans(false);
                        display_rightAns2();
                    }
                    if (count <= 15)
                        setTimeout(lvl2_questions, 6 * 1000);
                    else
                        setTimeout(host_score, 6 * 1000);
                    break;
                }
            }
        }
        else if (lvl3) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            if (lvl3_1) {
                if (b3_1.isInside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                    lvl3_1 = false;
                    host_Ans(false);
                    context.beginPath();
                    context.moveTo(60, 300);
                    context.lineTo(230, 300);
                    context.lineTo(230, 240);
                    context.lineTo(60, 240);
                    context.fillStyle = "grey";
                    context.fill();
                    context.font = "21px Arial";
                    context.fillStyle = "black";
                    context.fillText("Right Answer", 80, 280);
                    context.font = "22px Arial";
                    context.fillStyle = "red";
                    context.fillText("NOT OK", 90, 340);
                    setTimeout(case1_questions, 6 * 1000);
                }
                else if (b3_2.isInside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                    lvl3_1 = false;
                    score++;
                    host_Ans(true);
                    setTimeout(case1_questions, 6 * 1000);
                }
            }
            else {
                for (let i = 1; i < draw4.bubblecontainer.length; i++) {
                    if (draw4.bubblecontainer[i].isinside(x, y)) {
                        count++;
                        if (draw4.str.ans[0] == i || draw4.str.ans[1] == i || draw4.str.ans[2] == i) {
                            host_Ans(true);
                            score++;
                            if (count <= 4) {
                                host_Ans(true);
                                if (case_choice == 1)
                                    setTimeout(case1_questions, 6 * 1000);
                                else if (count == 1)
                                    case2_questions();
                                else
                                    setTimeout(case2_questions, 7 * 1000);
                            }
                            else
                                setTimeout(host_score, 7 * 1000);
                        }
                        else {
                            host_Ans(false);
                            display_rightAns3();
                            if (count <= 4) {
                                if (case_choice == 1)
                                    setTimeout(case1_questions, 7 * 1000);
                                else if (count == 1)
                                    case2_questions();
                                else
                                    setTimeout(case2_questions, 7 * 1000);
                            }
                            else
                                setTimeout(host_score, 7 * 1000);
                            break;
                        }
                        break;
                    }
                }
            }
        }
        else if (lvl4) {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            for (let i = 1; i < draw1.bubblecontainer.length; i++) {
                if (draw1.bubblecontainer[i].isinside(x, y)) {
                    count++;
                    if (draw1.str.ans == i) {
                        score++;
                        console.warn("Right answer:)");
                        host_Ans(true);
                    }
                    else {
                        host_Ans(false);
                        display_rightAns1();
                        console.warn("wrong answer!!");
                    }
                    setTimeout(lvl4_questions, 6 * 1000);
                    break;
                }
            }
        }
        else {
            if (b.isInside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                if (lvl4_img)
                    check_answer_img();
                else if (Result)
                    result();
                else if (rtn) {
                    rtn = false;
                    part_count = 1;
                    drawMain();
                }
                else
                    next_part();
            }
        }
    }
    function normal_q() {
        normal = true;
        simple = false;
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = document.getElementById("pi1");
        context.drawImage(i1, 100, 200, canvas.width - 200, canvas.height - 200);
        draw1.draw(count);
    }
    function simple_q() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        b.draw();
        b.write_submit();
        document.getElementById("pi1").style.display = "none";
        draw2 = new Geometry_shubham.Box(context, num);
        draw2.draw();
        question();
    }
    function next() {
        if (num == 4)
            normal_q();
        if (simple && count <= 5) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            draw2 = new Geometry_shubham.Box(context, num);
            draw2.draw();
            b.draw();
            b.write_submit();
            question();
        }
        if (count > 5)
            host_score();
        //context.clearRect(0,0,canvas.width,canvas.height);    
    }
    function question() {
        context.clearRect(10, 80, canvas.width, 30);
        context.font = "16px Arial";
        context.fillStyle = "Black";
        context.fillText("Q)", 8, 100);
        context.fillText(draw2.d2.data2[1][0], 26, 100);
    }
    function check_answer() {
        users_ans.length = 0;
        for (let i = 0; i < draw2.rqcontainer.length; i++) {
            if (draw2.rqcontainer[i].isinside(new Geometry_shubham.Point(100, 200))) {
                users_ans.push(i);
                break;
            }
        }
        for (let i = 0; i < draw2.rqcontainer.length; i++) {
            if (draw2.rqcontainer[i].isinside(new Geometry_shubham.Point(310, 210))) {
                users_ans.push(i);
                break;
            }
        }
        for (let i = 0; i < draw2.rqcontainer.length; i++) {
            if (draw2.rqcontainer[i].isinside(new Geometry_shubham.Point(510, 210))) {
                users_ans.push(i);
                break;
            }
        }
        for (let i = 0; i < draw2.rqcontainer.length; i++) {
            if (draw2.rqcontainer[i].isinside(new Geometry_shubham.Point(710, 210))) {
                users_ans.push(i);
                break;
            }
        }
        if (users_ans[0] == draw2.d2.ans[0] && users_ans[1] == draw2.d2.ans[1] && users_ans[2] == draw2.d2.ans[2] && users_ans[3] == draw2.d2.ans[3]) {
            simple = false;
            score++;
            console.warn("Right ans!!");
            if (count <= 5)
                host_Ans(true);
            if (count == 5)
                setTimeout(host_score, 7 * 1000);
            else
                setTimeout(normal_q, 5 * 1000);
        }
        else {
            console.warn("wrong ans!!");
            host_Ans(false);
            display_rightAns1_simple();
            if (count < 5)
                setTimeout(next, 8 * 1000);
            else {
                simple = false;
                setTimeout(host_score, 8 * 1000);
            }
        }
        num++;
        count++;
    }
    function img_questions() {
        normal = false;
        simple = false;
        img = true;
        context.clearRect(0, 0, canvas.width, canvas.height);
        q_s.draw_q(count);
        count++;
    }
    function lvl2_questions() {
        lvl2 = true;
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i3 = document.getElementById("s2");
        context.drawImage(i3, 150, 200, canvas.width - 300, canvas.height - 300);
        draw3.draw(count);
        count++;
    }
    function lvl3_start() {
        let i5 = document.getElementById("lady");
        let i = 0;
        anim();
        function draw_lady() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(i5, i, 200, 125, 150);
        }
        function anim() {
            draw_lady();
            i++;
            if (i < 300)
                window.requestAnimationFrame(anim); //for calling function anim again and again
            else {
                case_choice = random(1, 2);
                if (case_choice == 1) {
                    case1();
                }
                else {
                    case2();
                }
            }
        }
    }
    //    
    function case1_theory(count) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = document.getElementById("host1");
        context.drawImage(i1, 250, 320, canvas.width - 380, canvas.height - 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(200, 75), 150, 350, 20);
        r1.draw();
        switch (count) {
            case 1:
                s17th11.play();
                context.font = "15px Arial";
                context.fillStyle = "black";
                context.fillText("You are a fresh graduate applying for a job.", 170, 115);
                context.fillText("You prepare your resume and a folder having all certificates", 170, 130);
                context.fillText("before the interview. You buy a beautiful portfolio bag.", 170, 145);
                context.fillText("Your peers think very highly about you. They boost up your", 170, 160);
                context.fillText("confidence and feel very happy that you were called for ", 170, 175);
                context.fillText("the interview. The night before the interview all your", 170, 190);
                context.fillText("friends cheer you up. The next day, when you arrive", 170, 205);
                context.fillText("at the interview venue, you feel very confident.", 170, 220);
                break;
            case 2:
                s17th12.play();
                context.font = "16px Arial";
                context.fillStyle = "black";
                context.fillText(" After your introduction,  you were asked if you met", 170, 130);
                context.fillText(" any person you would refuse to work with?", 170, 145);
                context.fillText(" You know that during your projects you had many ", 170, 160);
                context.fillText(" problems with your peers and had a tough time with", 170, 175);
                context.fillText(" them,particularly with Rahul who messed up your ", 170, 190);
                context.fillText(" work due to his attitude? ", 170, 205);
                break;
            case 3:
                s17th13.play();
                context.font = "16px Arial";
                context.fillStyle = "black";
                context.fillText("  You told very courteously the problems you had with", 170, 140);
                context.fillText("  your peers when asked about your team work .", 170, 155);
                context.fillText("  They appreciated your project. This added to your", 170, 170);
                context.fillText("  happiness which soon was overshadowed", 170, 185);
                context.fillText("  by the tricky question: ", 170, 200);
                break;
        }
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(420, 240);
        context.lineTo(470, 320);
        context.lineTo(480, 240);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
    }
    function case2_theory(count) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = document.getElementById("host1");
        context.drawImage(i1, 250, 320, canvas.width - 380, canvas.height - 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(200, 75), 150, 350, 20);
        r1.draw();
        switch (count) {
            case 1:
                s42th21.play();
                context.font = "15px Arial";
                context.fillStyle = "black";
                context.fillText("Krishna was very busy in his preparations for", 170, 130);
                context.fillText("the final year examinations. The projects and vivas were ", 170, 145);
                context.fillText("taking  a lot of his time and he could not get time to ", 170, 160);
                context.fillText("prepare much for the interview. As he was a very bright", 170, 175);
                context.fillText("student, he knew a lot of things about interview.  ", 170, 190);
                context.fillText("So he was well prepared in a way.", 170, 205);
                break;
            case 2:
                s42th22.play();
                context.font = "15px Arial";
                context.fillStyle = "black";
                s42th22.play();
                context.fillText("You can understand Krishna's background. He has been a ", 170, 140);
                context.fillText("consistent topper throughtout his semesters. The company ", 170, 155);
                context.fillText("which he applied for is the company where he had ", 170, 170);
                context.fillText("undertaken a short stint as a 6 months internship. ", 170, 185);
                context.fillText("As such, he was already prepared.", 170, 200);
                break;
        }
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(420, 240);
        context.lineTo(470, 320);
        context.lineTo(480, 240);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
    }
    function case1_questions() {
        let l3_1 = new Geometry_shubham.Ellipse(context, new Geometry_shubham.Point(190, 110), 80, 60, "rgb(153,153,255)");
        let duration;
        if (count == 1) { //question
            let l3_2 = new Geometry_shubham.Ellipse(context, new Geometry_shubham.Point(480, 110), 80, 60);
            let l3_3 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(600, 160), 70, 120, 30);
            context.clearRect(0, 0, canvas.width, canvas.height);
            let i1 = document.getElementById("lvl3");
            context.drawImage(i1, 0, 100, canvas.width - 350, canvas.height - 300);
            l3_1.draw("", "", "    Please introduce", "   yourself", "", "");
            context.beginPath();
            context.moveTo(150, 160);
            context.lineTo(120, 180);
            context.lineTo(175, 168);
            context.fillStyle = "rgb(153,153,255)";
            context.fill();
            context.stroke();
            s17q1.play();
            //ans
            setTimeout(function () {
                l3_2.draw("", "      My name is Rita.", "       My age is 15 years.", "      I was born on 30 March", "      Thursday", "");
                context.beginPath();
                context.moveTo(440, 160);
                context.lineTo(390, 180);
                context.lineTo(465, 168);
                context.fillStyle = "rgb(224,224,224)";
                context.fill();
                context.stroke();
            }, 2 * 1000);
            setTimeout(function () {
                let i2 = document.getElementById("host1");
                context.drawImage(i2, 500, 300, canvas.width - 550, canvas.height - 300);
            }, 4 * 1000);
            setTimeout(function () {
                l3_3.draw();
                context.beginPath();
                context.strokeStyle = "rgb(81, 224, 210)";
                context.moveTo(620, 250);
                context.lineTo(635, 295);
                context.lineTo(660, 250);
                context.fillStyle = "rgb(81, 224, 210)";
                context.fill();
                context.stroke();
                context.font = "16px Arial";
                context.fillStyle = "black";
                context.fillText("What would you say about", 550, 180);
                context.fillText("the response?", 550, 200);
                context.fillText("Was it ok or not up to", 550, 220);
                context.fillText("your expectation?", 550, 240);
            }, 5 * 1000);
            setTimeout(function () {
                b3_1.draw();
                context.font = "20px Arial";
                context.fillStyle = "black";
                context.fillText("OK", 180, 530);
                b3_2.draw();
                context.font = "19px Arial";
                context.fillStyle = "black";
                context.fillText("NOT OK", 315, 530);
            }, 7 * 1000);
            count++;
        }
        else if (count <= 3) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            case1_theory(count);
            if (count == 2)
                duration = 19;
            else
                duration = 17;
            setTimeout(function () {
                draw4.draw(count);
            }, duration * 1000);
        }
        else {
            draw4.draw(count);
        }
    }
    function case2_questions() {
        //let l3_1=new Geometry_shubham.Ellipse(context,new Geometry_shubham.Point(190,110),80,60,"rgb(153,153,255)");
        if (count == 2) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            case2_theory(count);
            setTimeout(function () { draw4.draw(count + 10); }, 20000);
        }
        else {
            draw4.draw(count + 10); //+10 for identifying its case 2
        }
    }
    function case1() {
        case1_theory(1);
        setTimeout(case1_questions, 31 * 1000);
    }
    function case2() {
        lvl3_1 = false;
        case2_theory(1);
        setTimeout(case2_questions, 24 * 1000);
    }
    function random(min, max) {
        return Math.round((Math.random() * (max - min) + min));
    }
    //lvl4
    //   
    function lvl4_start() {
        count = 1;
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i1 = document.getElementById("host1");
        context.drawImage(i1, 180, 320, canvas.width - 380, canvas.height - 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(210, 80), 200, 400, 20);
        r1.draw();
        s18th.play();
        context.font = "15px Arial";
        context.fillStyle = "black";
        context.fillText("Discipline is one of the most important aspects in an interview.", 180, 110);
        context.fillText("For instance, if you fail to turn up in time for an interview,you should", 180, 130);
        context.fillText("Telephone an apology before you reach. Closing of the interview is", 180, 150);
        context.fillText("another integral component. One should not  not prolong the ", 180, 170);
        context.fillText("interview unnecessarily; instead thank the interviewer and close by", 180, 190);
        context.fillText("saying that you look forward to hearing from the company  and  be ", 180, 210);
        context.fillText("enthusiastic.If we are asked to Introduce ourselves,we should enlist", 180, 230);
        context.fillText("5 or 6 points that we want to emphasize and particularly emphasize", 180, 250);
        context.fillText("our education in line with job and extracurricular activities to show", 180, 270);
        context.fillText("that we have a broad balanced interests.", 180, 290);
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(390, 300);
        context.lineTo(410, 330);
        context.lineTo(430, 300);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
        setTimeout(lvl4_questions, 49 * 1000);
    }
    var img41 = document.getElementById("lvl4_1");
    var img42 = document.getElementById("lvl4_2");
    var img43 = document.getElementById("lvl4_3");
    var img44 = document.getElementById("lvl4_4");
    let im1 = new Geometry_shubham.Img1(img41, context, new Geometry_shubham.Point(30, 200), 150, 150);
    let im2 = new Geometry_shubham.Img1(img42, context, new Geometry_shubham.Point(230, 200), 150, 150);
    let im3 = new Geometry_shubham.Img1(img43, context, new Geometry_shubham.Point(430, 200), 150, 150);
    let im4 = new Geometry_shubham.Img1(img44, context, new Geometry_shubham.Point(630, 200), 150, 150);
    let img_ans = [];
    function lvl4_questions() {
        if (count < 3) {
            draw1.draw(count + 20);
        }
        else {
            lvl4_img = true;
            lvl4 = false;
            img_ans.push(2, 3, 0, 1);
            draw2.rqcontainer.length = 0;
            context.clearRect(0, 0, canvas.width, canvas.height);
            question_img();
            s18q3.play();
            q1.push(im1, im2, im3, im4);
            for (let i = 0; i < q1.length; i++) {
                q1[i].draw();
            }
            b.draw();
            b.write_submit();
        }
    }
    function check_answer_img() {
        users_ans.length = 0;
        for (let i = 0; i < q1.length; i++) {
            if (q1[i].isInside(new Geometry_shubham.Point(50, 250))) {
                users_ans.push(i);
                break;
            }
        }
        for (let i = 0; i < q1.length; i++) {
            if (q1[i].isInside(new Geometry_shubham.Point(250, 250))) {
                users_ans.push(i);
                break;
            }
        }
        for (let i = 0; i < q1.length; i++) {
            if (q1[i].isInside(new Geometry_shubham.Point(450, 250))) {
                users_ans.push(i);
                break;
            }
        }
        for (let i = 0; i < q1.length; i++) {
            if (q1[i].isInside(new Geometry_shubham.Point(650, 250))) {
                users_ans.push(i);
                break;
            }
        }
        console.log("selected: " + users_ans[0] + "," + users_ans[1] + "," + users_ans[2] + "," + users_ans[3]);
        if (users_ans[0] == img_ans[0] && users_ans[1] == img_ans[1] && users_ans[2] == img_ans[2] && users_ans[3] == img_ans[3]) {
            score++;
            console.warn("Right ans!!");
            host_Ans(true);
        }
        else {
            console.warn("wrong ans!!");
            host_Ans(false);
            //for displaying right ans!!
            context.beginPath();
            context.moveTo(50, 120);
            context.lineTo(220, 120);
            context.lineTo(220, 70);
            context.lineTo(50, 70);
            context.fillStyle = "grey";
            context.fill();
            context.font = "20px Arial";
            context.fillStyle = "black";
            context.fillText("Right Answer", 70, 110);
            context.font = "16px Arial";
            context.fillStyle = "black";
            let i1 = new Geometry_shubham.Img(context);
            i1.draw("images/lvl4_3.jpg", 80, 140, 100, 100);
            i1.draw("images/lvl4_4.png", 80, 250, 100, 100);
            i1.draw("images/lvl4_1.jpg", 80, 360, 100, 100);
            i1.draw("images/lvl4_2.jpg", 80, 470, 100, 100);
        }
        setTimeout(host_score, 6 * 1000);
        count++;
    }
    function question_img() {
        context.clearRect(10, 80, canvas.width, 30);
        context.font = "16px Arial";
        context.fillStyle = "Black";
        context.fillText("Q)", 10, 100);
        context.fillText("  Arrange  the following in the  correct sequence of an interview by drag and drop method.", 25, 100);
    }
    function result() {
        var duration;
        Result = false;
        let avg = (final_score[0] + final_score[1] + final_score[2] + final_score[3] + final_score[4]) / 5;
        context.clearRect(0, 0, canvas.width, canvas.height);
        let i2 = document.getElementById("host1");
        context.drawImage(i2, 250, 320, canvas.width - 380, canvas.height - 300);
        let r1 = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(270, 80), 100, 310, 20);
        r1.draw();
        context.beginPath();
        context.strokeStyle = "rgb(81, 224, 210)";
        context.moveTo(420, 200);
        context.lineTo(480, 310);
        context.lineTo(480, 200);
        context.fillStyle = "rgb(81, 224, 210)";
        context.fill();
        context.stroke();
        context.font = "16px Amatic";
        context.fillStyle = "Black";
        if (avg <= 50) {
            //0-50%
            s19Bavg.play();
            duration = 18000;
            context.fillText("There are lot of areas that need to be worked upon", 235, 125);
            context.fillText("as you appear to be in bad shape. First You need to ", 235, 145);
            context.fillText("value the importance of time and practice on areas as to", 235, 165);
            context.fillText("how to make up in case you miss out on a schedule.", 235, 185);
        }
        else if (avg <= 60) {
            //51-60%
            s19avg.play();
            duration = 12000;
            context.fillText("  You need to polish your introductory skills and ", 235, 125);
            context.fillText("  concluding skills. You should work on specific", 235, 145);
            context.fillText("  body language to be adopted during the interview.", 235, 165);
        }
        else if (avg <= 75) {
            //61-75%
            s19good.play();
            duration = 15000;
            context.fillText("The style of answering questions should be changed;", 235, 125);
            context.fillText("make it brief and specific. You need to revisit the ", 235, 145);
            context.fillText("theories from the application perspective to see how ", 235, 165);
            context.fillText("you can further improve upon your shortcomings.", 235, 185);
        }
        else if (avg <= 90) {
            //76-90%
            s19Vgood.play();
            duration = 7000;
            context.fillText("         You are on right track. You need to fine ", 235, 125);
            context.fillText("         tune your soft skills for futher upliftment", 235, 145);
        }
        else {
            //91-100% 
            s19exe.play();
            duration = 7000;
            context.fillText("          Congratulations. You have excelled in the test.", 235, 125);
            context.fillText("          Keep it up. You are sure to succeed.", 235, 145);
        }
        setTimeout(function () {
            b.draw();
            b.write_return();
            rtn = true;
        }, duration);
    }
    function mousedown(e) {
        if (simple || lvl4_img) {
            for (let i = 0; i < draw2.rqcontainer.length; i++) {
                if (draw2.rqcontainer[i].isinside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                    index1 = i;
                    pt1 = draw2.rqcontainer[i].startpoint;
                    enabledrag = true;
                    break;
                }
            }
            for (let i = 0; i < q1.length; i++) {
                if (q1[i].isInside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                    index1 = i;
                    pt1 = q1[i].startpoint;
                    enabledrag = true;
                    break;
                }
            }
        }
    }
    function mousemove(e) {
        if (enabledrag) {
            if (lvl4_img) {
                q1[index1].startpoint = new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top);
                context.clearRect(0, 0, canvas.width, canvas.height);
                question_img();
                for (let i = 0; i < q1.length; i++) {
                    q1[i].draw();
                }
                b.draw();
                b.write_submit();
            }
            else {
                draw2.rqcontainer[index1].startpoint = new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top);
                context.clearRect(0, 0, canvas.width, canvas.height);
                question();
                for (let i = 0; i < draw2.rqcontainer.length; i++) {
                    draw2.rqcontainer[i].draw();
                }
                b.draw();
                b.write_submit();
            }
        }
    }
    function mouseup(e) {
        var flag = false;
        if (enabledrag) {
            if (lvl4_img) {
                for (let i = 0; i < q1.length; i++) {
                    if (i == index1)
                        continue;
                    if (q1[i].isInside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                        flag = true;
                        index2 = i;
                        pt2 = q1[i].startpoint;
                        q1[i].startpoint = pt1;
                        q1[index1].startpoint = pt2;
                        break;
                    }
                }
                if (!flag) {
                    q1[index1].startpoint = pt1;
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                //question();
                for (let i = 0; i < draw2.rqcontainer.length; i++) {
                    draw2.rqcontainer[i].draw();
                }
                question_img();
                for (let i = 0; i < q1.length; i++) {
                    q1[i].draw();
                }
            }
            else {
                for (let i = 0; i < draw2.rqcontainer.length; i++) {
                    if (i == index1)
                        continue;
                    if (draw2.rqcontainer[i].isinside(new Geometry_shubham.Point(e.clientX - rect.left, e.clientY - rect.top))) {
                        flag = true;
                        index2 = i;
                        pt2 = draw2.rqcontainer[i].startpoint;
                        draw2.rqcontainer[i].startpoint = pt1;
                        draw2.rqcontainer[index1].startpoint = pt2;
                        break;
                    }
                }
                if (!flag) {
                    draw2.rqcontainer[index1].startpoint = pt1;
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                question();
                for (let i = 0; i < draw2.rqcontainer.length; i++) {
                    draw2.rqcontainer[i].draw();
                }
            }
            b.draw();
            b.write_submit();
            enabledrag = false;
        }
    }
}
//# sourceMappingURL=app.js.map