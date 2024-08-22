const Person = ({ person, deleteHandler }) => {
    return (
      <div>{person.name} {person.number}
      <button onClick={deleteHandler} >delete </button>
      </div>
    )
  }

  export default Person