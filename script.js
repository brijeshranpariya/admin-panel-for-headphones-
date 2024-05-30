document.addEventListener("DOMContentLoaded", function () {
    // Get references to form and submit button
    const productForm = document.getElementById("productForm");
    const submitButton = document.getElementById("submitButton");

    // Add a submit event listener to the form
    productForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Create an object to store form data
        const formData = {};

        // Get all form fields by their IDs
        formData["Name"] = document.getElementById("namefield").value;
        formData["Category"] = document.getElementById("Category").value;
        formData["Image"] = document.getElementById("imagefield").value;
        formData["Price"] = document.getElementById("pricefield").value;
        formData["Color"] = document.getElementById("colorfield").value;

        // Get the selected brand
        const selectedBrand = document.querySelector("input[name='Brand']:checked");
        if (selectedBrand) {
            formData["Brand"] = selectedBrand.value;
        }

        // Get the selected materials
        const selectedMaterials = document.querySelectorAll("input[name='Brand']:checked");
        formData["Materials"] = Array.from(selectedMaterials).map(item => item.value);

        // Get the selected features
        formData["Waterproof"] = document.getElementById("waterproof").checked;
        formData["Breathable"] = document.getElementById("breathable").checked;

        // Log the form data in the console
        console.log("Form Data:");
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                console.log(key + ": " + formData[key]);
            }
        }

        // You can now perform additional actions, such as sending the data to a server, here.
    });
});
