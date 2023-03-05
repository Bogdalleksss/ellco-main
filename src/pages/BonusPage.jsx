import { useEffect } from "react";
import { useHistory, useParams } from "react-router";

const BonusPage = () => {
  const history = useHistory();

  const queryParameters = new URLSearchParams(window.location.search);

  const referralId = queryParameters.get("d");

  useEffect(() => {
    if (referralId) {
      if (referralId === localStorage.refferal) history.push('/');
      else {
        history.push("/order");
        localStorage.refferal = referralId;
      }
    } else {
      history.push('/')
    }
  }, [])
  return (<></>);
}

export default BonusPage;
