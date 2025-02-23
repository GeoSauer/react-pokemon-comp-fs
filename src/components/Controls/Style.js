import { usePokemonDetails } from '../../context/PokemonContext';

export default function Style() {
  const { setArtStyle } = usePokemonDetails();

  return (
    <select onChange={(event) => setArtStyle(event.target.value)}>
      <option value="default">Default</option>
      <option value="shiny">Shiny</option>
      {/* <option>Official</option>
      <option>Dream World</option>
      <option>Home</option> */}
    </select>
  );
}
