


const adjectives = ['long', 'big', 'scary', 'tall', 'short', 'blue', 'round'];
const verbs = ['jumping', 'running', 'looking', 'facing', 'thinking', 'focusing'];
const noun = ['rabbit', 'human', 'dog', 'cat', 'mouse'];






function generator(){

    

    return 'The ' + noun[Math.floor(Math.random() * noun.length)] + adjectives[Math.floor(Math.random() * noun.length)] + verbs[Math.floor(Math.random() * noun.length)];




}
