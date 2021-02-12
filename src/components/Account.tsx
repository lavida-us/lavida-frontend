import React from 'react'
import {gql, useQuery} from '@apollo/client'

const GET_ACCOUNT = gql`
query GetAccount($input: AccountInput) {
    account(input: $input) {
        id
        profileNickName
    }
}
`

interface Account {
    id: number
    login: string
    email: string
    univ: string
    profileNickname: string
    profileImage: string
    // writtenProblems: [Problem]
    // editedProblems: [Problem]
    // submissions: [Submission]
}

export default function Account() {
    const {loading, error, data} = useQuery(GET_ACCOUNT, {
        variables: { "input": {"id": 1} }
    })
    if (loading) return <p>Loading .. </p>
    if (error) return <p>{error.message}</p>

    return (
        <div>
            {data.Account.map((account: Account) => 
                <p>{account.id} : {account.profileNickname}</p>)}            
        </div>
    )
}