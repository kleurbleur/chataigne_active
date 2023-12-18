

/* ********** GENERAL SCRIPTING **********************

		This templates shows what you can do in this is module script
		All the code outside functions will be executed each time this script is loaded, meaning at file load, when hitting the "reload" button or when saving this file
*/


// You can add custom parameters to use in your script here, they will be replaced each time this script is saved
// var myFloatParam = script.addFloatParameter("My Float Param","Description of my float param",.1,0,1); 		//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1

//Here are all the type of parameters you can create
/*
var myTrigger = script.addTrigger("My Trigger", "Trigger description"); 									//This will add a trigger (button)
var myBoolParam = script.addBoolParameter("My Bool Param","Description of my bool param",false); 			//This will add a boolean parameter (toggle), defaut unchecked
var myFloatParam = script.addFloatParameter("My Float Param","Description of my float param",.1,0,1); 		//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
var myIntParam = script.addIntParameter("My Int Param","Description of my int param",2,0,10); 				//This will add an integer number parameter (stepper), default value of 2, with a range between 0 and 10
var myStringParam = script.addStringParameter("My String Param","Description of my string param", "cool");	//This will add a string parameter (text field), default value is "cool"
var myColorParam = script.addColorParameter("My Color Param","Description of my color param",0xff0000ff); 	//This will add a color parameter (color picker), default value of opaque blue (ARGB)
var myP2DParam = script.addPoint2DParameter("My P2D Param","Description of my p2d param"); 					//This will add a point 2d parameter
var myP3DParam = script.addPoint3DParameter("My P3D Param","Description of my p3d param"); 					//This will add a point 3d parameter
var myTargetParam = script.addTargetParameter("My Target Param","Description of my target param"); 			//This will add a target parameter (to reference another parameter)
var myEnumParam = script.addEnumParameter("My Enum Param","Description of my enum param",					//This will add a enum parameter (dropdown with options)
											"Option 1", 1,													//Each pair of values after the first 2 arguments define an option and its linked data
											"Option 2", 5,												    //First argument of an option is the label (string)
											"Option 3", "banana"											//Second argument is the value, it can be whatever you want
											); 	

var myFileParam = script.addFileParameter("My File Param", "Description of my file param");					//Adds a file parameter to browse for a file. Can have a third argument "directoryMode" 										
*/


//you can also declare custom internal variable
//var myValue = 5;
var result = [0, 0];
var input_0_array = [];
var input_1_array = [];
var input0_diff;
var input1_diff; 
/*
 The init() function will allow you to init everything you want after the script has been checked and loaded
 WARNING it also means that if you change values of your parameters by hand and set their values inside the init() function, they will be reset to this value each time the script is reloaded !
*/
function init()
{
	//myFloatParam.set(5); //The .set() function set the parameter to this value.
	//myColorParam.set([1,.5,1,1]);	//for a color parameter, you need to pass an array with 3 (RGB) or 4 (RGBA) values.
	//myP2DParam.set([1.5,-5]); // for a Point2D parameter, you need to pass 2 values (XY)
	//myP3DParam.set([1.5,2,-3]); // for a Point3D parameter, you need to pass 3 values (XYZ)
}

/*
 This function will be called each time a parameter of your script has changed
*/
function scriptParameterChanged(param)
{
	//You can use the script.log() function to show an information inside the logger panel. To be able to actuallt see it in the logger panel, you will have to turn on "Log" on this script.
	script.log("Parameter changed : "+param.name); //All parameters have "name" property
	if(param.is(myTrigger)) 
	{
		script.log("Trigger !"); //You can check if two variables are the reference to the same parameter or object with the method .is()
		//Here we can for example show a "Ok cancel" box. The result will be called in the messageBoxCallback function below
		//util.showOkCancelBox("myBoxId", "Super warning!", "This is a warning for you", "warning", "Got it","Naaah");
	}
	else if(param.is(myEnumParam))
	{
		script.log("Key = "+param.getKey()+", data = "+param.get()); //The enum parameter has a special function getKey() to get the key associated to the option. .get() will give you the data associated
	}
	else
	{
		script.log("Value is "+param.get()); //All parameters have a get() method that will return their value
	} 
}

