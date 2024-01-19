document.addEventListener("DOMContentLoaded", function () {
    const Order= document.getElementById("Order");
    const submit=document.getElementById("submit")

    let userName = "";
    let userMobile = "";
    let cupNumber = "";

    function updateInfo(data) {
        userName += data;
        console.log(`Updated ${userName}`);
    }

    submit.addEventListener("click", function () {
        userName = document.getElementById("name-input").value;
        userMobile = document.getElementById("phone-number").value;
        cupNumber = document.getElementById("number-of-cups").value;

        updateInfo(userName);
        updateInfo(userMobile);
        updateInfo(cupNumber);

        // Move the fetch code inside this event listener
        const selectedOption = Order.options[Order.selectedIndex];
        const orderInfo = {
            name: userName,
            mobile: userMobile,
            cups: cupNumber,
            type: selectedOption.textContent // Access option.title inside the loop
        };

        fetch("http://localhost:3000/orderData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderInfo),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => console.log(data))
            .catch((error) =>
                console.error("Error fetching data:", error.message)
            );
    });
    const Menu= document.getElementById("Menu")
    Menu.addEventListener("click",()=>{ fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        
   

        
        // function to display images

        function displayImage(index,imageId,data){
            let image=document.getElementById(imageId)
            if (index >= 0 && index < data.length) {

                let imageLink = data[index].image

        
            image.src = imageLink;
        } else {

            console.error("Invalid index:", index);
        }

        }
        displayImage(1, "coffeeimage", data);
       displayImage(2, "coffeeimage1", data)
       displayImage(3, "coffeeimage2", data)
       displayImage(4, "coffeeimage3", data)
       displayImage(5, "coffeeimage4", data)
       displayImage(6, "coffeeimage5", data)

    //    function to display titles
  
   

    function displayTitle(index, titleId, data) {
        let titleElement = document.getElementById(titleId);
    
        if (index >= 0 && index < data.length) {
            let titleText = data[index].title;
            titleElement.textContent = titleText;
        } else {
            console.error("Invalid index:", index);
        }
    }
    
    displayTitle(1, "title", data);
    displayTitle(2, "title1", data);
    displayTitle(3, "title2", data);
    displayTitle(4, "title3", data);
    displayTitle(5, "title4", data);
    displayTitle(6, "title5", data);
    
       

        
         
    })
    .catch((error) => console.error("Error fetching data:", error.message));
});
})
    
