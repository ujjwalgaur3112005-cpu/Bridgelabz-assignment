function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Order failed");
            } else {
                resolve("Order submitted");
            }
        }, 1000);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch (error) {
            console.log(`Attempt ${i}: Failed`);
        }
    }

    throw new Error("Order could not be processed");
}

processOrder()
    .catch(error => {
        console.log(error.message);
    });