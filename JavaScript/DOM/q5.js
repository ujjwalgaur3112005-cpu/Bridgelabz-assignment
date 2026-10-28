function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Test completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deploy completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Celebrate!");
        callback();
    }, 1000);
}

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Pipeline completed");
                });
            });
        });
    });
});