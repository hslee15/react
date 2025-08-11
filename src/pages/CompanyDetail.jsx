import React from 'react'
import { useParams } from 'react-router-dom'

const CompanyDetail = () => {

    const {id}=useParams()

    return (
        <div>{id} 번의 CompanyDetail 페이지</div>
    )
}

export default CompanyDetail