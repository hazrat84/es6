function pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doSomething() {
    let p1 = await pause(1000);
    let p2 = await pause(1000);
    let p3 = await pause(1000);
    console.log('All Done! inside Pause');
}

doSomething();

async function doSomethingparallel() { //it will be faster than doSomething because their it waits for p1 call for 
    // 1 sec then call p2 and wait for 1 second then call p3 so it takes more time while doSomethingparallel sends
    // all the requests at one time and then wait for it's response
    let p1Promise = pause(1000);
    let p2Promise = pause(1000);
    let p3Promise = pause(1000);

    let p1 = await p1Promise;
    let p2 = await p2Promise;
    let p3 = await p3Promise;
    console.log('All Done! inside Pause Parallel');
}

doSomethingparallel();