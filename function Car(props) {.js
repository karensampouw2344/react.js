function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const perfume = [
    {id: 1, brand: 'Versace'},
    {id: 2, brand: 'Chanel'},
    {id: 3, brand: 'Dior'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {perfume.map((car) => <Luxury key={perfume.id} brand={perfume.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Brand/>);