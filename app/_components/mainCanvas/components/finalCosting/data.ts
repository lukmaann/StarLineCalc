interface BatteryItem {
    container: number;
    pvcSepratorQt: number;
    lead: number;
    batteryPacking: number;
    charging: number;
    acid: number;
    batteryScreening: number;
    packingJali: number;
    minusPlusCap: number;
    labour: number;
    positivePlates: number;
    negativePlates: number;
  }
  
  const items: Record<string, BatteryItem> = {
    SL35: {
      container: 188,
      pvcSepratorQt: 18,
      lead: 0.6,
      batteryPacking: 18,
      charging: 100,
      acid: 2,
      batteryScreening: 10,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 18,
      negativePlates: 24,
    },
    SL40: {
      container: 188,
      pvcSepratorQt: 24,
      lead: 0.6,
      batteryPacking: 18,
      charging: 100,
      acid: 2,
      batteryScreening: 10,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 24,
      negativePlates: 30,
    },
    SL60: {
      container: 306,
      pvcSepratorQt: 24,
      lead: 1.2,
      batteryPacking: 18,
      charging: 100,
      acid: 3,
      batteryScreening: 10,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 24,
      negativePlates: 30,
    },
    SL70: {
      container: 306,
      pvcSepratorQt: 30,
      lead: 1.4,
      batteryPacking: 18,
      charging: 100,
      acid: 3,
      batteryScreening: 10,
      packingJali: 0,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 30,
      negativePlates: 36,
    },
    SL75: {
      container: 319,
      pvcSepratorQt: 30,
      lead: 1.5,
      batteryPacking: 20,
      charging: 150,
      acid: 4,
      batteryScreening: 10,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 30,
      negativePlates: 36,
    },
    SL80: {
      container: 319,
      pvcSepratorQt: 36,
      lead: 1.6,
      batteryPacking: 20,
      charging: 150,
      acid: 4,
      batteryScreening: 10,
      packingJali: 0,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 36,
      negativePlates: 42,
    },
    SL90: {
      container: 410,
      pvcSepratorQt: 36,
      lead: 1.6,
      batteryPacking: 25,
      charging: 200,
      acid: 6,
      batteryScreening: 25,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 36,
      negativePlates: 42,
    },
    SL100: {
      container: 410,
      pvcSepratorQt: 42,
      lead: 1.8,
      batteryPacking: 25,
      charging: 200,
      acid: 6,
      batteryScreening: 25,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 42,
      negativePlates: 48,
    },
    SL120: {
      container: 410,
      pvcSepratorQt: 48,
      lead: 1.8,
      batteryPacking: 25,
      charging: 200,
      acid: 6,
      batteryScreening: 25,
      packingJali: 0,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 48,
      negativePlates: 54,
    },
    SL130: {
      container: 565,
      pvcSepratorQt: 54,
      lead: 2,
      batteryPacking: 50,
      charging: 300,
      acid: 8,
      batteryScreening: 50,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 54,
      negativePlates: 60,
    },
    SL150: {
      container: 585,
      pvcSepratorQt: 60,
      lead: 2.2,
      batteryPacking: 50,
      charging: 300,
      acid: 12,
      batteryScreening: 50,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 60,
      negativePlates: 66,
    },
    SL180: {
      container: 675,
      pvcSepratorQt: 72,
      lead: 2.5,
      batteryPacking: 50,
      charging: 300,
      acid: 15,
      batteryScreening: 50,
      packingJali: 12,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 72,
      negativePlates: 78,
    },
    B23: {
      container: 306,
      pvcSepratorQt: 30,
      lead: 1.2,
      batteryPacking: 18,
      charging: 100,
      acid: 3,
      batteryScreening: 10,
      packingJali: 0,
      minusPlusCap: 2,
      labour: 0,
      positivePlates: 30,
      negativePlates: 36,
    },
  };
  
  export default items;
  