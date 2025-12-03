const server = Bun.serve({
port: 8000,
fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === "/") {
    return new Response("Hello from Bun on Kubernetes! 🚀 🦁");
    }
    
    if (url.pathname === "/_healthcheck") {
    return new Response("OK", { status: 200 });
    }
    
    return new Response("Not Found", { status: 404 });
},
});

console.log(`🚀 Server running on http://localhost:${server.port}`);
