
const Leaderboard = (props) => {
  return (
    <div className="leaderboard-table">
        <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Answered Polls</th>
            <th>Created Polls</th>
          </tr>
        </thead>
        <tbody>
            {/* <tr>
                <td>{props.author}</td>
                <td>{props.users.answers.length} </td>
                <td>{props.users.questions.length} </td>
            </tr> */}
        </tbody>
</table>

    </div>
  )
}

export default Leaderboard
