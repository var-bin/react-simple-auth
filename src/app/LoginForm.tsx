import type { FormEventHandler, ChangeEventHandler } from "react";

interface LoginFormProps {
  onSubmit: FormEventHandler;
  onChange: ChangeEventHandler;
}

const LoginForm = ({ onSubmit, onChange }: LoginFormProps) => {
  return (
    <form className="login-form" method="POST" noValidate onSubmit={onSubmit}>
      <label htmlFor="username">
        Enter
        <input type="text" id="username" name="username" onChange={onChange} />
      </label>

      <label htmlFor="password">
        Enter password
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
