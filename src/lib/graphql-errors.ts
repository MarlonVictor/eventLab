import { ApolloError } from "@apollo/client"

export function formatGraphQLError(message: string): string {
    if (message.includes('is not unique') && message.includes('email')) {
        return 'This email is already registered.'
    }

    return message
}

export function getMutationErrorMessage(error: unknown): string {
    if (error instanceof ApolloError) {
        if (error.graphQLErrors.length > 0) {
            return error.graphQLErrors
                .map(graphQLError => formatGraphQLError(graphQLError.message))
                .join(' ')
        }

        return error.message
    }

    return 'Could not complete subscription. Please try again.'
}
