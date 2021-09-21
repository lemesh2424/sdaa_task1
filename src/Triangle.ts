import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {
    private point1: Point;
    private point2: Point;
    private point3: Point;

    constructor(point1: Point, point2: Point, point3: Point);
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean);
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        if (!color && typeof filled !== 'boolean') {
            super([point1, point2, point3]);
        }

        super([point1, point2, point3], color, filled);

        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    public toString(): string {
        return `Triangle[v1=${this.point1.toString()},v2=${this.point2.toString()},v3=${this.point3.toString()}]`;
    }

    getType(): string {
        const abDistance = this.point1.distance(this.point2);
        const bcDistance = this.point2.distance(this.point3);
        const acDistance = this.point3.distance(this.point1);

        console.log(abDistance, bcDistance, acDistance);

        if (this.isEqual(abDistance, bcDistance) && this.isEqual(bcDistance, acDistance)) {
            return 'equilateral triangle';
        }

        if (this.isEqual(abDistance, bcDistance) || this.isEqual(abDistance, acDistance) || this.isEqual(bcDistance, acDistance)) {
            return 'isosceles triangle';
        }

        return 'scalene triangle';
    }

    private isEqual(a: number, b: number): boolean {
        return +a.toFixed(2) === +b.toFixed(2);
    }
}
