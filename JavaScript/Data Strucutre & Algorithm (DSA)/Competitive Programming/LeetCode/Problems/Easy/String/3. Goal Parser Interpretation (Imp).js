// Leetcode: #1678 (Goal Parser Interpretation)

var interpret = function(command) {
        let cmd=[];

    for (let i = 0; i < command.length; i++) {
        if(command[i]==="(" && command[i+1]==="a")
            cmd.push('al');
        if(command[i]==="(" && command[i+1]===")")
            cmd.push('o');
        if(command[i]==="G")
            cmd.push('G');
    }
    return cmd.join('');
    
};

interpret("(al)G(al)()()G");