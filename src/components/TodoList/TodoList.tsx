import {
    ApolloQueryResult,
    OperationVariables,
    useMutation,
} from '@apollo/client'
import { REMOVE_TODO, UPDATE_TODO } from '../../graphql/mutation'
import {
    Button,
    Checkbox,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from '@mui/material'

type Props = {
    refetch: (
        variables?: Partial<OperationVariables> | undefined
    ) => Promise<ApolloQueryResult<any>>
    data: {
        getAllTodos: {
            id: string
            title: string
            completed: boolean
        }[]
    }
}

function TodoList({ data, refetch }: Props) {
    const [removeTodo] = useMutation(REMOVE_TODO, {
        onCompleted: () => refetch(),
    })

    const [updateTodo] = useMutation(UPDATE_TODO, {
        onCompleted: () => refetch(),
    })

    const onDeleteTodo = (id: string) => {
        removeTodo({ variables: { id } })
    }

    const onToggleTodo = (id: string) => {
        updateTodo({ variables: { id } })
    }

    return (
        <List>
            {data?.getAllTodos.map(({ id, title, completed }) => (
                <ListItem
                    key={id}
                    button
                    divider
                    onClick={() => onToggleTodo(id)}
                >
                    <ListItemIcon>
                        <Checkbox checked={completed} />
                    </ListItemIcon>
                    <ListItemText
                        style={
                            completed ? { textDecoration: 'line-through' } : {}
                        }
                        primary={title}
                    />
                    <ListItemSecondaryAction onClick={() => onDeleteTodo(id)}>
                        <Button variant="outlined" color="error">
                            Delete
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default TodoList
