function pow(){
        let num = parseFloat(document.getElementById('number').value);
        let pow = +document.getElementById('power').value;
        document.getElementById('powResult').innerHTML = 'Result:'+power(num, pow);
    }
    function power(num,pow){
        let result;
       if( pow < 0){
          let result = 1;
          for (let i = 0; i < -pow; i++){
               result *= num;
          }
          return 1 / result;
       }else if(pow === 0){
           return pow+1;
       }else if(pow === 1){
           return num;
       }else if(pow > 0){
           result = num;
           for(let i=1;i<pow;i++){
               result *= num;
           }
           return result;
       }
    }
    function checkLeapYear() {
        const yearInput = +document.getElementById('yearInput').value;
        const resultElement = document.getElementById('LeapYear');
        if (isNaN(yearInput)) {
            resultElement.innerHTML = 'Please enter a valid year.';
        } else if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || yearInput % 400 === 0) {
            resultElement.innerHTML = yearInput + ' is a leap year.';
        } else {
            resultElement.innerHTML = yearInput + ' is not a leap year.';
        }
    }
    function calculateArea() {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        document.getElementById('areaResult').innerHTML = 'Area of the triangle: ' + area;
    }
    function calculateMarks() {
        const subject1 = parseFloat(document.getElementById('subject1').value);
        const subject2 = parseFloat(document.getElementById('subject2').value);
        const subject3 = parseFloat(document.getElementById('subject3').value);

        const average = (subject1 + subject2 + subject3) / 3;
        const percentage = ((subject1 + subject2 + subject3) / 300) * 100;

        document.getElementById('marksResult').innerHTML = 'Average: ' + average + ' | Percentage: ' + percentage + '%';
    }
    function customIndexOf() {
        let str = document.getElementById('string').value;
        let char = document.getElementById('char').value;
        if(str.indexOf(char)===-1) {
            document.getElementById('charResult').innerHTML = 'You character is not found';
        }else{
            document.getElementById('charResult').innerHTML = 'You character ' + char + ' is found at position:' + str.indexOf(char);
        }
    }
    function deleteVowels() {
        const sentence = document.getElementById('sentence').value;
        const result = deleteVowelsFromSentence(sentence);
        document.getElementById('vowelsResult').innerHTML = 'Result: ' + result;
    }
    function deleteVowelsFromSentence(sentence) {
        return sentence.replace(/[aeiouAEIOU]/g, '');
    }
    function countSuccessiveVowels() {
        const text = document.getElementById('text').value;
        const count = countSuccessiveVowelsInText(text);
        document.getElementById('successiveVowelsResult').innerHTML = 'Count of successive vowels: ' + count;
    }
    function countSuccessiveVowelsInText(text) {
        let count = 0;
        for (let i = 0; i < text.length - 1; i++) {
            if (isVowel(text[i]) && isVowel(text[i + 1])) {
                count++;
            }
        }
        return count;
    }

    function isVowel(char) {
        return /[aeiouAEIOU]/.test(char);
    }
    function convertDistance() {
        const distanceInKm = parseFloat(document.getElementById('distanceInKm').value);
        const result = convertDistanceUnits(distanceInKm);
        document.getElementById('distanceResult').innerHTML = 'Distance in meters: ' + result.meters + ' | Distance in feet: ' + result.feet + ' | Distance in inches: ' + result.inches + ' | Distance in centimeters: ' + result.centimeters;
    }
    function convertDistanceUnits(distanceInKm) {
        const meters = distanceInKm * 1000;
        const feet = distanceInKm * 3280.84;
        const inches = distanceInKm * 39370.1;
        const centimeters = distanceInKm * 100000;
        return { meters, feet, inches, centimeters };
    }
    function calculateOvertimePay() {
        const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
        const overtimePay = calculateOvertime(hoursWorked);
        document.getElementById('overtimeResult').innerHTML = 'Overtime pay: Rs. ' + overtimePay;
    }
    function calculateOvertime(hoursWorked) {
        const regularHours = 40;
        const hourlyRate = 12.00;
        if (hoursWorked > regularHours) {
            const overtimeHours = hoursWorked - regularHours;
            return overtimeHours * hourlyRate;
        } else {
            return 0;
        }
    }
    function calculateCurrencyNotes() {
        const withdrawalAmount = parseFloat(document.getElementById('withdrawalAmount').value);
        if (isNaN(withdrawalAmount)) {
            document.getElementById('notesResult').innerHTML = 'Please enter a valid amount.';
            return;
        }
        const hundredRemainder = withdrawalAmount%100;
        const hundred = (withdrawalAmount-hundredRemainder)/100;
        const fiftyRemainder = hundredRemainder%50;
        const fifty = (hundredRemainder - fiftyRemainder)/50;
        const ten = Math.floor(fiftyRemainder/10);
        document.getElementById('notesResult').innerHTML = `You have 100: ${hundred} note(s) 50: ${fifty} note(s) 10: ${ten} note(s)`;
    }
