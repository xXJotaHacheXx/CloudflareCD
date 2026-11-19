import { test } from "node:test";
import assert from "node:assert";
import worker from "../src/index.js";


const env = { AMBIENTE: "pruebas" };

  test("/health responde 200 con estado ok", async () => {
    const res = await worker.fetch(new Request("http://localhost/health"), env);
    assert.strictEqual(res.status, 200);
    const datos = await res.json();
    assert.strictEqual(datos.estado, "ok");
  });

  test("/ responde 200", async () => {
    const res = await worker.fetch(new Request("http://localhost/"), env);
    assert.strictEqual(res.status, 200);
  });