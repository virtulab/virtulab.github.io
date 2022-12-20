var Geometry_gd;
(function (Geometry_gd) {
    class Point_gd {
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
    Geometry_gd.Point_gd = Point_gd;
    class Closepath_gd {
        constructor(context, arrapoint, color) {
            this.point = arrapoint;
            this.context = context;
            if (color == undefined)
                this.color = "rgb(224,224,224)";
            else
                this.color = color;
        }
        draw(str1, str2, str3, str4, str5, str6, str7, str8) {
            var i;
            this.context.beginPath();
            this.context.moveTo(this.point[0].x, this.point[0].y);
            for (i = 1; i < this.point.length; i++) {
                this.context.lineTo(this.point[i].x, this.point[i].y);
            }
            this.context.closePath();
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.lineWidth = 0;
            this.context.stroke();
            this.context.font = "14px Arial";
            this.context.fillStyle = "black";
            this.context.fillText(str1, this.startpt.x - 70, this.startpt.y - 50);
            this.context.fillText(str2, this.startpt.x - 90, this.startpt.y - 35);
            this.context.fillText(str3, this.startpt.x - 90, this.startpt.y - 20);
            this.context.fillText(str4, this.startpt.x - 90, this.startpt.y - 5);
            this.context.fillText(str5, this.startpt.x - 93, this.startpt.y + 10);
            this.context.fillText(str6, this.startpt.x - 86, this.startpt.y + 25);
            this.context.fillText(str7, this.startpt.x - 80, this.startpt.y + 40);
            this.context.fillText(str8, this.startpt.x - 80, this.startpt.y + 55);
        }
    }
    Geometry_gd.Closepath_gd = Closepath_gd;
    class Ellipse_gd extends Closepath_gd {
        constructor(context, pt, majorx, minory, color) {
            if (color == undefined)
                super(context, []);
            else
                super(context, [], color);
            this.startpt = pt;
            this.a = majorx;
            this.b = minory;
        }
        draw(str1, str2, str3, str4, str5, str6, str7, str8) {
            this.calculate();
            super.draw(str1, str2, str3, str4, str5, str6, str7, str8);
        }
        calculate() {
            this.point = [];
            for (var i = 0; i <= 360; i++) {
                let x1 = this.a * Math.cos(i * Math.PI / 180) + this.startpt._x;
                let y1 = this.b * Math.sin(i * Math.PI / 180) + this.startpt._y;
                this.point.push(new Geometry_gd.Point_gd(x1, y1));
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
    Geometry_gd.Ellipse_gd = Ellipse_gd;
    //For the question and ans ...
    class Data_gd {
        constructor(num) {
            this.data = [[]];
            this.ans = 0;
            this.aud = new Audio();
            switch (num) {
                case 1:
                    //first Question and options  ans=a
                    this.data.push(["Now that you are  ", "seated what will each  ", "of you stress upon during a", "one minute introduction  ", "before the group discussion?", "   So who do you think is ", "        correct ?", ""]);
                    this.data.push(["", "I am archie pursuing ", "my bechlors in computer", "enginnering my co-curricular ", "engagements in  industrial ", "trainnings internships have ", "further sharpened my skills.", " "]); //a
                    this.data.push(["", "", "    I am manoj born on ", "   20th june and belong to", "     hindu community", "", "", ""]); //b
                    this.data.push(["", "", "   I am Pooja ,I am coming ", "        from Mumbai ", " ", " ", "", ""]); //c
                    this.data.push(["", "", "", "            I am RAVI ", "", "", "", ""]); //d
                    this.aud = s7_4;
                    this.aud_duration = 6000;
                    this.aud = s7_6;
                    this.ans = 1;
                    break;
                case 2:
                    //second ..ans=d
                    this.data.push(["", "", "", " Would you like to initiate ", "     group discussion?", "", "", ""]);
                    this.data.push([" ", "", "", "    Yes, i would like to initiate", "", "", "", ""]); //a
                    this.data.push(["", "", "", "   No i do not want to start ", "the group discussion .", "", "", ""]); //b
                    this.data.push(["", "", "", "   Not sure about it .", "", "", "", ""]); //c
                    this.data.push([" ", "", "", "   I will decide after getting ", "            the topic .", "", "", ""]); //d
                    this.aud = s7q2;
                    this.aud_duration = 3500;
                    this.ans = 1;
                    break;
                case 3:
                    //third..ans=c
                    this.data.push(["", "", "", " If you have a new topic ", "        What would you do ?", "", "", ""]);
                    this.data.push(["", "", "", "       I will keep quite ", "", "", "", ""]); //a
                    this.data.push(["", "", "", "I will observe others speak", "", "", "", ""]); //b
                    this.data.push(["", "", "I will divert the topic towards", "     my area of expectations .", "", "", "", ""]); //c
                    this.data.push(["", "", "", "Better i will observe and note ", "the points being discussed .", "", "", ""]); //d
                    this.aud = s7q3;
                    this.aud_duration = 4000;
                    this.ans = 3;
                    break;
                case 4:
                    //forth..ans=d  
                    this.data.push(["", "", "Which of this do you think ", "are important from the ", "perspective of G.D ?", "", "", ""]);
                    this.data.push(["", "", "", "We should dress formally  ", "and arrive on time", "", "", ""]); //a
                    this.data.push(["", "", "Our body language ", "starting the way we talk to our ", "allocated seats is very ", "  important ", "", ""]); //b
                    this.data.push(["", "", "We should try to maintain  ", "a balance in our tone while ", "objecting to the points made ", " by other Persons .", "", ""]); //c
                    this.data.push(["", "", "", "I think all the points told ", "by my friends are correct .", "", "", ""]); //d
                    this.aud = s7q4;
                    this.aud_duration = 6500;
                    this.ans = 4;
                    break;
                case 5:
                    //fifth..ans=d
                    this.data.push(["", "", "Which of the following ", "skills are required in ", " group discussion ? ", "", "", ""]);
                    this.data.push([" ", "", "Active listening and ", "speaking clarifications are ", "of prime importance ", "", "", ""]); //a
                    this.data.push(["", "", "Structuring the thought ", "process and summarizing  ", "the discussion is also", "   important", "", ""]); //b
                    this.data.push(["", "", "", "Role of mediator cannot be ", "  forgotten ", "", "", ""]); //c
                    this.data.push(["", "", "", "All the points mentioned here ", "   is important ", "", "", ""]); //d
                    this.aud = s7q5;
                    this.aud_duration = 4300;
                    this.ans = 4;
                    break;
                case 6:
                    //fifth..ans=d
                    this.data.push(["", "During the course of", "the group discussion,", "as you can see there is a", "point of disagreement amongst", "the members of the Discussion ", "So, Whose approach do", "you think is Correct?"]);
                    this.data.push([" ", "", "", "The point made by you ", "friend  is wrong", "", "", ""]); //a
                    this.data.push(["", "", "I see that you have a good ", "point but there is ", "another aspect to it", "", "", ""]); //b
                    this.data.push(["", "", "The point made by you is ok.", "Hence its better if you cut ", "  it short ", "", "", ""]); //c
                    this.data.push(["", "", "", "Well, my friend, ", "Your argument does not make", "any sense", "", ""]); //d
                    this.aud = s9q1;
                    this.aud_duration = 14000;
                    this.ans = 2;
                    break;
                case 7:
                    //fifth..ans=d
                    this.data.push(["", " What would you do if the", "topic of discussion is ", "something you know very ", "less about and have no  ", "worthwhile points to ", "mention?", ""]);
                    this.data.push([" ", "", "I will keep quiet and not", "speak at all so that people", "do not get to know of my", " shortcomings", "", ""]); //a
                    this.data.push(["", "I will only question the", "points that other members ", "are stating so that I don't", "have to speak anything else", "", "", ""]); //b
                    this.data.push(["", "", "I will oppose or support ", "whatever other person is ", "saying blindly since I do", " not know anything", "", ""]); //c
                    this.data.push(["", "Well,I will speak at a later", "stage so that we  become", "reasonably aware of the topic and", " also get time to identify", " new thoughts by lookings ", " at issue", ""]); //d
                    this.aud = s9q2;
                    this.aud_duration = 11000;
                    this.ans = 4;
                    break;
                case 8:
                    //fifth..ans=d
                    this.data.push(["In the group discussion,", "you all have reached a ", "stage when no new points are ", "being discussed and  everyone", "just stating the similar points in", " a round-about fashion.", " What actually should you", "all do in this case ?"]);
                    this.data.push([" ", " I will generate new ", "thoughts by getting new ideas", " and dimensions in place", " thereby expanding the scope ", "of the discussion", "", ""]); //a
                    this.data.push(["", "", "Summarizing  the Discussion ", "and concluding  without any", "further delay I think is", "the best possible way.", "", ""]); //b
                    this.data.push(["", "", "We should all keep silent", "and allow the Discussion", "to take its own turn.", "", "", ""]); //c
                    this.data.push(["", "", "", "I do not have any idea.", "", "", "", ""]); //d
                    this.aud = s9q3;
                    this.aud_duration = 17000;
                    this.ans = 1;
                    break;
                case 9:
                    //fifth..ans=d
                    this.data.push(["", "", "", "What do you think is important", " in a group discussion?", "", "", ""]);
                    this.data.push([" ", "", "I think Sub-group formation", "and carrying out a parallel", "discussion amongst ourselves", "is important", "", ""]); //a
                    this.data.push(["", "", "Using colloquial language", " like the fundae ', 'cool' and ", "mixing vernacular with English", "I think is important.", "", ""]); //b
                    this.data.push(["", "", "Our Manner  and the content ", "of the presentation", " is important", "", "", ""]); //c
                    this.data.push(["", "", "I will look away from", "the group and focus on ", " something else if the GD ", " is becoming inconclusive .", "", ""]); //d
                    this.aud = s9q4;
                    this.aud_duration = 4300;
                    this.ans = 3;
                    break;
                case 10:
                    //fifth..ans=d
                    this.data.push(["", "", "Which behaviour of yours", "doesn’t reveal the team", "dynamics?", "", "", ""]);
                    this.data.push(["", "", "I like to initiate", " and seek information ", "", "", "", ""]); //a
                    this.data.push(["", "", "Well, I am an attacker,", "humourist and dominator", "", "", "", ""]); //b
                    this.data.push(["", "", " I like to  clarify, ", "summarize  and relieves the", "tension of my team members", "", "", ""]); //c
                    this.data.push(["", "", " I like to seek opinion of ", "others, and also give opinions.", "I also try to facilitate", "the whole procedure.", "", ""]); //d
                    this.aud = s9q5;
                    this.aud_duration = 6000;
                    this.ans = 2;
                    break;
                case 11:
                    //fifth..ans=d
                    this.data.push(["", "", "So, which approach do you", "think is Correct?", "", "", "", ""]);
                    this.data.push(["", "", "  I will better note down", " and repeat what others told  ", "since I do not know about the ", "topic", "", ""]); //a
                    this.data.push(["", "", "Better I will remain quiet and ", "hear what others are saying", "", "", "", ""]); //b
                    this.data.push(["", "", "  I will speak after sometime ", "after hearing the other", " members speak about the ", "topic . ", "", ""]); //c
                    this.data.push(["", " I will initiate the topic", "and conclude in the end so", "that the observers can see", " what. I am speaking even", " though. I do not know the", " topic", ""]); //d
                    this.aud = s10q1;
                    this.aud_duration = 4300;
                    this.ans = 3;
                    break;
                case 12:
                    //fifth..ans=d
                    this.data.push(["", "", "", "What  should you do now ?", "", "", "", ""]);
                    this.data.push(["", "", "  I will let others say their ", "points for sometime and", "bulldoze in again", "", "", ""]); //a
                    this.data.push(["", "", "I think it is better not", "to fight verbally as we  are ", " being observed; hence I ", "will  keep quiet", "", ""]); //b
                    this.data.push(["We should try speaking", " later after sometime", "even though the  tempers ", "have not subsided as  we need", "to speak in the groupdiscussion", " irrespective of whether ", "somebody hears or not", ""]); //c
                    this.data.push(["", "", "  Its better if we raise our", "voice and enter the discussion", "at the next available ", "opportunity.", "", ""]); //d
                    this.aud = s10q2;
                    this.aud_duration = 4300;
                    this.ans = 4;
                    break;
                case 13:
                    //fifth..ans=d
                    this.data.push(["", "", "", "What should you do now ?", "", "", "", ""]);
                    this.data.push(["", "", "  I will continue with the ", "argument as I feel I am right", "", "", "", ""]); //a  
                    this.data.push(["", "", "I think we should avoid", "getting into any verbal brawl", "and keep quiet so that we can", "create a favourable impression", "", ""]); //b
                    this.data.push(["Keeping  quiet is a good", "option as by continuing with the", "argument over an irrelevant topic", "I will not only wasting my own", "efforts and time, but also the", " time for the group discussion", "which was also drifting away", ""]); //d
                    this.data.push(["", "", "  Lets continue with the", " argument so that people do", "not get to know that I", "did not know about the topic", "", ""]); //c
                    this.aud = s10q3;
                    this.aud_duration = 4300;
                    this.ans = 3;
                    break;
                case 14:
                    //fifth..ans=d
                    this.data.push(["", "", "", "What should you do now?", "", "", "", ""]);
                    this.data.push(["", "", "I will maintain poise and", "keep quiet so that I don’t", " spoil my image any further", "", "", ""]); //a
                    this.data.push(["Instead,I think we should", "jump on the proceedings and", "conclude the GD by summarizing", " the points made by the group ", "and asking every body to speak", "  out especially the ones", " who kept quiet.", ""]); //b
                    this.data.push(["Better to Jump on the ", "conclusion by being the first to ", "thank the moderator for listening ", "to the group discussion and ", "asking the active members to do", "the final proceedings as they ", "knew about the topic.", ""]); //c
                    this.data.push(["", "", "I will just convey my thanks", "to everybody with a smile.", "", "", "", ""]); //d
                    this.aud = s10q4;
                    this.aud_duration = 4300;
                    this.ans = 2;
                    break;
                case 15:
                    //fifth..ans=d      
                    this.data.push(["Out of emotional Stability, ", "knowledge,dominance and ", "aggressiveness, which of these ", "qualities are important in", "a group discussion?", "", "", "", ""]);
                    this.data.push(["", "", "", "", "   Emotional stability", "", "", ""]); //a
                    this.data.push(["", "", "", "", "   Knowledge", "", "", ""]); //b
                    this.data.push(["", "", "", "", "   Dominance", "", "", ""]); //a
                    this.data.push(["", "", "", "", "   Aggressiveness", "", "", ""]); //b
                    this.aud = s11q1;
                    this.aud_duration = 10000;
                    this.ans = 0;
                    break;
                case 16:
                    //fifth..ans=d      
                    this.data.push(["", "", "What do you think the panellist", "assess  in a GD?", "", "", "", ""]);
                    this.data.push(["", "", "    Well, they also see how", "attentive we were in our ", "listening.", "", "", ""]); //b
                    this.data.push(["", "", "My friend, I feel the ", "more we speak and argue ", "its good for us to impress", "", "", ""]); //a  
                    this.data.push(["", "", "I feel most importantly they test ", "our Pronunciation and  Speaking", "skills..look how eloquently ", "I can present my arguments", "", ""]); //b
                    this.data.push(["", "", "", "Panelists assess our leadership", "skills, communication skills.", "", "", ""]); //a
                    this.aud = s11q2;
                    this.aud_duration = 4000;
                    this.ans = 3;
                    break;
                case 17:
                    //fifth..ans=d      
                    this.data.push(["", "", "How important is the aspect", "of  speaking in a GD?", "", "", "", ""]);
                    this.data.push(["", "", "", " I feel I will give everyone  ", "a chance to speak", "", "", ""]); //a
                    this.data.push(["", "", "Whenever we get the opportunity", ", we should monopolize the ", "conversation or talk too much", "", "", ""]); //b
                    this.data.push(["", "", "", "We should not sit silently", "but speak freely. ", "", "", ""]); //a
                    this.data.push(["", "", "No way, I will Interrupt while ", "others are speaking otherwise ", "how will I prove myself.", "", "", ""]); //b
                    this.aud = s11q3;
                    this.aud_duration = 5000;
                    this.ans = 2;
                    break;
                case 21:
                    this.data.push(["", "", "How do you think Rajeev should ", "start the topic?", "", "", "", ""]);
                    this.data.push(["", "", "", " He should start on a ", " very high energetic note", "", "", ""]); //a
                    this.data.push(["", "", "Immediately he should start ", "debating as this topic is ", "debatable", "", "", ""]); //b
                    this.data.push(["", "", "", "Its good if he starts without", " much debate ", "", "", ""]); //a
                    this.data.push(["", "", "Well, he should  start only ", "if he has  a stance ", "", "", "", ""]); //b
                    this.aud = s33q1;
                    this.aud_duration = 3200;
                    this.ans = 3;
                    break;
                case 22:
                    this.data.push(["", "", "", "What should you do?", "", "", "", ""]);
                    this.data.push(["", "", "", "I will start my discussion by", "firmly putting my point forward", "", "", ""]); //a
                    this.data.push(["", "", "I believe  disagreeing  is  ", "important here as it’s a ", " matter of opinion", "", "", ""]); //b
                    this.data.push(["", "", "I will start by pointing to ", "someone whose point is not ", "good.", "", "", ""]); //c
                    this.data.push(["", "", "", "I will  start by agreeing to a point", "", "", "", ""]); //d
                    this.aud = s33q2;
                    this.aud_duration = 2000;
                    this.ans = 4;
                    break;
                case 23:
                    this.data.push(["", "", "", "What should you do?", "", "", "", ""]);
                    this.data.push(["", "", "", "Its good if he starts without", " much debate ", "", "", ""]); //c
                    this.data.push(["", "", "", "I will Change my stance", " immediately", "", "", ""]); //a
                    this.data.push(["", "", "I will  not change at all ", "and be firmed up on my point", "", "", "", ""]); //b
                    this.data.push(["", "", "Better we should change our ", "stance at the end after listening ", "to all as it’s a sign of ", "arrogance to interrupt in ", "the middle", ""]); //b
                    this.aud = s33q2;
                    this.aud_duration = 2000;
                    this.ans = 1;
                    break;
                case 24:
                    this.data.push(["", "", "Is this approach correct from ", " the point of view of GD?", "", "", "", ""]);
                    this.data.push(["", "", "", "Yes this is correct", "", "", "", ""]); //a
                    this.data.push(["", "", "", " Yes if I am able to put my", "view point", "", "", ""]); //a
                    this.data.push(["", "", "", "No I do not  agree to this view", "", "", "", ""]); //b
                    this.data.push(["", "", "", "I don’t know", "", "", "", ""]); //b
                    this.aud = s33q4;
                    this.aud_duration = 5000;
                    this.ans = 2;
                    break;
            }
        }
    }
    Geometry_gd.Data_gd = Data_gd;
    class Bubble_gd {
        constructor(context) {
            this.bubblecontainer = [];
            this.context = context;
            this.qpt = new Point_gd(400, 100);
            this.op1pt = new Point_gd(110, 400);
            this.op2pt = new Point_gd(170, 200);
            this.op3pt = new Point_gd(630, 200);
            this.op4pt = new Point_gd(689, 400);
            this.q = new Ellipse_gd(context, this.qpt, 120, 85, "rgb(153,153,255)");
            this.op1 = new Ellipse_gd(context, this.op1pt, 110, 85);
            this.op2 = new Ellipse_gd(context, this.op2pt, 115, 85);
            this.op3 = new Ellipse_gd(context, this.op3pt, 110, 85);
            this.op4 = new Ellipse_gd(context, this.op4pt, 110, 85);
            this.bubblecontainer.push(this.q, this.op1, this.op2, this.op3, this.op4);
        }
        draw(num) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            let i4 = new Geometry_gd.Img_gd(context);
            i4.draw('images/meeting.png', 180, 230, 450, 400);
            this.str = new Data_gd(num);
            this.str.aud.play();
            var _this = this;
            this.q.draw(this.str.data[1][0], this.str.data[1][1], this.str.data[1][2], this.str.data[1][3], this.str.data[1][4], this.str.data[1][5], this.str.data[1][6], this.str.data[1][7]);
            this.drawline1();
            setTimeout(function () {
                _this.op1.draw(_this.str.data[2][0], _this.str.data[2][1], _this.str.data[2][2], _this.str.data[2][3], _this.str.data[2][4], _this.str.data[2][5], _this.str.data[2][6], _this.str.data[2][7]);
                _this.drawline2();
            }, this.str.aud_duration);
            setTimeout(function () {
                _this.op2.draw(_this.str.data[3][0], _this.str.data[3][1], _this.str.data[3][2], _this.str.data[3][3], _this.str.data[3][4], _this.str.data[3][5], _this.str.data[3][6], _this.str.data[3][7]);
                _this.drawline3();
            }, this.str.aud_duration + 1000);
            setTimeout(function () {
                _this.op3.draw(_this.str.data[4][0], _this.str.data[4][1], _this.str.data[4][2], _this.str.data[4][3], _this.str.data[4][4], _this.str.data[4][5], _this.str.data[4][6], _this.str.data[4][7]);
                _this.drawline4();
            }, this.str.aud_duration + 1500);
            setTimeout(function () {
                _this.op4.draw(_this.str.data[5][0], _this.str.data[5][1], _this.str.data[5][2], _this.str.data[5][3], _this.str.data[5][4], _this.str.data[5][5], _this.str.data[5][6], _this.str.data[5][7]);
                _this.drawline5();
            }, this.str.aud_duration + 2000);
        }
        drawline1() {
            context.beginPath();
            context.moveTo(this.qpt.x + 5, this.qpt.y + 85);
            context.lineTo(this.qpt.x, this.qpt.y + 140);
            context.lineTo(this.qpt.x - 15, this.qpt.y + 83);
            //context.lineTo(this.qpt.x+5,this.qpt.y+84);  
            this.context.fillStyle = "rgb(153,153,255)";
            this.context.fill();
            context.stroke();
        }
        drawline2() {
            context.beginPath();
            context.moveTo(this.op1pt.x + 53, this.op1pt.y + 71);
            context.lineTo(this.op1pt.x + 130, this.op1pt.y + 90);
            context.lineTo(this.op1pt.x + 75, this.op1pt.y + 63);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline3() {
            context.beginPath();
            context.moveTo(this.op2pt.x, this.op2pt.y + 85);
            context.lineTo(this.op2pt.x + 75, this.op2pt.y + 130);
            context.lineTo(this.op2pt.x + 30, this.op2pt.y + 80);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline4() {
            context.beginPath();
            context.moveTo(this.op3pt.x - 20, this.op3pt.y + 83);
            context.lineTo(this.op3pt.x - 80, this.op3pt.y + 130);
            context.lineTo(this.op3pt.x - 40, this.op3pt.y + 78);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline5() {
            context.beginPath();
            context.moveTo(this.op4pt.x - 30, this.op4pt.y + 80);
            context.lineTo(this.op4pt.x - 100, this.op4pt.y + 100);
            context.lineTo(this.op4pt.x - 60, this.op4pt.y + 70);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
    }
    Geometry_gd.Bubble_gd = Bubble_gd;
    class Bubble_gd_level5 {
        constructor(context) {
            this.bubblecontainer = [];
            this.context = context;
            this.qpt = new Point_gd(60, 10);
            this.op1pt = new Point_gd(220, 230);
            this.op2pt = new Point_gd(400, 120);
            this.op3pt = new Point_gd(650, 160);
            this.op4pt = new Point_gd(689, 350);
            this.q = new Geometry_gd.RecteRound_gd(context, this.qpt, 100, 150, 26);
            this.op1 = new Ellipse_gd(context, this.op1pt, 110, 50);
            this.op2 = new Ellipse_gd(context, this.op2pt, 115, 80);
            this.op3 = new Ellipse_gd(context, this.op3pt, 110, 75);
            this.op4 = new Ellipse_gd(context, this.op4pt, 110, 60);
            this.bubblecontainer.push(this.op1, this.op2, this.op3, this.op4);
        }
        draw(num) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            let i5 = new Geometry_gd.Img_gd(context);
            i5.draw('images/Host_for_GD.png', 20, 250, 150, 350);
            let i4 = new Geometry_gd.Img_gd(context);
            i4.draw('images/level_5.png', 230, 230, 400, 400);
            this.str = new Data_gd(num);
            var _this = this;
            this.q.draw(this.str.data[1][0], this.str.data[1][1], this.str.data[1][2], this.str.data[1][3], this.str.data[1][4], this.str.data[1][5], this.str.data[1][6], this.str.data[1][7]);
            this.drawline1();
            this.str.aud.play();
            setTimeout(function () {
                _this.op1.draw(_this.str.data[2][0], _this.str.data[2][1], _this.str.data[2][2], _this.str.data[2][3], _this.str.data[2][4], _this.str.data[2][5], _this.str.data[2][6], _this.str.data[2][7]);
                _this.drawline2();
            }, this.str.aud_duration);
            setTimeout(function () {
                _this.op2.draw(_this.str.data[3][0], _this.str.data[3][1], _this.str.data[3][2], _this.str.data[3][3], _this.str.data[3][4], _this.str.data[3][5], _this.str.data[3][6], _this.str.data[3][7]);
                _this.drawline3();
            }, this.str.aud_duration + 1000);
            setTimeout(function () {
                _this.op3.draw(_this.str.data[4][0], _this.str.data[4][1], _this.str.data[4][2], _this.str.data[4][3], _this.str.data[4][4], _this.str.data[4][5], _this.str.data[4][6], _this.str.data[4][7]);
                _this.drawline4();
            }, this.str.aud_duration + 1500);
            setTimeout(function () {
                _this.op4.draw(_this.str.data[5][0], _this.str.data[5][1], _this.str.data[5][2], _this.str.data[5][3], _this.str.data[5][4], _this.str.data[5][5], _this.str.data[5][6], _this.str.data[5][7]);
                _this.drawline5();
            }, this.str.aud_duration + 2000);
        }
        drawline1() {
            context.beginPath();
            context.moveTo(this.qpt.x, this.qpt.y + 125);
            context.lineTo(this.qpt.x + 5, this.qpt.y + 250);
            context.lineTo(this.qpt.x - 25, this.qpt.y + 125);
            //context.lineTo(this.qpt.x+5,this.qpt.y+84);  
            this.context.fillStyle = "#FFAB40";
            this.context.fill();
            context.stroke();
        }
        drawline2() {
            context.beginPath();
            context.moveTo(this.op1pt.x, this.op1pt.y + 49);
            context.lineTo(this.op1pt.x + 50, this.op1pt.y + 180);
            context.lineTo(this.op1pt.x + 20, this.op1pt.y + 49);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline3() {
            context.beginPath();
            context.moveTo(this.op2pt.x, this.op2pt.y + 78);
            context.lineTo(this.op2pt.x - 50, this.op2pt.y + 150);
            context.lineTo(this.op2pt.x - 30, this.op2pt.y + 77);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline4() {
            context.beginPath();
            context.moveTo(this.op3pt.x - 10, this.op3pt.y + 73);
            context.lineTo(this.op3pt.x - 80, this.op3pt.y + 130);
            context.lineTo(this.op3pt.x - 40, this.op3pt.y + 68);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
        drawline5() {
            context.beginPath();
            context.moveTo(this.op4pt.x - 30, this.op4pt.y + 56);
            context.lineTo(this.op4pt.x - 80, this.op4pt.y + 90);
            context.lineTo(this.op4pt.x - 50, this.op4pt.y + 53);
            this.context.fillStyle = "rgb(224,224,224)";
            this.context.fill();
            context.stroke();
        }
    }
    Geometry_gd.Bubble_gd_level5 = Bubble_gd_level5;
    class Img_gd {
        constructor(context) {
            this.context = context;
        }
        draw(source, sp, ep, w, h) {
            var img = new Image();
            img.src = source;
            img.onload = function () {
                context.drawImage(img, sp, ep, w, h);
            };
        }
    }
    Geometry_gd.Img_gd = Img_gd;
    class RecteRound_gd {
        constructor(context, startp, height, width, csize) {
            this.context = context;
            this.startp = startp;
            this.height = height;
            this.width = width;
            this.csize = csize;
        }
        draw(text, text1, text2, text3, text4, text5, text6, text7) {
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
            context.fillStyle = "#FFAB40";
            context.fill();
            context.lineWidth = 0.5;
            context.stroke();
            //this.drawline();
            //this.drawline1();
            this.context.font = "14px Arial";
            this.context.fillStyle = "black";
            context.fillText(text, this.startp.x - 30, this.startp.y + 20);
            context.fillText(text1, this.startp.x - 30, this.startp.y + 40);
            context.fillText(text2, this.startp.x - 30, this.startp.y + 60);
            context.fillText(text3, this.startp.x - 30, this.startp.y + 80);
            context.fillText(text4, this.startp.x - 30, this.startp.y + 100);
            context.fillText(text5, this.startp.x - 30, this.startp.y + 120);
            context.fillText(text6, this.startp.x - 30, this.startp.y + 140);
            context.fillText(text7, this.startp.x - 30, this.startp.y + 160);
        }
        drawline() {
            context.beginPath();
            context.moveTo(this.startp.x, this.startp.y + 175);
            context.lineTo(this.startp.x + 80, this.startp.y + 250);
            context.lineTo(this.startp.x + 40, this.startp.y + 175);
            this.context.fillStyle = "#FFAB40";
            this.context.fill();
            context.lineWidth = 0.5;
            context.stroke();
        }
        drawline1() {
            context.beginPath();
            context.moveTo(this.startp.x, this.startp.y + 95);
            context.lineTo(this.startp.x + 30, this.startp.y + 95);
            context.lineTo(this.startp.x + 80, this.startp.y + 175);
            this.context.fillStyle = "#FFAB40";
            this.context.fill();
        }
        drawline2() {
            context.beginPath();
            context.moveTo(this.startp.x, this.startp.y + 175);
            context.lineTo(this.startp.x + 50, this.startp.y + 250);
            context.lineTo(this.startp.x + 30, this.startp.y + 175);
            this.context.fillStyle = "#FFAB40";
            this.context.fill();
            context.lineWidth = 0.5;
            context.stroke();
        }
        drawline3() {
            context.beginPath();
            context.moveTo(this.startp.x, this.startp.y + 124);
            context.lineTo(this.startp.x + 50, this.startp.y + 190);
            context.lineTo(this.startp.x + 30, this.startp.y + 125);
            this.context.fillStyle = "#FFAB40";
            this.context.fill();
            context.lineWidth = 0.5;
            context.stroke();
        }
    }
    Geometry_gd.RecteRound_gd = RecteRound_gd;
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
            this.context.fillText("NEXT", this.startp.x + 20, this.startp.y + 50);
        }
        write_result() {
            this.context.font = "28px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("RESULT", this.startp.x + 20, this.startp.y + 50);
        }
        write_return() {
            this.context.font = "28px Arial";
            this.context.fillStyle = "White";
            this.context.fillText("RETURN", this.startp.x + 20, this.startp.y + 50);
        }
    }
    Geometry_gd.Button = Button;
    class Img_Container_gd {
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
    Geometry_gd.Img_Container_gd = Img_Container_gd;
    class Img_Q_gd {
        constructor(context) {
            this.img_container = [];
            this.ans = [];
            this.context = context;
        }
        draw_q(num) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            let i1 = new Geometry_gd.Img_gd(context);
            let er5 = new Geometry_gd.RecteRound_gd(context, new Geometry_gd.Point_gd(550, 100), 70, 150, 26);
            i1.draw("images/Host_for_GD.png", 600, 250, 150, 300);
            switch (num) {
                case 1:
                    er5.draw("", "Which is the appropriate", "decorum you would like to see ", "in this Group Discussion?", "", "", "", "");
                    er5.drawline1();
                    s8q1.play();
                    setTimeout(function () {
                        i1.draw("images/q6-1.jpg", 50, 100, 150, 150);
                        i1.draw("images/q6-2.jpg", 300, 100, 150, 150);
                        i1.draw("images/q6-3.jpg", 50, 350, 150, 150);
                        i1.draw("images/q6-4.jpg", 300, 350, 150, 150);
                    }, 6000);
                    this.temp = new Img_Container_gd(new Point_gd(50, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(300, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(50, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(300, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 3;
                    break;
                case 2:
                    er5.draw("", "How would you like to sit", "for the group discussion?", "", "", "", "", "");
                    er5.drawline1();
                    s8q2.play();
                    setTimeout(function () {
                        i1.draw("images/q7-1.jpg", 50, 100, 150, 150);
                        i1.draw("images/q7-2.jpg", 300, 100, 150, 150);
                        i1.draw("images/q7-3.jpg", 175, 350, 150, 150);
                    }, 4000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container_gd(new Point_gd(50, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(300, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(175, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 2;
                    break;
                case 3:
                    er5.draw("", "Identify the correct attire", "for  your group discussion:", "", "", "", "", "");
                    er5.drawline1();
                    s8q3.play();
                    setTimeout(function () {
                        i1.draw("images/q8-1.jpg", 50, 100, 150, 150);
                        i1.draw("images/q8-2.jpg", 300, 100, 150, 150);
                        i1.draw("images/q8-3.jpg", 50, 350, 150, 150);
                        i1.draw("images/q8-4.jpg", 300, 350, 150, 150);
                    }, 4000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container_gd(new Point_gd(50, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(300, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(50, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(300, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 0;
                    break;
                case 4:
                    er5.draw("", "Identify the correct walking", "style  to a GD Venue.", "", "", "", "", "");
                    er5.drawline1();
                    s8q4.play();
                    setTimeout(function () {
                        i1.draw("images/q-9-1.jpg", 50, 50, 250, 150);
                        i1.draw("images/q-9-2.jpg", 50, 250, 250, 150);
                        i1.draw("images/q-9-3.jpg", 50, 450, 250, 150);
                    }, 3500);
                    this.img_container.length = 0;
                    this.temp = new Img_Container_gd(new Point_gd(50, 50), 250, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(50, 250), 250, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(50, 450), 250, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 0;
                    break;
                case 5:
                    er5.draw("", "Identify the  incorrect discussion ", "forum for a professional setting.", "", "", "", "", "");
                    er5.drawline1();
                    s8q5.play();
                    setTimeout(function () {
                        i1.draw("images/q-10-1.png", 50, 100, 150, 150);
                        i1.draw("images/q-10-2.png", 300, 100, 150, 150);
                        i1.draw("images/q-10-3.png", 175, 350, 150, 150);
                    }, 5000);
                    this.img_container.length = 0;
                    this.temp = new Img_Container_gd(new Point_gd(50, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(300, 100), 150, 150);
                    this.img_container.push(this.temp);
                    this.temp = new Img_Container_gd(new Point_gd(175, 350), 150, 150);
                    this.img_container.push(this.temp);
                    this.ans[0] = 2;
                    break;
            }
        }
    }
    Geometry_gd.Img_Q_gd = Img_Q_gd;
})(Geometry_gd || (Geometry_gd = {}));
//# sourceMappingURL=Neel_geometry.js.map