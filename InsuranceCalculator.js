var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator() {
    }
    /*private basePremium: number;

    constructor(basePremium: number) {
        this.basePremium = basePremium;
    }
*/
    InsuranceCalculator.prototype.calculatePremium = function (age, gender, healthStatus, coverageType) {
        var premium = 500;
        if (age < 25) {
            premium *= 1.2;
        }
        else if (age >= 45) {
            premium *= 1.3;
        }
        if (gender === 'male') {
            premium *= 1.1;
        }
        if (healthStatus === 'average') {
            premium *= 1.2;
        }
        else if (healthStatus === 'poor') {
            premium *= 1.5;
        }
        if (coverageType === 'comprehensive') {
            premium *= 1.5;
        }
        return premium;
    };
    return InsuranceCalculator;
}());
var calculator = new InsuranceCalculator();
var age = 30;
var gender = 'male';
var healthStatus = 'average';
var coverageType = 'comprehensive';
var premium = calculator.calculatePremium(age, gender, healthStatus, coverageType);
console.log("The calculated insurance premium is: ".concat(premium.toFixed(2)));
