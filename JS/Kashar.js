// === COMMON ELEMENTS ===
const buildingSelect = document.getElementById("buildingSelect");
const floorSelect = document.getElementById("floorSelect");
const scaleSelect = document.getElementById("scaleSelect");
const apartmentSelect = document.getElementById("apartmentSelect");
const apartmentDetails = document.getElementById("apartmentDetails");
const tablePlanContainer = document.getElementById("table-plan");
const header = document.getElementById("floorHeader");
const apartmentDetailsDiv = document.getElementById("apartmentDetails");
const apartmentValueTable = document.getElementById("apartmentValue");


// === 🏢 FUNCTION: Show Building ===
function showBuilding(selectedBuilding) {
  if (!selectedBuilding) return;

  // 1️⃣ Update dropdown
  buildingSelect.value = selectedBuilding;

  // 2️⃣ Hide all building divs
  document.querySelectorAll(".building").forEach(div => (div.style.display = "none"));

  // 3️⃣ Show the selected building
  const buildingDiv = document.getElementById(`godina${selectedBuilding}`);
  if (buildingDiv) {
    buildingDiv.style.display = "block";
  } else {
    console.warn(`Building div not found for: ${selectedBuilding}`);
  }

  // 4️⃣ Reset floors and table
  floorSelect.value = "";
  tablePlanContainer.style.display = "none";
  header.textContent = `GODINA ${selectedBuilding}`;
}

// === 🏢 BUILDING SELECTOR BEHAVIOR ===
buildingSelect.addEventListener("change", () => {
  const selectedBuilding = buildingSelect.value;
  showBuilding(selectedBuilding);
});

// === 🅰️ BUILDING LETTER CLICK HANDLER ===
document.querySelectorAll("[id^='buildingLetter']").forEach(letter => {
  letter.addEventListener("click", () => {
    const selectedBuilding = letter.id.replace("buildingLetter", ""); // e.g. A, B, C...
    showBuilding(selectedBuilding);
  });
});

// === 🏗️ FUNCTION: Show Floor ===
function showFloor(selectedBuilding, selectedFloor) {
  if (!selectedBuilding || !selectedFloor) return;

  // Update dropdown
  floorSelect.value = selectedFloor;

  // Show header
  header.textContent = `GODINA ${selectedBuilding} - KATI ${selectedFloor}`;
  tablePlanContainer.style.display = "block";

  // Generate the table layout
  generateTableLayout(selectedBuilding);

  // Populate apartments
  populateApartments(selectedBuilding, selectedFloor);
}

// === 🖼️ FLOOR IMAGE CLICK HANDLER ===
document.querySelectorAll(".floor").forEach(img => {
  img.addEventListener("click", () => {
    const id = img.id.replace("kati", ""); // e.g. "9A" → floor 9, building A
    const floor = id.match(/\d+/)?.[0];
    const building = id.match(/[A-Z]/)?.[0];
    if (building && floor) {
      showFloor(building, floor);
      document.getElementById("tablePlan-container").style.display = "block";
    }
  });
});

// === BUILDING CONFIGURATION MAP ===


const buildingLayouts = {
  A: [
    { scale: 1, layout: 1 },
    { scale: 2, layout: 1 },
  ],
  B: [
    { scale: 1, layout: 1 },
    { scale: 2, layout: 1 },
    { scale: 3, layout: 1 },
  ],
  C: [
    { scale: 1, layout: 2 },
    { scale: 2, layout: 1 },
  ],
  D: [{ scale: 1, layout: 3 }],
  E: [
    { scale: 1, layout: 4 },
    { scale: 2, layout: 2 },
  ],
};

const layoutApartments = {
  1: ["A", "B", "C", "D", "E", "F", "G"],
  2: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  3: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  4: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
};


// === BUILDING CHANGE HANDLER ===
buildingSelect.addEventListener("change", () => {
  const building = buildingSelect.value;
  resetSelect(scaleSelect, "SHKALLA");
  resetSelect(apartmentSelect, "APARTAMENTI");
  apartmentDetails.innerHTML = "";

  if (!building || !buildingLayouts[building]) return;

  // Get the available scales for that building
  const scales = buildingLayouts[building].map((s) => s.scale.toString());

  // Show only existing scales
  Array.from(scaleSelect.options).forEach((opt) => {
    if (opt.value === "") return;
    opt.style.display = scales.includes(opt.value) ? "block" : "none";
  });
});

// === SCALE CHANGE HANDLER ===
scaleSelect.addEventListener("change", () => {
  const building = buildingSelect.value;
  const scale = parseInt(scaleSelect.value, 10);
  resetSelect(apartmentSelect, "APARTAMENTI");
  apartmentDetails.innerHTML = "";

  if (!building || !scale || !buildingLayouts[building]) return;

  // Find layout for this scale
  const scaleData = buildingLayouts[building].find((s) => s.scale === scale);
  if (!scaleData) return;

  const layout = scaleData.layout;
  const apartments = layoutApartments[layout] || [];

  // Show only apartments existing in that layout
  Array.from(apartmentSelect.options).forEach((opt) => {
    if (opt.value === "") return;
    opt.style.display = apartments.includes(opt.value) ? "block" : "none";
  });
});

