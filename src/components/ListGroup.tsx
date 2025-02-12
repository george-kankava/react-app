
function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  // items = [];

  return (
    <>
        <h1>List</h1>
        { items.length === 0 && <p>No Item Found</p> }
        <ul className="list-group">
          { items.map(item => <li key={item} onClick={() => console.log("Clicked")} className="list-group-item">{item}</li>) }
        </ul>
    </>
  );
}

export default ListGroup;
