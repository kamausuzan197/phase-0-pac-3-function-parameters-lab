function introduction(name){
    return`Hi, my name is ${name}.`
}

introduction("Aki");

function introductionWithLanguage(name,language){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Aki","Ember.js");

function introductionWithLanguageOptional(name,language){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Aki","Javascript");
function introductionWithLanguageOptional(name,language=[]){
    language.push(Javascript);
    return`Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Gracie","Javascript");