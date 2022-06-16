import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";

export default function Planeta() {
    const params = useParams();
    console.log(params);
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.verPlaneta(params.ids)
    }, [params.ids])
    console.log(store.planet)
  return (
    <div>
        <div className='row'>
            <div className='col-6'>
                <img />
            </div>
            <div className='col-6'>
                <h1>{params.ids}</h1>
            </div>
        </div>
        <div className='row border-top border-danger' >
            <div className='col-2'>a</div>
            <div className='col-2'>b</div>
            <div className='col-2'>c</div>
            <div className='col-2'>d</div>
            <div className='col-2'>e</div>
            <div className='col-2'>f</div>
        </div>
    </div>
  )
}