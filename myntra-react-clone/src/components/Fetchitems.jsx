import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../Store/itemsSlice";
import { fetchStatusActions } from "../Store/fetchStatusSlice";
const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);
  useEffect(() => {
    if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default Fetchitems;
