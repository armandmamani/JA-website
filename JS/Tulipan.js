const apartmentDetails = [
    { id: "A1HA1", Tipology: "A", building: "A1", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 50.7, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A1HA2", Tipology: "A", building: "A1", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 81.4, terraceArea: 25.9, parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A1HA3", Tipology: "A", building: "A1", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A1HA4", Tipology: "A", building: "A1", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A1HA5", Tipology: "A", building: "A1", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A2HA1", Tipology: "A", building: "A2", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 50.7, terraceArea: 0 , parkingNumber: "NUK KA CAKTUAR", statusi: "Shitur" },
    { id: "A2HA2", Tipology: "A", building: "A2", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 60, terraceArea: 48.7, parkingNumber: "P01 04 - 68", statusi: "Shitur" },
    { id: "A2HA3", Tipology: "A", building: "A2", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "P01 04  - 49, 50", statusi: "Shitur" },
    { id: "A2HA4", Tipology: "A", building: "A2", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "P01 04  - 51, 52", statusi: "Shitur" },
    { id: "A2HA5", Tipology: "A", building: "A2", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "P01 04 - 47, 48", statusi: "Shitur" },
    { id: "A3HA1", Tipology: "A", building: "A3", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 12.4, terraceArea: 0 , parkingNumber: "P05 01 - 01", statusi: "Shitur" },
    { id: "A3HA2", Tipology: "A", building: "A3", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 88, terraceArea: 10, parkingNumber: "P05 01 - 02", statusi: "Shitur" },
    { id: "A3HA3", Tipology: "A", building: "A3", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "P05 01 - 03, 04", statusi: "Shitur" },
    { id: "A3HA4", Tipology: "A", building: "A3", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "P05 02 - 17, 18", statusi: "Shitur" },
    { id: "A3HA5", Tipology: "A", building: "A3", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "P08 01 86", statusi: "Per shitje" },
    { id: "A4HA1", Tipology: "A", building: "A4", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 0 , terraceArea: 48.3, parkingNumber: "P01 04 - 64, 65", statusi: "Shitur" },
    { id: "A4HA2", Tipology: "A", building: "A4", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 44.2, terraceArea: 38, parkingNumber: "P01 04 - 66, 67", statusi: "Shitur" },
    { id: "A4HA3", Tipology: "A", building: "A4", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "P01 04 - 69", statusi: "Shitur" },
    { id: "A4HA4", Tipology: "A", building: "A4", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "P01 04 - 70", statusi: "Shitur" },
    { id: "A4HA5", Tipology: "A", building: "A4", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "P01 04 - 71, 72", statusi: "Shitur" },
    { id: "A5HA1", Tipology: "A", building: "A5", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 452, terraceArea: 123.4, parkingNumber: "P05 02 -1", statusi: "Shitur" },
    { id: "A5HA2", Tipology: "A", building: "A5", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 0 , terraceArea: 0 , parkingNumber: "P05 02 -2", statusi: "Shitur" },
    { id: "A5HA3", Tipology: "A", building: "A5", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0 , terraceArea: 0 , parkingNumber: "P05 02 -3", statusi: "Shitur" },
    { id: "A5HA4", Tipology: "A", building: "A5", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0 , terraceArea: 0 , parkingNumber: "P05 02 -4", statusi: "Shitur" },
    { id: "A5HA5", Tipology: "A", building: "A5", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0 , terraceArea: 0 , parkingNumber: "P05 02 -5", statusi: "Shitur" },
    { id: "A6HA1", Tipology: "A", building: "A6", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 133.5, terraceArea: 27.2, parkingNumber: "P06 04 -53", statusi: "Shitur" },
    { id: "A6HA2", Tipology: "A", building: "A6", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 0 , terraceArea: 0 , parkingNumber: "P06 04 -54", statusi: "Shitur" },
    { id: "A6HA3", Tipology: "A", building: "A6", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0 , terraceArea: 0 , parkingNumber: "P06 04 -55", statusi: "Shitur" },
    { id: "A6HA4", Tipology: "A", building: "A6", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0 , terraceArea: 0 , parkingNumber: "P06 04 -56", statusi: "Shitur" },
    { id: "A6HA5", Tipology: "A", building: "A6", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0 , terraceArea: 0 , parkingNumber: "NUK KA CAKTUAR", statusi: "Shitur" },
    { id: "A7HA1", Tipology: "A", building: "A7", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 42.14, terraceArea: 0 , parkingNumber: "P2 01 -01", statusi: "Shitur" },
    { id: "A7HA2", Tipology: "A", building: "A7", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 94.5, terraceArea: 0 , parkingNumber: "P2 01 -02", statusi: "Shitur" },
    { id: "A7HA3", Tipology: "A", building: "A7", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "P2 01 -03", statusi: "Shitur" },
    { id: "A7HA4", Tipology: "A", building: "A7", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "P2 01 -04", statusi: "Shitur" },
    { id: "A7HA5", Tipology: "A", building: "A7", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "P2 01 -05, 06", statusi: "Shitur" },
    { id: "A8HA1", Tipology: "A", building: "A8", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 45, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A8HA2", Tipology: "A", building: "A8", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 17, terraceArea: 73.5, parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A8HA3", Tipology: "A", building: "A8", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A8HA4", Tipology: "A", building: "A8", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A8HA5", Tipology: "A", building: "A8", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Shitur" },
    { id: "A9HA1", Tipology: "A", building: "A9", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 50, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "A9HA2", Tipology: "A", building: "A9", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 81, terraceArea: 29.2, parkingNumber: "", statusi: "Per shitje" },
    { id: "A9HA3", Tipology: "A", building: "A9", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "P03 02 - 11, 12", statusi: "Shitur" },
    { id: "A9HA4", Tipology: "A", building: "A9", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "P05 03 -25, 26", statusi: "Shitur" },
    { id: "A9HA5", Tipology: "A", building: "A9", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "P03 02 - 07, 08", statusi: "Shitur" },
    { id: "A10HA1", Tipology: "A", building: "A10", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 50, terraceArea: 0 , parkingNumber: "P07 02 13", statusi: "Shitur" },
    { id: "A10HA2", Tipology: "A", building: "A10", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 79, terraceArea: 26, parkingNumber: "P07 02 14", statusi: "Shitur" },
    { id: "A10HA3", Tipology: "A", building: "A10", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "P07 02 10", statusi: "Shitur" },
    { id: "A10HA4", Tipology: "A", building: "A10", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "P07 02 11", statusi: "Shitur" },
    { id: "A10HA5", Tipology: "A", building: "A10", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "A11HA1", Tipology: "A", building: "A11", floor: 0, netArea: 72.48, comonArea: 14.33, TotalArea: 86.81, greenArea: 0 , terraceArea: 50, parkingNumber: "BLLOKUAR", statusi: "Rezervuar" },
    { id: "A11HA2", Tipology: "A", building: "A11", floor: 0, netArea: 100.92, comonArea: 19.95, TotalArea: 120.87, greenArea: 44.8, terraceArea: 18.9, parkingNumber: "BLLOKUAR", statusi: "Rezervuar" },
    { id: "A11HA3", Tipology: "A", building: "A11", floor: 1, netArea: 76, comonArea: 15.03, TotalArea: 91.03, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Rezervuar" },
    { id: "A11HA4", Tipology: "A", building: "A11", floor: 1, netArea: 125.24, comonArea: 24.76, TotalArea: 150, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Rezervuar" },
    { id: "A11HA5", Tipology: "A", building: "A11", floor: 2, netArea: 194.54, comonArea: 38.47, TotalArea: 233.01, greenArea: 0, terraceArea: 0 , parkingNumber: "BLLOKUAR", statusi: "Rezervuar" },
    { id: "B1HB1", Tipology: "B", building: "B1", floor: 0, netArea: 112.95, comonArea: 17.57, TotalArea: 130.52, greenArea: 45, terraceArea: 55, parkingNumber: "P01 01 5, 6", statusi: "Shitur" },
    { id: "B1HB2", Tipology: "B", building: "B1", floor: 0, netArea: 65.55, comonArea: 10.19, TotalArea: 75.74, greenArea: 34, terraceArea: 32, parkingNumber: "P01 01 12, 13", statusi: "Shitur" },
    { id: "B1HB3", Tipology: "B", building: "B1", floor: 0, netArea: 107.1, comonArea: 16.66, TotalArea: 123.76, greenArea: 53, terraceArea: 55, parkingNumber: "P01 01 3, 4", statusi: "Shitur" },
    { id: "B1HB4", Tipology: "B", building: "B1", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 01 15", statusi: "Shitur" },
    { id: "B1HB5", Tipology: "B", building: "B1", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "B1HB6", Tipology: "B", building: "B1", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "B1HB7", Tipology: "B", building: "B1", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 01 10, 11", statusi: "Rezervuar" },
    { id: "B1HB8", Tipology: "B", building: "B1", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 01 7, 8", statusi: "Shitur" },
    { id: "B2HB1", Tipology: "B", building: "B2", floor: 0, netArea: 112.95, comonArea: 17.57, TotalArea: 130.52, greenArea: 80.9, terraceArea: 50, parkingNumber: "", statusi: "Shitur" },
    { id: "B2HB2", Tipology: "B", building: "B2", floor: 0, netArea: 65.55, comonArea: 10.19, TotalArea: 75.74, greenArea: 14.7, terraceArea: 20.6, parkingNumber: "", statusi: "Shitur" },
    { id: "B2HB3", Tipology: "B", building: "B2", floor: 0, netArea: 107.1, comonArea: 16.66, TotalArea: 123.76, greenArea: 84.8, terraceArea: 52.1, parkingNumber: "", statusi: "Shitur" },
    { id: "B2HB4", Tipology: "B", building: "B2", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "NUK KA CAKTUAR", statusi: "Shitur" },
    { id: "B2HB5", Tipology: "B", building: "B2", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 03 57", statusi: "Shitur" },
    { id: "B2HB6", Tipology: "B", building: "B2", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 03 56", statusi: "Shitur" },
    { id: "B2HB7", Tipology: "B", building: "B2", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 03 58", statusi: "Rezervuar" },
    { id: "B2HB8", Tipology: "B", building: "B2", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "B3HB1", Tipology: "B", building: "B3", floor: 0, netArea: 116.8, comonArea: 17.63, TotalArea: 134.43, greenArea: 128.4, terraceArea: 0 , parkingNumber: "P05 03 -22, 23", statusi: "Shitur" },
    { id: "B3HB2", Tipology: "B", building: "B3", floor: 0, netArea: 65.55, comonArea: 9.89, TotalArea: 75.44, greenArea: 17.6, terraceArea: 0 , parkingNumber: "P05 03 -24", statusi: "Shitur" },
    { id: "B3HB3", Tipology: "B", building: "B3", floor: 0, netArea: 107.1, comonArea: 16.66, TotalArea: 123.76, greenArea: 55.4, terraceArea: 58, parkingNumber: "", statusi: "Per shitje" },
    { id: "B3HB4", Tipology: "B", building: "B3", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "P05-03 - 31", statusi: "Shitur" },
    { id: "B3HB5", Tipology: "B", building: "B3", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "B3HB6", Tipology: "B", building: "B3", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "P05-03 - 32", statusi: "Shitur" },
    { id: "B3HB7", Tipology: "B", building: "B3", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "NUK KA CAKTUAR", statusi: "Rezervuar" },
    { id: "B3HB8", Tipology: "B", building: "B3", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "B4HB1", Tipology: "B", building: "B4", floor: 0, netArea: 276.9, comonArea: 0, TotalArea: 276.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB2", Tipology: "B", building: "B4", floor: 0, netArea: 0, comonArea: 0, TotalArea: 0, greenArea: 0, terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB3", Tipology: "B", building: "B4", floor: 0, netArea: 0, comonArea: 0, TotalArea: 0, greenArea: 0, terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB4", Tipology: "B", building: "B4", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB5", Tipology: "B", building: "B4", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB6", Tipology: "B", building: "B4", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB7", Tipology: "B", building: "B4", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B4HB8", Tipology: "B", building: "B4", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B5HB1", Tipology: "B", building: "B5", floor: 0, netArea: 112.95, comonArea: 17.57, TotalArea: 130.52, greenArea: 128.4, terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "B5HB2", Tipology: "B", building: "B5", floor: 0, netArea: 65.55, comonArea: 10.19, TotalArea: 75.74, greenArea: 17.6, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "B5HB3", Tipology: "B", building: "B5", floor: 0, netArea: 107.1, comonArea: 16.66, TotalArea: 123.76, greenArea: 126.3, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "B5HB4", Tipology: "B", building: "B5", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B5HB5", Tipology: "B", building: "B5", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 06 80, 81", statusi: "Rezervuar" },
    { id: "B5HB6", Tipology: "B", building: "B5", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 06 82", statusi: "Rezervuar" },
    { id: "B5HB7", Tipology: "B", building: "B5", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B5HB8", Tipology: "B", building: "B5", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "P01 06 90, 91", statusi: "Shitur" },
    { id: "B6HB1", Tipology: "B", building: "B6", floor: 0, netArea: 143, comonArea: 22, TotalArea: 165, greenArea: 150.5, terraceArea: 0 , parkingNumber: "P06 03 -42, 43", statusi: "Shitur" },
    { id: "B6HB2", Tipology: "B", building: "B6", floor: 0, netArea: 143, comonArea: 22, TotalArea: 165, greenArea: 186, terraceArea: 0 , parkingNumber: "P06 03 -47, 48", statusi: "Shitur" },
    { id: "B6HB4", Tipology: "B", building: "B6", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B6HB5", Tipology: "B", building: "B6", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B6HB6", Tipology: "B", building: "B6", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B6HB7", Tipology: "B", building: "B6", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B6HB8", Tipology: "B", building: "B6", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "P06 05 - 69, 70", statusi: "Shitur" },
    { id: "B7HB1", Tipology: "B", building: "B7", floor: 0, netArea: 143, comonArea: 22, TotalArea: 165, greenArea: 186, terraceArea: 0 , parkingNumber: "P02 02 - 17, 18", statusi: "Shitur" },
    { id: "B7HB2", Tipology: "B", building: "B7", floor: 0, netArea: 143, comonArea: 22, TotalArea: 165, greenArea: 185, terraceArea: 0 , parkingNumber: "P02 02 - 19, 20", statusi: "Shitur" },
    { id: "B7HB4", Tipology: "B", building: "B7", floor: 1, netArea: 129.24, comonArea: 20.1, TotalArea: 149.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B7HB5", Tipology: "B", building: "B7", floor: 1, netArea: 70.75, comonArea: 11, TotalArea: 81.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Rezervuar" },
    { id: "B7HB6", Tipology: "B", building: "B7", floor: 1, netArea: 127.05, comonArea: 19.76, TotalArea: 146.81,greenArea: 0 , terraceArea: 0 , parkingNumber: "P02 02 - 15, 16", statusi: "Shitur" },
    { id: "B7HB7", Tipology: "B", building: "B7", floor: 2, netArea: 201.29, comonArea: 31.31, TotalArea: 232.6,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "B7HB8", Tipology: "B", building: "B7", floor: 2, netArea: 148.63, comonArea: 23.12, TotalArea: 171.75,greenArea: 0 , terraceArea: 0 , parkingNumber: "P02 02 - 12, 13", statusi: "Shitur" },
    { id: "C1HC1", Tipology: "C", building: "C1", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 0, terraceArea: 0, parkingNumber: "", statusi: "Per shitje" },
    { id: "C1HC2", Tipology: "C", building: "C1", floor: 1, netArea: 294.34, comonArea: 0, TotalArea: 294.34,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C1HC3", Tipology: "C", building: "C1", floor: 1, netArea: 0, comonArea: 0, TotalArea: 0,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C1HC4", Tipology: "C", building: "C1", floor: 1, netArea: 0, comonArea: 0, TotalArea: 0,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C1HC5", Tipology: "C", building: "C1", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C1HC6", Tipology: "C", building: "C1", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0, terraceArea: 0, parkingNumber: "", statusi: "Per shitje" },
    { id: "C1HC7", Tipology: "C", building: "C1", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 0, terraceArea: 0, parkingNumber: "", statusi: "Rezervuar" },
    { id: "C1HC8", Tipology: "C", building: "C1", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C2HC1", Tipology: "C", building: "C2", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 107.8, terraceArea: 0 , parkingNumber: "P08 01 1, 2", statusi: "Shitur" },
    { id: "C2HC2", Tipology: "C", building: "C2", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C2HC3", Tipology: "C", building: "C2", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 28.96, parkingNumber: "P08 01 83, 84", statusi: "Shitur" },
    { id: "C2HC4", Tipology: "C", building: "C2", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 97.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C2HC5", Tipology: "C", building: "C2", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "NUK KA CAKTUAR", statusi: "Shitur" },
    { id: "C2HC6", Tipology: "C", building: "C2", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "NUK KA CAKTUAR", statusi: "Shitur" },
    { id: "C2HC7", Tipology: "C", building: "C2", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 47.32, terraceArea: 0 , parkingNumber: "P08 01 81, 82", statusi: "Shitur" },
    { id: "C2HC8", Tipology: "C", building: "C2", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C3HC1", Tipology: "C", building: "C3", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 127.5, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C3HC2", Tipology: "C", building: "C3", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 36.5, parkingNumber: "P08 01 86", statusi: "Shitur" },
    { id: "C3HC3", Tipology: "C", building: "C3", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 28.96, parkingNumber: "", statusi: "Per shitje" },
    { id: "C3HC4", Tipology: "C", building: "C3", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 97.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C3HC5", Tipology: "C", building: "C3", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "P08 02 10", statusi: "Shitur" },
    { id: "C3HC6", Tipology: "C", building: "C3", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C3HC7", Tipology: "C", building: "C3", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 46.5, terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "C3HC8", Tipology: "C", building: "C3", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C4HC1", Tipology: "C", building: "C4", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 127.5, terraceArea: 0, parkingNumber: "P08 03 18", statusi: "Shitur" },
    { id: "C4HC2", Tipology: "C", building: "C4", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "P08 03 14, 15", statusi: "Shitur" },
    { id: "C4HC3", Tipology: "C", building: "C4", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 28.96, parkingNumber: "P08 03 16", statusi: "Shitur" },
    { id: "C4HC4", Tipology: "C", building: "C4", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 97.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C4HC5", Tipology: "C", building: "C4", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "P08 03 63", statusi: "Shitur" },
    { id: "C4HC6", Tipology: "C", building: "C4", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "P08 03 - 37", statusi: "Shitur" },
    { id: "C4HC7", Tipology: "C", building: "C4", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 196, terraceArea: 0 , parkingNumber: "P08 03 - 35, 36", statusi: "Shitur" },
    { id: "C4HC8", Tipology: "C", building: "C4", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C5HC1", Tipology: "C", building: "C5", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 127.5, terraceArea: 0 , parkingNumber: "P08 04 - 49, 50", statusi: "Shitur" },
    { id: "C5HC2", Tipology: "C", building: "C5", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C5HC3", Tipology: "C", building: "C5", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 28.96, parkingNumber: "", statusi: "Per shitje" },
    { id: "C5HC4", Tipology: "C", building: "C5", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 97.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C5HC5", Tipology: "C", building: "C5", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C5HC6", Tipology: "C", building: "C5", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C5HC7", Tipology: "C", building: "C5", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 200, terraceArea: 0 , parkingNumber: "P08 04 - 26", statusi: "Shitur" },
    { id: "C5HC8", Tipology: "C", building: "C5", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C6HC1", Tipology: "C", building: "C6", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 160, terraceArea: 0 , parkingNumber: "P08 05 33, 34", statusi: "Shitur" },
    { id: "C6HC2", Tipology: "C", building: "C6", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C6HC3", Tipology: "C", building: "C6", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 28.96, parkingNumber: "", statusi: "Per shitje" },
    { id: "C6HC4", Tipology: "C", building: "C6", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 97.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C6HC5", Tipology: "C", building: "C6", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C6HC6", Tipology: "C", building: "C6", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "P08 05 36", statusi: "Shitur" },
    { id: "C6HC7", Tipology: "C", building: "C6", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 254, terraceArea: 0 , parkingNumber: "P08 05 - 37", statusi: "Shitur" },
    { id: "C6HC8", Tipology: "C", building: "C6", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C7HC1", Tipology: "C", building: "C7", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 79.3, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C7HC2", Tipology: "C", building: "C7", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "P04 01 - 01, 21", statusi: "Shitur" },
    { id: "C7HC3", Tipology: "C", building: "C7", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C7HC4", Tipology: "C", building: "C7", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 60, parkingNumber: "", statusi: "Per shitje" },
    { id: "C7HC5", Tipology: "C", building: "C7", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Shitur" },
    { id: "C7HC6", Tipology: "C", building: "C7", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C7HC7", Tipology: "C", building: "C7", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 32, terraceArea: 0 , parkingNumber: "P04 01 - 4", statusi: "Shitur" },
    { id: "C7HC8", Tipology: "C", building: "C7", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
    { id: "C8HC1", Tipology: "C", building: "C8", floor: 0, netArea: 126.18, comonArea: 20.38, TotalArea: 146.56, greenArea: 127.5, terraceArea: 0 , parkingNumber: "P04 01 - 13, 14", statusi: "Shitur" },
    { id: "C8HC2", Tipology: "C", building: "C8", floor: 1, netArea: 125.61, comonArea: 20.29, TotalArea: 145.9,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C8HC3", Tipology: "C", building: "C8", floor: 1, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97, greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C8HC4", Tipology: "C", building: "C8", floor: 1, netArea: 121.89, comonArea: 19.69, TotalArea: 141.58, greenArea: 0 , terraceArea: 60, parkingNumber: "", statusi: "Per shitje" },
    { id: "C8HC5", Tipology: "C", building: "C8", floor: 2, netArea: 124.04, comonArea: 20.04, TotalArea: 144.08,greenArea: 0 , terraceArea: 0 , parkingNumber: "P04 01 - 11, 12", statusi: "Shitur" },
    { id: "C8HC6", Tipology: "C", building: "C8", floor: 2, netArea: 67.99, comonArea: 10.98, TotalArea: 78.97,greenArea: 0 , terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C8HC7", Tipology: "C", building: "C8", floor: 2, netArea: 108.98, comonArea: 17.61, TotalArea: 126.59, greenArea: 70, terraceArea: 0 , parkingNumber: "", statusi: "Per shitje" },
    { id: "C8HC8", Tipology: "C", building: "C8", floor: 3, netArea: 247.4, comonArea: 26, TotalArea: 273,greenArea: 0 , terraceArea: 89.1, parkingNumber: "", statusi: "Per shitje" },
]





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
                console.log(apartment.statusi)
            });
        }
    });
});
