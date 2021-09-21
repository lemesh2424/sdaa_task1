export class Point {
    private x: number;
    private y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            this.x = 0;
            this.y = 0;
            return;
        }

        this.x = x;
        this.y = y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    public distance(): number;
    public distance(other: Point): number;
    public distance(x: number, y: number): number;
    public distance(pointOrNumber?: Point | number, y?: number) {
        if (pointOrNumber instanceof Point) {
            return this.calculateDistance(pointOrNumber.x, pointOrNumber.y);
        }

        if (pointOrNumber && y) {
            return this.calculateDistance(pointOrNumber, y);
        }

        return this.calculateDistance(0, 0);
    }

    private calculateDistance(x: number, y: number) {
        const xDistance = x - this.x;
        const yDistance = y - this.y;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    
}
