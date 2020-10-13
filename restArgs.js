// restArgs
function printInformation(param1, param2, ...restArgs) {
    console.log("Argument 1:" + param1);
    console.log("Argument 2:" + param2);
    let restArgsCounter = 0
    while(restArgsCounter < restArgs.length) {
        console.log("RestArg:" + restArgs[restArgsCounter++]);
    }
}

printInformation(1,2,11,22,33,44,55);
