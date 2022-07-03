
	var contents=new Array()
		contents[0]='<a href="https://ica.se/"><img border="0" src="pics/voyado.png"></a>'
		contents[1]='<a href="https://datatjej.se/"><img border="0" src="pics/Saab.png"></a>'
		
	var i=0
	//variable used to contain controlled random number 
	var random
	var spacing="<br>"
	//while all of array elements haven't been cycled thru
		while (i<contents.length){
			//generate random num between 0 and arraylength-1
			random=Math.floor(Math.random()*contents.length)
			//if element hasn't been marked as "selected"
			if (contents[random]!="selected"){
				document.write(contents[random])
				//mark element as selected
				contents[random]="selected"
				i++
			}
		}
	