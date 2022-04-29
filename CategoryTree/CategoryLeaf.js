import ListItemButton from '@mui/material/ListItemButton';
import { useEffect } from 'react'
import { useNavigate } from 'react-router';

const CategoryLeaf = ({ category, selected, expandParent }) => {
    
    const navigate = useNavigate()

    useEffect(() => {
        if(selected && category.slug === selected){
            expandParent()
        }
    },[selected])

    return (
        <ListItemButton onClick={() => navigate(`/shop/${category.slug}`)}>
            {category.name}
        </ListItemButton>
    )
}

export default CategoryLeaf