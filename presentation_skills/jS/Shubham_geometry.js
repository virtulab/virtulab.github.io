var Geometry_shubham;
(function (Geometry_shubham) {
    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        get x() {
            return this._x;
        }
        get y() {
            return this._y;
        }
    }
    Geometry_shubham.Point = Point;
    class Closepath {
        constructor(context, arrapoint, color) {
            this.point = arrapoint;
            this.context = context;
            if (color == undefined)
                this.color = "rgb(224,224,224)";
            else
                this.color = color;
        }
        draw(str1, str2, str3, str4, str5, str6) {
            var i;
            this.context.beginPath();
            this.context.moveTo(this.point[0].x, this.point[0].y);
            for (i = 1; i < this.point.length; i++) {
                this.context.lineTo(this.point[i].x, this.point[i].y);
            }
            this.context.closePath();
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 0;
            this.context.stroke();
            this.context.font = "13px Arial";
            this.context.fillStyle = "red";
            this.context.fillText(str1, this.startpt.x - 70, this.startpt.y - 30);
            this.context.fillText(str2, this.startpt.x - 78, this.startpt.y - 18);
            this.context.fillText(str3, this.startpt.x - 83, this.startpt.y - 5);
            this.context.fillText(str4, this.startpt.x - 80, this.startpt.y + 8);
            this.context.fillText(str5, this.startpt.x - 80, this.startpt.y + 22);
            this.context.fillText(str6, this.startpt.x - 80, this.startpt.y + 34);
        }
    }
    Geometry_shubham.Closepath = Closepath;
    class Ellipse extends Closepath {
        constructor(context, pt, majorx, minory, color) {
            if (color == undefined)
                super(context, []);
            else
                super(context, [], color);
            this.startpt = pt;
            this.a = majorx;
            this.b = minory;
        }
        draw(str1, str2, str3, str4, str5, str6) {
            this.calculate();
            super.draw(str1, str2, str3, str4, str5, str6);
        }
        calculate() {
            this.point = [];
            for (var i = 0; i <= 360; i++) {
                let x1 = this.a * Math.cos(i * Math.PI / 180) + this.startpt._x;
                let y1 = this.b * Math.sin(i * Math.PI / 180) + this.startpt._y;
                this.point.push(new Geometry_shubham.Point(x1, y1));
            }
        }
        isinside(x, y) {
            let p = (Math.pow((x - this.startpt._x), 2) / Math.pow(this.a, 2)) + (Math.pow(y - this.startpt._y, 2) / Math.pow(this.b, 2));
            if (p > 1)
                return false;
            else
                return true;
        }
    }
    Geometry_shubham.Ellipse = Ellipse;
    class Data {
        constructor(num) {
            this.data = [[]];
            this.aud = new Audio;
            switch (num) {
                case 1:
                    //first Question and options  ans=a
                    this.data.push(["", "", "     What soft skills are", " important for an interview?", "", ""]);
                    this.data.push(["", "", "         All are important.", "", "", ""]); //a
                    this.data.push(["", "        Creativity and", " Entrepreneurial skills,Ability", "  to cope with responsibility", "         are important.", ""]); //b
                    this.data.push(["", "        I feel its Emotional", " Intelligence,Communication", "Skills, Team skills ,Flexibility.", "", ""]); //c
                    this.data.push(["", "", "     I think Social Sensitivity,", "Interest in life-long learning", "             are crucial.", ""]); //d
                    this.aud = s14q1;
                    this.aud_duration = 5000;
                    this.ans = 1;
                    break;
                case 2:
                    //second ..ans=d
                    this.data.push(["", "", "    What documents should", "   you bring to the interview?", "", ""]);
                    this.data.push(["", "   I will bring extra copies", "    of your resume Details", "about my work history and", "              education.", ""]); //a
                    this.data.push(["", "", "   A notepad with questions", "    and something to write", "         with will suffice.", ""]); //b
                    this.data.push(["", "   Names,addresses and", "         phone numbers of", "    references are some of", "   things I will surely bring.", ""]); //c
                    this.data.push(["", "", "   Well I feel we should", "bring whatever you all told", "             just now.", ""]); //d
                    this.ans = 4;
                    this.aud = s14q2;
                    this.aud_duration = 3000;
                    break;
                case 3:
                    //third..ans=c
                    this.data.push(["", "", " As a candidate, what will", "    you be looking for in", "             a job?", ""]);
                    this.data.push(["      I like a job where I", "   can unleash my creativity", "    and perform my work with", "         little or minimum ", "           supervision.", ""]); //a
                    this.data.push(["I like  work environments", "   where teams are highly", "  collaborative and enjoy the ", "   brainstorming process to", "    put forth ideas towards a", "        stronger strategy"]); //b
                    this.data.push(["  I value the  history of", " this company and its strong", "       values that support", "     employee creativity and ", "          collaboration", ""]); //c
                    this.data.push(["", "", "", "      Any job is fine", "", ""]); //d
                    this.ans = 3;
                    this.aud = s14q4;
                    this.aud_duration = 4000;
                    break;
                case 4:
                    //forth..ans=d  
                    this.data.push(["", "    What do you feel is the", "  importance of the question", "     What are your salary ", "            expectations'?", ""]);
                    this.data.push(["", "   As far as I understand,", " the Interviewer wants to", "  know what you expect", "           to earn.", ""]); //a
                    this.data.push(["", "    I believe quoting an ", "    exorbitant amount can", "knock you out of competition", "           for the job.", ""]); //b
                    this.data.push(["", "", "        Also, Answering an", "  underpriced amount can", "     fetch you a lower offer.", ""]); //c
                    this.data.push(["", "", "          I feel all the points", "     mentioned in this forum ", "               are correct.", ""]); //d
                    this.ans = 4;
                    this.aud = s35q1;
                    this.aud_duration = 7000;
                    break;
                case 5:
                    //fifth..ans=d
                    this.data.push(["", "    What is the interviewer", "    looking for in the answer", "     to the question on your", "     greatest strength and", "           weakness?"]);
                    this.data.push(["   The interviewer wants", "   to see if we have all the ", "      attributes that qualify", "     us for that specific job,", "and will set us apart from", "       other candidates."]); //a
                    this.data.push(["I believe the panel wants", "      to check whether the", "positive aspects of your skills", "and abilities as an employee", "        can turn seeming", "“weaknesses”into strengths"]); //b
                    this.data.push(["The intent is to analyze", "whether your strength can", "    be assets for the job and", "       weakness are not", "             liabilities", ""]); //c
                    this.data.push(["", "", "      All of the above points", "   substantiate the answer", "        to the question.", ""]); //d
                    this.ans = 4;
                    this.aud = s35q2;
                    this.aud_duration = 9000;
                    break;
                //cases 11-20 are for level2
                case 11:
                    this.data.push(["", "", "", "          Why should we", "              hire you?", ""]);
                    this.data.push(["", "", "", "    Yes You should hire me", "     as I am in need of this", "          job desperately", ""]); //a
                    this.data.push(["", "", "        You should because I", "   am personally interested", "               in this job.", ""]); //b
                    this.data.push(["       I believe this is a", "    perfect job for me as my ", "qualifications and experience ", "match the requirements of", "          the job position.", ""]); //c
                    this.ans = 3;
                    this.aud = s16q3;
                    this.aud_duration = 3000;
                    break;
                case 12:
                    this.data.push(["", "", " What should you answer", "be to the above mentioned ", "              question?", ""]);
                    this.data.push(["", "", "         I think its best to ", "      simply say I are the ", "     best amongst the lot", ""]); //a
                    this.data.push(["   I will try to make my", "    response a confident,", " concise, focused sales pitch", "  that explains what I have ", "    to offer and why they", "       should get the job."]); //b
                    this.data.push(["", "", "           I have all the ", "    requirements for the job", "", ""]); //c
                    this.ans = 2;
                    this.aud = s16q4;
                    this.aud_duration = 4000;
                    break;
                case 13:
                    this.data.push(["", "", "", "  What are your salary", "         expectations?", ""]);
                    this.data.push(["", "", "", "        As per the range of ", "         this job position.", ""]); //a
                    this.data.push(["", " ", "", "", "  I expect a good amount", "   of increment in this job", ""]); //b
                    this.data.push(["", "", "       I feel whatever you ", "       give will suffice my", "        requirements.", "",]); //c
                    this.ans = 1;
                    this.aud = s16q5;
                    this.aud_duration = 3000;
                    break;
                case 14:
                    this.data.push(["", "", "         where do you see", "    yourself in 5 or 10 years", "", ""]);
                    this.data.push(["", "    I will further my passion", " of software designing which", "   is an important requisite", "      of this job position.", ""]); //a
                    this.data.push(["", "", "", "    whatever is great to", "            achieve.", ""]); //b
                    this.data.push(["", "", "", "   My present goal is to get", "       a job in a company", ""]); //c
                    this.ans = 1;
                    this.aud = s39q4;
                    this.aud_duration = 5000;
                    break;
                case 15:
                    this.data.push(["", "       Tell me about the", " toughest decision you've", "    had to make in the past", "          few months.", ""]);
                    this.data.push(["", "    Everyone makes tough", "    decisions, regardless of", "             their position.", "  All my decisions are tough.", ""]); //a
                    this.data.push(["       I Made a difficult", "  data-driven decision that ", "     included interpersonal", "         considerations and ", "             ramifications.", ""]); //b
                    this.data.push(["    My sister worked part", "         time as a software", "        professional and made", "     difficult decisions all the", "                    time.", ""]); //c
                    this.ans = 2;
                    this.aud = s39q5;
                    this.aud_duration = 5000;
                    break;
                //for lvl4
                case 21:
                    this.data.push(["", "", "", "      Tell me something ", "       about yourself.", ""]);
                    this.data.push(["Well I think 2 to 5", " points that represent my ", "strengths for that  particular ", "          job I will say.", "", ""]); //a
                    this.data.push(["I feel we should", " categorize our academics,", "  co-cuuicular and extra ", "  curricular well.", "", ""]); //b
                    this.data.push(["For each strength,I will", " think of a specific action", " or accomplishment to", "   support it.", "", ""]); //c
                    this.data.push(["I will say about my,", " experiences that qualify", " me for the job and ", "  separate me from", "  other applicants.", ""]); //c
                    this.ans = 2;
                    this.aud = s18q1;
                    this.aud_duration = 3000;
                    break;
                case 22:
                    //  
                    this.data.push(["which of the following", "questions may be asked", " by the interviewer to get an", "insight as to how much you", " know about the job.", ""]);
                    this.data.push(["", "", "      How do you handle", "    stress and pressure?", "", ""]); //a
                    this.data.push(["", "", "     What are your goals", "    for the future?", "", ""]); //b
                    this.data.push(["", "", "     Why do you want", "      this job?", "", ""]); //c
                    this.data.push(["", "", "", "   Any one of the above", "", ""]); //c
                    this.ans = 3;
                    this.aud = s18q2;
                    this.aud_duration = 12000;
                    break;
            }
        }
    }
    Geometry_shubham.Data = Data;
    class Data2 {
        constructor(num) {
            this.data2 = [[]];
            this.ans = [];
            this.aud = new Audio;
            switch (num) {
                case 1:
                    this.data2.push(["The opening formalities of an interview are jumbled on. Please drag and drop  them in  the correct sequence?"]);
                    this.data2.push(["Apply a firm handshake", "", "", ""]);
                    this.data2.push(["Use the interviewer's name", "( Sir Name) and pronounce", "it correctly to greet him", ""]);
                    this.data2.push(["Maintain appropriate eye", "contact, and use your body", "language to convey", "confidence"]);
                    this.data2.push(["Wait for the interviewer", "to ask you to be seated", "", ""]);
                    this.aud = s14_sq1;
                    this.ans.push(1);
                    this.ans.push(0);
                    this.ans.push(3);
                    this.ans.push(2);
                    break;
                case 2:
                    this.data2.push(["How would you plan your appearance for the interview?  Drag and drop them  in order of priority."]);
                    this.data2.push(["Minimum jewellery to show", "your confidence", "", ""]);
                    this.data2.push(["Select conservative clothes", "to respect the decorum", "", ""]);
                    this.data2.push(["Research the company ", "dress code", "", ""]);
                    this.data2.push(["Clean, unwrinkled,", "and properly fitted ", "formal clothing", ""]);
                    this.aud = s14_sq2;
                    this.ans.push(2);
                    this.ans.push(1);
                    this.ans.push(3);
                    this.ans.push(0);
                    break;
                case 3:
                    this.data2.push(["Drag and drop the following information you would like to gather before the interview on the basis of  priority."]);
                    this.data2.push(["Job title & Job qualifications", "", "", ""]);
                    this.data2.push(["Probable salary range", "", "", ""]);
                    this.data2.push(["Career Path of the Job", "", "", ""]);
                    this.data2.push(["Friends in the company", "", "", ""]);
                    this.aud = s14_sq3;
                    this.ans.push(0);
                    this.ans.push(2);
                    this.ans.push(1);
                    this.ans.push(3);
                    break;
            }
        }
    }
    class Data3 {
        constructor(num) {
            this.data = [[]];
            this.ans = [];
            this.aud = new Audio();
            switch (num) {
                case 2:
                    this.data.push(["", "", "     What would you say ", "     to the panel?", "", ""]);
                    this.data.push([" ", "   There was a friend", "    of mine with whom i", "    would refuse to work ", "     with.", ""]); //a
                    this.data.push(["", "", "      I am a very disciplined", "     person and i hate ", "     irregularity at work.", ""]); //b
                    this.data.push(["", "   I prefer then to just", "    avoid that person as", "   there are many such ", "   people.", ""]); //c
                    this.data.push(["", "", "   I really don't recollect", "   any person with whom ", "   I had problem.", ""]); //d
                    this.ans.push(2, 23, 23); //23 for dummy value
                    this.aud = s17q2;
                    this.duration = 3000;
                    break;
                case 3:
                    this.data.push(["", "", "", "     Do you have any ", "      blind spots?", ""]);
                    this.data.push(["", "", "   Yes, I do have. ", "", "", ""]); //a
                    this.data.push(["", "", "     Everyone has.", "", "", ""]); //b
                    this.data.push(["", "", "       Yes I waste a lot", "      of time watching ", "     sports channels.", ""]); //c
                    this.data.push(["", "", "        I think you can guess", "      from my talk .", "", ""]); //d
                    this.ans.push(1, 2, 3);
                    this.aud = s17q3;
                    this.duration = 3000;
                    break;
                case 4:
                    this.data.push(["", "", "", "  Are you a team player?", "", ""]);
                    this.data.push(["", "", "     Yes, I am a team player", "      as I myself do the", "      work in a team", ""]); //a
                    this.data.push(["", "", "     I don't irritate anyone", "      if he or she  is unable", "       to do the work", ""]); //b
                    this.data.push(["", "", "       I avoid conflicting", "            persons", "", ""]); //c
                    this.data.push(["", "", "  Last time my team got first", "        prize in football so ", "        that's the proof.", ""]); //d
                    this.ans.push(1, 23, 23);
                    this.aud = s17q4;
                    this.duration = 2000;
                    break;
                case 11:
                    this.data.push(["", "", "", " Do you feel his preparation", "   for the interview is good?", ""]);
                    this.data.push(["", "", "    Yes  I feel its good as ", "   he was a bright student", "", ""]); //a
                    this.data.push(["", "", "     Not at all, I don't think ", "    his preparation is enough", "", ""]); //b
                    this.data.push(["", "", "     I am not sure about him", "", "", ""]); //c
                    this.data.push(["", "", "      Neither I know as its my", "            first interview", "", ""]); //d
                    this.ans.push(2, 23, 23);
                    this.aud = s42q1;
                    this.duration = 4000;
                    break;
                case 12:
                    this.data.push(["", "", "", "  Does he need any more ", "   serious preparation?", ""]);
                    this.data.push(["", "", "    No his academics says", "    about him ", "", ""]); //a
                    this.data.push(["", "", "     Yes the finer aspects of ", "    interview should be well ", "    rehearsed by Krishna", ""]); //b
                    this.data.push(["", "", "          Well, I am not sure", "          about It", "", ""]); //c
                    this.data.push(["", "", "     We should prepare little", "      before the interview", "", ""]); //d
                    this.ans.push(2, 23, 23);
                    this.aud = s42q2;
                    this.duration = 4000;
                    break;
                case 13:
                    this.data.push(["", "", "   His friends suggested him ", "     some tips to prepare? ", "   Which one is important? ", ""]);
                    this.data.push(["", "    I feel the point that we ", "     should not unnecessarily", "    stress ourself in", "    preparation. Relax mind ", "       is important."]); //a
                    this.data.push(["", "", "    Stay up late before the ", "    interview and plan for the ", "      next day is my friend’s", "      opinion."]); //b
                    this.data.push(["", "", "       Do not Prepare list of", "      FAQs is very crucial as", "       it's a stressful ", ""]); //c
                    this.data.push(["", "", "     Know the company is a ", "     prime important tip", "", ""]); //d
                    this.ans.push(4, 23, 23);
                    this.aud = s42q3;
                    this.duration = 6000;
                    break;
                case 14:
                    this.data.push(["", "    Krishna was asked as", "     to why he wanted to join ", "  the company? What do", "  you think should he say?", ""]);
                    this.data.push(["", "", "    I want to accelerate ", "    my career.", "", ""]); //a
                    this.data.push(["", "", "     I want a job at this point", "      of time after my", "     graduation ", ""]); //b
                    this.data.push(["", "", "      I will be align my goals ", "         for your mission", "", ""]); //c
                    this.data.push(["", "", "    I know many skills", "  required in the current", "      scenario of IT", "       companies."]); //d
                    this.ans.push(3, 23, 23);
                    this.aud = s42q4;
                    this.duration = 7000;
                    break;
                case 15:
                    this.data.push(["  Krishna realizes that", " ultimately they did not ", "  reciprocate to his answers", " completely.What do he mis", " -sed out while telling about", "     the previous question."]);
                    this.data.push(["", "", "    I think he did not tell ", "   about the company ", "      properly.", ""]); //a
                    this.data.push(["", "", "    According to me he gave ", "     a general answer", "", ""]); //b
                    this.data.push(["", "", "    I feel he should have ", "   told about some facts of ", "    his profile requirements.", ""]); //c
                    this.data.push(["", "", "   All the points told by ", "    our friends are valid.", " ", ""]); //d
                    this.ans.push(4, 23, 23);
                    this.aud = s42q5;
                    this.duration = 13000;
                    break;
            }
        }
    }
    Geometry_shubham.Data3 = Data3;
    class Bubble3 {
        constructor(context) {
            this.bubblecontainer = [];
            this.context = context;
            this.qpt = new Point(200, 110);
            this.op1pt = new Point(350, 60);
            this.op2pt = new Point(530, 80);
            this.op3pt = new Point(530, 210);
            this.op4pt = new Point(530, 350);
            this.q = new Ellipse(context, this.qpt, 80, 60, "rgb(231, 247, 87)");
            this.op1 = new Ellipse(context, this.op1pt, 80, 60);
            this.op2 = new Ellipse(context, this.op2pt, 80, 60);
            this.op3 = new Ellipse(context, this.op3pt, 80, 60);
            this.op4 = new Ellipse(context, this.op4pt, 80, 60);
            this.bubblecontainer.push(this.q, this.op1, this.op2, this.op3, this.op4);
        }
        draw(num) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            let i1 = document.getElementById("lvl3");
            context.drawImage(i1, 0, 100, canvas.width - 350, canvas.height - 300);
            this.str = new Data3(num);
            var _this = this;
            this.q.draw(this.str.data[1][0], this.str.data[1][1], this.str.data[1][2], this.str.data[1][3], this.str.data[1][4], this.str.data[1][5]);
            this.drawline1();
            this.str.aud.play();
            setTimeout(function () {
                _this.op1.draw(_this.str.data[2][0], _this.str.data[2][1], _this.str.data[2][2], _this.str.data[2][3], _this.str.data[2][4], _this.str.data[2][5]);
                _this.drawline2();
            }, this.str.duration);
            setTimeout(function () {
                _this.op2.draw(_this.str.data[3][0], _this.str.data[3][1], _this.str.data[3][2], _this.str.data[3][3], _this.str.data[3][4], _this.str.data[3][5]);
                _this.drawline3();
            }, this.str.duration + 500);
            setTimeout(function () {
                _this.op3.draw(_this.str.data[4][0], _this.str.data[4][1], _this.str.data[4][2], _this.str.data[4][3], _this.str.data[4][4], _this.str.data[4][5]);
                _this.drawline4();
            }, this.str.duration + 1000);
            setTimeout(function () {
                _this.op4.draw(_this.str.data[5][0], _this.str.data[5][1], _this.str.data[5][2], _this.str.data[5][3], _this.str.data[5][4], _this.str.data[5][5]);
                _this.drawline5();
            }, this.str.duration + 1500);
        }
        drawline1() {
            context.beginPath();
            context.moveTo(this.qpt.x - 65, this.qpt.y + 30);
            context.lineTo(this.qpt.x - 70, this.qpt.y + 70);
            context.lineTo(this.qpt.x - 33, this.qpt.y + 50);
            this.context.fillStyle = "rgb(231, 247, 87)";
            this.context.fill();
            context.stroke();
        }
        drawline2() {
            context.beginPath();
            context.moveTo(this.op1pt.x - 10, this.op1pt.y + 55);
            context.lineTo(this.op1pt.x, this.op1pt.y + 100);
            context.lineTo(this.op1pt.x + 10, this.op1pt.y + 55);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            this.context.stroke();
        }
        drawline3() {
            context.beginPath();
            context.moveTo(this.op2pt.x - 80, this.op2pt.y);
            context.lineTo(this.op2pt.x - 150, this.op2pt.y + 90);
            context.lineTo(this.op2pt.x - 70, this.op2pt.y + 20);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline4() {
            context.beginPath();
            context.moveTo(this.op3pt.x - 80, this.op3pt.y - 10);
            context.lineTo(this.op3pt.x - 150, this.op3pt.y - 35);
            context.lineTo(this.op3pt.x - 75, this.op3pt.y + 20);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline5() {
            context.beginPath();
            context.moveTo(this.op4pt.x - 38, this.op4pt.y - 52);
            context.lineTo(this.op4pt.x - 150, this.op4pt.y - 150);
            context.lineTo(this.op4pt.x - 65, this.op4pt.y - 35);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
    }
    Geometry_shubham.Bubble3 = Bubble3;
    class Bubble2 {
        constructor(context) {
            this.bubblecontainer = [];
            this.context = context;
            this.qpt = new Point(700, 300);
            this.op1pt = new Point(200, 110);
            this.op2pt = new Point(400, 95);
            this.op3pt = new Point(600, 120);
            this.q = new Ellipse(context, this.qpt, 85, 80, "rgb(231, 247, 87)");
            this.op1 = new Ellipse(context, this.op1pt, 85, 80);
            this.op2 = new Ellipse(context, this.op2pt, 85, 80);
            this.op3 = new Ellipse(context, this.op3pt, 85, 80);
            this.bubblecontainer.push(this.q, this.op1, this.op2, this.op3);
        }
        draw(num) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            let i3 = document.getElementById("s2");
            context.drawImage(i3, 150, 200, canvas.width - 300, canvas.height - 300);
            this.str = new Data(num);
            var _this = this;
            this.q.draw(this.str.data[1][0], this.str.data[1][1], this.str.data[1][2], this.str.data[1][3], this.str.data[1][4], this.str.data[1][5]);
            this.drawline1();
            this.str.aud.play();
            setTimeout(function () {
                _this.op1.draw(_this.str.data[2][0], _this.str.data[2][1], _this.str.data[2][2], _this.str.data[2][3], _this.str.data[2][4], _this.str.data[2][5]);
                _this.drawline2();
            }, this.str.aud_duration);
            setTimeout(function () {
                _this.op2.draw(_this.str.data[3][0], _this.str.data[3][1], _this.str.data[3][2], _this.str.data[3][3], _this.str.data[3][4], _this.str.data[3][5]);
                _this.drawline3();
            }, this.str.aud_duration + 500);
            setTimeout(function () {
                _this.op3.draw(_this.str.data[4][0], _this.str.data[4][1], _this.str.data[4][2], _this.str.data[4][3], _this.str.data[4][4], _this.str.data[4][5]);
                _this.drawline4();
            }, this.str.aud_duration + 1000);
        }
        drawline1() {
            context.beginPath();
            context.moveTo(this.qpt.x - 85, this.qpt.y);
            context.lineTo(this.qpt.x - 230, this.qpt.y - 20);
            context.lineTo(this.qpt.x - 80, this.qpt.y - 30);
            this.context.fillStyle = "rgb(231, 247, 87)";
            this.context.fill();
            context.stroke();
        }
        drawline2() {
            context.beginPath();
            context.moveTo(this.op1pt.x + 40, this.op1pt.y + 70);
            context.lineTo(this.op1pt.x + 100, this.op1pt.y + 120);
            context.lineTo(this.op1pt.x + 65, this.op1pt.y + 50);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline3() {
            context.beginPath();
            context.moveTo(this.op2pt.x - 30, this.op2pt.y + 75);
            context.lineTo(this.op2pt.x - 10, this.op2pt.y + 130);
            context.lineTo(this.op2pt.x + 30, this.op2pt.y + 75);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline4() {
            context.beginPath();
            context.moveTo(this.op2pt.x + 120, this.op2pt.y + 55);
            context.lineTo(this.op2pt.x + 100, this.op2pt.y + 135);
            context.lineTo(this.op2pt.x + 150, this.op2pt.y + 90);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
    }
    Geometry_shubham.Bubble2 = Bubble2;
    class Bubble {
        constructor(context) {
            this.bubblecontainer = [];
            this.context = context;
            this.qpt = new Point(100, 300);
            this.op1pt = new Point(200, 110);
            this.op2pt = new Point(400, 95);
            this.op3pt = new Point(600, 120);
            this.op4pt = new Point(710, 350);
            this.q = new Ellipse(context, this.qpt, 85, 80, "rgb(231, 247, 87)");
            this.op1 = new Ellipse(context, this.op1pt, 85, 80);
            this.op2 = new Ellipse(context, this.op2pt, 85, 80);
            this.op3 = new Ellipse(context, this.op3pt, 85, 80);
            this.op4 = new Ellipse(context, this.op4pt, 85, 80);
            this.bubblecontainer.push(this.q, this.op1, this.op2, this.op3, this.op4);
        }
        draw(num) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            let i1 = document.getElementById("pi1");
            context.drawImage(i1, 100, 200, canvas.width - 200, canvas.height - 200);
            this.str = new Data(num);
            var _this = this;
            this.q.draw(this.str.data[1][0], this.str.data[1][1], this.str.data[1][2], this.str.data[1][3], this.str.data[1][4], this.str.data[1][5]);
            this.drawline1();
            this.str.aud.play();
            setTimeout(function () {
                _this.op1.draw(_this.str.data[2][0], _this.str.data[2][1], _this.str.data[2][2], _this.str.data[2][3], _this.str.data[2][4], _this.str.data[2][5]);
                _this.drawline2();
            }, this.str.aud_duration);
            setTimeout(function () {
                _this.op2.draw(_this.str.data[3][0], _this.str.data[3][1], _this.str.data[3][2], _this.str.data[3][3], _this.str.data[3][4], _this.str.data[3][5]);
                _this.drawline3();
            }, this.str.aud_duration + 500);
            setTimeout(function () {
                _this.op3.draw(_this.str.data[4][0], _this.str.data[4][1], _this.str.data[4][2], _this.str.data[4][3], _this.str.data[4][4], _this.str.data[4][5]);
                _this.drawline4();
            }, this.str.aud_duration + 1000);
            setTimeout(function () {
                _this.op4.draw(_this.str.data[5][0], _this.str.data[5][1], _this.str.data[5][2], _this.str.data[5][3], _this.str.data[5][4], _this.str.data[5][5]);
                _this.drawline5();
            }, this.str.aud_duration + 1500);
        }
        drawline1() {
            context.beginPath();
            context.moveTo(this.qpt.x + 10, this.qpt.y + 80);
            context.lineTo(this.qpt.x + 110, this.qpt.y + 120);
            context.lineTo(this.qpt.x + 50, this.qpt.y + 65);
            this.context.fillStyle = "rgb(231, 247, 87)";
            this.context.fill();
            context.stroke();
        }
        drawline2() {
            context.beginPath();
            context.moveTo(this.op1pt.x + 40, this.op1pt.y + 70);
            context.lineTo(this.op1pt.x + 100, this.op1pt.y + 120);
            context.lineTo(this.op1pt.x + 65, this.op1pt.y + 50);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline3() {
            context.beginPath();
            context.moveTo(this.op2pt.x - 30, this.op2pt.y + 75);
            context.lineTo(this.op2pt.x, this.op2pt.y + 130);
            context.lineTo(this.op2pt.x + 30, this.op2pt.y + 75);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline4() {
            context.beginPath();
            context.moveTo(this.op2pt.x + 120, this.op2pt.y + 55);
            context.lineTo(this.op2pt.x + 100, this.op2pt.y + 135);
            context.lineTo(this.op2pt.x + 150, this.op2pt.y + 90);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline5() {
            context.beginPath();
            context.moveTo(this.op4pt.x - 10, this.op4pt.y - 80);
            context.lineTo(this.op4pt.x - 120, this.op4pt.y - 100);
            context.lineTo(this.op4pt.x - 30, this.op4pt.y - 75);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
    }
    Geometry_shubham.Bubble = Bubble;
    //drage
    class Ractangle {
        constructor(p, data, length, hight, context) {
            this.context = context;
            this.st_pt = p;
            this.color = "blue";
            this.length = length;
            this.height = hight;
            this.data = data;
        }
        draw() {
            // console.warn("Simple!!");
            this.context.beginPath();
            this.context.rect(this.st_pt.x - this.length / 2, this.st_pt.y - this.height / 2, this.length, this.height);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = "black";
            this.context.fill();
            this.context.stroke();
            this.context.font = "14px Arial";
            this.context.fillStyle = "white";
            this.context.fillText(this.data[0], this.st_pt.x - 85, this.st_pt.y - 15);
            this.context.fillText(this.data[1], this.st_pt.x - 85, this.st_pt.y + 3);
            this.context.fillText(this.data[2], this.st_pt.x - 85, this.st_pt.y + 20);
            this.context.fillText(this.data[3], this.st_pt.x - 85, this.st_pt.y + 40);
        }
        isinside(pt) {
            if (pt.x > this.st_pt.x - this.length / 2 && pt.x < this.st_pt.x + this.length / 2) {
                if (pt.y > this.st_pt.y - this.height / 2 && pt.y < this.st_pt.y + this.height / 2) {
                    return true;
                }
            }
            return false;
        }
        set startpoint(pt) {
            this.st_pt = pt;
        }
        get startpoint() {
            return this.st_pt;
        }
    }
    Geometry_shubham.Ractangle = Ractangle;
    class Box {
        constructor(contex, num) {
            this.rpt = [];
            this.rqcontainer = [];
            this.context = context;
            this.d2 = new Data2(num);
            this.rpt.push(new Geometry_shubham.Point(100, 200));
            this.rpt.push(new Geometry_shubham.Point(300, 200));
            this.rpt.push(new Geometry_shubham.Point(500, 200));
            this.rpt.push(new Geometry_shubham.Point(700, 200));
            this.b1 = new Geometry_shubham.Ractangle(this.rpt[0], this.d2.data2[2], 175, 100, context);
            this.b2 = new Geometry_shubham.Ractangle(this.rpt[1], this.d2.data2[3], 175, 100, context);
            this.b3 = new Geometry_shubham.Ractangle(this.rpt[2], this.d2.data2[4], 175, 100, context);
            this.b4 = new Geometry_shubham.Ractangle(this.rpt[3], this.d2.data2[5], 175, 100, context);
            this.rqcontainer.push(this.b1, this.b2, this.b3, this.b4);
        }
        draw() {
            this.d2.aud.play();
            this.b1.draw();
            this.b2.draw();
            this.b3.draw();
            this.b4.draw();
        }
    }
    Geometry_shubham.Box = Box;
    class Button {
        constructor(context, startp, height, width, arcsize) {
            this.color = "#E35333";
            this.context = context;
            this.startp = startp;
            this.height = height;
            this.width = width;
            this.arcsize = arcsize;
        }
        setColor(color) {
            this.color = color;
        }
        draw() {
            // console.warn("drawing buttom");
            this.context.beginPath();
            this.context.moveTo(this.startp.x + this.arcsize, this.startp.y);
            this.context.lineTo(this.startp.x + this.width - this.arcsize, this.startp.y);
            this.context.arcTo(this.startp.x + this.width, this.startp.y, this.startp.x + this.width, this.startp.y + this.arcsize, this.arcsize);
            this.context.lineTo(this.startp.x + this.width, this.startp.y + this.height - this.arcsize);
            this.context.arcTo(this.startp.x + this.width, this.startp.y + this.height, this.startp.x + this.width - this.arcsize, this.startp.y + this.height, this.arcsize);
            this.context.lineTo(this.startp.x + this.arcsize, this.startp.y + this.height);
            this.context.arcTo(this.startp.x, this.startp.y + this.height, this.startp.x, this.startp.y - this.arcsize, this.arcsize);
            this.context.lineTo(this.startp.x, this.startp.y + this.arcsize);
            this.context.arcTo(this.startp.x, this.startp.y, this.startp.x + this.arcsize, this.startp.y, this.arcsize);
            this.context.lineTo(this.startp.x + this.arcsize, this.startp.y);
            //this.context.stroke();
            this.context.fillStyle = this.color;
            this.context.fill();
        }
        isInside(pt) {
            if (pt.x > this.startp.x && pt.x < (this.startp.x + this.width) && pt.y > this.startp.y && pt.y < (this.startp.y + this.height))
                return true;
            else
                return false;
        }
        write_submit() {
            this.context.font = "28px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("SUBMIT", this.startp.x + 18, this.startp.y + 45);
        }
        write_result() {
            this.context.font = "28px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("RESULT", this.startp.x + 18, this.startp.y + 45);
        }
        write_next() {
            this.context.font = "28px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("NEXT", this.startp.x + 35, this.startp.y + 45);
        }
        write_learn_more() {
            this.context.font = "20px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("LERN MORE", this.startp.x + 10, this.startp.y + 45);
        }
        write_return() {
            this.context.font = "28px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("RETURN", this.startp.x + 18, this.startp.y + 45);
        }
    }
    Geometry_shubham.Button = Button;
    class RecteRound {
        constructor(context, startp, height, width, csize) {
            this.context = context;
            this.startp = startp;
            this.height = height;
            this.width = width;
            this.csize = csize;
        }
        draw() {
            context.beginPath();
            context.moveTo((this.startp.x - this.csize), this.startp.y);
            context.lineTo(this.startp.x + this.width, this.startp.y);
            context.quadraticCurveTo(this.startp.x + this.width + this.csize, this.startp.y, this.startp.x + this.width + this.csize, this.startp.y + this.csize);
            context.lineTo(this.startp.x + this.width + this.csize, this.startp.y + this.height);
            context.quadraticCurveTo(this.startp.x + this.width + this.csize, this.startp.y + this.height + this.csize, this.startp.x + this.width, this.startp.y + this.height + this.csize);
            context.lineTo(this.startp.x - this.csize, this.startp.y + this.height + this.csize);
            context.quadraticCurveTo(this.startp.x - this.csize - this.csize, (this.startp.y + this.height + this.csize), this.startp.x - this.csize - this.csize, this.startp.y + this.height);
            context.lineTo(this.startp.x - this.csize - this.csize, this.startp.y + this.csize);
            context.quadraticCurveTo(this.startp.x - this.csize - this.csize, this.startp.y, this.startp.x - this.csize, this.startp.y);
            context.fillStyle = "rgb(81, 224, 210)";
            context.fill();
        }
    }
    Geometry_shubham.RecteRound = RecteRound;
    class Img {
        constructor(context) {
            this.context = context;
        }
        draw(source, sp, ep, w, h) {
            var img = new Image();
            // console.warn("img draw!");
            img.src = source;
            img.onload = function () {
                context.drawImage(img, sp, ep, w, h);
            };
        }
    }
    Geometry_shubham.Img = Img;
    class Img1 {
        constructor(img, context, pt, w, h) {
            this.img1 = img;
            this.context = context;
            this.st_pt = pt;
            this.width = w;
            this.height = h;
        }
        draw() {
            this.context.drawImage(this.img1, this.st_pt.x, this.st_pt.y, this.width, this.height);
        }
        isInside(pt) {
            if (this.st_pt.x < pt.x && pt.x < this.st_pt.x + this.width) {
                if (this.st_pt.y < pt.y && pt.y < this.st_pt.y + this.height)
                    return true;
            }
            return false;
        }
        set startpoint(pt) {
            this.st_pt = pt;
        }
        get startpoint() {
            return this.st_pt;
        }
    }
    Geometry_shubham.Img1 = Img1;
    class Img_Container {
        constructor(pt, w, h) {
            this.st_pt = pt;
            this.width = w;
            this.height = h;
        }
        isInside(pt) {
            if (this.st_pt.x < pt.x && pt.x < this.st_pt.x + this.width) {
                if (this.st_pt.y < pt.y && pt.y < this.st_pt.y + this.height)
                    return true;
            }
            return false;
        }
    }
    Geometry_shubham.Img_Container = Img_Container;
    class Img_Q {
        constructor(context) {
            this.img_container = [];
            this.ans = [];
            this.aud = new Audio();
            this.context = context;
        }
        draw_q(num) {
            let i1 = new Geometry_shubham.Img(context);
            i1.draw("images/ravina.jpg", 0, 250, 200, 300);
            let r = new Geometry_shubham.RecteRound(context, new Geometry_shubham.Point(100, 80), 70, 150, 23);
            r.draw();
            context.beginPath();
            context.moveTo(200, 160);
            context.lineTo(120, 250);
            context.lineTo(150, 160);
            context.fillStyle = "rgb(81, 224, 210)";
            context.fill();
            context.strokeStyle = "rgb(81, 224, 210)";
            context.stroke();
            context.font = "16px Arial";
            context.fillStyle = "black";
            switch (num) {
                case 1:
                    this.context.fillText("Identify the correct posture", 60, 110);
                    this.context.fillText("in an interview.", 60, 130);
                    this.aud = s15q6;
                    this.aud.play();
                    setTimeout(function () {
                        i1.draw("images/pic1_1.png", 400, 100, 150, 150);
                        i1.draw("images/pic1_2.png", 600, 100, 150, 150);
                        i1.draw("images/pic1_3.png", 400, 350, 150, 150);
                        i1.draw("images/pic1_4.png", 600, 350, 150, 150);
                    }, 4 * 1000);
                    this.temp = new Img_Container(new Point(400, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(600, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(400, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(600, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 1;
                    break;
                case 2:
                    this.context.fillText("Identify the correct ", 60, 110);
                    this.context.fillText("Handshake position in an", 60, 130);
                    this.context.fillText("interview.", 60, 150);
                    this.aud = s15q7;
                    this.aud.play();
                    setTimeout(function () {
                        i1.draw("images/pic2_1.jpg", 400, 100, 150, 150);
                        i1.draw("images/pic2_2.jpg", 600, 100, 150, 150);
                        i1.draw("images/pic2_3.jpg", 400, 350, 150, 150);
                        i1.draw("images/pic2_4.jpg", 600, 350, 150, 150);
                    }, 5 * 1000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container(new Point(400, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(600, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(400, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(600, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 1;
                    break;
                case 3:
                    this.context.fillText("     Identify the correct ", 60, 110);
                    this.context.fillText("         Hand gesture", 60, 130);
                    this.aud = s15q8;
                    this.aud.play();
                    setTimeout(function () {
                        i1.draw("images/pic3_1.jpg", 400, 100, 150, 150);
                        i1.draw("images/pic3_2.jpg", 600, 100, 150, 150);
                        i1.draw("images/pic3_3.jpg", 400, 350, 150, 150);
                        i1.draw("images/pic3_4.jpg", 600, 350, 150, 150);
                    }, 4 * 1000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container(new Point(400, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(600, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(400, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(600, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 1;
                    break;
                case 4:
                    this.context.fillText("   Which position is NOT", 60, 110);
                    this.context.fillText("   correct interview", 60, 130);
                    this.context.fillText("   posture in a waiting room", 60, 150);
                    this.aud = s15q9;
                    this.aud.play();
                    setTimeout(function () {
                        i1.draw("images/pic4_1.png", 500, 100, 200, 200);
                        i1.draw("images/pic4_2.png", 500, 350, 200, 200);
                        ;
                    }, 7 * 1000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container(new Point(500, 100), 200, 200);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(500, 350), 200, 200);
                    this.img_container.push(this.temp);
                    this.ans[0] = 0;
                    break;
                case 5:
                    this.context.fillText("Identify any of the ", 60, 110);
                    this.context.fillText("incorrect sitting gestrue", 60, 130);
                    this.context.fillText("in the interview venue.", 60, 150);
                    this.aud = s15q10;
                    this.aud.play();
                    setTimeout(function () {
                        i1.draw("images/pic5_1.jpg", 350, 100, 100, 100);
                        i1.draw("images/pic5_2.jpg", 500, 100, 100, 100);
                        i1.draw("images/pic5_3.jpg", 650, 100, 100, 100);
                        i1.draw("images/pic5_4.png", 350, 350, 100, 100);
                        i1.draw("images/pic5_5.png", 500, 350, 100, 100);
                        i1.draw("images/pic5_6.png", 650, 350, 100, 100);
                    }, 5 * 1000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container(new Point(350, 100), 100, 100);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(500, 100), 100, 100);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(650, 100), 100, 100);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(350, 350), 100, 100);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(500, 350), 100, 100);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container(new Point(650, 350), 100, 100);
                    this.img_container.push(this.temp);
                    this.ans[0] = 1;
                    this.ans[1] = 2;
                    this.ans[2] = 5;
                    break;
            }
        }
    }
    Geometry_shubham.Img_Q = Img_Q;
})(Geometry_shubham || (Geometry_shubham = {}));
//# sourceMappingURL=Shubham_geometry.js.map