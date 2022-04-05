import { FormShow } from "../styles/Styled";

export default function UserInput({ search, handleChange, handleSubmit }) {
  return (
    <FormShow onSubmit={handleSubmit} className="fade-in-bottom">
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={search}
          className="input"
          placeholder="Pesquisar..."
        />
        <span className="material-icons">search</span>
      </div>
    </FormShow>
  );
}
