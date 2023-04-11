import { ref, remove } from 'firebase/database'
import { database } from '../../firebase'

export const handleDelete = (id: string) => {
    const expenseRef = ref(database, `expenses/${id}`)
    remove(expenseRef)
}
