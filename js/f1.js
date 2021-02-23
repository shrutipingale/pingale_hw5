class square
{
    constructor(side)
    {
        this.side=side;
        this.describe();
    }
    perimeter(side)
    {
        return 4 * this.side;
    }
    area(side)
    {
        return this.side*this.side;
    }
    diagonal(side)
    {
        return Math.sqrt(2 * this.side*this.side);
    }
    describe()
    {
        let perimeter = this.perimeter();
        let area = this.area();
        let diagonal = this.diagonal();
        return "Square with side " + perimeter + " area of " + area + ", and diagonal of " + diagonal;
    
    }
}
const squareclass1 = new square(2);
console.log(squareclass1.describe());
const squareclass2 = new square(6);
console.log(squareclass2.describe());
const squareclass3 = new square(4);
console.log(squareclass3.describe());