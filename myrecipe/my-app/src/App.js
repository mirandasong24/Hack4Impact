import './App.css';

const ingredientsList = [
  '2 fresh mangoes', '1 frozen banana', '1/2 cup milk', '1/2 cup yogurt',
]

const directions = [
  'Add all ingredients to a high-powered blender and blend until creamy.',
  'If you\'re using frozen mango and a frozen banana, you may need to use the tamper on your high-powered blender to ensure everything gets blended smoothly.',
  'I love to pour my smoothies in a mason jar and use either a stainless steel straw or glass straws.',
]

function App() {
  return (
    <div className="App">
      <img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/05/mango-smoothie-2.jpg.webp" className="mango-smoothie"/>
      <h1>Mango Smoothie Recipe</h1>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsList.map(element => <li>{element}</li>)}
      </ul>
      <h2>Directions</h2>
      <ol>
        {directions.map(element => <li>{element}</li>)}
      </ol>
    </div>
  );
}

export default App;
