import React ,{useEffect,useState} from 'react'
import axios from 'axios'

const UserList = () => {
    const [user,setUser]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res.data)
            setUser(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setError('데이터를 가져오지 못했습니다.')
            setLoading(false)
        })
    }, [])

    if(loading) return <p>로딩중</p>
    if(error) return <p>{error}</p>

  return (
    <div>
        <h2>사용자목록</h2>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default UserList