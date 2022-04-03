import Link from "next/link";
import React from "react";
import cl from "./Auth.module.scss";
import { useRouter } from "next/router";
function Auth() {
  const router = useRouter();
  return (
    <div className={cl.container}>
      <div className={cl.breadcrumb}>
        <div
          className={`${cl.auth_link} ${
            router.pathname === "/auth" ? cl.active : cl.noramal
          }`}
        >
          <Link href={"/auth"}>Войти</Link>
        </div>
        /
        <div
          className={`${cl.reg_link} ${
            router.pathname === "/registration" ? cl.active : cl.noramal
          }`}
        >
          <Link href={"/registration"}>Регистрация</Link>
        </div>
      </div>
      <form className={cl.form}>
        <input type="text" placeholder="Электронная почта" />
        <input type="text" placeholder="Пароль" />
        <button type="submit">Войти на сайт</button>
      </form>
      <div className={cl.anotherAuth}>
        <p>Войти через</p>
        <div className={cl.links}>
          <div>VK</div>
          <div>VK</div>
          <div>VK</div>
          <div>VK</div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