/*
 This function, if you declare it, will launch a timer at 50hz, calling this method on each tick
*/
/*
function update(deltaTime)
{
	script.log("Update : "+util.getTime()+", delta = "+deltaTime); //deltaTime is the time between now and last update() call, util.getTime() will give you a timestamp relative to either the launch time of the software, or the start of the computer.
}
*/

/*
 This function, if you declare it, will be called when after a user has made a choice from a okCancel box or YesNoCancel box that you launched from this script 
*/
/*
function messageBoxCallback(id, result)
{
	script.log("Message box callback : "+id+" > "+result); //deltaTime is the time between now and last update() call, util.getTime() will give you a timestamp relative to either the launch time of the software, or the start of the computer.
}
*/

/* ********** FILTER SPECIFIC SCRIPTING **********************

	The "local" variable refers to the object containing the scripts. In this case, the local variable refers to the filter.
	It means that you can access any control inside  this filter by accessing it through its address.
*/

/*
 This function will be called each time the filter is processed, and expects a return value.
 This function only exists because the script is in a filter
 The "inputs" argument is an array of all the parameters that are being filtered. Each element can be either a single value or an array of values itself (if it's a Color or Point 2D/3D for instance)

 The minValues and max Values are arrays of the same size as inputs, containing the value range of the input if applicable 

 If this filter is inside a multiplexed mapping, multiplexIndex is the current index of the multiplex list

 The result must be an array of the same size as the inputValues

*/

var multiplier = script.addFloatParameter("Multiplier", "The multiplication factor to apply to all input values", 1, 0, 10);


// function update(deltaTime)
// {
// script.log("Delta time : " + deltaTime);
// }


function filter(inputs, minValues, maxValues, multiplexIndex)
{
	// script.log("inputs.length = " + inputs.length);

	
	// for(var i = 0; i < inputs.length; i++)
	// {
	// 	result[i] = inputs[i] * multiplier.get(); //Basic multiplication of all the inputs by the script parameter myFloatParam
	// }
	
	// script.log("inputs[0] = " + inputs[0]);
	// script.log("inputs[1] = " + inputs[1]);
	// script.log("result 1 before= " + result[0]);
	// script.log("result 2 before= " + result[1]);

	if (input_0_array.length == 2) {
		input_0_array[0] = input_0_array[1];
		input_0_array.splice(1, 1);
		input_0_array.push(inputs[0]);
		script.log("input_0_array.lenth = " + input_0_array.length);
		script.log("input_0_array[0] = " + input_0_array[0]);
		script.log("input_0_array[1] = " + input_0_array[1]);	
	} else {
		input_0_array.push(inputs[0]);
		script.log("input_0_array.lenth = " + input_0_array.length);
		script.log("input_0_array[0] = " + input_0_array[0]);
		script.log("input_0_array[1] = " + input_0_array[1]);	
	}
	if (input_1_array.length == 2) {
		input_1_array[0] = input_1_array[1];
		input_1_array.splice(1, 1);
		input_1_array.push(inputs[1]);
		script.log("input_1_array.lenth = " + input_1_array.length);
		script.log("input_1_array[0] = " + input_1_array[0]);
		script.log("input_1_array[1] = " + input_1_array[1]);	
	} else {
		input_1_array.push(inputs[1]);
		script.log("input_1_array.lenth = " + input_1_array.length);
		script.log("input_1_array[0] = " + input_1_array[0]);
		script.log("input_1_array[1] = " + input_1_array[1]);	
	}


	if (input_0_array[0] != input_0_array[1]) {
		script.log("Array 0 not the same!");
		input0_diff = false;
	} else {
		script.log("Array 0 SAME");
		input0_diff = true;
	}	
	if (input_1_array[0] != input_1_array[1]) {
		script.log("Array 1 not the same!");
		input1_diff = false;
	} else {
		script.log("Array 1 SAME");
		input1_diff = true;
	}

	if (input0_diff === true && input1_diff === false) {
		script.log("INPUT TWO");
		result[0] = inputs[1];
	}
	else if (input0_diff === false && input1_diff === true) {
		script.log("INPUT ONE");
		result[0] = inputs[0];
	}




    
	
	script.log("result 1 = " + result[0]);
	script.log("result 2 = " + result[1]);
	
	return result;
}
