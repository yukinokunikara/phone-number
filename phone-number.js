1	// Returns true when the given string has the correct format of a phone number:
2	// '(XXX) XXX-XXXX' or '(XXX)XXX-XXXX' or 'XXX-XXX-XXXX' or 'XXXXXXXXXX'. Returns false otherwise.
3	// @param phoneNumberInputString a given string to check.
4	function checkPhoneNumber(phoneNumberInputString) {
5	    // TODO: Add RegExp pattern here.
6	    const regex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
7	    // TODO: Finish the right side of the next line. Do not change anything else.
8	    let result = regex.test(phoneNumberInputString);
9	    return result;
10	  }
11	  
12	  checkPhoneNumber('(949) 111-1111'); // Should return true.
13	  checkPhoneNumber('(949)111-1111'); // Should return true.
14	  checkPhoneNumber('949-111-1111'); // Should return true.
15	  checkPhoneNumber('9491111111'); // Should return true.
16	  checkPhoneNumber('94911111111'); // Should return false.
17	  checkPhoneNumber(''); // Should return false.
18	  
19	  // DO NOT CHANGE ANYTHING AFTER THIS LINE.
20	  module.exports = checkPhoneNumber;
