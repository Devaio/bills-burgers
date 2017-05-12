var Menu = (function () {
    class Hamburger {
        
        constructor(burgerInfo) {
            this.name = burgerInfo.name; // for logging purposes

            this.roll = burgerInfo.roll || 'Kaiser'; // basic default values
            this.meat = burgerInfo.meat || 'Beef Patty'; // basic default values
            this.price = burgerInfo.price || 6.50; // basic default values
        }

        addAdditional(name, price) {
            price = price || 0;
            if(!name) return 'Please specify what you would like to add!'

            this.additions = this.additions || [];

            if(this.additions.length < this.constructor.maxAdditions){
                this.additions.push({
                    name: name,
                    price: price
                });
                return `${name} was added to your ${this.name} for $${price}!`
            }
            else{
                return `Sorry we couldn't add ${name} -mMax number of additions (${this.constructor.maxAdditions}) allowed!`
            }
        }

        totalPrice(){
            this.additions = this.additions || [];
            let grandTotal = this.price; // start grandTotal at the base price of the burger

            // construct strings for logging
            let additions = this.additions.map((addition)=>{
                grandTotal += addition.price; // add the prices of additions to the burger
                return `${addition.name} ----- ${addition.price}`
            });

            return(
                `\n${this.name} ----- ${this.price}` +
                    `\n    ${this.roll}` + 
                    `\n    ${this.meat}` +
                `\n${additions.join('\n')}` +
                `\nTOTAL ----- ${grandTotal}\n`
            )
        }

    }
    Hamburger.maxAdditions = 4; // static property on class


    class HealthyBurger extends Hamburger{
        constructor(healthyInfo){
            healthyInfo.roll = 'Brown Rye'; // override roll in case it was passed in
            super(healthyInfo);
        }
    }
    HealthyBurger.maxAdditions = 6;


    class DeluxeBurger extends Hamburger{
        constructor(deluxeInfo){
            super(deluxeInfo);
            this.addAdditional('Drink', 0); // included in the price
            this.addAdditional('Chips', 0); // included in the price
            
        }
    }
    DeluxeBurger.maxAdditions = 2;

    return {
        Hamburger : Hamburger,
        HealthyBurger : HealthyBurger,
        DeluxeBurger : DeluxeBurger
    }
    
    
})();

var ham = new Menu.Hamburger({name : 'Normal Burger', roll : 'Kaiser Roll', meat : 'Beef Patty', price : 6.50});
var hel = new Menu.HealthyBurger({name : 'Healthy Burger', meat : 'Black Bean Patty', price : 8.65});
var del = new Menu.DeluxeBurger({name : 'Deluxe Burger', roll : 'Kaiser Roll', meat : 'Black Bean Patty', price : 8.65});

console.log('\n======== Normal Burger ========');
console.log('--Before Additions--');
console.log(ham.totalPrice());
console.log(ham.addAdditional('cheese', 1.50));
console.log(ham.addAdditional('lettuce', 0.50));
console.log(ham.addAdditional('tomato', 0.50));
console.log(ham.addAdditional('carrot', 0.75));
console.log(ham.addAdditional('onion', 1.25));
console.log('--After Additions--');
console.log(ham.totalPrice());

console.log('\n======== Healthy Burger ========');
console.log('--Before Additions--');
console.log(hel.totalPrice());
console.log(hel.addAdditional('cheese', 1.50));
console.log(hel.addAdditional('lettuce', 0.50));
console.log(hel.addAdditional('tomato', 0.50));
console.log(hel.addAdditional('carrot', 0.75));
console.log(hel.addAdditional('onion', 1.25));
console.log('--After Additions--');
console.log(hel.totalPrice());

console.log('\n======== Deluxe Burger ========');
console.log('--Before Additions--');
console.log(del.totalPrice());
console.log(del.addAdditional('cheese', 1.50));
console.log(del.addAdditional('lettuce', 0.50));
console.log(del.addAdditional('tomato', 0.50));
console.log(del.addAdditional('carrot', 0.75));
console.log(del.addAdditional('onion', 1.25));
console.log('--After Additions--');
console.log(del.totalPrice());
