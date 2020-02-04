function importAll(r) {
    return r.keys().map(r);
}
  
const logos = importAll(require.context('../../assets/images/logos', false, /\.(png)$/));

const initialState = {
   logos: logos
}

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        default: 
            return state
    }
}

