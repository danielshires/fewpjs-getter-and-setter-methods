// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    set diameter(num) {
        this.radius = num / 2
    }
    set circumference(num) {
        this.radius = (num / Math.PI) / 2
    }
    set area(num) {
        this.radius = Math.sqrt(num / Math.PI)
    }
}

let circle = new Circle("2")
circle.diameter = 2
circle.circumference = 100
console.log(circle.circumference)