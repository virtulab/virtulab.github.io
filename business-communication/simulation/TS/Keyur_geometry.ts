namespace Geometry {   
    export class Point {   
        public x: number;   
        public y: number;

        constructor(x: number,y: number) {   
            this.x = x;
            this.y = y;
        }
    }

    export class Img{
        private context: CanvasRenderingContext2D;

        constructor(context: CanvasRenderingContext2D,) {
            this.context = context;
        }

        draw(source: string, sp: number, ep: number, w: number, h: number) {    
            var img = new Image();
            img.src = source;
            img.onload = function() {
                context.drawImage(img, sp, ep, w, h);
            }
        }
    }

    export class Rectangle {
        private _startp: Point;
        private _width: number;
        private _height: number;
        private _len: number = 1; 
        private _color: string;
        private _colorpass: boolean = false;
        private context: CanvasRenderingContext2D;
        private cornerRadius = 50;

        constructor(context: CanvasRenderingContext2D, startp: Point, width: number, height: number) {
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
            
            if(this._colorpass) {
                context.fillStyle = this._color;
                context.fill();
            }

            this._colorpass = false;
        }

        isInside(pt: Point): boolean {
            if(pt.x > this._startp.x && pt.x < (this._startp.x + this._width) && pt.y > this._startp.y && pt.y < (this._startp.y + this._height)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    export class RecteRound {
        private context: CanvasRenderingContext2D;
        private startp: Point;
        private height: number;
        private width: number;
        private csize: number;

        constructor(context: CanvasRenderingContext2D, startp: Point, height: number, width: number, csize: number) {
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
            context.quadraticCurveTo(this.startp.x - this.csize -  this.csize, this.startp.y, this.startp.x - this.csize, this.startp.y);
            context.fillStyle = "#80b1fa";  
            context.fill();
        }
    }

    export class ClosePath {
        public x: number;
        public y: number;
        public points: Point[];
        public context: CanvasRenderingContext2D;
        public color;
        
        constructor(context: CanvasRenderingContext2D, points: Point[]) {
            this.points = points;
            this.context = context;
            this.color = "#80b1fa";
        }
      
        draw() {
            this.context.beginPath();
            this.context.moveTo(this.points[0].x, this.points[0].y);

            for(let i=0; i<this.points.length; i++) {
                this.context.lineTo(this.points[i].x, this.points[i].y);
            }
            this.context.closePath();
            if(changecolor)
                this.context.fillStyle = "#1468cd";
            else
                this.context.fillStyle = this.color;
            this.context.fill();
        }
    }

    export class Ellipse extends ClosePath
    {
        public majorX: number;
        public minorY: number;
        public startPoint: Point;

        constructor(context: CanvasRenderingContext2D, point: Point, majorX: number, minorY: number) {
            super(context, []);
            this.majorX = majorX;
            this.minorY = minorY;
            this.startPoint = point;
        }

        cal() {
            this.points = [];
            for(let i=0; i<=360; i++) {
                let x1 = this.majorX *  Math.cos(i * Math.PI / 180) + this.startPoint.x;
                let y1 = this.minorY *  Math.sin(i * Math.PI / 180) + this.startPoint.y;
                this.points.push(new Point(x1, y1));
            }
        }

        draw() {
            this.cal();
            super.draw();
        }
    }

    export class ClosePathProperty  {
        public cx: number;
        public cy: number;
        public area: number;
        public points: Point[];
        public context: CanvasRenderingContext2D;
        public color;
        
        constructor(Geometry: ClosePath) {
            this.points = Geometry.points; 
        }
        
        private centroid() {
            let area = 0;
            let cx = 0;
            let cy = 0;
            let a = 0;
            
            for (let i=0; i<this.points.length - 1; i++) {
                a = this.points[i].x * this.points[i + 1].y - this.points[i + 1].x * this.points[i].y;
                cx += (this.points[i].x + this.points[i + 1].x)*a;
                cy += (this.points[i].y + this.points[i + 1].y) * a;
                area += a;
            }
            this.area = area / 2;
            this.cx = cx / (6 * area/2);
            this.cy = cy / (6 * area / 2);
        }

        public getcentroid(): Point {
            this.centroid();
            return (new Point(this.cx, this.cy));
        }

        public getarea(): number {
            this.centroid();
            return (this.area);
        }

        getTriangleArea(pt1: Point, pt2: Point, pt3: Point): number {
            var area = (pt1.x * (pt2.y - pt3.y) + pt2.x * (pt3.y - pt1.y) + pt3.x * (pt1.y - pt2.y)) / 2;
            return (Math.abs(area));
        }

        isInside(point: Point): boolean {
            var tarea = 0;
            for (var i = 0; i < this.points.length - 1; i++) {
                tarea += this.getTriangleArea(point, this.points[i], this.points[i + 1]);
            }
            this.centroid();

            if (Math.abs(tarea - this.area)<0.000001) {
                return (true);
            }
            return (false);
        }
    }

    export class Triangle {   
        private context: CanvasRenderingContext2D;
        private _startp: Point;
        private _endp: Point;
        private _midp: Point;
        
        constructor( context: CanvasRenderingContext2D, startp: Point, midp: Point, endp: Point) {
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
            if(changecolor)
                this.context.fillStyle = "#1468cd";
            else
                this.context.fillStyle = "#80b1fa";
            context.fill()
        }
    }

    export class Button {
        private context: CanvasRenderingContext2D;
        private startp: Point;
        private height: number;
        private width: number;
        private arcsize: number;
        private color: string = "#80b1fa";

        constructor(context: CanvasRenderingContext2D, startp: Point, height: number, width: number, arcsize: number) {
            this.context = context;
            this.startp = startp;
            this.height = height;
            this.width = width;
            this.arcsize = arcsize;
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
            if(changecolor)
                context.fillStyle = "#1468cd";
            else
                context.fillStyle = this.color;
            context.fill();
        }

        isInside(pt: Point): boolean {
            if(pt.x > this.startp.x && pt.x < (this.startp.x + this.width) && pt.y > this.startp.y && pt.y < (this.startp.y + this.height)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}