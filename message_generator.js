


const adjectives = ['long', 'big', 'scary', 'tall', 'short', 'blue', 'round'];
const verbs = ['jumping', 'running', 'looking', 'facing', 'thinking', 'focusing'];
const noun = ['rabbit', 'human', 'dog', 'cat', 'mouse'];






function generator(){

    

    return 'The ' + adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' + noun[Math.floor(Math.random() * noun.length)] + ' ' + verbs[Math.floor(Math.random() * verbs.length)];






}


console.log(generator());

