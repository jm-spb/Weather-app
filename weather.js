class Weather {
  constructor(city) {
    this.city = city;
    this.apiKey = '56badea4d42290fe4ab37adc595796cb';
  }
  // Fetch weather from API
  async getWeatherFromApi() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=ru`
    );

    // Handle invalid cities
    if (response.status !== 200) {
      console.log('error');
    }

    if (response.status === 200) {
      const responseData = await response.json();
      const city = document.getElementById('city').value;

      if (city !== '') {
        // Save in Local Storage only valid cities
        storage.setLocationData(city);

        // Hide modal window only when valid cities typed
        // Using Bootstrap docs
        const myModalEl = document.getElementById('locationModal');
        const modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
      }

      return responseData;
    }
  }
  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
