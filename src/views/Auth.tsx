import { useEffect, useState } from "react";
import LoginForm from "~/components/LoginForm";
import SignupForm from "~/components/SignupForm";

function Auth() {
  const [wantLogin, setWantLogin] = useState(true);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      {wantLogin ? (
        <LoginForm changeWantLogin={setWantLogin} addFormData={setFormData} />
      ) : (
        <SignupForm changeWantLogin={setWantLogin} addFormData={setFormData} />
      )}
    </div>
  );
}

export default Auth;
