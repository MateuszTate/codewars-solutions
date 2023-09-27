function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    switch (rating) {
        case "excellent":
            return Math.ceil(amount*0.2); // ceil rounds number to its nearest integer in an upward direction
        case "great":
            return Math.ceil(amount*0.15);
        case "good":
            return Math.ceil(amount*0.1);
        case "poor":
            return Math.ceil(amount*0.05);
        case "terrible":
            return 0;
        default:
            return "Rating not recognised";
    }
}

console.log(calculateTip(26.95, "good"));