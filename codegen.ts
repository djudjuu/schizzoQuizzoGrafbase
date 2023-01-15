import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: {
    [process.env.NEXT_PUBLIC_GRAFBASE_ENDPOINT as string]: {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_GRAFBASE_API_KEY as string,
      }
    }
  },
  generates: {
    './gql/': {
      preset: 'client',
      plugins: []
    }
  },
  ignoreNoDocuments: true,
  documents: ['./graphql-operations/**/*.ts']
}

export default config