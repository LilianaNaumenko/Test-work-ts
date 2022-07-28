import { gql } from '@apollo/client'

export const ALL_TODO = gql`
    query allTodos {
        getAllTodos {
            id
            title
            completed
        }
    }
`
