// JavaScript source code


function showPlan(apartmentId) {
    // Hide all images
    const images = document.querySelectorAll('.apartament-plan');
    images.forEach(img => img.classList.add('hidden'));
    images.forEach(img => img.classList.remove('selectedApartment'));


    // show the selected image
    const selectedImage = document.getElementById(apartmentId);
   
   
    if (selectedImage) {
       document.getElementById("SectorA-image").classList.add('hidden');
        selectedImage.classList.remove('hidden');
        selectedImage.classList.add('selectedApartment')

    }

    // show details of the selected apartment
    showApartmentDetails(apartmentId);
}


// Call other functions like dra"Building(), setOpacityForMane(), etc., as needed
function showApartmentDetails(apartmentId) {
    
     const   details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptSector').textContent = details.sector;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptTypology').textContent = details.typology;
        document.getElementById('aptScale').textContent = details.scale;
        document.getElementById('aptNetArea').textContent = details.netArea;
        document.getElementById('aptLoggiaArea').textContent = details.loggiaArea;
        document.getElementById('aptTotalNetArea').textContent = details.totalNetArea;
        document.getElementById('aptCommonArea').textContent = details.commonArea;
        document.getElementById('aptTotalArea').textContent = details.totalArea;
        document.getElementById('aptVerandaArea').textContent = details.verandaArea;
        document.getElementById('aptPoolArea').textContent = details.poolArea;
        document.getElementById('aptgreenTerraceArea').textContent = details.greenTerraceArea;
        document.getElementById('aptusableTerrace').textContent = details.usableTerrace;
        document.getElementById('aptplotArea').textContent = details.plotArea;
        document.getElementById('aptstoreArea').textContent = details.storeArea;
        document.getElementById('aptParking').textContent = details.parking;
        console.log(details)
        // In dashboard.js or apartments.js
        if (localStorage.getItem('loggedIn') == 'true') {
        document.getElementById('aptStatus').textContent = details.statusi;
        document.getElementById('aptBuyer').textContent = details.shenime;

}


        document.getElementById('areaFloor0').textContent = details.Kat0Area;
        document.getElementById('areaFloor1').textContent = details.Kati1Area;

        // Store the apartmentId to be used when the button is clicked
        document.getElementById('llogApBtn').dataset.apartmentId = apartmentId;
    }
}
if (localStorage.getItem('loggedIn') == 'true') {
    document.getElementById('editBtn').style.display = "block";

}
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons with class 'ApBtn'
    document.querySelectorAll(".ApBtn").forEach(button => {
        button.addEventListener("click", function () {
            const apartmentId = button.id.replace("btn", ""); // Extract apartment ID from button ID

            if (apartmentId) {
                checkLinkedRadio(apartmentId);
                showApartmentDetails(apartmentId);
                showPlan(apartmentId)

                selectApartment(apartmentId);
                if (!apartmentId.includes("VI")) {
                    updateForm(apartmentId); // Trigger form update for calculations
                }
            }
        });
    });

    // Add event listeners to radio buttons "ith class 'radioteDhena'
    document.querySelectorAll(".radioteDhena").forEach(radio => {
        radio.addEventListener("change", function () {
            const apartmentId = radio.value;
            selectApartment(apartmentId);
            showForm(apartmentId);
            showPlan(apartmentId)
            showApartmentDetails(apartmentId);
            updateLabelAndButtonStyles();
            if (!apartmentId.includes("VI")) {
                updateForm(); // Trigger form update for calculations
            }
        });
    });

    // Add event listeners to labels with class 'apLabel'
    document.querySelectorAll(".apLabel").forEach(label => {
        label.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default label click behavior
            const linkedCheckbox = document.getElementById(label.htmlFor);
            if (linkedCheckbox) {
                // Toggle the checked state
                const apartmentId = linkedCheckbox.value;
                linkedCheckbox.checked = !linkedCheckbox.checked;
                linkedCheckbox.dataset.wasChecked = linkedCheckbox.checked ? "true" : "false";
                showPlan(apartmentId)
                selectApartment(apartmentId);

                if (!apartmentId.includes("VI")) {
                    updateForm(); // Trigger form update for calculations
                }
                updateLabelAndButtonStyles();
            }
        });
    });
 

    // Function to select an apartment

    document.getElementById("printButton").addEventListener("click", function () {
        const elementsToHide = document.querySelectorAll("header, video, nav, .sidenav,.sidenav_r, .controls, .footer,#fullScreenPlanBtn,#sideImage, .sidebar,#shiturShkrimi, #rezervuarShkrimi, #fullscreenContainer, #SectorA-image, #printButton");// Hide unnecessary elements
        elementsToHide.forEach(el => el.style.display = "none");
        // Ensure only the correct image is visible
        document.querySelectorAll(".apartament-plan").forEach(plan => {
            plan.style.display = plan.classList.contains("hidden") ? "none" : "block";
        });

        // Print the document
        window.print();

        // Restore elements after printing
        setTimeout(() => {
            elementsToHide.forEach(el => el.style.display = "");
        }, 500);
        document.querySelectorAll(".apartament-plan").forEach(plan => {
            plan.style.display = "block";
        });

    });


    // Function to check the radio button linked with the button and uncheck others
    function checkLinkedRadio(apartmentId) {
        // Uncheck all radio buttons
        document.querySelectorAll(".radioteDhena").forEach(radio => {
            radio.checked = false;
        });

        // Check the radio button linked with the clicked button
        const linkedRadio = document.querySelector(`.radioteDhena[value='${apartmentId}']`);
        if (linkedRadio) {
            linkedRadio.checked = true;
        }

        updateLabelAndButtonStyles();
    }

    function selectApartment(apartmentId) {
        document.querySelectorAll(".apartament-plan").forEach(plan => {
            plan.classList.add("hidden");
        });
        console.log(apartmentId)

        const selectedPlan = document.getElementById(apartmentId);
        const fulScreenPlan = document.getElementById("printBtnContainer");
        const shiturShkrimi = document.getElementById("shiturShkrimi");
        const rezervuarShkrimi = document.getElementById("rezervuarShkrimi");
        if (selectedPlan) {
            selectedPlan.classList.remove("hidden");
            fulScreenPlan.classList.remove("hidden");
        }
        if (localStorage.getItem('loggedIn') == 'true') {

            const apartment = apartmentDetails.find(apartment => apartment.id === apartmentId);
            if (apartment && apartment.statusi === "Shitur") {
                shiturShkrimi.classList.remove("hidden");
            }
            else if (apartment && apartment.statusi === "Rezervuar") {
                rezervuarShkrimi.classList.remove("hidden");
            }

            else {
                shiturShkrimi.classList.add("hidden");
                rezervuarShkrimi.classList.add("hidden");

            }
        }
    }

    // Function to update styles of labels and buttons
    function updateLabelAndButtonStyles() {
        document.querySelectorAll(".apLabel, .ApBtn").forEach(element => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });

        document.querySelectorAll(".radioteDhena").forEach(checkbox => {

            const apartment = apartmentDetails.find(apartment => apartment.id === checkbox.value);
            const label = document.querySelector(`label[for='${checkbox.id}']`);
            const button = document.querySelector(`.ApBtn[id='${checkbox.value}btn']`);
            if (localStorage.getItem('loggedIn') == 'true') {

                if (apartment) {

                    if (apartment.statusi === "Shitur") {
                        if (label) {
                            label.style.backgroundColor = "#cc5c5c";
                            label.style.color = "#ffffff";
                        }
                        if (button) {
                            button.style.backgroundColor = "#cc5c5c";
                            button.style.color = "#ffffff";
                        }
                    }
                    else if (apartment.statusi === "Rezervuar") {
                        if (label) {
                            label.style.backgroundColor = "#f4c95d";
                            label.style.color = "ffffff";
                        }
                        if (button) {
                            button.style.backgroundColor = "#f4c95d";
                            button.style.color = "ffffff";
                        }
                    }
                    else if (apartment.statusi === "Balfin") {
                        if (label) {
                            label.style.backgroundColor = "#003b6f";
                            label.style.color = "ffffff";
                        }
                        if (button) {
                            button.style.backgroundColor = "#003b6f";
                            button.style.color = "ffffff";
                        }

                    } else if (checkbox.checked) {
                        if (label) {
                            label.style.backgroundColor = "#544632";
                            label.style.color = "#ffffff"
                        }
                        if (button) {
                            button.style.backgroundColor = "#544632";
                            button.style.color = "#ffffff";
                        }
                    }

                }
            }
        });
        
    }

 
