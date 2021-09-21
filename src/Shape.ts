import { Point } from "./Point";

const DEFAULT_COLOR = 'green';
const DEFAULT_FILLING = true;

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    private points: Point[];

    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points: Point[], color?: string, filled?: boolean) {
        if (points.length < 3) {
            throw new Error(`Current number of points: ${points.length}. Needs 3 or more points.`)
        }

        this.points = points;
        this.color = color || DEFAULT_COLOR;
        this.filled = typeof filled !== 'boolean'
            ? DEFAULT_FILLING
            : filled;
    }

    private isFilled(): string {
        return this.filled ? 'filled' : 'not filled';
    }

    private pointsToString(): string {
        return this.points.map((point) => point.toString()).join(', ');
    }

    public toString(): string {
        return `A Shape with color of ${this.color} and ${this.isFilled()}. Points: ${this.pointsToString()}.`;
    }

    public getPerimeter(): number {
        let distance = 0;

        for (let i = 0; i < this.points.length - 1; i++) {
            distance += this.points[i].distance(this.points[i + 1]);
        }

        distance += this.points[this.points.length - 1].distance(this.points[0]);

        return distance;
    }

    abstract getType(): string;
}
