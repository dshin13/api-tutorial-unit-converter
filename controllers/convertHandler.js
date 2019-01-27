/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var numPattern = /.*?(?=[A-Za-z]*$)/;
    var result = input.toLowerCase().match(numPattern);
    
    if(result[0]=="") return 1;
    else {
      var fractions = result[0].split('/');
      if(fractions.length > 2) return "invalid number";
      else if (fractions.length == 2) return (parseFloat(fractions[0]/fractions[1]));
      else return parseFloat(fractions[0]);
    }
  };
  
  this.getUnit = function(input) {
    var unitPattern = /(?=\d*)[A-Za-z]+$/;
    var result = input.toLowerCase().match(unitPattern);
    
    if(!result){
      return "invalid unit";
    }
    else if(['gal','lbs','mi','l','kg','km'].some(x=> x==result[0])) {
      if (result[0]=='l') return 'L';
      else return result[0];
    }
    else {
      return "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
    }    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
    }    

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum*galToL;
        break;
      case 'lbs':
        result = initNum*lbsToKg;
        break;
      case 'mi':
        result = initNum*miToKm;
        break;
      case 'L':
        result = initNum/galToL;
        break;
      case 'kg':
        result = initNum/lbsToKg;
        break;
      case 'km':
        result = initNum/miToKm;
        break;
      default:
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = parseFloat(initNum.toFixed(5)) + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + parseFloat(returnNum.toFixed(5)) + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