document.getElementById('llogApBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission
    updateForm();
});

document.getElementById('nrParkimEDhene').addEventListener('input', updateForm);

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', updateForm);
});

function formatNumber(value) {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

    // Function to update form calculations
    function updateForm() {
        let totalNetArea = 0;
        let commonArea = 0;
        let totalArea = 0;
        let plotArea = 0;
        let storeArea = 0;
        let poolCount = 0;
        let parkingCount = 0;
        let TotalVerandArea = 0
        const selectedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");

        selectedCheckboxes.forEach(checkbox => {
            const apartment = apartmentDetails.find(ap => ap.id === checkbox.value);

            if (apartment) {
                totalNetArea += apartment.totalNetArea || 0;
                commonArea += apartment.commonArea || 0;
                totalArea += apartment.totalArea || 0;
                TotalVerandArea += (apartment.verandaArea+apartment.greenTerraceArea+apartment.usableTerrace) || 0;
                plotArea += apartment.plotArea || 0;
                storeArea += apartment.storeArea || 0;
                parkingCount += apartment.parking || 0;;
                if (apartment.poolArea > 0) poolCount++;
 
            }
        });
        const tabelaVlerave = document.getElementById('tabelaVlerave');

        if (tabelaVlerave) {

            document.getElementById('sNetoEDhene').value = formatNumber(totalNetArea);
            document.getElementById('sPerbEDhene').value = formatNumber(commonArea);
            document.getElementById('sTotaleEDhene').value = formatNumber(totalArea);
            document.getElementById('sVerandeEDhene').value = formatNumber(TotalVerandArea);
            document.getElementById('sOborrEDhene').value = formatNumber(plotArea);
            document.getElementById('sDepoEDhene').value = formatNumber(storeArea);
            document.getElementById('nrParkimEDhene').value = parkingCount;
            document.getElementById('PishineEDhene').value = poolCount;
            const scaleFactor = 1; // Apply this only if needed
            const cmimParking = scaleFactor * parseFloat(document.getElementById('cmimParking').value);
            const cmimPishine = scaleFactor * parseFloat(document.getElementById('cmimPishine').value);

            const parkingCost = parkingCount * cmimParking;
            const poolCost = poolCount * cmimPishine;

            const cmimsNeto = scaleFactor * parseFloat(document.getElementById('cmimsNeto').value);
            const cmimsPerb = scaleFactor * parseFloat(document.getElementById('cmimsPerb').value);
            const cmimsVerande = scaleFactor * parseFloat(document.getElementById('cmimsVerande').value);
            const cmimsOborr = scaleFactor * parseFloat(document.getElementById('cmimsOborr').value);
            const cmimsDepo = scaleFactor * parseFloat(document.getElementById('cmimsDepo').value);

            const sNeto = totalNetArea * cmimsNeto;
            const sPerb = commonArea * cmimsPerb;
            const sTotale = sNeto + sPerb;
            const sVerande = TotalVerandArea * cmimsVerande;
            const sOborr = plotArea * cmimsOborr;
            const sStoreArea = storeArea * cmimsDepo;
            const total = (sTotale + sVerande + sOborr + sStoreArea + parkingCost + poolCost);


            document.getElementById('sNeto').value = formatNumber(sNeto);
            document.getElementById('sPerb').value = formatNumber(sPerb);
            document.getElementById('sTotale').value = formatNumber(sTotale);
            document.getElementById('sVerande').value = formatNumber(sVerande);
            document.getElementById('sOborr').value = formatNumber(sOborr);
            document.getElementById('sDepo').value = formatNumber(sStoreArea);
            document.getElementById('Parking').value = formatNumber(parkingCost);
            document.getElementById('Pishine').value = formatNumber(poolCost);
            document.getElementById('total').value = formatNumber(total);
        }
}



    // Updated showForm Function
    function showForm(apartmentId) {
        // show the form
        const selectedRadio = document.getElementById(`checkbox${apartmentId}`);
        if (selectedRadio) {
            selectedRadio.dataset.wasChecked = selectedRadio.checked ? 'true' : 'false';
            selectedRadio.checked = true;
            if (!apartmentId.includes("VI")) {
                updateForm(); // Trigger form update for calculations
            }
        }
    }

    // Initial call to set styles based on pre-checked radios
    updateLabelAndButtonStyles();
});


