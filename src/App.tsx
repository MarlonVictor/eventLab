import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } =  useQuery(GET_LESSONS_QUERY)
  
  return (
    <>
      <h1 className="text-3xl font-semibold">Hello Word</h1>

      <br />

      <ul>
        {data?.lessons.map((lesson: Lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </>
  )
}

export default App