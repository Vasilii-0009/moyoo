import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./AuthForm.css";

interface FormData {
  authName: string;
  authPassword: number;
}

export default function AuthFrom() {
  const ERROR: string =
    "Неверный email или пароль. Попробуйте ещё раз или восстановите пароль";
  const CLASSERROR = "form-auth_error";

  const [isError, setError] = useState(false);
  const [isErrorClass, setErrorClass] = useState(CLASSERROR);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("data", data);
    reset();
  };

  const onChangeInput = (): void => {
    setErrorClass("");
    setError(false);
  };

  const handleClick = () => {
    setErrorClass(CLASSERROR);
    setError(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth__form form-auth">
      <div className="form-auth__box">
        <input
          {...register("authName", {
            required: ERROR,
            onChange: () => {
              onChangeInput();
            },
          })}
          className={`form-auth__input-name
  ${errors?.authName || errors?.authPassword ? isErrorClass : ""}
          `}
          type="text"
          placeholder="Email"
        />

        <input
          {...register("authPassword", {
            required: ERROR,
            pattern: {
              value: /^(?=.*[0-9])(?=.*[$%&_])(?=.*[a-z])(?=.*[A-Z]){8,}/g,
              message: ERROR,
            },
            onChange: () => {
              onChangeInput();
            },
          })}
          className={`form-auth__input-password
             ${errors?.authName || errors?.authPassword ? isErrorClass : ""}
          `}
          type="password"
          placeholder="Пароль"
        />
        <div className="form-auth__error-message">
          {isError ? (
            <p>{errors?.authName?.message || errors?.authPassword?.message}</p>
          ) : (
            ""
          )}
        </div>
      </div>

      <button
        className={`form-auth__btn ${isValid && "form-auth__btn_active"} `}
        type="submit"
        onClick={handleClick}
      >
        ВОЙТИ
      </button>

      <Link className="form-auth__link" to="#">
        Забыли пароль?
      </Link>
    </form>
  );
}
