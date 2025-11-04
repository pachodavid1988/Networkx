// === scripts.js ===
// Función para guardar los datos del perfil en localStorage
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-editar-perfil");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Capturamos los datos del formulario
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const telefono = document.getElementById("telefono").value;
      const cargo = document.getElementById("cargo").value;
      const fotoInput = document.getElementById("foto");

      // Guardamos los datos en localStorage
      localStorage.setItem("perfil_nombre", nombre);
      localStorage.setItem("perfil_correo", correo);
      localStorage.setItem("perfil_telefono", telefono);
      localStorage.setItem("perfil_cargo", cargo);

      // Si se selecciona una foto nueva, la convertimos en Base64
      if (fotoInput.files && fotoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          localStorage.setItem("perfil_foto", e.target.result);
          alert("✅ Cambios guardados correctamente.");
          window.location.href = "perfil.html";
        };
        reader.readAsDataURL(fotoInput.files[0]);
      } else {
        alert("✅ Cambios guardados correctamente.");
        window.location.href = "perfil.html";
      }
    });
  }

  // Si estamos en perfil.html, mostrar los datos guardados
  if (document.body.classList.contains("perfil-page")) {
    const nombre = localStorage.getItem("perfil_nombre") || "Edison David Guapacho Carranza";
    const correo = localStorage.getItem("perfil_correo") || "pachodavid@gmail.com";
    const telefono = localStorage.getItem("perfil_telefono") || "+57 316 685 5701";
    const cargo = localStorage.getItem("perfil_cargo") || "Ingeniero Industrial";
    const foto = localStorage.getItem("perfil_foto") || "img/Foto_de_perfil_Edison_Guapacho.jpeg";

    const nombreEl = document.getElementById("perfil-nombre");
    const correoEl = document.getElementById("perfil-correo");
    const telefonoEl = document.getElementById("perfil-telefono");
    const cargoEl = document.getElementById("perfil-cargo");
    const fotoEl = document.getElementById("perfil-foto");

    if (nombreEl) nombreEl.textContent = nombre;
    if (correoEl) correoEl.textContent = correo;
    if (telefonoEl) telefonoEl.textContent = telefono;
    if (cargoEl) cargoEl.textContent = cargo;
    if (fotoEl) fotoEl.src = foto;
  }
});
