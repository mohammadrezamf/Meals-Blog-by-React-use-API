import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './body.css'

export default function Body() {

    const [items , setItems] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
                console.log(res.data);
                setItems(res.data.meals)
        }).catch(err=>{

            console.log(err)
        })


    }, [])

    // functions !!

    const itemList = items.map((obj) =>{
         return (
            <div className='col-md-4'>
                {obj.strMeal}
                <img src={obj.strMealThumb} alt=""  className='img-fluid'/>
                <p>{obj.idMeal}</p>
            </div>
         )
    })




    return (
        <div className='row'>
            {itemList}

        </div>
    )
}
