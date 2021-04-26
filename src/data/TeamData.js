import {useEffect, useState} from 'react';
import axios from 'axios';

export default function TeamData(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [playerList, setPlayerList] = useState([])

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://api.npoint.io/20c1afef1661881ddc9c'
        }).then(res => {
            setPlayerList(res.data.playerList.sort((a, b) => parseFloat(a.Value) > parseFloat(b.Value) ? 1 : -1))
            setLoading(false)
        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true)
        })
    }, [])
    return {loading, playerList, error}
}