function formatInputsAsMoney() {
    document.querySelectorAll('.cmimeInput').forEach(input => {
        let value = input.value.replace(/\./g, ''); // Remove existing dots
        if (!isNaN(value) && value !== '') {
            input.value = Number(value).toLocaleString('de-DE'); // Format as monetary value
        }
    });
}


// Add event listeners to toggle state
document.querySelectorAll('input[type="checkbox"].radioteDhena').forEach(checkbox => {
    checkbox.addEventListener('click', function (event) {
        // Toggle the checked state
        if (this.checked) {
            this.dataset.wasChecked = "true";
        } else {
            this.dataset.wasChecked = "false";
        }
        updateForm();
        updateLabelAndButtonStyles();
    });

    // Ensure the dataset is initialized correctly on page load
    checkbox.dataset.wasChecked = checkbox.checked ? "true" : "false";
});
document.addEventListener("DOMContentLoaded", function () {
    const fullscreenContainer = document.getElementById("fullscreenContainer");
    const fullscreenImage = document.getElementById("fullscreenImage");

    // Function to show an image in fullscreen mode
    function showFullScreenImage(imageElement) {
        if (!imageElement) return;
        fullscreenImage.src = imageElement.src;
        fullscreenContainer.classList.remove("hidden");
    }

    const sideImage = document.getElementById("sideImage");
    const sideImageB = document.getElementById("sideImageB");
    const sideImageE = document.getElementById("sideImageE");


    const ImageAbtn = document.getElementById("btnImageA")
    const ImageBbtn = document.getElementById("btnImageB")


    let sImage
    if (sideImage)        sImage = sideImage
    else if (sideImageB) sImage = sideImageB
    else if (sideImageE) sImage = sideImageE
    let imageBtn
    if (ImageAbtn)
        imageBtn = ImageAbtn
    else imageBtn = ImageBbtn



    imageBtn.addEventListener("click", function (e) {
        // Toggle opacity bet"een 0 and 1
                sImage.style.opacity = sImage.style.opacity === "1" ? "0" : "1";

                // Prevent click from triggering "indo" event that hides it immediately
                e.stopPropagation();
        });

    // Hide sideImage "hen clicking any"here except the footer
    window.addEventListener("click", function (event) {
        const sideImage = document.getElementById("sideImage");
        const sideImageB = document.getElementById("sideImageB");
        const footer = document.querySelector(".footer");

        let sImage
        if (sideImage)
            sImage = sideImage
        else sImage = sideImageB
        // Check if the clicked element is NOT inside the footer
        if (!footer.contains(event.target) && sImage) {

            if (sImage) {
                sImage.style.opacity = 0;
            }
        }
 
    });


    // show full-screen for the selected apartment plan
    document.getElementById("fullScreenPlanBtn").addEventListener("click", function () {
        // Select the image inside the currently visible apartment plan
        const selectedPlanImage = document.querySelector(".apartament-plan:not(.hidden) img");

        if (selectedPlanImage) {
            showFullScreenImage(selectedPlanImage);
        } else {
            alert("No apartment plan image found!");
        }
    });

    // Hide fullscreen mode "hen clicking on it
    fullscreenContainer.addEventListener("click", function () {
        fullscreenContainer.classList.add("hidden");
    });
});


