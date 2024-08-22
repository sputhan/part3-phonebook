const AddPersonForm = ({ name, nameHandler, number, numberHandler, submitHandler }) => {
    return (
      <form>
      <div>
        name: <input
          value={name}
          onChange={nameHandler}
        />
      </div>

      <div>
        number: <input
          value={number}
          onChange={numberHandler}
        />
      </div>

      <div>
        <button type="submit" onClick={submitHandler}  >add</button>
      </div>

    </form>
    )
  }

  export default AddPersonForm