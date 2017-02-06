console.log('@treedbox');

//get elements
let file = document.querySelector('.file');
let section = document.querySelector('section');

function base64(getFile) {
  //create a file reader
   let reader = new FileReader();
   //get file as data url base64
   reader.readAsDataURL(getFile);
   //on load reader
   reader.onload = () => {
     //create a textarea element
     let textarea = document.createElement('textarea');
     //set the reader result as textarea content
     textarea.textContent = reader.result;
     //apped textarea as child of section
     section.appendChild(textarea);
     //create an A element
     let a = document.createElement('a');
     //set the reader result as A href
     a.href = reader.result;
     //set file name to text A
     a.textContent = `Link to ${getFile.name} base64`;
     //set target to a new window/tab
     a.setAttribute('target', '_blank')
     //apped A element as child of section
     section.appendChild(a);
   };
   reader.onerror = error => console.log('Error: ', error);
}
function onChange(){
	//get FileList
	let fileList = file.files;
	//for each file in files
	for (let i = 0; i < fileList.length; i++) {
    //call base64 function and pass a file
		base64(fileList[i]);
    console.log(fileList[i]);
	};
}
//listen change input file
file.addEventListener('change', onChange);

function onClick(e){
  //if click in textarea element
  if (e.target.type == 'textarea') {
  //select all the base64 code
  document.execCommand('selectAll');
  }
}
//listener click
section.addEventListener('click', onClick, false);
