  
  var div;
  var generate=document.getElementById("generate");
  var counter = 1;
  generate.addEventListener("click",function GenerateButton(e)
   {

   var number=document.getElementById("number").value;
   var randomNumber=Math.floor(Math.random() *number);
     console.log(randomNumber);
  // randomNumber.value="hello";

   for(var i=0;i<number;i++)
      { 
        generate.setAttribute('disabled', 'true');
     div = document.createElement("div");
      div.className="divStyle"; 
      var x = div.id=i;
      if(i==randomNumber)
      {
        var giftImage = document.createElement("img");
        giftImage.setAttribute("id","heading-style");
      giftImage.setAttribute("src", "source.gif");
      giftImage.setAttribute("height", "100px");
      giftImage.setAttribute("width", "100px");
      giftImage.setAttribute("alt", "GIF");
      div.appendChild(giftImage);
      
      }
     div.onclick=SrearchGift;
      document.body.appendChild(div);

      }
      function SrearchGift(e){
           if(e.target.id == randomNumber)
           {

             alert("You Win in "+ counter +" Steps");
             var showcontent = document.getElementById('heading-style');
             showcontent.style.display = 'block';

           }
           else
           counter++;
        }

    
   
	})