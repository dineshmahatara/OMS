
// import CustomForm from '../../components/CustomForm/'
import CustomForm from "@/Components/CustomForm"

// import CustomForm from '../../components/CustomForm/page'
const AddItems = ()=> {
    const formItems = [
        {label:'First Name', type: 'text'},
        {label:'Middle Name', type: 'text'},
        {label:'Last Name', type: 'text'},
        {label:'Phone Number', type: 'text'},
        {label:'upload', type: 'file'}
     ]
    return (
        <div>
            Add items
            <CustomForm formItems={formItems} apiEndpoint="/items"/>
        </div>
    )
}
export default AddItems