const mycountry = {
    country : 'England',
    capital: 'London',
    language: 'English',
    population: 50,
    neighbours: ['Ireland', 'Scotland', 'Wales'],


    describe :function (){
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they 
                        have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
                    },   isIsland : function (){
                        if (this.neighbours.length === 0) {
                            return true;
                        }else{
                            return false;
                        }
    }
}
console.log(mycountry.isIsland());