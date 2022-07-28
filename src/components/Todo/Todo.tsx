import { useQuery } from '@apollo/client'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import { ALL_TODO } from '../../graphql/query'

function Todo() {
    const { data, refetch } = useQuery(ALL_TODO)

    return (
        <>
            <TodoForm refetch={refetch} />
            <TodoList refetch={refetch} data={data} />
        </>
    )
}

export default Todo
