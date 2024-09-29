function openPage()
        {
            var x = document.getElementById("vethuku").value;

            if (x === "rice" || x==="Rice")
            {
                window.open("rice.html");
            }
            if (x === "wheat" || x=="Wheat")
            {
                window.open("wheat.html");
            }
            if (x === "Maize" || x === "maize")
            {
                window.open("maize.html");
            }
            if (x === "cotton" || x === "Cotton")
            {
                window.open("cotton.html");
            }
            if (x === "muskmelon" || x === "Muskmelon")
            {
                window.open("muskmelon.html");
            }
            else
            {
                alert("PRODUCT NOT FOUND !!!...")
            }
        }

