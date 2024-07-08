import { Oval } from "react-loader-spinner";
import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <div id="spinner" className={styles.container}>
      <Oval
        visible={true}
        height="64"
        width="64"
        color="#9e77ed"
        secondaryColor="#f9f5ff"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
