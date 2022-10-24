// Tres eventos:

// Instala el SW
self.addEventListener("install", (evt) => {
  console.log("SW Install..", evt);
})

// El SW se activó
self.addEventListener("activate", (evt) => {
  console.log("SW Activate..", evt);
})

self.addEventListener("fetch", (evt) => {
  console.log("SW", "Fetch");
})
