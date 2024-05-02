
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Alert, CardFooter } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getCandidateDetails } from '../Store/ProductSlice';
import StatusCode from '../utils/StatusCode';


const Product = () => {
    

    const dispatch = useDispatch();
    const {data: candidateDetails, status} = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(getCandidateDetails());
    },[]);

    // const [products, getProduct] = useState([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(data => data.json())
    //         .then(result => getProduct(result));
    // }, [])


    // ................................................status code...................................
    if (status===StatusCode.LOADING) {
        return <p>Loading...</p>
    }

    if (status===StatusCode.ERROR) {
        return <Alert key="danger" variant='danger'>Something went wrong!!! Please try again later</Alert>
    }
    // ................................................status code...................................


    // ...............................cart il add aakan....................................................................................................

    

    // ...............................cart il add aakan....................................................................................................
    return (
        <div>
            <div>
                <h1>Product Dashboard</h1>
                <div className='container'>
                    <div className='row'>
                        {candidateDetails.map(candidate => (
                            <div className='col-md-4' style={{ marginBottom: '10px' }} key={candidate.id}>
                                <Card className='h-100'>
                                    <Card.Body>
                                    <Card.Title>Job Title: {candidate.jobRole}</Card.Title>
                                    <Card.Text>Location: {candidate.location}</Card.Text>
                                    <Card.Text>
                                        <div className='experience'>
                                            <p>Minimum Experience:</p> 
                                            <p>{candidate.minExp}</p>
                                        </div>
                                    </Card.Text>
                                    <Card.Text>Details: {candidate.jobDetailsFromCompany}</Card.Text>
                                </Card.Body>
                                <button>Easy Apply</button>
                                <button>Unlock referral asks</button>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product