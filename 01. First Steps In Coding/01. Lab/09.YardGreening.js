function yardGreening(squareMeters) {
    let pricePerSquareMeter = 7.61;
    let totalPrice = squareMeters * pricePerSquareMeter;
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}