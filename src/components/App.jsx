import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  //console.log(useSelector(getContacts));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
    {isLoading && <b>Loading contacts...</b>}
    {error && <b>{error}</b>}
    <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
  </div>
  );
};
