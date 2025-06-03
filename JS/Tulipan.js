document.addEventListener("DOMContentLoaded", function () {
    const buttons = [
        { btn: "tipBtnA", table: "tableA", hero: "hero-A" },
        { btn: "tipBtnB", table: "tableB", hero: "hero-B" },
        { btn: "tipBtnC", table: "tableC", hero: "hero-C" }
    ];

    const elementsToHide = [
        "hero-A", "hero-B", "hero-C", "hero-D", "hero-E"
    ].map(id => document.getElementById(id));

    function hideAll() {
        elementsToHide.forEach(el => { if (el) el.style.display = "none"; });
    }

    buttons.forEach(({ btn, table, hero }) => {
        const button = document.getElementById(btn);
        const tableElement = document.getElementById(table);
        const heroElement = document.getElementById(hero);

        button.addEventListener("click", function (event) {
            event.stopPropagation();

            const isVisible = tableElement.style.display === "block";
            hideAll();

            if (!isVisible) {
                document.getElementById('plan-container').style.display = 'none'
                tableElement.style.display = "grid";
                heroElement.style.display = "block";
            }
        });
    });

    document.addEventListener("click", function (event) {
        hideAll();
    });

    hideAll(); // Ensure everything is hidden on page load
    
    // Image display functionality
    const planContainer = document.getElementById("plan-container");
    const displayImage = document.getElementById("display-image");

    if (planContainer && displayImage) {
        const imageButtons = document.querySelectorAll(".planBtn");


        imageButtons.forEach(button => {
            button.addEventListener("click", function () {
                const imageSrc = `Planet_tulipan/${button.id}.webp`;
                const project = document.getElementById('ProjectBackground')
                const printBtn = document.getElementById("printBtnContainer")
                displayImage.src = imageSrc;
                displayImage.style.display = "block";
                planContainer.style.display = "block";
                project.style.display = "block"
                project.style.animation = "fadeIn 1s ease - out forwards";
                printBtn.classList.remove("hidden")
                selectApartment();

            });
        });

        // Hide plan-container when no image is shown
        displayImage.addEventListener("error", function () {
            displayImage.style.display = "none";
            planContainer.style.display = "none";
        });
    }
});

document.getElementById("printButton").addEventListener("click", function () {
    const elementsToHide = document.querySelectorAll("header, .sidenav ,#fullScreenPlanBtn, #shiturShkrimi, #rezervuarShkrimi, #fullscreenContainer, #printButton");// Hide unnecessary elements
    elementsToHide.forEach(el => el.style.display = "none");
    // Ensure only the correct image is visible
    const plan = document.getElementById("display-image");
       plan.style.display= plan.classList.contains("hidden") ? "none" : "block";


    // Print the document
    window.print();

    // Restore elements after printing
    setTimeout(() => {
        elementsToHide.forEach(el => el.style.display = "");
    }, 500);
    
plan.style.display = "block"

});

function selectApartment(apartmentId) {
    console.log("Selected Apartment ID:", apartmentId, apartmentDetails);
    const shiturShkrimi = document.getElementById("shiturShkrimi");
    const rezervuarShkrimi = document.getElementById("rezervuarShkrimi");
    const apartment = apartmentDetails.find(apartment => apartment.id === apartmentId);
    if (apartment && apartment.statusi === "Shitur") {
        shiturShkrimi.classList.remove("hidden");
    }
    else if (apartment && apartment.statusi === "Rezervuar") {
        rezervuarShkrimi.classList.remove("hidden");
    }

    else {
        shiturShkrimi.classList.add("hidden");
    }
}

// Function to update styles of labels and buttons
document.addEventListener("DOMContentLoaded", function () {

    const shiturText = document.getElementById("shiturShkrimi");
    const rezervuarText = document.getElementById("rezervuarShkrimi");

    apartmentDetails.forEach(apartment => {
        const button = document.querySelector(`.${apartment.id}`);
        if (localStorage.getItem('loggedIn') == 'true') {

            if (button) {
                // Apply initial colors
                if (apartment.statusi === "Shitur") {
                    button.style.backgroundColor = "red";
                    button.style.color = "white";
                } else if (apartment.statusi === "Rezervuar") {
                    button.style.backgroundColor = "orange";
                    button.style.color = "red";
                }

                // Add click event listener
                button.addEventListener("click", function () {
                    if (apartment.statusi === "Shitur") {
                        shiturText.classList.remove("hidden");
                        rezervuarText.classList.add("hidden");
                    } else if (apartment.statusi === "Rezervuar") {
                        rezervuarText.classList.remove("hidden");
                        shiturText.classList.add("hidden");
                    } else {
                        shiturText.classList.add("hidden");
                        rezervuarText.classList.add("hidden");
                    }
                });

            }
        }
    });
});
if (localStorage.getItem('loggedIn') == 'true') {
    document.getElementById('editBtn').style.display = "block";

}
document.getElementById("editBtn").addEventListener("click", () => {
    document.getElementById("editFormContainer").style.display = "block";
    console.log("Edit button clicked, form should be visible now.");
});

document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("editId").value.trim();
    const netAra = document.getElementById("editTotaltotalNetArea").value.trim();
    const commonAra = document.getElementById("editCommonArea").value.trim();
    const totalAra = document.getElementById("totalArea").value.trim();
    const verandaArea = document.getElementById("editverandaArea").value.trim();
    const plotAra = document.getElementById("editPlotArea").value.trim();
    const storageAra = document.getElementById("editStorageArea").value.trim();
    const parking = document.getElementById("editParking").value.trim();

    const statusi = document.getElementById("editStatusi").value.trim();
    const buyer = document.getElementById("editBuyer").value.trim();


    const messageBox = document.getElementById("editMessage");

    const apt = apartmentDetails.find(ap => ap.id === id);

    if (apt) {
        if (netAra) apt.totaltotalNetArea = parseFloat(netAra);
        if (commonAra) apt.commonArea = parseFloat(commonAra);
        if (totalAra) apt.totalArea = parseFloat(totalAra);
        if (verandaArea) apt.verandaArea = parseFloat(verandaArea);
        if (plotAra) apt.plotArea = parseFloat(plotAra);
        if (storageAra) apt.storeArea = parseFloat(storageAra);
        if (parking) apt.parking = parseFloat(parking);
        if (statusi) apt.statusi = statusi;
        if (buyer) apt.shenime = buyer;

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
