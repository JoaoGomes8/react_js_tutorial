const ConditionIf = (props) =>{
    if(props.condition){
        return props.children
    } else {
        return false
    }
}

export default ConditionIf