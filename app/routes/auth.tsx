import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import type { Route } from "../+types/root";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Resumind | Auth" },
    {
      name: "description",
      content:
        "Login or register to access your resume tracking and AI feedback features.",
    },
  ];
};
const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const next = location.search.split("next=")[1];

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "url('/images/bg-main.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-0 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In To Continue Your Job Journey</h2>
          </div>

          <div className="mt-5">
            {isLoading ? (
              <button className="auth-button animate-pulse">
                Signing you in...
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
