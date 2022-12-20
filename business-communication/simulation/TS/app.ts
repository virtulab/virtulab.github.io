// basic canvas elements
var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('mycanvas');
var context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');

// LO1 - Keyur
var showForm: boolean = false;
var mainBtnClicked: boolean = false;
    var squrecontainerfp: `Geom`etry.Rectangle[] = [];
var changecolor:boolean = false;
var Q2condition:boolean = false;
var Q3condition:boolean = false;
var Q4condition:boolean = false;
var Q5condition:boolean = false;
var nextbtn:boolean = false;

var QTotalAnswer:number = 0;

var correctAnswer:number = 0;
var score:number = 0;

function feedbackform() {   //Function to display the feedback form at last  
    if(showForm){
        var form = document.getElementById("form-box");
        form.style.display = "block";
        form.focus();
    }
    else{
        var form = document.getElementById("form-box");
        form.style.display = "none";
    }
}
feedbackform();  

function Quality() {   //Function for ensuring the quality of canvas 
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

function clearScreen() {   //Function for clearing the screen
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawMain() {   //Drawing main screen
    clearScreen();
    mainBtnClicked = true;
    let banner = new Geometry.Img(context);
    banner.draw('images/MainPage.png', 0, 0, 805, 605);

    let clickRect = new Geometry.Rectangle(context, new Geometry.Point(34, 361), 120, 31);
    clickRect.draw();
    squrecontainerfp.push(clickRect);
}
drawMain();

canvas.addEventListener("click", mainBtnClick, false);  
var ract = canvas.getBoundingClientRect();

function mainBtnClick(e: MouseEvent) {   //For selecting main screen user options
    let x = e.clientX - ract.x;
    let y = e.clientY - ract.y; 
    let p1 = new Geometry.Point(x, y);  
    
    if(mainBtnClicked)
    {
        for (let i=0; i<squrecontainerfp.length; i++) {
            if(squrecontainerfp[0].isInside(p1)) { 
                clearScreen();
                mainBtnClicked = false;
                squrecontainerfp = [];
                Level1();
                break;
            }
        } 
    }  
}

function Level1() {
    var ellipscontainer: Geometry.ClosePathProperty[] = [];
    var EllipseClickEvent: boolean = true;
    var nextQ: number = 1;
    var TotalQuestion:number = 0;

    function formatOpt(text: string, startx: number, starty: number) {   //Function for formatting options
        let txt = text;
        let x = startx;
        let y = starty;
        let lineheight = 15;
        let lines = txt.split('\n');
        
        context.font = "14px sans-serif, Helvetica, Arial";
        if(changecolor)
            context.fillStyle = "white";
        else
            context.fillStyle = "#000000";
        context.textAlign = "center";
        
        for (var i = 0; i<lines.length; i++)
        context.fillText(lines[i], x, y + (i * lineheight));
    }
    
    function formatQue(text: string, startx: number, starty: number) {   //Function for formatting questions
        let txt = text;
        let x = startx;
        let y = starty;
        let lineheight = 19;
        let lines = txt.split('\n');
        
        context.font = "bold 13px sans-serif, Helvetica, Arial";
        context.fillStyle = "#000000";
        context.textAlign = "center";
        
        for (var i = 0; i<lines.length; i++)
        context.fillText(lines[i], x, y + (i * lineheight));
    }

    function drawHost1() {   //Drawing the host (Vidhya)
        let i1 = new Geometry.Img(context);
        i1.draw('images/host1.png', 645, 328, 96, 230);
    }     

    function drawSQ1() {   //Drawing a speech box
        let r1 = new Geometry.RecteRound(context, new Geometry.Point(682, 45), 183, 83, 26);
        let t4 = new Geometry.Triangle(context, new Geometry.Point(685, 245), new Geometry.Point(702, 320), new Geometry.Point(660, 245));
        r1.draw();
        t4.draw();
    } 
    canvas.addEventListener("click", ellipsclickevent, false); 
    function ellipsclickevent(e: MouseEvent) {   
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y; 
        let p1 = new Geometry.Point(x, y); 
        
        for (let i=0; i<ellipscontainer.length; i++) {   
            if(EllipseClickEvent == true){     
                if(ellipscontainer[i].isInside(p1)) { 
                    if(QTotalAnswer < 4)
                    {
                        changecolor = true;
                        if(i==0)
                        {
                            let e1 = new Geometry.Ellipse(context, new Geometry.Point(125, 150), 100, 80);
                            let t1 = new Geometry.Triangle(context, new Geometry.Point(200, 180), new Geometry.Point(295, 230), new Geometry.Point(190, 200));
                            e1.draw();
                            t1.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e1));
                            let s: string = "How a company\nshares information\nto promote its product\nor services to potential\nconsumers";
                            formatOpt(s, 125, 125);
                            changecolor = false;
                            correctAnswer++;
                            QTotalAnswer++;
                        }
                        else if(i==1)
                        {
                            let e2 = new Geometry.Ellipse(context, new Geometry.Point(125, 330), 100, 80);
                            let t2 = new Geometry.Triangle(context, new Geometry.Point(210, 300), new Geometry.Point(300, 280), new Geometry.Point(210, 324));
                            e2.draw();
                            t2.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e2));
                            let s: string = "Exchanging\ninformation in order to\npromote an organization's\ngoals, objectives, aims, and\nactivities, as well as\nincrease profits within\nthe company";
                            formatOpt(s, 125, 289);
                            changecolor = false;
                            correctAnswer++;
                            QTotalAnswer++;
                        }
                        else if(i==2)
                        {
                            let e3 = new Geometry.Ellipse(context, new Geometry.Point(111, 495), 85, 65);
                            let t3 = new Geometry.Triangle(context, new Geometry.Point(150, 440), new Geometry.Point(300, 370), new Geometry.Point(170, 452));
                            e3.draw();
                            t3.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e3));
                            let s: string = "Communication\nusing the official\nemail id";
                            formatOpt(s, 111, 485);
                            changecolor = false;
                            QTotalAnswer++;
                        }
                        else if(i==3)
                        {
                            let e4 = new Geometry.Ellipse(context, new Geometry.Point(304, 495), 85, 65);
                            let t4 = new Geometry.Triangle(context, new Geometry.Point(290, 435), new Geometry.Point(350, 380), new Geometry.Point(312, 440));
                            e4.draw();
                            t4.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e4));
                            let s: string = "Communicating\nwith people using\noffice phone";
                            formatOpt(s, 304, 485);
                            changecolor = false;
                            QTotalAnswer++;
                        }
                        else if(i==4)
                        {
                            let e5 = new Geometry.Ellipse(context, new Geometry.Point(497, 495), 85, 65);
                            let t5 = new Geometry.Triangle(context, new Geometry.Point(500, 435), new Geometry.Point(460, 380), new Geometry.Point(530, 440));
                            e5.draw();
                            t5.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e5));
                            let s: string = "Process of\nBargaining without\nany need of sharing\ninformation";
                            formatOpt(s, 497, 478);
                            changecolor = false;
                            QTotalAnswer++;
                        }
                        else if(i==5)
                        {
                            let e6 = new Geometry.Ellipse(context, new Geometry.Point(690, 495), 85, 65);
                            let t6 = new Geometry.Triangle(context, new Geometry.Point(650, 440), new Geometry.Point(500, 370), new Geometry.Point(630, 452));
                            e6.draw();
                            t6.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e6));
                            let s: string = "Message or the\ntransmission of\nBusiness messages";
                            formatOpt(s, 690, 485);
                            changecolor = false;
                            QTotalAnswer++;
                        }
                        else if(i==6)
                        {
                            let e7 = new Geometry.Ellipse(context, new Geometry.Point(675, 330), 100, 80);
                            let t7 = new Geometry.Triangle(context, new Geometry.Point(590, 300), new Geometry.Point(505, 280), new Geometry.Point(590, 324));
                            e7.draw();
                            t7.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e7));
                            let s: string = "Process of sharing\ninformation between\npeople within and\noutside a company";
                            formatOpt(s, 675, 312);
                            changecolor = false;
                            correctAnswer++;
                            QTotalAnswer++;
                        }
                        else if(i==7)
                        {
                            let e8 = new Geometry.Ellipse(context, new Geometry.Point(675, 150), 100, 80);
                            let t8 = new Geometry.Triangle(context, new Geometry.Point(600, 180), new Geometry.Point(505, 230), new Geometry.Point(610, 200));
                            e8.draw();
                            t8.draw();
                            ellipscontainer.push(new Geometry.ClosePathProperty(e8));
                            let s: string = "Sharing of\ninformation between\npeople within an enterprise\nthat is performed for the\ncommercial benefit of\nthe organization";
                            formatOpt(s, 675, 116);
                            changecolor = false;
                            correctAnswer++;
                            QTotalAnswer++;
                        }
                        break;
                    }
                }
            }
        }   
    }
    var q1btn:boolean = false;
    var btnct: Geometry.Button[] = [];
    var btnctnext: Geometry.Button[] = [];
    function countresult(correctAnswer:number,question:number)
    {
        if(question == 1)
        {
            score += correctAnswer*3;
        }
        else if(question == 2 || question == 3 || question == 4 ||question == 5)
        {
            score += correctAnswer*4;
        }
    }

    function ButtonQ1(btnsp: Geometry.Point, txtsp: Geometry.Point, txt: string) {
        let btn1 = new Geometry.Button(context, new Geometry.Point(btnsp.x, btnsp.y), 32, 90, 8);
        changecolor = true;
        btn1.draw();
        changecolor = false;
        btnctnext.push(btn1);
        
        context.font = "bold 13px Arial, sans-serif";
        context.fillStyle = "white";
        context.fillText(txt, txtsp.x, txtsp.y);
        console.log("Correct answer:" + correctAnswer);
    }
    canvas.addEventListener("click", btnclicknext, false);
        
    function btnclicknext(e: MouseEvent) {   
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y; 
        let p1 = new Geometry.Point(x, y);  
        
        for (let i=0; i<btnctnext.length; i++) {
            if(true)
            {
                if(btnctnext[i].isInside(p1)) {   
                    q1btn = true;
                    clearScreen();
                    EllipseClickEvent = false;''
                    countresult(correctAnswer,nextQ - 1);
                    // setTimeout(clearScreen, 1000*0);
                    setTimeout(Questions, 1000*0);
                    break;
                }
            }
        }   
    }
    function ButtonQ2(btnsp: Geometry.Point, txtsp: Geometry.Point, txt: string) {  
       
        let btn1 = new Geometry.Button(context, new Geometry.Point(btnsp.x, btnsp.y), 32, 90, 8);
        btn1.draw();
        btnct.push(btn1);
        
        context.font = "bold 13px Arial, sans-serif";
        context.fillStyle = "white";
        context.fillText(txt, txtsp.x, txtsp.y);
    }
    canvas.addEventListener("click", btnclickQ2, false);
        function btnclickQ2(e: MouseEvent) {   
            let x = e.clientX - ract.x;
            let y = e.clientY - ract.y; 
            let p1 = new Geometry.Point(x, y);  
            for (let i=0; i<btnct.length; i++) {
                   
                    if(Q2condition) 
                    {
                        if(btnct[i].isInside(p1)){
                            if(QTotalAnswer < 2)
                            {
                                changecolor = true;
                                if(i==0)
                                { 
                                    ButtonQ2(new Geometry.Point(430, 120), new Geometry.Point(475, 140), "Internal");
                                    QTotalAnswer++;
                                }
                                else if(i==1)
                                {
                                    ButtonQ2(new Geometry.Point(430, 200), new Geometry.Point(475, 220), "External");
                                    QTotalAnswer++;
                                }
                                else if(i==2)
                                {
                                    ButtonQ2(new Geometry.Point(430, 280), new Geometry.Point(475, 300), "Both");
                                    QTotalAnswer++;
                                    correctAnswer+=1;
                                }
                                else if(i==3)
                                {
                                    ButtonQ2(new Geometry.Point(60, 430), new Geometry.Point(105, 450), "Formal");
                                    QTotalAnswer++;
                                    correctAnswer+=1;
                                }
                                else if(i==4)
                                {
                                    ButtonQ2(new Geometry.Point(180, 430), new Geometry.Point(225, 450), "Informal");
                                    QTotalAnswer++;
                                }
                                else if(i==5)
                                {
                                    ButtonQ2(new Geometry.Point(300, 430), new Geometry.Point(345, 450), "Both");
                                    QTotalAnswer++;                            
                                } 
                                changecolor = false;
                                EllipseClickEvent = false;
                                break;
                            }
                    }

                }
            }   
        }
    
    function ButtonQ3(btnsp: Geometry.Point, txtsp: Geometry.Point, txt: string) {
       
        let btn1 = new Geometry.Button(context, new Geometry.Point(btnsp.x, btnsp.y), 32, 150, 8);
        btn1.draw();
        btnct.push(btn1);
        
        context.font = "bold 13px Arial, sans-serif";
        context.fillStyle = "white";-
        context.fillText(txt, txtsp.x, txtsp.y);
    }
    canvas.addEventListener("click", btnclickQ3, false);
        
    function btnclickQ3(e: MouseEvent) {   
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y; 
        let p1 = new Geometry.Point(x, y);  
        
        for (let i=0; i<btnct.length; i++) {
            if(Q3condition)
                if(btnct[i].isInside(p1)){
                    if(QTotalAnswer<2)
                    {
                        changecolor = true;
                        if(i==0)
                        {
                            ButtonQ3(new Geometry.Point(430, 155), new Geometry.Point(505, 175), "Vertical / Formal");
                            QTotalAnswer++;
                            correctAnswer+=1;
                        }
                        else if(i==1)
                        {
                            ButtonQ3(new Geometry.Point(430, 316), new Geometry.Point(505, 336), "Downward / Informal");
                            QTotalAnswer++;
                        }
                        else if(i==2)
                        {
                            ButtonQ3(new Geometry.Point(30, 420), new Geometry.Point(105, 440), "Horizontal / Formal");
                            QTotalAnswer++;
                            correctAnswer+=1;
                        }
                        else if(i==3)
                        {
                            ButtonQ3(new Geometry.Point(260, 420), new Geometry.Point(335, 440), "Horizontal / Informal");
                            QTotalAnswer++;
                        }

                        changecolor = false;  
                        EllipseClickEvent = false;
                        break;
                    }
                }
            }   
    }
    
    function ButtonQ4(btnsp: Geometry.Point, txtsp: Geometry.Point, txt: string) {
       
        let btn1 = new Geometry.Button(context, new Geometry.Point(btnsp.x, btnsp.y), 32, 200, 8);
        btn1.draw();
        btnct.push(btn1);
        
        context.font = "bold 13px Arial, sans-serif";
        context.fillStyle = "white";-
        context.fillText(txt, txtsp.x, txtsp.y);
    }
    canvas.addEventListener("click", btnclickQ4, false);
        
    function btnclickQ4(e: MouseEvent) {   
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y; 
        let p1 = new Geometry.Point(x, y);  
        
        for (let i=0; i<btnct.length; i++) {
            if(Q4condition){
                if(btnct[i].isInside(p1)) { 
                    if(QTotalAnswer<2)
                    {
                        changecolor = true;
                        if(i==0)
                        {
                            ButtonQ4(new Geometry.Point(60, 210), new Geometry.Point(160, 230), "a) Lateral Communication");
                            QTotalAnswer++;
                            correctAnswer+=1;
                        }
                        else if(i==1)
                        {
                            ButtonQ4(new Geometry.Point(330, 210), new Geometry.Point(430, 230), "b) Downward Communication");
                            QTotalAnswer++;
                        }
                        else if(i==2)
                        {
                            ButtonQ4(new Geometry.Point(60, 298), new Geometry.Point(160, 318), "c) Upward Communication");
                            QTotalAnswer++;
                        }
                        else if(i==3)
                        {
                            ButtonQ4(new Geometry.Point(330, 298), new Geometry.Point(430, 318), "d) Horizontal communication");
                            QTotalAnswer++;
                            correctAnswer += 1;
                        }  
                        changecolor = false;  
                        EllipseClickEvent = false;
                        break;
                    
                    }
                }
            }
        }   
    }
    
    function ButtonQ5(btnsp: Geometry.Point, txtsp: Geometry.Point, txt: string) {
        
        let btn1 = new Geometry.Button(context, new Geometry.Point(btnsp.x, btnsp.y), 32, 130, 8);
        btn1.draw();
        btnct.push(btn1);
        
        context.font = "bold 13px Arial, sans-serif";
        context.fillStyle = "white";-
        context.fillText(txt, txtsp.x, txtsp.y);
    }
    canvas.addEventListener("click", btnclickQ5, false);
        
    function btnclickQ5(e: MouseEvent) {   
        let x = e.clientX - ract.x;
        let y = e.clientY - ract.y; 
        let p1 = new Geometry.Point(x, y);  
        
        for (let i=0; i<btnct.length; i++) {
            if(Q5condition)
            {
                if(btnct[i].isInside(p1)) { 
                    if(QTotalAnswer < 2)
                    {
                        changecolor = true;
                        if(i==0)
                        {
                            ButtonQ5(new Geometry.Point(400, 170), new Geometry.Point(464, 190), "a) Single strand");
                            QTotalAnswer++;
                        }
                        else if(i==1)
                        {
                            ButtonQ5(new Geometry.Point(400, 228), new Geometry.Point(445, 248), "b) Gossip");
                            QTotalAnswer++;
                            correctAnswer+=1;
                        }
                        else if(i==2)
                        {
                            ButtonQ5(new Geometry.Point(400, 286), new Geometry.Point(456, 306), "c) Probability");
                            QTotalAnswer++;
                        }
                        else if(i==3)
                        {
                            ButtonQ5(new Geometry.Point(400, 344), new Geometry.Point(455, 364), "d) Grapevine");
                            QTotalAnswer++;
                            correctAnswer+=1;
                        }  
                    changecolor = false;  
                    EllipseClickEvent = false;
                    break;
                        
                    }
                }
            }
        }   
    }
    var Qdone:boolean = false;
    
    function Questions() {   //Function for asking the questions
        ellipscontainer = [];
        Q5condition = false;
        if(Qdone)
        {
            if(nextQ == 2)
            {
                //ADD INFORMATION HERE
                setTimeout(drawHost1, 1000*0.0);
                let info = setTimeout(function() {
                    drawSQ1();
                    //s21q1.play();
                    let s: string = "There are four\ntypes of Business\nCommunication.\nThey are;";
                    formatQue(s, 710, 123);
                    EllipseClickEvent = false;
                }, 1000*0.0)
                let s7i2 = new Geometry.Img(context);
                s7i2.draw('images/s7i2.png', 70, 205, 476, 120);
                ButtonQ1(new Geometry.Point(355, 530), new Geometry.Point(400, 550), "NEXT");//As it is
                nextQ++;//As it is
            }
            else
            {
                endScreen(correctAnswer);
            }
        }
        else if(nextQ == 1) {
            let q1 = setTimeout(function() {
                let s6i1 = new Geometry.Img(context);
                s6i1.draw('images/s6i1.png', 300, 190, 200, 177);

                let r1 = new Geometry.RecteRound(context, new Geometry.Point(390, 10), 100, 60, 26);
                let t4 = new Geometry.Triangle(context, new Geometry.Point(385, 125), new Geometry.Point(402, 180), new Geometry.Point(360, 125));
                r1.draw();
                t4.draw();
                //s21q1.play(); 
                let s: string = "So, What is\nBusiness\nCommunication\nall about?";
                formatQue(s, 407, 49);
                //  EllipseClickEvent = false;
            }, 1000*0)

        ButtonQ1(new Geometry.Point(355, 565), new Geometry.Point(382, 585), "NEXT");
        
        let q1op1 = setTimeout(function() {
            let e1 = new Geometry.Ellipse(context, new Geometry.Point(125, 150), 100, 80);
            let t1 = new Geometry.Triangle(context, new Geometry.Point(200, 180), new Geometry.Point(295, 230), new Geometry.Point(190, 200));
            e1.draw();
            t1.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e1));
            let s: string = "How a company\nshares information\nto promote its product\nor services to potential\nconsumers";
            formatOpt(s, 125, 125);
        }, 1000*0)
    
        let q1op2 = setTimeout(function() {
            let e2 = new Geometry.Ellipse(context, new Geometry.Point(125, 330), 100, 80);
            let t2 = new Geometry.Triangle(context, new Geometry.Point(210, 300), new Geometry.Point(300, 280), new Geometry.Point(210, 324));
            e2.draw();
            t2.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e2));
            let s: string = "Exchanging\ninformation in order to\npromote an organization's\ngoals, objectives, aims, and\nactivities, as well as\nincrease profits within\nthe company";
            formatOpt(s, 125, 289);
        }, 1000*0)
    
        let q1op3 = setTimeout(function() {
            let e3 = new Geometry.Ellipse(context, new Geometry.Point(111, 495), 85, 65);
            let t3 = new Geometry.Triangle(context, new Geometry.Point(150, 440), new Geometry.Point(300, 370), new Geometry.Point(170, 452));
            e3.draw();
            t3.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e3));
            let s: string = "Communication\nusing the official\nemail id";
            formatOpt(s, 111, 485);
        }, 1000*0)
    
        let q1op4 = setTimeout(function() {
            let e4 = new Geometry.Ellipse(context, new Geometry.Point(304, 495), 85, 65);
            let t4 = new Geometry.Triangle(context, new Geometry.Point(290, 435), new Geometry.Point(350, 380), new Geometry.Point(312, 440));
            e4.draw();
            t4.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e4));
            let s: string = "Communicating\nwith people using\noffice phone";
            formatOpt(s, 304, 485);
        }, 1000*0)

        let q1op5 = setTimeout(function() {
            let e5 = new Geometry.Ellipse(context, new Geometry.Point(497, 495), 85, 65);
            let t5 = new Geometry.Triangle(context, new Geometry.Point(500, 435), new Geometry.Point(460, 380), new Geometry.Point(530, 440));
            e5.draw();
            t5.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e5));
            let s: string = "Process of\nBargaining without\nany need of sharing\ninformation";
            formatOpt(s, 497, 478);
        }, 1000*0)
    
        let q1op6 = setTimeout(function() {
            let e6 = new Geometry.Ellipse(context, new Geometry.Point(690, 495), 85, 65);
            let t6 = new Geometry.Triangle(context, new Geometry.Point(650, 440), new Geometry.Point(500, 370), new Geometry.Point(630, 452));
            e6.draw();
            t6.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e6));
            let s: string = "Message or the\ntransmission of\nBusiness messages";
            formatOpt(s, 690, 485);
        }, 1000*0)
    
        let q1op7 = setTimeout(function() {
            let e7 = new Geometry.Ellipse(context, new Geometry.Point(675, 330), 100, 80);
            let t7 = new Geometry.Triangle(context, new Geometry.Point(590, 300), new Geometry.Point(505, 280), new Geometry.Point(590, 324));
            e7.draw();
            t7.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e7));
            let s: string = "Process of sharing\ninformation between\npeople within and\noutside a company";
            formatOpt(s, 675, 312);
        }, 1000*0)
    
        let q1op8 = setTimeout(function() {
            let e8 = new Geometry.Ellipse(context, new Geometry.Point(675, 150), 100, 80);
            let t8 = new Geometry.Triangle(context, new Geometry.Point(600, 180), new Geometry.Point(505, 230), new Geometry.Point(610, 200));
            e8.draw();
            t8.draw();
            ellipscontainer.push(new Geometry.ClosePathProperty(e8));
            let s: string = "Sharing of\ninformation between\npeople within an enterprise\nthat is performed for the\ncommercial benefit of\nthe organization";
            formatOpt(s, 675, 116);
        }, 1000*0)
        nextQ++;
        TotalQuestion += 1;
        }
        else if(TotalQuestion == 1)
        {
            btnctnext = [];
            endScreen(correctAnswer);
            nextQ = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            TotalQuestion += 1;
        }
        else if(nextQ == 2) {
            QTotalAnswer = 0;
            setTimeout(drawHost1, 1000*0.0);
            btnct = [];
            btnctnext = [];
            Q2condition = true;
            let q1 = setTimeout(function() {
                drawSQ1();
                //s21q1.play();
                let s: string = "Select the different\nbusiness stakeholders\namongst which the\nfollowing flow of\ncommunication could\nbe applicable?";
                formatQue(s, 710, 106);
                EllipseClickEvent = false;
            }, 1000*0.0)

            let s7i1 = new Geometry.Img(context);
            s7i1.draw('images/s7i1.png', 50, 70, 300, 300);
            ButtonQ1(new Geometry.Point(355, 530), new Geometry.Point(400, 550), "NEXT");
            let q16ClickEnable = setTimeout(function(){
                ButtonQ2(new Geometry.Point(430, 120), new Geometry.Point(475, 140), "Internal");
                ButtonQ2(new Geometry.Point(430, 200), new Geometry.Point(475, 220), "External");
                ButtonQ2(new Geometry.Point(430, 280), new Geometry.Point(475, 300), "Both");
                ButtonQ2(new Geometry.Point(60, 430), new Geometry.Point(105, 450), "Formal");
                ButtonQ2(new Geometry.Point(180, 430), new Geometry.Point(225, 450), "Informal");
                ButtonQ2(new Geometry.Point(300, 430), new Geometry.Point(345, 450), "Both");
            }, 1000*0)
            Qdone = true;
        }
        else if(nextQ == 3) {
            setTimeout(drawHost1, 1000*0.0);
            QTotalAnswer = 0;
            Q2condition = false;
            Q3condition = true;
            btnct = [];
            btnctnext = [];
            let q1 = setTimeout(function() {
                drawSQ1();
                //s21q1.play();
                let s: string = "Information flows\nin an organization\nin many channels.\nWhich of the\nfollowing is the\ncorrect option\nfor formal\ncommunication?";
                formatQue(s, 710, 87);
                EllipseClickEvent = false;
            }, 1000*0.0)

            let s8i1 = new Geometry.Img(context);
            s8i1.draw('images/s8i1.png', 30, 70, 371, 320);
            ButtonQ1(new Geometry.Point(355, 530), new Geometry.Point(400, 550), "NEXT");
            let q16ClickEnable = setTimeout(function(){
                ButtonQ3(new Geometry.Point(430, 155), new Geometry.Point(505, 175), "Vertical / Formal");
                ButtonQ3(new Geometry.Point(430, 316), new Geometry.Point(505, 336), "Downward / Informal");
                ButtonQ3(new Geometry.Point(30, 420), new Geometry.Point(105, 440), "Horizontal / Formal");
                ButtonQ3(new Geometry.Point(260, 420), new Geometry.Point(335, 440), "Horizontal / Informal");
            }, 1000*0)
           Qdone = true;
        }
        else if(nextQ == 4) {
            setTimeout(drawHost1, 1000*0.0);
            QTotalAnswer = 0;
            btnct = [];
            btnctnext = [];
            Q3condition = false;
            Q4condition = true;
            let q1 = setTimeout(function() {
                drawSQ1();
                //s21q1.play();
                let s: string = "The Director 1 sending\nsome survey results\nin the form of a memo\nto the Director 2 for\nfurther action. What\nis the type of\ncommunication?";
                formatQue(s, 710, 96);
                EllipseClickEvent = false;
            }, 1000*0.0)
            ButtonQ1(new Geometry.Point(355, 530), new Geometry.Point(400, 550), "NEXT");
            let q16ClickEnable = setTimeout(function(){
                ButtonQ4(new Geometry.Point(60, 210), new Geometry.Point(160, 230), "a) Lateral Communication");
                ButtonQ4(new Geometry.Point(330, 210), new Geometry.Point(430, 230), "b) Downward Communication");
                ButtonQ4(new Geometry.Point(60, 298), new Geometry.Point(160, 318), "c) Upward Communication");
                ButtonQ4(new Geometry.Point(330, 298), new Geometry.Point(430, 318), "d) Horizontal communication");
            }, 1000*0)
          Qdone = true;
        }
        else if(nextQ == 5) {
            setTimeout(drawHost1, 1000*0.0);
            QTotalAnswer = 0;
            btnct = [];
            btnctnext = [];
            Q4condition = false;
            Q5condition = true;
            let q1 = setTimeout(function() {
                drawSQ1();
                //s21q1.play();
                let s: string = "Information flows\nin an organization\nin many channels.\nWhich of the\nfollowing is the\ncorrect option\nfor formal\ncommunication?";
                formatQue(s, 710, 87);
                EllipseClickEvent = false;
            }, 1000*0.0)

            let s8i1 = new Geometry.Img(context);
            s8i1.draw('images/s8i2.png', 30, 200, 330, 136);
            ButtonQ1(new Geometry.Point(355, 530), new Geometry.Point(400, 550), "NEXT");
            let q16ClickEnable = setTimeout(function(){
                ButtonQ5(new Geometry.Point(400, 170), new Geometry.Point(464, 190), "a) Single strand");
                ButtonQ5(new Geometry.Point(400, 228), new Geometry.Point(445, 248), "b) Gossip");
                ButtonQ5(new Geometry.Point(400, 286), new Geometry.Point(456, 306), "c) Probability");
                ButtonQ5(new Geometry.Point(400, 344), new Geometry.Point(455, 364), "d) Grapevine");
            }, 1000*0)
           Qdone = true;
        }
        else 
        {
            console.log("Correct answer:" + correctAnswer + nextQ);
            console.log("Score :" + score);
        }
    }
    Questions();

    function endScreen(marks: number)  {
        btnct = [];
        let er1 = new Geometry.RecteRound(context, new Geometry.Point(318, 40), 90, 260, 26);
        let et1 = new Geometry.Triangle(context, new Geometry.Point(303, 150), new Geometry.Point(293, 190), new Geometry.Point(338, 150));
        er1.draw();
        et1.draw();
        let exc = new Geometry.Img(context);
        let TotalResponse = 8;
        console.log(score);
        if(Qdone)
        {
            TotalResponse = 2;
        }
        
        if(score == 8 || score == 12) {
            //EllipseClickEvent = false;
            exc.draw("images/excellent.png", 199, 195, 135, 250);
            let et: string = "You have marked " + correctAnswer + " correct\nanswers out of " + TotalResponse + " responses.\nYour understanding is Excellent!";
            formatQue(et, 435, 82);
        }
        else if((correctAnswer >=2 && correctAnswer <=3) || score == 4) 
        {
            //EllipseClickEvent = false;
            let good = new Geometry.Img(context);
            exc.draw("images/good.png", 199, 195, 85, 250);
            let gt: string = "You have marked " + correctAnswer + " correct\nanswers out of " + TotalResponse + " responses.\nYour understanding is Good!";
            formatQue(gt, 435, 82);
        }
        else {
            //EllipseClickEvent = false;
            let sat = new Geometry.Img(context);
            exc.draw("images/satisfactory.png", 199, 195, 125, 250);
            let st: string = "You have marked " + correctAnswer + " correct\nanswers out of " + TotalResponse + " responses.\nYour understanding is Satisfactory!";
            formatQue(st, 435, 82);
        }
        ButtonQ1(new Geometry.Point(355, 530), new Geometry.Point(400, 550), "NEXT");
        correctAnswer =0;
        score = 0;
    }
}
