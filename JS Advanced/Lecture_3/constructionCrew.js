function constructionCrew(obj){

    if (obj.dizziness){
        if (obj.dizziness === true){
            obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
            obj.dizziness = false;
        }
    }
    return obj;
}

constructionCrew(
    { weight: 95,

        experience: 3,
        
        levelOfHydrated: 0,
        
        dizziness: false })