
const apartmentDetails = [

    { id: "A1HA1", Tipology: "1 + 1", building: "A1", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 50.7, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA2", Tipology: "2 + 1", building: "A1", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 81.4, verandaArea: 25.9, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA3", Tipology: "1 + 1", building: "A1", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA4", Tipology: "2 + 1", building: "A1", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA5", Tipology: "3 + 1", building: "A1", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A2HA1", Tipology: "1 + 1", building: "A2", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 50.7, verandaArea: 0, parking: 1, ParkingNumber: "NUK KA CAKTUAR", statusi: "Shitur", shenime: "GEZIM BEQAJ" },
    { id: "A2HA2", Tipology: "2 + 1", building: "A2", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 60, verandaArea: 48.7, parking: 1, ParkingNumber: "P01 04 - 68", statusi: "Shitur", shenime: "SHABAN XHAFERRAJ" },
    { id: "A2HA3", Tipology: "1 + 1", building: "A2", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 04 - 49, 50", statusi: "Shitur", shenime: "VEKO " },
    { id: "A2HA4", Tipology: "2 + 1", building: "A2", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 04 - 51, 52", statusi: "Shitur", shenime: "VEKO " },
    { id: "A2HA5", Tipology: "3 + 1", building: "A2", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 04 - 47, 48", statusi: "Shitur", shenime: "CIM GJOKAJ" },
    { id: "A3HA1", Tipology: "1 + 1", building: "A3", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 12.4, verandaArea: 0, parking: 1, ParkingNumber: "P05 01 - 01", statusi: "Shitur", shenime: "ARDJAN DEMAJ" },
    { id: "A3HA2", Tipology: "2 + 1", building: "A3", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 88, verandaArea: 10, parking: 1, ParkingNumber: "P05 01 - 02", statusi: "Shitur", shenime: "ARDJAN DEMAJ" },
    { id: "A3HA3", Tipology: "1 + 1", building: "A3", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 01 - 03, 04", statusi: "Shitur", shenime: "Ardjan ismaili(Miku Beharit)" },
    { id: "A3HA4", Tipology: "2 + 1", building: "A3", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 02 - 17, 18", statusi: "Shitur", shenime: "Ardjan ismaili" },
    { id: "A3HA5", Tipology: "3 + 1", building: "A3", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 01 86", statusi: "Shitur", shenime: "Erol Menkshi" },
    { id: "A4HA1", Tipology: "1 + 1", building: "A4", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 0, verandaArea: 48.3, parking: 1, ParkingNumber: "P01 04 - 64, 65", statusi: "Shitur", shenime: "GEZIM CAUSHI " },
    { id: "A4HA2", Tipology: "2 + 1", building: "A4", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 44.2, verandaArea: 38, parking: 1, ParkingNumber: "P01 04 - 66, 67", statusi: "Shitur", shenime: "GEZIM CAUSHI " },
    { id: "A4HA3", Tipology: "1 + 1", building: "A4", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 04 - 69", statusi: "Shitur", shenime: "Besnik Shehaj" },
    { id: "A4HA4", Tipology: "2 + 1", building: "A4", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 04 - 70", statusi: "Shitur", shenime: "Adi fasasda" },
    { id: "A4HA5", Tipology: "3 + 1", building: "A4", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 04 - 71, 72", statusi: "Shitur", shenime: "LUTFI GJOKA " },
    { id: "A5HA1", Tipology: "1 + 1", building: "A5", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 452, verandaArea: 123.4, parking: 1, ParkingNumber: "P05 02 - 1", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA2", Tipology: "2 + 1", building: "A5", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 02 - 2", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA3", Tipology: "1 + 1", building: "A5", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 02 - 3", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA4", Tipology: "2 + 1", building: "A5", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 02 - 4", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA5", Tipology: "3 + 1", building: "A5", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 02 - 5", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A6HA1", Tipology: "1 + 1", building: "A6", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 133.5, verandaArea: 27.2, parking: 1, ParkingNumber: "P06 04 - 53", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA2", Tipology: "2 + 1", building: "A6", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P06 04 - 54", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA3", Tipology: "1 + 1", building: "A6", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P06 04 - 55", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA4", Tipology: "2 + 1", building: "A6", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P06 04 - 56", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA5", Tipology: "3 + 1", building: "A6", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "NUK KA CAKTUAR", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A7HA1", Tipology: "1 + 1", building: "A7", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 42.14, verandaArea: 0, parking: 1, ParkingNumber: "P2 01 -01", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA2", Tipology: "2 + 1", building: "A7", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 94.5, verandaArea: 0, parking: 1, ParkingNumber: "P2 01 -02", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA3", Tipology: "1 + 1", building: "A7", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P2 01 -03", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA4", Tipology: "2 + 1", building: "A7", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P2 01 -04", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA5", Tipology: "3 + 1", building: "A7", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P2 01 -05, 06", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A8HA1", Tipology: "1 + 1", building: "A8", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 45, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA2", Tipology: "2 + 1", building: "A8", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 17, verandaArea: 73.5, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA3", Tipology: "1 + 1", building: "A8", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA4", Tipology: "2 + 1", building: "A8", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA5", Tipology: "3 + 1", building: "A8", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A9HA1", Tipology: "1 + 1", building: "A9", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 50, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "KUJTIM SULA" },
    { id: "A9HA2", Tipology: "2 + 1", building: "A9", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 81, verandaArea: 29.2, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "KUJTIM SULA" },
    { id: "A9HA3", Tipology: "1 + 1", building: "A9", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P03 02 - 11, 12", statusi: "Shitur", shenime: "ARDJAN MALASI" },
    { id: "A9HA4", Tipology: "2 + 1", building: "A9", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 03 - 25, 26", statusi: "Shitur", shenime: "ARDJAN MALASI" },
    { id: "A9HA5", Tipology: "3 + 1", building: "A9", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P03 02 - 07, 08", statusi: "Shitur", shenime: "ILIR IBRAJ" },
    { id: "A10HA1", Tipology: "1 + 1", building: "A10", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 50, verandaArea: 0, parking: 1, ParkingNumber: "P07 02 13", statusi: "Shitur", shenime: "amarildo" },
    { id: "A10HA2", Tipology: "2 + 1", building: "A10", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 79, verandaArea: 26, parking: 1, ParkingNumber: "P07 02 14", statusi: "Shitur", shenime: "amarildo" },
    { id: "A10HA3", Tipology: "1 + 1", building: "A10", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P07 02 10", statusi: "Shitur", shenime: "MITHAT KONDI" },
    { id: "A10HA4", Tipology: "2 + 1", building: "A10", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P07 02 11", statusi: "Shitur", shenime: "MITHAT KONDI" },
    { id: "A10HA5", Tipology: "3 + 1", building: "A10", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Shitur", shenime: "Matilda Dyrkaj" },
    { id: "A11HA1", Tipology: "1 + 1", building: "A11", floor: 0, totalNetArea: 72.48, commonArea: 14.33, totalArea: 86.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA2", Tipology: "2 + 1", building: "A11", floor: 0, totalNetArea: 100.92, commonArea: 19.95, totalArea: 120.87, plotArea: 44.8, verandaArea: 18.9, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA3", Tipology: "1 + 1", building: "A11", floor: 1, totalNetArea: 76, commonArea: 15.03, totalArea: 91.03, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA4", Tipology: "2 + 1", building: "A11", floor: 1, totalNetArea: 125.24, commonArea: 24.76, totalArea: 150, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA5", Tipology: "3 + 1", building: "A11", floor: 2, totalNetArea: 194.54, commonArea: 38.47, totalArea: 233.01, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B1HB1", Tipology: "2 + 1", building: "B1", floor: 0, totalNetArea: 112.95, commonArea: 17.57, totalArea: 130.52, plotArea: 45, verandaArea: 55, parking: 1, ParkingNumber: "P01 01 5, 6", statusi: "Shitur", shenime: "KYMJA CEBI" },
    { id: "B1HB2", Tipology: "1 + 1", building: "B1", floor: 0, totalNetArea: 65.55, commonArea: 10.19, totalArea: 75.74, plotArea: 34, verandaArea: 32, parking: 1, ParkingNumber: "P01 01 12, 13", statusi: "Shitur", shenime: "SHKUMBIN BIMO" },
    { id: "B1HB3", Tipology: "2 + 1", building: "B1", floor: 0, totalNetArea: 107.1, commonArea: 16.66, totalArea: 123.76, plotArea: 53, verandaArea: 55, parking: 1, ParkingNumber: "P01 01 3, 4", statusi: "Shitur", shenime: "ALBA BIMO" },
    { id: "B1HB4", Tipology: "2 + 1", building: "B1", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 01 15", statusi: "Shitur", shenime: "DRITAN HISI" },
    { id: "B1HB5", Tipology: "1 + 1", building: "B1", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 01 1, 2", statusi: "Shitur", shenime: "Denis Mavriqi" },
    { id: "B1HB6", Tipology: "2 + 1", building: "B1", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 01 8, 9", statusi: "Rezervuar", shenime: "Lutfi Nano" },
    { id: "B1HB7", Tipology: "3 + 1", building: "B1", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 01 10, 11", statusi: "Shitur", shenime: "Vincenso Gremi" },
    { id: "B1HB8", Tipology: "3 + 1", building: "B1", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B2HB1", Tipology: "2 + 1", building: "B2", floor: 0, totalNetArea: 112.95, commonArea: 17.57, totalArea: 130.52, plotArea: 80.9, verandaArea: 50, parking: 1, ParkingNumber: "P01 01 33, 3 4", statusi: "Shitur", shenime: "Altin Dinaj" },
    { id: "B2HB2", Tipology: "1 + 1", building: "B2", floor: 0, totalNetArea: 65.55, commonArea: 10.19, totalArea: 75.74, plotArea: 14.7, verandaArea: 20.6, parking: 1, ParkingNumber: "P01 01 53, 54", statusi: "Shitur", shenime: "AGIM RAMA" },
    { id: "B2HB3", Tipology: "2 + 1", building: "B2", floor: 0, totalNetArea: 107.1, commonArea: 16.66, totalArea: 123.76, plotArea: 84.8, verandaArea: 52.1, parking: 1, ParkingNumber: "P01 01 55", statusi: "Shitur", shenime: "AGIM RAMA" },
    { id: "B2HB4", Tipology: "2 + 1", building: "B2", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 01 35", statusi: "Shitur", shenime: "Mimoza bala" },
    { id: "B2HB5", Tipology: "1 + 1", building: "B2", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 03 57", statusi: "Shitur", shenime: "HAMDI RAMA" },
    { id: "B2HB6", Tipology: "2 + 1", building: "B2", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 03 56", statusi: "Shitur", shenime: "SAJMIR BONJAKU(renato)" },
    { id: "B2HB7", Tipology: "3 + 1", building: "B2", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 03 29", statusi: "Shitur", shenime: "Yzeir" },
    { id: "B2HB8", Tipology: "3 + 1", building: "B2", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 03 31", statusi: "Shitur", shenime: "Kemila Sejdini" },
    { id: "B3HB1", Tipology: "2 + 1", building: "B3", floor: 0, totalNetArea: 116.8, commonArea: 17.63, totalArea: 134.43, plotArea: 128.4, verandaArea: 0, parking: 1, ParkingNumber: "P05 03 - 22, 23", statusi: "Shitur", shenime: "Arjan Syziu" },
    { id: "B3HB2", Tipology: "1 + 1", building: "B3", floor: 0, totalNetArea: 65.55, commonArea: 9.89, totalArea: 75.44, plotArea: 17.6, verandaArea: 0, parking: 1, ParkingNumber: "P05 03 - 24", statusi: "Shitur", shenime: "Arjan Syziu" },
    { id: "B3HB3", Tipology: "2 + 1", building: "B3", floor: 0, totalNetArea: 107.1, commonArea: 16.66, totalArea: 123.76, plotArea: 55.4, verandaArea: 58, parking: 1, ParkingNumber: "P05 03 - 27, 28", statusi: "Shitur", shenime: "Turi oshe" },
    { id: "B3HB4", Tipology: "2 + 1", building: "B3", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05-03 - 31", statusi: "Shitur", shenime: "KLODJAN HISI" },
    { id: "B3HB5", Tipology: "1 + 1", building: "B3", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Shitur", shenime: "ASTRIT GOSTURANI" },
    { id: "B3HB6", Tipology: "2 + 1", building: "B3", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05-03 - 32", statusi: "Shitur", shenime: "KLODJAN HISI" },
    { id: "B3HB7", Tipology: "3 + 1", building: "B3", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "NUK KA CAKTUAR", statusi: "Rezervuar", shenime: "GEZIM BEQAJ" },
    { id: "B3HB8", Tipology: "3 + 1", building: "B3", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P05 03 - 25, 26", statusi: "Shitur", shenime: "ARDJAN MALASI" },
    { id: "B4HB37653", Tipology: "x", building: "B4", floor: 0, totalNetArea: 276.9, commonArea: 0, totalArea: 276.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB4", Tipology: "2 + 1", building: "B4", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB5", Tipology: "1 + 1", building: "B4", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB6", Tipology: "2 + 1", building: "B4", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB7", Tipology: "3 + 1", building: "B4", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB8", Tipology: "3 + 1", building: "B4", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B5HB1", Tipology: "2 + 1", building: "B5", floor: 0, totalNetArea: 112.95, commonArea: 17.57, totalArea: 130.52, plotArea: 128.4, verandaArea: 0, parking: 1, ParkingNumber: "P01 06 78, 79", statusi: "Shitur", shenime: "Sulejman Likaj" },
    { id: "B5HB2", Tipology: "1 + 1", building: "B5", floor: 0, totalNetArea: 65.55, commonArea: 10.19, totalArea: 75.74, plotArea: 17.6, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "Turi oshe" },
    { id: "B5HB3", Tipology: "2 + 1", building: "B5", floor: 0, totalNetArea: 107.1, commonArea: 16.66, totalArea: 123.76, plotArea: 126.3, verandaArea: 0, parking: 1, ParkingNumber: "P01 06 86, 87", statusi: "Shitur", shenime: "Arjan Cukaj" },
    { id: "B5HB4", Tipology: "2 + 1", building: "B5", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B5HB5", Tipology: "1 + 1", building: "B5", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 06 80, 81", statusi: "Rezervuar", shenime: "Taulant Naci" },
    { id: "B5HB6", Tipology: "2 + 1", building: "B5", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 06 82", statusi: "Rezervuar", shenime: "Taulant Naci" },
    { id: "B5HB7", Tipology: "3 + 1", building: "B5", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B5HB8", Tipology: "3 + 1", building: "B5", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P01 06 90, 91", statusi: "Shitur", shenime: "BESMIR SHEHAJ" },
    { id: "B6HB1", Tipology: "3 + 1", building: "B6", floor: 0, totalNetArea: 143, commonArea: 22, totalArea: 165, plotArea: 150.5, verandaArea: 0, parking: 1, ParkingNumber: "P06 03 - 42, 43, 44", statusi: "Shitur", shenime: "ARBEN SHINAJ" },
    { id: "B6HB2", Tipology: "3 + 1", building: "B6", floor: 0, totalNetArea: 143, commonArea: 22, totalArea: 165, plotArea: 186, verandaArea: 0, parking: 1, ParkingNumber: "P06 03 - 47, 48", statusi: "Shitur", shenime: "RIDJAN KARASANI" },
    { id: "B6HB4", Tipology: "2 + 1", building: "B6", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB5", Tipology: "1 + 1", building: "B6", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB6", Tipology: "2 + 1", building: "B6", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB7", Tipology: "3 + 1", building: "B6", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB8", Tipology: "3 + 1", building: "B6", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P06 05 - 45, 46", statusi: "Shitur", shenime: "ARDIT  BEJLERI" },
    { id: "B7HB1", Tipology: "3 + 1", building: "B7", floor: 0, totalNetArea: 143, commonArea: 22, totalArea: 165, plotArea: 186, verandaArea: 0, parking: 1, ParkingNumber: "P02 02 - 17, 18", statusi: "Shitur", shenime: "ERMAL SHINI" },
    { id: "B7HB2", Tipology: "3 + 1", building: "B7", floor: 0, totalNetArea: 143, commonArea: 22, totalArea: 165, plotArea: 185, verandaArea: 0, parking: 1, ParkingNumber: "P02 02 - 19, 20", statusi: "Shitur", shenime: "ELVIN LEKA" },
    { id: "B7HB4", Tipology: "2 + 1", building: "B7", floor: 1, totalNetArea: 129.24, commonArea: 20.1, totalArea: 149.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P02 02 - 11, 14", statusi: "Shitur", shenime: "Ledian Mimini" },
    { id: "B7HB5", Tipology: "1 + 1", building: "B7", floor: 1, totalNetArea: 70.75, commonArea: 11, totalArea: 81.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B7HB6", Tipology: "2 + 1", building: "B7", floor: 1, totalNetArea: 127.05, commonArea: 19.76, totalArea: 146.81, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P02 02 - 15, 16", statusi: "Shitur", shenime: "EUGENT CAUSHI" },
    { id: "B7HB7", Tipology: "3 + 1", building: "B7", floor: 2, totalNetArea: 201.29, commonArea: 31.31, totalArea: 232.6, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P02 02 - 07, 08", statusi: "Shitur", shenime: "eringin avdo" },
    { id: "B7HB8", Tipology: "3 + 1", building: "B7", floor: 2, totalNetArea: 148.63, commonArea: 23.12, totalArea: 171.75, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P02 02 - 12, 13", statusi: "Shitur", shenime: "Edjola Diazi" },
    { id: "C1HC1", Tipology: "3 + 1", building: "C1", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC38048", Tipology: "x", building: "C1", floor: 1, totalNetArea: 294.34, commonArea: 0, totalArea: 294.34, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC5", Tipology: "2 + 1", building: "C1", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC6", Tipology: "1 + 1", building: "C1", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC7", Tipology: "2 + 1", building: "C1", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 01 64, 65", statusi: "Shitur", shenime: "BASHKIM PROGRI" },
    { id: "C1HC8", Tipology: "3 + 1", building: "C1", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "P08 01 66, 67", statusi: "Shitur", shenime: "Vladimir Bajraktari" },
    { id: "C2HC1", Tipology: "3 + 1", building: "C2", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 107.8, verandaArea: 0, parking: 1, ParkingNumber: "P08 01 1, 2", statusi: "Shitur", shenime: "DASHAMIR MUSTAFA" },
    { id: "C2HC2", Tipology: "2 + 1", building: "C2", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 01 79, 80", statusi: "Shitur", shenime: "Endri Mezura" },
    { id: "C2HC3", Tipology: "1 + 1", building: "C2", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 28.96, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C2HC4", Tipology: "2 + 1", building: "C2", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 97.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C2HC5", Tipology: "2 + 1", building: "C2", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "NUK KA CAKTUAR", statusi: "Shitur", shenime: "Endrit Tuka" },
    { id: "C2HC6", Tipology: "1 + 1", building: "C2", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "NUK KA CAKTUAR", statusi: "Rezervuar", shenime: "SAFETY ELEVATOR" },
    { id: "C2HC7", Tipology: "2 + 1", building: "C2", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 47.32, verandaArea: 0, parking: 1, ParkingNumber: "P08 01 81, 82", statusi: "Shitur", shenime: "Altin Hoxha" },
    { id: "C2HC8", Tipology: "3 + 1", building: "C2", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C3HC1", Tipology: "3 + 1", building: "C3", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 127.5, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C3HC2", Tipology: "2 + 1", building: "C3", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 36.5, parking: 1, ParkingNumber: "P08 01z 69, 70, 66, 67, 68", statusi: "Rezervuar", shenime: "GEZIM BEQAJ" },
    { id: "C3HC3", Tipology: "1 + 1", building: "C3", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 28.96, parking: 1, ParkingNumber: "P08 02 73, 74", statusi: "Rezervuar", shenime: "Ermal Bakia" },
    { id: "C3HC4", Tipology: "2 + 1", building: "C3", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 97.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C3HC5", Tipology: "2 + 1", building: "C3", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 02 10", statusi: "Shitur", shenime: "MA STUDIO" },
    { id: "C3HC6", Tipology: "1 + 1", building: "C3", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "Albert" },
    { id: "C3HC7", Tipology: "2 + 1", building: "C3", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 46.5, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Shitur", shenime: "Ylli Alushi" },
    { id: "C3HC8", Tipology: "3 + 1", building: "C3", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C4HC1", Tipology: "3 + 1", building: "C4", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 127.5, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C4HC2", Tipology: "2 + 1", building: "C4", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 03 14, 15, 16", statusi: "Rezervuar", shenime: "ALBERT" },
    { id: "C4HC3", Tipology: "1 + 1", building: "C4", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 28.96, parking: 1, ParkingNumber: "P08 03 61, 62", statusi: "Rezervuar", shenime: "Klodian Metaj" },
    { id: "C4HC4", Tipology: "2 + 1", building: "C4", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 97.1, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "JP Klima" },
    { id: "C4HC5", Tipology: "2 + 1", building: "C4", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 03 63", statusi: "Shitur", shenime: "ENKELEDA TROKTHI" },
    { id: "C4HC6", Tipology: "1 + 1", building: "C4", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C4HC7", Tipology: "2 + 1", building: "C4", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 196, verandaArea: 0, parking: 1, ParkingNumber: "P08 03 - 59, 60", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C4HC8", Tipology: "3 + 1", building: "C4", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C5HC1", Tipology: "3 + 1", building: "C5", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 127.5, verandaArea: 0, parking: 1, ParkingNumber: "P08 04 - 49, 50", statusi: "Shitur", shenime: "TAULANT HOXHA" },
    { id: "C5HC2", Tipology: "2 + 1", building: "C5", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 04 - 53, 54, 55, 56", statusi: "Rezervuar", shenime: "Afrim Stojku" },
    { id: "C5HC3", Tipology: "1 + 1", building: "C5", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 28.96, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "GEZIM BEQAJ" },
    { id: "C5HC4", Tipology: "2 + 1", building: "C5", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 97.1, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "Dyert Tulipan" },
    { id: "C5HC5", Tipology: "2 + 1", building: "C5", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 04 - 51, 52", statusi: "Shitur", shenime: "Gentjan Bathore" },
    { id: "C5HC6", Tipology: "1 + 1", building: "C5", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C5HC7", Tipology: "2 + 1", building: "C5", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 200, verandaArea: 0, parking: 1, ParkingNumber: "P08 04 - 26", statusi: "Shitur", shenime: "LEONARD NUHU" },
    { id: "C5HC8", Tipology: "3 + 1", building: "C5", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC1", Tipology: "3 + 1", building: "C6", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 160, verandaArea: 0, parking: 1, ParkingNumber: "P08 05 33, 34", statusi: "Shitur", shenime: "MIRSAD SHPELLZAJ" },
    { id: "C6HC2", Tipology: "2 + 1", building: "C6", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC3", Tipology: "1 + 1", building: "C6", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 28.96, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "ERG GIPSE" },
    { id: "C6HC4", Tipology: "2 + 1", building: "C6", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 97.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC5", Tipology: "2 + 1", building: "C6", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC6", Tipology: "1 + 1", building: "C6", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P08 05 35, 36", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C6HC7", Tipology: "2 + 1", building: "C6", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 254, verandaArea: 0, parking: 1, ParkingNumber: "P08 05 - 37", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C6HC8", Tipology: "3 + 1", building: "C6", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C7HC1", Tipology: "3 + 1", building: "C7", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 79.3, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 05, 06", statusi: "Shitur", shenime: "FREDI TOTO" },
    { id: "C7HC2", Tipology: "2 + 1", building: "C7", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 01, 21", statusi: "Shitur", shenime: "NELDI" },
    { id: "C7HC3", Tipology: "1 + 1", building: "C7", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Shitur", shenime: "GANIU" },
    { id: "C7HC4", Tipology: "2 + 1", building: "C7", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 60, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C7HC5", Tipology: "2 + 1", building: "C7", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Rezervuar", shenime: "PERPARIM / JON SHPK " },
    { id: "C7HC6", Tipology: "1 + 1", building: "C7", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 70", statusi: "Shitur", shenime: "Lida Bardhi" },
    { id: "C7HC7", Tipology: "2 + 1", building: "C7", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 32, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 4", statusi: "Shitur", shenime: "Klejdi Fejzolli" },
    { id: "C7HC8", Tipology: "3 + 1", building: "C7", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC1", Tipology: "3 + 1", building: "C8", floor: 0, totalNetArea: 126.18, commonArea: 20.38, totalArea: 146.56, plotArea: 127.5, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 13, 14", statusi: "Shitur", shenime: "VULLNET KARDHASHI " },
    { id: "C8HC2", Tipology: "2 + 1", building: "C8", floor: 1, totalNetArea: 125.61, commonArea: 20.29, totalArea: 145.9, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC3", Tipology: "1 + 1", building: "C8", floor: 1, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC4", Tipology: "2 + 1", building: "C8", floor: 1, totalNetArea: 121.89, commonArea: 19.69, totalArea: 141.58, plotArea: 0, verandaArea: 60, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC5", Tipology: "2 + 1", building: "C8", floor: 2, totalNetArea: 124.04, commonArea: 20.04, totalArea: 144.08, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 11, 12", statusi: "Shitur", shenime: "ARDJAN BASHA" },
    { id: "C8HC6", Tipology: "1 + 1", building: "C8", floor: 2, totalNetArea: 67.99, commonArea: 10.98, totalArea: 78.97, plotArea: 0, verandaArea: 0, parking: 1, ParkingNumber: "P04 01 - 16", statusi: "Shitur", shenime: "Behar Sinakolli" },
    { id: "C8HC7", Tipology: "2 + 1", building: "C8", floor: 2, totalNetArea: 108.98, commonArea: 17.61, totalArea: 126.59, plotArea: 70, verandaArea: 0, parking: 1, ParkingNumber: "", statusi: "Shitur", shenime: "Klaudia Ballari" },
    { id: "C8HC8", Tipology: "3 + 1", building: "C8", floor: 3, totalNetArea: 247.4, commonArea: 26, totalArea: 273, plotArea: 0, verandaArea: 89.1, parking: 1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },


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
        saveApartmentDetailsToLocalStorage();

        messageBox.innerText = "✔️ Apartment updated successfully.";
        messageBox.style.color = "green";
        console.log(apartmentDetails); // For debugging
    } else {
        messageBox.innerText = "❌ Apartment ID not found.";
        messageBox.style.color = "red";
    }

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
