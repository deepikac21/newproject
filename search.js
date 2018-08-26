
function searchkey(){
	var text=document.search.txt.value;
  	var key=document.search.keyword.value;
	var count=0;
	var flag;
	if(text=="" || key=="")
	{
		alert("blank field");
		return false;
	}
	
	text=text.toLowerCase();
	key=key.toLowerCase()
	for(var i=0;i<text.length;i++)
	{
		flag=0;	
		if(text.charAt(i)==key.charAt(0))
		{
			for(var j=0;j<key.length;j++)
			{
				if(text.charAt(i)!=key.charAt(j))
				{
					flag=1;
					break;
				}
				i++;
			}
			i--;
			if(flag==0)
				count++;
		}
	}
	if(count==0)
		document.write("Keyword not found");
	else
		document.write(key+" has occurred "+count+" times");
}



