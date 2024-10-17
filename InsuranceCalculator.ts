class InsuranceCalculator {
    
    public calculatePremium(age: number, gender: string, healthStatus: string, coverageType: string): number {
    
        let premium = 500;

      
        if (age < 25) {
            premium *= 1.2; 
        } else if (age >= 45) {
            premium *= 1.3; 
        }


        if (gender === 'male') {
            premium *= 1.1; 
        }

       
        if (healthStatus === 'average') {
            premium *= 1.2; 
        } else if (healthStatus === 'poor') {
            premium *= 1.5; 
        }

      
        if (coverageType === 'comprehensive') {
            premium *= 1.5;
        }

        return premium;
    }
}


const calculator = new InsuranceCalculator(); 

const age = 30;
const gender = 'male';
const healthStatus = 'average';
const coverageType = 'comprehensive';

const premium = calculator.calculatePremium(age, gender, healthStatus, coverageType);
console.log(`The calculated insurance premium is: ${premium.toFixed(2)}`);
