import './Cuadro.css'
export const CuadroSobrepuesto=(props)=>{
    const onClose=()=>{
        props.onClose(false)
    }
    return(
        <div className='CuadroSobrepuesto'>
            
            <div  className='ChangeProfileForm'>
            <button type='button' className=' closeBtn' onClick={onClose}>x</button>
                <span className='EditarPerf'>{props.reason}</span>
                <hr></hr>
                {props.child}
            </div>
        </div>
    )
}
