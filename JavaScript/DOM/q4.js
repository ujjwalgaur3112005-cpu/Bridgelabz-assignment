function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed");
            } else {
                resolve("Server A completed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed");
            } else {
                resolve("Server B completed");
            }
        }, 3000);
    });
}

const a = serverA();
const b = serverB();

Promise.all([a, b])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.log(error);
    });

Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Fastest response failed:", error);
    });