const VERSION = "1.0.0";

  export default {
    async fetch(request, env) {
      const url = new URL(request.url);

      if (url.pathname === "/health") {
        return Response.json({ estado: "ok", ambiente: env.AMBIENTE, version: VERSION });
      }

      if (url.pathname === "/error") {
        throw new Error("Error simulado para pruebas");
      }

      return Response.json({
        mensaje: "Hola desde Cloudflare Workers",
        ambiente: env.AMBIENTE,
        version: VERSION,
      });
    },
  };