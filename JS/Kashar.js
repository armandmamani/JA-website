// data.js
// data.js
const kasharData = {
buildings: [
{
id: "B1",
name: "Building 1",
entrances: [
{
id: "E1",
name: "Entrance A",
apartments: [
{ id: "A101", floor: 1, rooms: "2+1", area: 87, price: 72000, status: "Available" },
{ id: "A102", floor: 1, rooms: "1+1", area: 56, price: 48000, status: "Sold" },
{ id: "A201", floor: 2, rooms: "3+1", area: 110, price: 98000, status: "Reserved" }
]
},
{
id: "E2",
name: "Entrance B",
apartments: [
{ id: "B101", floor: 1, rooms: "2+1", area: 80, price: 70000, status: "Available" },
{ id: "B102", floor: 1, rooms: "2+1", area: 85, price: 71000, status: "Sold" }
]
}
]
},
{
id: "B2",
name: "Building 2",
entrances: [
{
id: "E1",
name: "Entrance A",
apartments: [
{ id: "C101", floor: 1, rooms: "1+1", area: 55, price: 47000, status: "Available" },
{ id: "C201", floor: 2, rooms: "2+1", area: 90, price: 74000, status: "Available" }
]
}
]
}
]
};


// app.js
document.addEventListener("DOMContentLoaded", () => {
const buildingSelect = document.getElementById("buildingSelect");
const entranceSelect = document.getElementById("entranceSelect");
const apartmentGrid = document.getElementById("apartmentGrid");
const apartmentDetails = document.getElementById("apartmentDetails");


// Load buildings
kasharData.buildings.forEach(building => {
const option = document.createElement("option");
option.value = building.id;
option.textContent = building.name;
buildingSelect.appendChild(option);
});


// Load entrances when a building is selected
buildingSelect.addEventListener("change", () => {
entranceSelect.innerHTML = "";
apartmentGrid.innerHTML = "<p class='placeholder'>Select an entrance</p>";
apartmentDetails.innerHTML = "<h3>Apartment Details</h3><p>Select an apartment to view details.</p>";

const selectedBuilding = kasharData.buildings.find(b => b.id === buildingSelect.value);

selectedBuilding.entrances.forEach(entrance => {
const option = document.createElement("option");
option.value = entrance.id;
option.textContent = entrance.name;
entranceSelect.appendChild(option);
});
});


// Load apartments when an entrance is selected
entranceSelect.addEventListener("change", () => {
const selectedBuilding = kasharData.buildings.find(b => b.id === buildingSelect.value);
const selectedEntrance = selectedBuilding.entrances.find(e => e.id === entranceSelect.value);


apartmentGrid.innerHTML = "";


// Group apartments by floor
const floors = {};
selectedEntrance.apartments.forEach(apartment => {
if (!floors[apartment.floor]) floors[apartment.floor] = [];
floors[apartment.floor].push(apartment);
});


// Create UI
Object.keys(floors).sort((a, b) => b - a).forEach(floor => {
const floorDiv = document.createElement("div");
floorDiv.className = "floor-row";
floorDiv.innerHTML = `<h4>Floor ${floor}</h4>`;


floors[floor].forEach(apartment => {
const aptDiv = document.createElement("div");
aptDiv.className = `apartment ${apartment.status.toLowerCase()}`;
aptDiv.textContent = apartment.id;
aptDiv.addEventListener("click", () => {
apartmentDetails.innerHTML = `
<h3>Apartment ${apartment.id}</h3>
<p><strong>Floor:</strong> ${apartment.floor}</p>
<p><strong>Rooms:</strong> ${apartment.rooms}</p>
<p><strong>Area:</strong> ${apartment.area} m²</p>
<p><strong>Price:</strong> €${apartment.price.toLocaleString()}</p>
<p><strong>Status:</strong> ${apartment.status}</p>
`;
});
floorDiv.appendChild(aptDiv);
});


apartmentGrid.appendChild(floorDiv);
});
});
});