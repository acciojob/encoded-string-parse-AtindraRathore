const parseCode = (str) => {
  // your code here
	 let [firstname,lastname,id] = str.split("000");

		console.log(firstname);
		console.log(lastname);
		console.log(id);
	   let obj={
	       firstname:firstname,
	       lastname:lastname,
	       id:id
	   }
	   return obj;
		
};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
