export function fetchCats() {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'});
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(res => {return res.json()})
            .then(data => {dispatch({type: 'ADD_CATS', cats: data.images}) })
    }
}