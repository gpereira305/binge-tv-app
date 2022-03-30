import { FormShow } from "../styles/Styled";

export default function UserInput({ handleSubmit, handleChange, search }) {
  return (
    <FormShow onSubmit={handleSubmit} className="fade-in-bottom">
      <div>
        <input
          type="name"
          onChange={handleChange}
          value={search}
          className="input"
        />
        <span className="material-icons">search</span>
      </div>
    </FormShow>
  );
}
