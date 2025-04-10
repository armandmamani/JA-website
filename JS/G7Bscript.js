// JavaScript source code
const apartmentDetails = [
{ id: "A11", floor: "1", typology: "Studio", scale: "A", totalNetArea: 58.9, commonArea: 24.99, totalArea: 83.89, verandaArea: 71.33, plotArea: 0, storeArea: 0, statusi: "Per shitje", shenime: "0" },
{ id: "A12", floor: "1", typology: "2+1", scale: "A", totalNetArea: 118.46, commonArea: 50.25, totalArea: 168.71, verandaArea: 175.56, plotArea: 0, storeArea : 16.44, statusi: "Per shitje", shenime: "0" },
{ id: "A13", floor: "1", typology: "2+1", scale: "A", totalNetArea: 104.43, commonArea: 44.3, totalArea: 148.73, verandaArea: 165.08, plotArea: 0, storeArea : 25.61, statusi: "Per shitje", shenime: "0" },
{ id: "A31", floor: "3", typology: "Studio", scale: "A", totalNetArea: 53.51, commonArea: 22.7, totalArea: 76.21, verandaArea: 0, plotArea: 0, storeArea : 12.69, statusi: "Per shitje", shenime: "0" },
    { id: "A35", floor: "3", typology: "2+1", scale: "A", totalNetArea: 90.94, commonArea: 38.58, totalArea: 129.52, verandaArea: 36.79, plotArea: 0, storeArea: 11.05, statusi: "Rezervuar", shenime: "Anglezi" },
{ id: "A41", floor: "4", typology: "1+1", scale: "A", totalNetArea: 71.57, commonArea: 30.36, totalArea: 101.93, verandaArea: 0, plotArea: 0, storeArea : 11.05, statusi: "Rezervuar", shenime: "0" },
{ id: "A43", floor: "4", typology: "2+1", scale: "A", totalNetArea: 90.75, commonArea: 38.5, totalArea: 129.25, verandaArea: 0, plotArea: 0, storeArea : 15.75, statusi: "Rezervuar", shenime: "0" },
{ id: "A51", floor: "5", typology: "1+1", scale: "A", totalNetArea: 69.28, commonArea: 29.39, totalArea: 98.67, verandaArea: 27.2, plotArea: 0, storeArea : 15, statusi: "Rezervuar", shenime: "0" },
{ id: "C03", floor: "0", typology: "1+1", scale: "C", totalNetArea: 70.29, commonArea: 29.82, totalArea: 100.11, verandaArea: 30.98, plotArea: 0, storeArea : 17.03, statusi: "Rezervuar", shenime: "0" },
{ id: "B11", floor: "1", typology: "1+1", scale: "B", totalNetArea: 71.21, commonArea: 30.21, totalArea: 101.42, verandaArea: 4.72, plotArea: 0, storeArea : 15.87, statusi: "Per shitje", shenime: "0" },
{ id: "B13", floor: "1", typology: "2+1", scale: "B", totalNetArea: 118.74, commonArea: 50.37, totalArea: 169.11, verandaArea: 148.85, plotArea: 0, storeArea : 15.85, statusi: "Per shitje", shenime: "0" },
{ id: "B14", floor: "1", typology: "2+1", scale: "B", totalNetArea: 98.23, commonArea: 41.67, totalArea: 139.9, verandaArea: 152.41, plotArea: 0, storeArea : 33.1, statusi: "Per shitje", shenime: "0" },
{ id: "B26", floor: "2", typology: "1+1", scale: "B", totalNetArea: 65.9, commonArea: 27.96, totalArea: 93.86, verandaArea: 103.37, plotArea: 0, storeArea : 16.11, statusi: "Per shitje", shenime: "0" },
{ id: "B36", floor: "3", typology: "1+1", scale: "B", totalNetArea: 68.8, commonArea: 29.19, totalArea: 97.99, verandaArea: 0, plotArea: 225.63, storeArea : 17.25, statusi: "Per shitje", shenime: "0" },
{ id: "B51", floor: "5", typology: "2+1", scale: "B", totalNetArea: 91.92, commonArea: 38.99, totalArea: 130.91, verandaArea: 2.62, plotArea: 0, storeArea : 30.36, statusi: "Per shitje", shenime: "0" },
{ id: "C04", floor: "0", typology: "1+1", scale: "C", totalNetArea: 66.19, commonArea: 28.08, totalArea: 94.27, verandaArea: 76.61, plotArea: 0, storeArea : 17.86, statusi: "Per shitje", shenime: "0" },
{ id: "B23", floor: "2", typology: "2+1", scale: "B", totalNetArea: 99.79, commonArea: 42.33, totalArea: 142.12, verandaArea: 70.82, plotArea: 0, storeArea : 20.25, statusi: "Shitur", shenime: "0" },
{ id: "B33", floor: "3", typology: "2+1", scale: "B", totalNetArea: 95.58, commonArea: 40.55, totalArea: 136.13, verandaArea: 66.68, plotArea: 0, storeArea : 15.87, statusi: "Shitur", shenime: "0" },
{ id: "C06", floor: "0", typology: "2+1", scale: "C", totalNetArea: 112.25, commonArea: 47.62, totalArea: 159.87, verandaArea: 16.03, plotArea: 0, storeArea : 17.03, statusi: "Shitur", shenime: "0" },
{ id: "A42", floor: "4", typology: "1+1", scale: "A", totalNetArea: 68.23, commonArea: 28.94, totalArea: 97.17, verandaArea: 6.99, plotArea: 0, storeArea: 14.85, statusi: "Shitur", shenime: "Lori" },
{ id: "B24", floor: "2", typology: "2+1", scale: "B", totalNetArea: 87.4, commonArea: 37.08, totalArea: 124.48, verandaArea: 4.18, plotArea: 0, storeArea: 15.45, statusi: "Shitur", shenime: "Lori" },
{ id: "B34", floor: "3", typology: "2+1", scale: "B", totalNetArea: 94.22, commonArea: 39.97, totalArea: 134.19, verandaArea: 18.9, plotArea: 0, storeArea: 0, statusi: "Shitur", shenime: "Lori" },
{ id: "B42", floor: "4", typology: "2+1", scale: "B", totalNetArea: 93.9, commonArea: 39.83, totalArea: 133.73, verandaArea: 0, plotArea: 0, storeArea: 26.08, statusi: "Shitur", shenime: "Lori" },
{ id: "C02", floor: "0", typology: "1+1", scale: "C", totalNetArea: 69.75, commonArea: 29.59, totalArea: 99.34, verandaArea: 18.57, plotArea: 0, storeArea: 17.03, statusi: "Shitur", shenime: "Lori" },
{ id: "A34", floor: "3", typology: "1+1", scale: "A", totalNetArea: 71.77, commonArea: 30.45, totalArea: 102.22, verandaArea: 21.64, plotArea: 0, storeArea : 12.58, statusi: "Shitur", shenime: "0" },
{ id: "B43", floor: "4", typology: "2+1", scale: "B", totalNetArea: 91.64, commonArea: 38.87, totalArea: 130.51, verandaArea: 0, plotArea: 0, storeArea : 15.85, statusi: "Shitur", shenime: "0" },
{ id: "B32", floor: "3", typology: "1+1", scale: "B", totalNetArea: 71.26, commonArea: 30.23, totalArea: 101.49, verandaArea: 11.17, plotArea: 0, storeArea : 13.02, statusi: "Shitur", shenime: "0" },
{ id: "B52", floor: "5", typology: "2+1", scale: "B", totalNetArea: 88.61, commonArea: 37.59, totalArea: 126.2, verandaArea: 4.45, plotArea: 0, storeArea : 25.57, statusi: "Shitur", shenime: "0" },
{ id: "A23", floor: "2", typology: "1+1", scale: "A", totalNetArea: 65.92, commonArea: 27.96, totalArea: 93.88, verandaArea: 38.21, plotArea: 0, storeArea : 13.62, statusi: "Rezervuar", shenime: "0" },
{ id: "A24", floor: "2", typology: "1+1", scale: "A", totalNetArea: 67.79, commonArea: 28.76, totalArea: 96.55, verandaArea: 4.35, plotArea: 0, storeArea : 14.85, statusi: "Rezervuar", shenime: "0" },

]
function showPlan(apartmentId) {
    // Hide all images
    const images = document.querySelectorAll('.apartament-plan');
    images.forEach(img => img.classList.add('hidden'));
    images.forEach(img => img.classList.remove('selectedApartment'));


    // show the selected image
    const selectedImage = document.getElementById(apartmentId);


    if (selectedImage) {
        selectedImage.classList.remove('hidden');
        selectedImage.classList.add('selectedApartment')

    }

    // show details of the selected apartment
    showApartmentDetails(apartmentId);
}
function showApartmentDetails(apartmentId) {

    const details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptTypology').textContent = details.typology;
        document.getElementById('aptScale').textContent = details.scale;
        document.getElementById('aptTotalNetArea').textContent = details.totalNetArea;
        document.getElementById('aptCommonArea').textContent = details.commonArea;
        document.getElementById('aptTotalArea').textContent = details.totalArea;
        document.getElementById('aptVerandaArea').textContent = details.verandaArea;
        document.getElementById('aptplotArea').textContent = details.plotArea;
        document.getElementById('aptstoreArea').textContent = details.storeArea;
        document.getElementById('aptStatus').textContent = details.statusi;
        // Store the apartmentId to be used when the button is clicked
        document.getElementById('llogApBtn').dataset.apartmentId = apartmentId;
    }
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
                updateForm() 
            }
        });
    });

    // Add event listeners to radio buttons with class 'radioteDhena'
    document.querySelectorAll(".radioteDhena").forEach(radio => {
        radio.addEventListener("change", function () {
            const apartmentId = radio.value;
            selectApartment(apartmentId);
            showForm(apartmentId);
            showPlan(apartmentId)
            showApartmentDetails(apartmentId);
            updateLabelAndButtonStyles();
            updateForm() 
        });
    });

    // Add event listeners to labels "ith class 'apLabel'
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
                updateLabelAndButtonStyles();
                updateForm() 
            }
        });
    });

    // Function to select an apartment

    document.getElementById("printButton").addEventListener("click", function () {
        const elementsToHide = document.querySelectorAll("header, video, nav, .sidenav,.sidenav_r, .controls,.button-container, .footer, #fullScreenPlanBtn,#sideImage, .sidebar,#shiturShkrimi, #rezervuarShkrimi, #fullscreenContainer, #SectorA-image, #printButton");// Hide unnecessary elements
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


    // Function to check the radio button linked "ith the button and uncheck others
    function checkLinkedRadio(apartmentId) {
        // Uncheck all radio buttons
        document.querySelectorAll(".radioteDhena").forEach(radio => {
            radio.checked = false;
        });

        // Check the radio button linked "ith the clicked button
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
        const selectedPlan = document.getElementById(apartmentId);
        const fulScreenPlan = document.getElementById("printBtnContainer");
        const shiturShkrimi = document.getElementById("shiturShkrimi");
        const rezervuarShkrimi = document.getElementById("rezervuarShkrimi");
        if (selectedPlan) {
            selectedPlan.classList.remove("hidden");
            fulScreenPlan.classList.remove("hidden");
        }

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
                } else if (checkbox.checked) {
                    if (label) {
                        label.style.backgroundColor = "#8d7655";
                        label.style.color = "#ffffff"
                    }
                    if (button) {
                        button.style.backgroundColor = "#8d7655";
                        button.style.color = "#ffffff";
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
        let parkingCount = 0;
        let TotalVerandArea = 0
        const selectedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");

        selectedCheckboxes.forEach(checkbox => {
            const apartment = apartmentDetails.find(ap => ap.id === checkbox.value);

            if (apartment) {
                totalNetArea += apartment.totalNetArea || 0;
                commonArea += apartment.commonArea || 0;
                totalArea += apartment.totalArea || 0;
                TotalVerandArea += apartment.verandaArea || 0;
                plotArea += apartment.plotArea || 0;
                storeArea += apartment.storeArea || 0;
                parkingCount += 1;
                
            }
        });
        document.getElementById('sNetoEDhene').value = formatNumber(totalNetArea);
        document.getElementById('sPerbEDhene').value = formatNumber(commonArea);
        document.getElementById('sTotaleEDhene').value = formatNumber(totalArea);
        document.getElementById('sVerandeEDhene').value = formatNumber(TotalVerandArea);
        document.getElementById('sOborrEDhene').value = formatNumber(plotArea);
        document.getElementById('sDepoEDhene').value = formatNumber(storeArea);
        document.getElementById('nrParkimEDhene').value = parkingCount;

        const scaleFactor = 1; // Apply this only if needed
        const cmimParking = scaleFactor * parseFloat(document.getElementById('cmimParking').value);
        const parkingCost = parkingCount * cmimParking;

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
        const total = (sTotale + sVerande + sOborr + sStoreArea + parkingCost);


        document.getElementById('sNeto').value = formatNumber(sNeto);
        document.getElementById('sPerb').value = formatNumber(sPerb);
        document.getElementById('sTotale').value = formatNumber(sTotale);
        document.getElementById('sVerande').value = formatNumber(sVerande);
        document.getElementById('sOborr').value = formatNumber(sOborr);
        document.getElementById('sDepo').value = formatNumber(sStoreArea);
        document.getElementById('Parking').value = formatNumber(parkingCost);
        document.getElementById('total').value = formatNumber(total);

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
    if (sideImage) sImage = sideImage
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
