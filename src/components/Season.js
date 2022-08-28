
import { Link } from 'react-router-dom'


export default function Season(props){
let nums=Array.from({length: props.number},(_,i)=>i+1)
return (
    nums.map(n=>{
        return <Link to={`/tv/${props.id}/seasons/${n}`} key={n}> <div variant='outlined' size='large' sx={{ marginRight: '24px' , marginBottom: '24px' }} >Season {n} </div></Link>
    })
)
}