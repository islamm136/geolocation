let userId = localStorage.getItem("userId");

if (userId == null) {
  userId = Math.random();
  localStorage.setItem("userId", userId);
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    // Отправляем данные на сервер
    axios
      .post("send.php", {
        userId: userId,
        latitude: lat,
        longitude: long,
      })
      .then((response) => console.log("Data saved:", response.data))
      .catch((error) => console.error("Error sending data:", error));
  },
  (error) => {
    console.error("Error getting location:", error.message);
  },
  {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  }
);