// === APARTMENT CHANGE HANDLER ===
apartmentSelect.addEventListener("change", showApartmentDetalis);

// === 🖱️ EVENT: Click Apartment in Layout ===
document.getElementById("table-plan").addEventListener("click", function (e) {
  const cell = e.target.closest("td");
  if (!cell || !cell.dataset.apartment) return; // Ignore empty cells or merged ones

  const building = cell.dataset.building;
  const scale = cell.dataset.scale;
  const floor = cell.dataset.floor;
  const apartment = cell.dataset.apartment;


  // Update dropdowns
  document.getElementById("scaleSelect").value = scale;
  document.getElementById("apartmentSelect").value = apartment;

  // Find and display apartment details
  const apt = defaultApartmentDetails.find(
    (a) =>
      a.building === building &&
      a.scale == scale &&
      a.floor == floor &&
      a.apartment == apartment
  );

  if (apt) {
    showApartmentDetalis(apt);
  } else {
    console.warn("Apartment not found for:", { building, scale, floor, apartment });
  }
});


// === FUNCTION: Show Apartment Details ===

function showApartmentDetalis () {
  const apartmentLetter = apartmentSelect.value;
        selectedBuilding = buildingSelect.value;
        selectedScale = scaleSelect.value;
        selectedFloor = floorSelect.value;
  if (!selectedBuilding || !selectedScale || !apartmentLetter) return;
  // Build the apartment ID (e.g., D23G)
  const aptId = `${selectedBuilding}${selectedScale}${selectedFloor}${apartmentLetter}`;

  // Find the apartment object from the array
  const details = defaultApartmentDetails.find((apt) => apt.id === aptId);
  // Clear previous details
  apartmentDetailsDiv.innerHTML = "";

  if (details) {
    // Create details table
    apartmentDetailsDiv.innerHTML = `
      <h4 style="text-align: center">Apartamenti<br/><strong>${aptId}</strong></h4>
      <table class="apt-details">
        <tr><th>Tipologjia</th><td>${details.Tipology || "-"}</td></tr>
        <tr><th>Siperfaqe neto</th><td>${details.totalNetArea ?? 0} m²</td></tr>
        <tr><th>Siperfaqe e përbashkët</th><td>${details.commonArea ?? 0} m²</td></tr>
        <tr style="font-size: 20px"><th>Siperfaqe totale</th><td><strong>${details.totalArea ?? 0} m²</strong></td></tr>
        <tr><th>Parkim</th><td>${details.ParkingNumber || "0"}</td></tr>
        <tr><th>Statusi</th><td>${details.statusi || "—"}</td></tr>
        <tr><th>Shënime</th><td><em>${details.shenime || "—"}</em></td></tr>
      </table>
    `;
  } else {
    apartmentDetailsDiv.innerHTML = `<p>Nuk u gjetën të dhëna për apartamentin ${apartmentLetter}.</p>`;
  }
  window.currentApartment = details; // store current selection globally
  updateApartmentValue(details);     // refresh value table
  apartmentValueTable.style.display = "block";

}

// === UTILITY FUNCTION TO RESET A SELECT ===
function resetSelect(selectEl, placeholder) {
  selectEl.value = "";
  Array.from(selectEl.options).forEach((opt) => (opt.style.display = "block"));
  selectEl.options[0].textContent = placeholder;
}

// === Show apartments on hover ===
apartmentSelect.addEventListener("mouseover", (e) => {
  const hoveredOption = e.target;
  if (hoveredOption.tagName === "OPTION" && hoveredOption.dataset.apartments) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = `Apartments: ${hoveredOption.dataset.apartments}`;
    document.body.appendChild(tooltip);

    const rect = hoveredOption.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
    tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

    hoveredOption.addEventListener(
      "mouseleave",
      () => {
        tooltip.remove();
      },
      { once: true }
    );
  }
});

// === 🧱 FLOOR DROPDOWN HANDLER ===
floorSelect.addEventListener("change", () => {
  const selectedBuilding = buildingSelect.value;
  const selectedFloor = floorSelect.value;
  showFloor(selectedBuilding, selectedFloor);
  document.getElementById("tablePlan-container").style.display = "block";

});

