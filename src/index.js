const VERSION = "1.2.0";

  export default {
    async fetch(request, env) {
      const url = new URL(request.url);

      if (url.pathname === "/error") {
        console.error(JSON.stringify({ nivel: "ERROR", ruta: url.pathname, mensaje: "Error simulado" }));
        throw new Error("Error simulado para pruebas");
      }

      console.log(JSON.stringify({ nivel: "INFO", ruta: url.pathname, ambiente: env.AMBIENTE }));

      if (url.pathname === "/health") {
        return Response.json({ estado: "ok", ambiente: env.AMBIENTE, version: VERSION });
      }

      return Response.json({
        mensaje: "Hola desde Cloudflare Workers",
        ambiente: env.AMBIENTE,
        version: VERSION,
      });
    },
  };
