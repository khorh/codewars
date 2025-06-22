/**
 * BMI
 * @param {number} height 
 * @param {number} weight 
 * @returns {number} bmi calculation to one decimal place
 */
const bmi = (height, weight) => {
    const bmiCalculation = (weight / Math.pow(height, 2)).toFixed(1);
    return parseFloat(bmiCalculation);
};

/**
 * BMI Statement
 * @param {number} myBmi 
 * @returns {string} the statement associated with bmi calculation
 */
const bmiStatement = (myBmi) => {
    if (myBmi <= 0) {
        return "BMI - Invalid input";
    } else if (myBmi <= 18.4) {
        return "BMI - Underweight";
    } else if (myBmi <= 22.9) {
        return "BMI - Healthy";
    } else if (myBmi <= 27.4) {
        return "BMI - Overweight";
    } else if (myBmi >= 27.5) {
        return "BMI - Obese";
    } else {
        return "BMI - Please provide input";
    }
};

// My BMI Tests
const myBmi = bmi(1.58, 57.4);
console.log(myBmi);
console.log(typeof myBmi);
console.log(bmiStatement(myBmi));

// BMI Statement Tests
console.log(bmiStatement(0));
console.log(bmiStatement(18.4));
console.log(bmiStatement(22.9));
console.log(bmiStatement(27.4));
console.log(bmiStatement(27.5));

/**
 * Waist Height Ratio
 * @param {number} waist 
 * @param {number} height 
 * @returns {number} waist height ratio to whole number
 */
const waistHeightRatio = (waist, height) => {
    const waistHeightRatioCalculation = (waist / height).toFixed(0);
    return parseFloat(waistHeightRatioCalculation);
};

/**
 * Waist Height Ratio Statement
 * @param {string} sex 
 * @param {number} myWaistHeightRatio 
 * @returns {string} the statement associated with the waist height ratio
 */
const waistHeightRatioStatement = (sex, myWaistHeightRatio) => {
    if (sex === "male" && myWaistHeightRatio < 35) {
        return "Waist Height Ratio - Underweight";
    } else if (sex === "male" && myWaistHeightRatio <53) {
        return "Waist Height Ratio - Healthy";
    } else if (sex === "male" && myWaistHeightRatio <58) {
        return "Waist Height Ratio - Overweight";
    } else if (sex === "male" && myWaistHeightRatio >= 58) {
        return "Waist Height Ratio - Obese";
    } else if (sex === "female" && myWaistHeightRatio < 35) {
        return "Waist Height Ratio - Underweight";
    } else if (sex === "female" && myWaistHeightRatio <49) {
        return "Waist Height Ratio - Healthy";
    } else if (sex === "female" && myWaistHeightRatio <54) {
        return "Waist Height Ratio - Overweight";
    } else if (sex === "female" && myWaistHeightRatio >= 54) {
        return "Waist Height Ratio - Obese";
    } else {
        return "Waist Height Ratio - Please provide sex and or waist height ratio"
    };
};

// My Waist Height Ratio Tests
const myWaistHeightRatio = waistHeightRatio(81, 1.58);
console.log(myWaistHeightRatio);
console.log(typeof myWaistHeightRatio);
console.log(waistHeightRatioStatement("female", myWaistHeightRatio));

// Waist Height Ratio Statement Tests
console.log(waistHeightRatioStatement());
console.log(waistHeightRatioStatement("hybrid", 1));
console.log(waistHeightRatioStatement("male", 34));
console.log(waistHeightRatioStatement("male", 52));
console.log(waistHeightRatioStatement("male", 57));
console.log(waistHeightRatioStatement("male", 58));
console.log(waistHeightRatioStatement("female", 34));
console.log(waistHeightRatioStatement("female", 48));
console.log(waistHeightRatioStatement("female", 53));
console.log(waistHeightRatioStatement("female", 54));

/**
 * Resting Heart Rate
 * @param {number} myRestingHeartRate 
 * @returns {string} the statement associated with the resting heart rate
 */
const restingHeartRate = (myRestingHeartRate) => {
    if (myRestingHeartRate <= 0) {
        return "Resting Heart Rate - Invalid input"
    } else if (myRestingHeartRate < 60) {
        return "Resting Heart Rate - Below Normal"
    } else if (myRestingHeartRate <= 100) {
        return "Resting Heart Rate - Normal";
    } else if (myRestingHeartRate <= 119) {
        return "Resting Heart Rate - Elevated";
    } else if (myRestingHeartRate >= 120) {
        return "Resting Heart Rate - Very high";
    } else {
        return "Resting Heart Rate - Please provide resting heart rate";
    };
};

// Resting Heart Rate Tests
const myRestingHeartRate = 52;
console.log(restingHeartRate(myRestingHeartRate));
console.log(typeof restingHeartRate(myRestingHeartRate));

console.log(restingHeartRate(0));
console.log(restingHeartRate(59));
console.log(restingHeartRate(100));
console.log(restingHeartRate(119));
console.log(restingHeartRate(120));
console.log(restingHeartRate());


const totalCholesterol = (myTotalCholestrol) => {
    if (myTotalCholestrol <= 0) {
        return "Total Cholesterol - Invalid input";
    } else if (myTotalCholestrol <= 5.01) {
        return "Total Cholesterol - Desirable";
    } else if (myTotalCholestrol < 6) {
        return "Total Cholesterol - Target";
    } else {
        return "Total Cholesterol - Please provide total cholesterol";
    };
};

// CHOLESTEROL
const myTotalCholestrol = 5.62;
console.log(totalCholesterol(myTotalCholestrol));
console.log(typeof totalCholesterol(myTotalCholestrol));

const hdlCholesterol = (sex, myHdlCholesterol) => {
    if (sex === "male" && myHdlCholesterol < 1) {
        return "Poor";
    } else if (sex === "male" && myHdlCholesterol >= 1) {
        return "Ideal";
    } else if (sex === "female" && myHdlCholesterol <1.2) {
        return "Poor";
    } else if (sex === "female" && myHdlCholesterol >= 1.2) {
        return "Ideal"
    } else {
        return "No sex and or HDL cholesterol information";
    }
};

const myHdlCholesterol = 1.71;
console.log(hdlCholesterol("female", myHdlCholesterol));

const totalDividedByHdlCholesterol = (myTotalDividedByHdlCholesterol) => {
    if (myTotalDividedByHdlCholesterol <= 0) {
        return "Invalid input";
    } else if (myTotalDividedByHdlCholesterol < 4.5) {
        return "Target";
    } else if (myTotalDividedByHdlCholesterol < 6) {
        return "";
    }
}

// const totalDividedByHdlCholesterol = myTotalCholestrol/myHdlCholesterol;
// console.log(totalDividedByHdlCholesterol);

const bloodGlucose = (myBloodGlucose, fasting) => {
    if (fasting) {
        if (myBloodGlucose <= 0) {
            return "Blood glucose - Invalid input";
        } else if (myBloodGlucose <= 5.4) {
            return "Blood glucose indicates no diabetes";
        } else {
            return "Blood glucose indicates potential risk of diabetes, please check";
        };
    } else if (!fasting) {
        if (myBloodGlucose <= 0) {
            return "Blood glucose - Invalid input";
        } else if (myBloodGlucose <= 7.8) {
            return "Blood glucose indicates no diabetes";
        } else {
            return "Blood glucose indicates potential risk of diabetes, please check";
        };
    } else {
        return "Invalid fasting input";
    };
};

console.log(bloodGlucose(7.9, false));