// === 📐 FUNCTION: Generate Table Layout (example logic) ===
function generateTableLayout(building) {
const tablePlan = document.getElementById("table-plan");
  const selectedBuilding = buildingSelect.value;
  const selectedFloor = floorSelect.value;

  tablePlan.innerHTML = "";

  // Get layout configuration for this building
  const layouts = buildingLayouts[selectedBuilding];
  if (!layouts) {
    console.warn(`No layouts defined for building ${selectedBuilding}`);
    return;
  }

  // Create a flex container to show all scales side-by-side
  const container = document.createElement("div");
  container.className = "scale-container";

  // For each scale in the building, clone and append the right layout
  layouts.forEach(({ scale, layout }) => {
    const template = document.getElementById(`layout${layout}-template`);
    if (!template) return;

    const clone = template.content.cloneNode(true);
    const table = clone.querySelector("table");
    table.dataset.scale = scale;

    // Add scale header
    const scaleHeader = document.createElement("h3");
    scaleHeader.textContent = `Shkalla ${scale}`;
    scaleHeader.style.textAlign = "center";

    const wrapper = document.createElement("div");
      wrapper.className = "table-container";

    wrapper.appendChild(scaleHeader);
    wrapper.appendChild(table);

    container.appendChild(wrapper);
  });

  // Append all tables to main table-plan
  tablePlan.appendChild(container);

  // Populate apartments for this building/floor
  populateApartments(selectedBuilding, selectedFloor);
};
// === 🏠 FUNCTION: Populate Apartments ===
function populateApartments(building, floor) {
  const tables = document.querySelectorAll("#table-plan table");
  if (!tables.length) {
    console.warn("No layout tables present to populate.");
    return;
  }

  // Filter apartments by building + floor
  const floorApartments = defaultApartmentDetails.filter(
    (apt) => apt.building === building && apt.floor == floor
  );

  // Loop through each apartment
  floorApartments.forEach((apt) => {
    // Find the table matching the correct scale
    const table = [...tables].find((t) => t.dataset.scale == apt.scale);
    if (!table) return;

    // Find the table cell whose text matches the apartment letter (A, B, C...)
    const tdList = table.querySelectorAll("td");
    const target = [...tdList].find(
      (td) => td.textContent.trim() === apt.apartment
    );

    if (!target) return;

    target.dataset.building = apt.building;
    target.dataset.scale = apt.scale;
    target.dataset.floor = apt.floor;
    target.dataset.apartment = apt.apartment;
    target.dataset.aptId = apt.id;

    // === Apply status-based color & content ===
    if (apt.statusi === "Shitur") {
      target.style.backgroundColor = "#FC8F8F";
      target.style.color = "#64242F";
      target.innerHTML = `<strong>${apt.id}</strong><br>${apt.statusi}`;
    } else {
      target.style.backgroundColor =
        apt.statusi === "Rezervuar" ? "#FFBD24" : "#e6e6e6";
      target.innerHTML = `
        <strong>${apt.id}</strong><br>
        ${apt.Tipology}<br>
        ${apt.totalArea} m²<br>
        <em>${apt.statusi}</em>
      `;
    }
  });
}

    // === 💰 FUNCTION: Update Apartment Value Table ===
function updateApartmentValue(apt) {
  if (!apt) return;

  // Get DOM elements
  const netAreaCell = document.getElementById("netAreaCell");
  const commonAreaCell = document.getElementById("commonAreaCell");
  const parkingAreaCell = document.getElementById("parkingAreaCell");

  const netPriceInput = document.getElementById("netPrice");
  const commonPriceInput = document.getElementById("commonPrice");
  const parkingPriceInput = document.getElementById("parkingPrice");

  const netTotal = document.getElementById("netTotal");
  const commonTotal = document.getElementById("commonTotal");
  const parkingTotal = document.getElementById("parkingTotal");
  const grandTotal = document.getElementById("grandTotal");

  // Fill in area values from the apartment

 // document.getElementById("apartmentInfo").textContent = apt.id;

  netAreaCell.textContent = apt.totalNetArea.toFixed(2);
  commonAreaCell.textContent = apt.commonArea.toFixed(2);
  parkingAreaCell.textContent = apt.parking ? "1" : "0";

  console.log("Updating values for apartment:", apt.id, netAreaCell.textContent);

  // Calculate totals
  const netVal = apt.totalNetArea * parseFloat(netPriceInput.value || 0);
  const commonVal = apt.commonArea * parseFloat(commonPriceInput.value || 0);
  const parkingVal = (apt.parking ? 1 : 0) * parseFloat(parkingPriceInput.value || 0);
  const totalVal = netVal + commonVal + parkingVal;

  // Display results
  netTotal.textContent = netVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
  commonTotal.textContent = commonVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
  parkingTotal.textContent = parkingVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
  grandTotal.textContent = totalVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
}

// Recalculate totals automatically when any price changes
["netPrice", "commonPrice", "parkingPrice"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    if (window.currentApartment) {
      updateApartmentValue(window.currentApartment);
    }
  });
});
 // click outside to hide (keeps behavior class-based; removes inline style issues)
  document.addEventListener("click", (e) => {
    const isInsideBuilding = e.target.closest(".building");
    const isInsideTable = e.target.closest("#table-plan");
    const isInsideselectors = e.target.closest(".selector");
    const tableContainer = document.getElementById("tablePlan-container");
    const isInsideletter =  e.target.closest(".buildingLetter");
    if (!isInsideBuilding && !isInsideTable && !isInsideselectors && !isInsideletter)  {
      // hide table-plan by clearing content or hiding container

      tablePlanContainer.innerHTML = "";
      tablePlanContainer.style.display = "none";
      tableContainer.style.display = "none";
      document.querySelectorAll(".building").forEach(div => (div.style.display = "none"));

    }
  });