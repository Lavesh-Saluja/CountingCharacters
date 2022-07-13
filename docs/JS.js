 window.addEventListener('DOMContentLoaded',auto);
        function auto()
        {
            let p=document.getElementById("w3review");
            p.addEventListener('input',count);
        function count()
        {
            let x=document.getElementById("w3review");
            let string=x.value;
            document.getElementById("show").innerHTML=string.length;
            
        }
    }
