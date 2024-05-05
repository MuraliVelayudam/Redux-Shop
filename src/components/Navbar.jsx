import { useDispatch } from "react-redux";
import { setSearch } from "./../redux/slices/SearchSlice";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();

  const onHandleSearchInput = (e) => {
    const search = e.target.value;
    dispatch(setSearch(search));
  };

  return (
    <nav className="flex lg:flex-row flex-col lg:justify-between justify-center items-center  py-3 bg-slate-50 px-5 gap-3 mb-6">
      <div className="flex items-center flex-col gap-2">
        <h3 className="text-lg lg:text-xl font-extralight tracking-widest">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <Link
          to={"/"}
          className="text-3xl lg:text-4xl  tracking-widest font-[400] uppercase animate-pulse duration-300"
        >
          Flavour
        </Link>
      </div>
      <div>
        <input
          onChange={debounce((e) => onHandleSearchInput(e), 500)}
          type="text"
          placeholder="Search"
          className="border outline-none lg:w-96  px-3 lg:py-2 py-1 border-slate-400 rounded-lg"
          autoComplete="false"
        />
      </div>
    </nav>
  );
}
