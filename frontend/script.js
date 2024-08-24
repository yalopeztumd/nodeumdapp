document.addEventListener("DOMContentLoaded", function() {
    const alarmasList = document.getElementById("alarmas-list");

    // Función para cargar las alarmas desde el backend
    function cargarAlarmas() {
        fetch('http://localhost:3000/api/alarmas')
            .then(response => response.json())
            .then(alarmas => {
                alarmas.forEach(alarma => {
                    const alarmaCard = `
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${alarma.nombre}</h5>
                                    <p class="card-text">${alarma.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    alarmasList.innerHTML += alarmaCard;
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Cargar las alarmas al cargar la página
    cargarAlarmas();
});
