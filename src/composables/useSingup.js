import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const singup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("no response");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSingup = () => {
  return { error, singup };
};

export default useSingup;
