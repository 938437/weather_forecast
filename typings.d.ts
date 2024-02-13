interface ICurrentProps {
  dt: number;
  main: {
    temp: number;
  }
  weather: {
    main: string;
  };
  wind: {
    speed: number;
  }
}

interface IFiveProps {
  list: {
    main: {
      temp: number;
    }
    dt_txt: number;
    wind: {
      speed: number;
    }
    weather: {
      main: string;
      description: string;
    }
  }
}