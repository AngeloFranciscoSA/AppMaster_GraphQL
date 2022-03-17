import axios from 'axios';
import search from './util';


class SuperHero{

    _superHeroData: any[] = []
    baseURL: string

    constructor(){
        this.baseURL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/'
    }

    async createSuperHeroObject(){
        if(Object.keys(this._superHeroData).length > 0){
            return this._superHeroData
        }

        axios.get(this.baseURL + 'all.json')
        .then(response => {
            this._superHeroData = response.data
        })
        .catch(error => {
            console.log(error)
        })

        return this._superHeroData
    }

    getSuperHeros(){
        return this.createSuperHeroObject()
    }   

    async searchSuperHeros(query: String , filter: String){
        const heroData = this.createSuperHeroObject()
        const awaitData = await heroData

        const allFilters = ['name', 'appearance', 'biography', 'work', 'connections']

        if(filter !== undefined){
            return search(awaitData, query, filter)
        }else{ 

            let _return = {}

            for (let i = 0; i < allFilters.length; i++) {
                const _search: Object = search(awaitData, query, allFilters[i])
                if(_search !== null){
                    if(Object.keys(_search).length !== 0){
                        _return =  _search
                    }
                }
            
            }
            return _return
        }
    }
}

export default SuperHero