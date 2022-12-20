var Geometry;
(function (Geometry_1) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Geometry_1.Point = Point;
    class Img {
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
    Geometry_1.Img = Img;
    class Rectangle {
        constructor(context, startp, width, height) {
            this._len = 1;
            this._colorpass = false;
            this.cornerRadius = 50;
            this.context = context;
            this._startp = startp;
            this._width = width;
            this._height = height;
        }
        setColor(color) {
            this._colorpass = true;
            this._color = color;
        }
        draw() {
            context.beginPath();
            context.rect(this._startp.x, this._startp.y, this._width, this._height);
            context.closePath();
            if (this._colorpass) {
                context.fillStyle = this._color;
                context.fill();
            }
            this._colorpass = false;
        }
        isInside(pt) {
            if (pt.x > this._startp.x && pt.x < (this._startp.x + this._width) && pt.y > this._startp.y && pt.y < (this._startp.y + this._height)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Geometry_1.Rectangle = Rectangle;
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
            context.fillStyle = "#80b1fa";
            context.fill();
        }
    }
    Geometry_1.RecteRound = RecteRound;
    class ClosePath {
        constructor(context, points) {
            this.points = points;
            this.context = context;
            this.color = "#80b1fa";
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 0; i < this.points.length; i++) {
                this.context.lineTo(this.points[i].x, this.points[i].y);
            }
            this.context.closePath();
            this.context.fillStyle = this.color;
            this.context.fill();
        }
    }
    Geometry_1.ClosePath = ClosePath;
    class Ellipse extends ClosePath {
        constructor(context, point, majorX, minorY) {
            super(context, []);
            this.majorX = majorX;
            this.minorY = minorY;
            this.startPoint = point;
        }
        cal() {
            this.points = [];
            for (let i = 0; i <= 360; i++) {
                let x1 = this.majorX * Math.cos(i * Math.PI / 180) + this.startPoint.x;
                let y1 = this.minorY * Math.sin(i * Math.PI / 180) + this.startPoint.y;
                this.points.push(new Point(x1, y1));
            }
        }
        draw() {
            this.cal();
            super.draw();
        }
    }
    Geometry_1.Ellipse = Ellipse;
    class ClosePathProperty {
        constructor(Geometry) {
            this.points = Geometry.points;
        }
        centroid() {
            let area = 0;
            let cx = 0;
            let cy = 0;
            let a = 0;
            for (let i = 0; i < this.points.length - 1; i++) {
                a = this.points[i].x * this.points[i + 1].y - this.points[i + 1].x * this.points[i].y;
                cx += (this.points[i].x + this.points[i + 1].x) * a;
                cy += (this.points[i].y + this.points[i + 1].y) * a;
                area += a;
            }
            this.area = area / 2;
            this.cx = cx / (6 * area / 2);
            this.cy = cy / (6 * area / 2);
        }
        getcentroid() {
            this.centroid();
            return (new Point(this.cx, this.cy));
        }
        getarea() {
            this.centroid();
            return (this.area);
        }
        getTriangleArea(pt1, pt2, pt3) {
            var area = (pt1.x * (pt2.y - pt3.y) + pt2.x * (pt3.y - pt1.y) + pt3.x * (pt1.y - pt2.y)) / 2;
            return (Math.abs(area));
        }
        isInside(point) {
            var tarea = 0;
            for (var i = 0; i < this.points.length - 1; i++) {
                tarea += this.getTriangleArea(point, this.points[i], this.points[i + 1]);
            }
            this.centroid();
            if (Math.abs(tarea - this.area) < 0.000001) {
                return (true);
            }
            return (false);
        }
    }
    Geometry_1.ClosePathProperty = ClosePathProperty;
    class Triangle {
        constructor(context, startp, midp, endp) {
            this.context = context;
            this._startp = startp;
            this._midp = midp;
            this._endp = endp;
        }
        draw() {
            // the triangle
            context.beginPath();
            context.moveTo(this._startp.x, this._startp.y);
            context.lineTo(this._midp.x, this._midp.y);
            context.lineTo(this._endp.x, this._endp.y);
            context.closePath();
            // the fill color
            context.fillStyle = "#80b1fa";
            context.fill();
        }
    }
    Geometry_1.Triangle = Triangle;
    class Button {
        constructor(context, startp, height, width, arcsize) {
            this.color = "#1468cd";
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
            context.beginPath();
            context.moveTo(this.startp.x + this.arcsize, this.startp.y);
            context.lineTo(this.startp.x + this.width - this.arcsize, this.startp.y);
            context.arcTo(this.startp.x + this.width, this.startp.y, this.startp.x + this.width, this.startp.y + this.arcsize, this.arcsize);
            context.lineTo(this.startp.x + this.width, this.startp.y + this.height - this.arcsize);
            context.arcTo(this.startp.x + this.width, this.startp.y + this.height, this.startp.x + this.width - this.arcsize, this.startp.y + this.height, this.arcsize);
            context.lineTo(this.startp.x + this.arcsize, this.startp.y + this.height);
            context.arcTo(this.startp.x, this.startp.y + this.height, this.startp.x, this.startp.y - this.arcsize, this.arcsize);
            context.lineTo(this.startp.x, this.startp.y + this.arcsize);
            context.arcTo(this.startp.x, this.startp.y, this.startp.x + this.arcsize, this.startp.y, this.arcsize);
            context.lineTo(this.startp.x + this.arcsize, this.startp.y);
            //context.stroke();
            context.fillStyle = this.color;
            context.fill();
        }
        isInside(pt) {
            if (pt.x > this.startp.x && pt.x < (this.startp.x + this.width) && pt.y > this.startp.y && pt.y < (this.startp.y + this.height)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Geometry_1.Button = Button;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=Keyur_geometry.js.map