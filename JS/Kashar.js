


document.addEventListener("DOMContentLoaded", () => {

    // === Building click handling ===
    const buildings = ['A', 'B', 'C', 'D', 'E'];
    buildings.forEach(letter => {
        const buildingLetter = document.getElementById(`buildingLetter${letter}`);
        const buildingDiv = document.getElementById(`godina${letter}`);

        buildingLetter.addEventListener('click', (event) => {
            event.stopPropagation();
            document.querySelectorAll('.building').forEach(b => b.style.display = 'none');
            buildingDiv.style.display = 'block';
        });
    });

    // === Floor click handling ===
    document.querySelectorAll('.floor').forEach(floor => {
        floor.addEventListener('click', (e) => {
            e.stopPropagation();
            // extract floor number and building letter
            const id = floor.id; // e.g. "floor2A"
            const match = id.match(/kati(\d+)([A-Z])/);
            if (!match) return;

            const [, floorNum, buildingLetter] = match;
            // hide all floor plans first
            document.querySelectorAll('.floorPlan').forEach(p => p.style.display = 'none');


        });
    });
    document.querySelectorAll(".floor").forEach(floor => {
        floor.addEventListener('click', () => {
            const id = floor.id; // e.g. "floor1A"
            const match = id.match(/kati(\d+)([A-Z])/);
            if (!match) return;
            const [, floorNum, buildingLetter] = match;

            const tablePlan = document.getElementById('table-plan');
            const header = document.getElementById('floorHeader');

            // Update header
            header.textContent = `GODINA ${buildingLetter} KATI ${floorNum}`;
            console.log(header.textContent);

            // Show the table plan
            tablePlan.style.display = 'grid';

            // Filter apartments for that building and floor
            const floorApartments = defaultApartmentDetails.filter(
                apt => apt.building === buildingLetter && apt.floor == floorNum
            );

            // Fill the grid
            floorApartments.forEach(apt => {
                // Create the target id, e.g. "apOver_1A" for apartment A, floor 1
                const aptDiv = document.getElementById(`apOver_${apt.scale}${apt.apartment}`);
                if (aptDiv) {
                    aptDiv.innerHTML = `
          <strong>${apt.id}</strong><br>
          Apartament: ${apt.Tipology}<br>
          S. Neto: ${apt.totalArea} m²<br>
          S. Perb: ${apt.totalArea} m²<br>
          S. Totale: ${apt.totalArea} m²<br>
          Statusi: ${apt.statusi}
        `;
                }
            });
        });
    });
    // === Click outside buildings to close ===
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.building') && !event.target.classList.contains('building-letter')) {
            document.querySelectorAll('.building').forEach(b => b.style.display = 'none');
            document.querySelectorAll('.floor-plan').forEach(p => p.style.display = 'none');
            const header = document.getElementById("floorHeader");
            header.textContent = "";
        }
    });

});