// Execute functions "hen the page loads
window.onload = function () {
  //  dra"Building();
    formatInputsAsMoney();
};

// Load existing apartmentDetails from localStorage if available
function saveApartmentDetailsToLocalStorage() {
    localStorage.setItem("apartmentDetails", JSON.stringify(apartmentDetails));
}


document.getElementById("editBtn").addEventListener("click", () => {
    document.getElementById("editFormContainer").style.display = "block";
    console.log("Edit button clicked, form should be visible now.");
});

document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("editId").value.trim();
    const netAra = document.getElementById("editTotalNetArea").value.trim();
    const commonAra = document.getElementById("editCommonArea").value.trim();
    const totalAra = document.getElementById("TotalArea").value.trim();
    const verandaArea = document.getElementById("editverandaArea").value.trim();
    const plotAra = document.getElementById("editPlotArea").value.trim();
    const storageAra = document.getElementById("editStorageArea").value.trim();
    const parking = document.getElementById("editParking").value.trim();

    const statusi = document.getElementById("editStatusi").value.trim();
    const buyer = document.getElementById("editBuyer").value.trim();


    const messageBox = document.getElementById("editMessage");

    const apt = apartmentDetails.find(ap => ap.id === id);

    if (apt) {
        if (netAra) apt.totalNetArea = parseFloat(netAra);
        if (commonAra) apt.commonArea = parseFloat(commonAra);
        if (totalAra) apt.totalArea = parseFloat(totalAra);
        if (verandaArea) apt.verandaArea = parseFloat(verandaArea);
        if (plotAra) apt.plotArea = parseFloat(plotAra);
        if (storageAra) apt.storeArea = parseFloat(storageAra);
        if (parking) apt.parking = parseFloat(parking);
        if (statusi) apt.statusi = statusi;
        if (buyer) apt.shenime = buyer;
        saveApartmentDetailsToLocalStorage();

        messageBox.innerText = "✔️ Apartment updated successfully.";
        messageBox.style.color = "green";
        console.log(apartmentDetails); // For debugging
    } else {
        messageBox.innerText = "❌ Apartment ID not found.";
        messageBox.style.color = "red";
    }
    saveApartmentDetailsToLocalStorage();
    setTimeout(() => messageBox.innerText = "", 5000);
});

function saveApartmentDetailsToLocalStorage() {
    localStorage.setItem("apartmentDetails", JSON.stringify(apartmentDetails));
}

// 🔄 Auto-fill form based on ID
function loadDataToForm(id) {
    const apt = apartmentDetails.find(ap => ap.id === id);
    if (apt) {
        document.getElementById("editTotalNetArea").value = apt.totalNetArea;
        document.getElementById("editCommonArea").value = apt.commonArea;
        document.getElementById("TotalArea").value = apt.totalArea;
        document.getElementById("editverandaArea").value = apt.verandaArea;
        document.getElementById("editPlotArea").value = apt.plotArea;
        document.getElementById("editStorageArea").value = apt.storeArea;
        document.getElementById("editParking").value = apt.parking;
        document.getElementById("editStatusi").value = apt.statusi;
        document.getElementById("editBuyer").value = apt.shenime;
    }
}

// Optional: Auto-load when user leaves the ID field

document.getElementById("editId").addEventListener("blur", function () {
    const id = this.value.trim();
    if (id) loadDataToForm(id);
});
