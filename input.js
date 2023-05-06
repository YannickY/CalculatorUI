
    export default function Input({Change1, Change2, update}) {
     
    
        
    
    
        return (
            <p>
                <input type="number" onChange={Change1} />
                    <select onChange={update}>
                        <option value="add">+</option>
                        <option value="subtract">-</option>
                        <option value="multiply">*</option>
                        <option value="divide">/</option>
                    </select>
                <input onChange={Change2}/> 
            </p>
           
        )
    }