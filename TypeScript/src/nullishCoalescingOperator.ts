let userTheme = undefined;

const selectedTheme = userTheme ?? "default"; //if value is null or undefined then default value will be selected else actual value will be selected. 
//If empty string , also will not work.

console.log(selectedTheme);