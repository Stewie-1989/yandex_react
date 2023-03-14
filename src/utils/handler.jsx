import {URL} from "./constant";

export function getData({setState, state}) {
    setState({...state, hasError: false, isLoading: true});
    fetch(URL)
        .then(res => res.ok? res.json() : res.json().then((err) => Promise.reject(err)))
        .then(data => setState({...state, data: data.data, isLoading: false }))
        .catch(e => {
            setState({ ...state, hasError: true, isLoading: false });
        });
};