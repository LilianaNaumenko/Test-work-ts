import {
    ApolloQueryResult,
    OperationVariables,
    useMutation,
} from '@apollo/client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ADD_TODO } from '../../graphql/mutation'
import s from './TodoForm.module.css'
import { Input } from '@mui/material'

type Props = {
    refetch: (
        variables?: Partial<OperationVariables> | undefined
    ) => Promise<ApolloQueryResult<any>>
}

function TodoForm({ refetch }: Props) {
    const [text, setText] = useState<string>('')
    const [addTodo] = useMutation(ADD_TODO, { onCompleted: () => refetch() })

    const changeText = (evt: ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value)
    }

    const onSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        if (text.length) {
            addTodo({ variables: { todo: { title: text } } })
            setText('')
        }
    }

    return (
        <form onSubmit={onSubmit} className={s.form}>
            <label htmlFor="text" className={s.label}>
                Enter the name of the new todos
                <Input
                    className={s.input}
                    type="text"
                    id="text"
                    value={text}
                    onChange={changeText}
                />
            </label>
        </form>
    )
}

export default TodoForm
