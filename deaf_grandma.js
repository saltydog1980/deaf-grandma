function deafGrandma() {
    let count = 0;
    
    gabbyGrams(window.prompt("HEY KID!"))
    function gabbyGrams(initPrompt) {
        let resp = initPrompt;
        if (resp === ""){
                gabbyGrams(window.prompt("WHAT?!"));
        } else if (resp === 'GOODBYE!') {
            if (count === 1){
                return count +=1;
            } else {
                count += 1;
                gabbyGrams(window.prompt("LEAVING SO SOON?"));
            }
        } else if (resp.split('').map(elem => elem.replace(/[^a-zA-Z]/, '')).join('').split('').every(elem => elem.match(/[A-Z]/))){
            gabbyGrams(window.prompt('NO, NOT SINCE 1946!'));
        } else {
            gabbyGrams(window.prompt('SPEAK UP, KID!'));
        }
    }
    return alert("LATER, SKATER!")
}

deafGrandma();
